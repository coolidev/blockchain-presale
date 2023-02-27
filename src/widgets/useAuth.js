import { useCallback } from 'react'
import { useDispatch } from 'react-redux';
import Web3 from 'web3';
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core'
import { NoBscProviderError } from '@binance-chain/bsc-connector'
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from '@web3-react/injected-connector'
import {
  UserRejectedRequestError as UserRejectedRequestErrorWalletConnect,
  WalletConnectConnector,
} from '@web3-react/walletconnect-connector'
import { connectorLocalStorageKey } from "./WalletModal/config";
import { toast } from 'react-toastify';
import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
import Cookies from 'universal-cookie';

import { REACT_APP_CHAIN_ID } from '../config';
import { connector } from '../crosswise/web3';
import { connectorsByName } from '../utils/web3React'
import { setupNetwork } from '../utils/wallet'
import { setAddress, setNetworkId } from '../redux/actions';


const useAuth = () => {
  const dispatch = useDispatch()
  const { chainId, activate, deactivate } = useWeb3React()
  const cookies = new Cookies();
  // const [connector, setConnector] = useState(null);

  const login = useCallback(
    (connectorID) => {
      cookies.set('connectorID', connectorID, { path: '/' });
      if (connectorID === "WalletConnect") {
        // Create a connector
        // const connector = new WalletConnect({
        //   bridge: "https://bridge.walletconnect.org", // Required
        //   qrcodeModal: QRCodeModal,
        // });
        // setConnector(connector);
        // Check if connection is already established
        if (!connector.connected) {
          // create new session
          connector.createSession({chainId: REACT_APP_CHAIN_ID});
        } else {
          if (connector.accounts.length > 0) {
            dispatch(setAddress(Web3.utils.toChecksumAddress(
              connector.accounts[0]
            )))
          }
          dispatch(setNetworkId(connector.chainId));
        }
        // Subscribe to connection events
        connector.on("connect", (error, payload) => {
          if (error) {
            throw error;
          }
          // Get provided accounts and chainId
          const { accounts, chainId } = payload.params[0];
          
          // console.log("current session on");
          // console.log(accounts[0]);
          dispatch(setAddress(Web3.utils.toChecksumAddress(accounts[0])))
          dispatch(setNetworkId(chainId))
        });
        connector.on("session_update", (error, payload) => {
          if (error) {
            throw error;
          }

          // console.log("session update");
          // console.log(accounts[0]);
          // Get updated accounts and chainId
          const { accounts, chainId } = payload.params[0];
          dispatch(setAddress(Web3.utils.toChecksumAddress(accounts[0])))
          dispatch(setNetworkId(chainId))
        });
        connector.on("disconnect", (error, payload) => {
          if (error) {
            throw error;
          }
          // Delete connector
          connector.killSession();
          dispatch(setAddress(null))
          dispatch(setNetworkId(null))
          deactivate()
          cookies.remove(connectorLocalStorageKey, { path: '/' });
        });
      } else {
        const connector = connectorsByName[connectorID]
        if (connector) {
          activate(connector, async (error) => {
            if (error instanceof UnsupportedChainIdError) {
              const hasSetup = await setupNetwork()
              if (hasSetup) {
                activate(connector)
              }
            } else {
              cookies.remove(connectorLocalStorageKey, { path: '/' });
              if (error instanceof NoEthereumProviderError || error instanceof NoBscProviderError) {
                toast.error('No provider was foundg');
              } else if (
                error instanceof UserRejectedRequestErrorInjected ||
                error instanceof UserRejectedRequestErrorWalletConnect
              ) {
                if (connector instanceof WalletConnectConnector) {
                  const walletConnector = connector
                  walletConnector.walletConnectProvider = null
                }
                toast.error('Please authorize to access your account');
              } else {
                toast.error(error.message);
              }
            }
          })
        } else {
          toast.error('The connector config is wrong');
        }
      }
    },
    [activate, toast],
  )

  const logout = useCallback(() => {
    dispatch(setAddress(null))
    deactivate()
    // This localStorage key is set by @web3-react/walletconnect-connector
    if (cookies.get('connectorID') === 'WalletConnect') {
      if(connector) {
        connector.killSession();
      }
    }
    cookies.remove(connectorLocalStorageKey, { path: '/' });
    if (chainId) {
      dispatch(setNetworkId(null))
    }
  }, [deactivate, dispatch, chainId])

  return { login, logout }
}

export default useAuth
