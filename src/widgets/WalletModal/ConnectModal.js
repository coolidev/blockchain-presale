import { useRef } from 'react';
import { Modal } from 'react-responsive-modal';
import { isMobile } from 'react-device-detect';
import { Row } from 'reactstrap';

import "react-responsive-modal/styles.css";

import modalCloseBtn from "../../assets/images/modalCloseBtn.svg"


import { connectors } from './config';
import WalletCard from './WalletCard';
const ConnectModal = ({ login, wallletOpen, setWallletOpen, setShowPresaleInfo }) => {

  const modalRef = useRef(null);

  return (
    <Modal
      open={wallletOpen}
      onClose={() => setWallletOpen(false)}
      center
      container={modalRef.current}
      closeIcon={
        <button className="navbar-toggler">
          <span className="navbar-toggler-icon toogle-bar-icon"><i className="fas fa-times"></i></span>
        </button>
      }
    >
      <h1 className={"modalHeading"}><b className="textBlue">CONNECT</b></h1>
      <p className={"modalSlug"}>Connect with your favorite wallet.</p>
      <Row>
        {connectors.map((entry, index) => (
          <WalletCard
            key={entry.title}
            desc={entry.desc}
            login={login}
            walletConfig={entry}
            setWallletOpen={setWallletOpen}
            setShowPresaleInfo={setShowPresaleInfo}
            mb={index < connectors.length - 1 ? '8px' : '0'}
          />
        ))}
      </Row>
    </Modal>
  );
};

export default ConnectModal;
