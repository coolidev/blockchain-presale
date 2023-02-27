import React, {Fragment, useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {isMobile} from 'react-device-detect';
import {NotificationManager} from 'react-notifications'
import {connector} from '../../amnext/web3'
import {setAddress, setNetworkId} from '../../redux/actions'
// import config
import {Navbar, NavbarToggler} from 'reactstrap';
//Images
import HeaderMobile from "./HeaderMobile";
import HeaderInfo from "./HeaderInfo";

const Header = ({toggleClick}) => {
  const [isOpen, setIsOpen] = useState(false)
  const dispatch = useDispatch();
  const address = useSelector(state => state.authUser.address);
  // const networkId = useSelector(state => state.authUser.networkId);

  const onConnectClick = async () => {
    if (isMobile) {
      // Check if connection is already established
      if (!connector.connected) {
        // create new session
        connector.createSession();
      } else {
        console.log(connector._accounts[0]);
        console.log(connector._chainId.toString(10));
      }

      // Subscribe to connection events
      connector.on("connect", (error, payload) => {
        if (error) {
          throw error;
        }

        // Get provided accounts and chainId
        const {accounts, chainId} = payload.params[0];
        dispatch(setAddress(accounts[0]));
        dispatch(setNetworkId(chainId.toString(10)));
      });

      connector.on("session_update", (error, payload) => {
        if (error) {
          throw error;
        }

        // Get updated accounts and chainId
        // const { accounts, chainId } = payload.params[0];
      });

      connector.on("disconnect", (error, payload) => {
        if (error) {
          throw error;
        }

        // Delete connector
      });

      return;
    }
    if (typeof window.ethereum === 'undefined') {
      NotificationManager.warning('Please install MetaMask!');
      return;
    }
    // if (window.ethereum.networkVersion !== config.networkId) {
    //     if (config.networkId === '56')
    //         NotificationManager.warning('Please select bse main net to proceed!');
    //     else if (config.networkId === '97')
    //         NotificationManager.warning('Please select bsetest to proceed!');
    //     return;
    // }
    if (window.ethereum.selectedAddress !== null) {
      dispatch(setAddress(window.ethereum.selectedAddress));
      NotificationManager.warning('MetaMask was already connected.');
      return;
    }
    if (window.ethereum.selectedAddress === null) {
      try {
        console.log('try?')
        await window.ethereum.request({method: 'eth_requestAccounts'});
      } catch (err) {
        console.log('err :>> ', err);
      }
    }
  };

  const handleLogout = async () => {
    dispatch(setAddress(null));
    console.log(address);
  }

  const toggle = () => {
    setIsOpen(prev => !prev)
  }

  const minimum = (address) => {
    const temp = String(address);
    return temp.slice(0, 4) + '...' + temp.slice(39, 42);
  }

  return (
    <Fragment>
      <Navbar color="light" light expand="xl">
        <HeaderMobile toggleClick={toggleClick}/>
        <button className="connect_btn phone mt-2 mb-2" onClick={onConnectClick}>Wallet Connect</button>
        <NavbarToggler onClick={toggle} className="desktop"/>
        <HeaderInfo address={address}
                    isOpen={isOpen}
                    onConnectClick={onConnectClick}
                    minimum={minimum}/>
      </Navbar>
    </Fragment>
  );
}

export default Header;
