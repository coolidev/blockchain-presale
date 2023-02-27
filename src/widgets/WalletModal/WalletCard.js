import Cookies from 'universal-cookie';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { connectorLocalStorageKey } from './config';

const WalletCard = ({ login, walletConfig, setWallletOpen, setShowPresaleInfo }) => {

  const cookies = new Cookies();
  const { title, icon, desc } = walletConfig;

  const handleClick = () => {
    login(walletConfig.connectorId);
    cookies.set(
      connectorLocalStorageKey,
      walletConfig.connectorId
      , { path: '/' });
    setWallletOpen(false);
    setShowPresaleInfo(true);
  }

  return (
    <Col sm={4} xs={12} className={`wallet-content h-100`}>
      <div className="ModalBtn" onClick={handleClick}>
        <img src={icon} alt="" />
      </div>
      <span className="modalBtnText" onClick={handleClick}>{title}</span>
      <span className="modalBtnText2 mt-2" dangerouslySetInnerHTML={{ __html: desc }}></span>
    </Col>
  );
};

export default WalletCard;
