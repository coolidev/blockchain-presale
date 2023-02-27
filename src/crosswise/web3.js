import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from 'web3';
import { config, connectorNames, REACT_APP_CHAIN_ID } from '../config';
import { connectorLocalStorageKey } from "../widgets/WalletModal/config";
import Cookies from 'universal-cookie';

const providerUrl = config.web3Provider;
const web3 = new Web3(window.ethereum || providerUrl);

const connector = new WalletConnect({
  bridge: "https://bridge.walletconnect.org", // Required
  qrcodeModal: QRCodeModal,
});

const getWeb3 = async () => {
  const cookies = new Cookies();
  const connectorId = cookies.get(connectorLocalStorageKey);
  const chainId = REACT_APP_CHAIN_ID;
  
  if (
    connectorId === connectorNames.WalletConnect &&
    connector.accounts.length > 0
  ) {
    const provider = new WalletConnectProvider({
      connector,
      rpc: {
        [chainId]: providerUrl
      },
      chainId: chainId,
      network: "binance",
      infuraId: "8a73bbe5d3264a4a92d9b1eab885ae3a"
    });
    provider.networkId = chainId;
    await provider.enable();
    return new Web3(provider);
  } else {
    return web3;
  }
}

export {
  Web3,
  providerUrl,
  web3,
  connector,
  getWeb3
};
