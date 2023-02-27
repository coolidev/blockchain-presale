import React, { Component, Fragment, useState, useContext, useCallback, useEffect } from "react";
import { Row } from 'reactstrap';
import 'react-accessible-accordion/dist/fancy-example.css';
import "./css/style.css";
import "../../assets/scss/index.scss";
import { ThemeContext } from "../../contexts/ThemeContext";
import { isMobile } from 'react-device-detect';

import useActiveWeb3React from '../../widgets/useActiveWeb3React'

import useAuth from "../../widgets/useAuth";

import { useDispatch, useSelector } from 'react-redux';

// Components
import SectionHeader from "./Component/SectionHeader";
import SectionAbout from "./Component/SectionAbout";
import SectionMission from "./Component/SectionMission";
import SectionPlatformFeatures from "./Component/SectionPlatformFeatures";
import SectionLaunchpad from "./Component/SectionLaunchpad";
import SectionDexMechanics from "./Component/SectionDexMechanics";
import SectionTeamwork from "./Component/SectionTeamwork";
import SectionNews from "./Component/SectionNews";
import SectionHelp from "./Component/SectionHelp";
import SectionFooter from "./Component/SectionFooter";
// import SectionRoadmap from "./Component/SectionRoadmap/index";
import SectionRoadmapV2 from "./Component/SectionRoadmapV2";
import SectionTokenomic from "./Component/SectionTokenomic";
import SectionTokenomicV2 from "./Component/SectionTokenomicV2";
import SectionPresale from "./Component/SectionPresale";
import SectionJobBoard from "./Component/SectionJobBoard";
import SectionCrosswiseFeature from "./Component/SectionCrosswiseFeatures";
import SectionPresaleBottom from "./Component/SectionPresaleBottom";
import SectionPartner from "./Component/SectionPartner";

import ConnectModal from "../../widgets/WalletModal/ConnectModal";
import { setAddress, setNetworkId } from '../../redux/actions';
import useEagerConnect from "../../widgets/useEagerConnect";

const Home = () => {
  useEagerConnect();

  const address = useSelector(state => state.authUser.address)

  const dispatch = useDispatch();
  const [showPresaleInfo, setShowPresaleInfo] = useState(false)
  const [showJobBoard, setShowJobBoard] = useState(0)
  const [wallletOpen, setWallletOpen] = useState(false)

  const { account, chainId } = useActiveWeb3React()

  const { login, logout } = useAuth()

  const minimum = (address) => {
    const temp = String(address);
    return temp.slice(0, 4) + '...' + temp.slice(39, 42);
  }

  const { isDark, toggleTheme } = useContext(ThemeContext)

  const handleLogout = () => {
    logout();
    setShowPresaleInfo(false);
    setShowJobBoard(false);
  }
  const showPresale = () => {
    setShowPresaleInfo(true)
    setShowJobBoard(0)
    
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  const handleShowJobBoard = () => {
    setShowJobBoard(1)
    setShowPresaleInfo(false)
    
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  const showHome = () => {
    setShowPresaleInfo(false)
    setShowJobBoard(0)
  }

  const onConnectHandle = () => {
    setWallletOpen(true);
  }

  const toogleToolbar = () => {
    showHome()
  }

  useEffect(() => {
    if (account) {
      dispatch(setAddress(account))
    }
  }, [account])

  useEffect(() => {
    if (chainId) {
      dispatch(setNetworkId(chainId))
    }
  }, [chainId])

  useEffect(() => {
    document.body.addEventListener('click', () => {
      if (window.innerHeight > window.innerWidth && document.querySelector('.collapsibleNavbar').getAttribute('aria-expanded') === 'true') {
        document.querySelector('.collapsibleNavbar').click();
      }
    })
  }, [])

  return (
    <Fragment>
      <ConnectModal login={login} wallletOpen={wallletOpen} setWallletOpen={setWallletOpen} setShowPresaleInfo={setShowPresaleInfo} />
      <div className={isDark ? 'main_body' : 'main_body light-theme'}>
        <header className="nav_wrapper">
          {/** nav header starts */}
          <nav className="navbar navbar-expand-lg navbar-default navbar-fixed-top shadow-sm crosswise-nav">
            {/* <!-- Brand --> */}
            <div className="container">
              <a className="navbar-brand header-navbar-brand" href="/">
                {

                  isDark ? (<img src="assets/images/logo@3x.png" className="nav_logo" id="crosswise_logo" />) :
                    <img src="assets/images/logo-light-theme-2.png" className="nav_logo" id="crosswise_logo" />
                }
              </a>
              {address === null ?
                (<a className="nav-link btn btn_signIN btn_primary mobile-btn" onClick={onConnectHandle}>Connect</a>
                ) : (
                  <>
                    {!showPresaleInfo && (
                      <button onClick={showPresale} className="btn btn_primary buy-token-button btn_signIN mobile-btn">Buy Tokens</button>
                    )}
                  </>
                )}
              {/* <!-- Toggler/collapsibe Button --> */}
              <button className="navbar-toggler collapsibleNavbar" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"><i className="fas fa-bars"></i></span>
              </button>

              {/* <!-- Navbar links --> */}
              <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="#about" onClick={toogleToolbar}><span>About</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#tokenomics" onClick={toogleToolbar}><span>Tokenomics </span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#roadmap" onClick={toogleToolbar}><span>Roadmap </span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#team" onClick={toogleToolbar}><span>Team</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#help" onClick={toogleToolbar}><span>Socials</span></a>
                  </li>
                  <li className="nav-item" style={{ margin: "0.5rem 1rem" }}>
                    <a className="nav-link hiring btn" onClick={handleShowJobBoard}>
                      <i className="fas fa-bullhorn"></i>
                      <span>&nbsp;We're hiring!</span>
                    </a>
                  </li>
                  {/* <li className="nav-item ml-md-4">
                      <a className="nav-link">
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text"><i className="fas fa-search"></i></span>
                          </div>
                          <input type="text" className="form-control" placeholder="search" />
                        </div>
                      </a>
                    </li> */}
                  {/* <li className="nav-item dropdown" id="profile_dropdown">
                      <a className="nav-link dropdown-toggle py-0" href="#" id="navbar_Dropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img src="assets/images/us-dollar@2x.png" className="rounded-circle" />
                      </a>
                      <div className="dropdown-menu shadow-sm border-0" aria-labelledby="navbar_Dropdown">
                        <a className="dropdown-item" href="#">
                          <img src="assets/images/us-dollar@2x.png" className="rounded-circle" />
                        </a>
                        <a className="dropdown-item" href="#">
                          <img src="assets/images/us-dollar@2x.png" className="rounded-circle" />
                        </a>
                      </div>
                    </li> */}

                  <li className="nav-item">
                    <a className="navbar-brand theme-toggle" id="changeTheme" onClick={toggleTheme}>
                      {
                        isDark ? (<img src="assets/images/moon-color.png" id="themeLogo" />) :
                          (<img src="assets/images/light-theme-icon.png" id="themeLogo" />)
                      }
                    </a>
                  </li>

                  {
                    address === null ?
                      (<li className="nav-item in-menu">
                        <a className="nav-link btn btn_signIN btn_primary" onClick={onConnectHandle}>Connect</a>
                      </li>
                      ) : (
                        <>
                          <li className="nav-item">
                            <div className="nav-link connected-wallet m-auto">
                              <span>{minimum(address)}</span>
                            </div>
                          </li>
                          {
                            <li className="nav-item">
                              <a className="nav-link btn btn_signIN btn_primary" onClick={handleLogout}>
                                Logout
                              </a>
                            </li>
                          }

                          <li className="nav-item in-menu">
                            {!showPresaleInfo && (
                              <button onClick={showPresale} className="btn btn_primary buy-token-button btn_signIN">Buy Tokens</button>
                            )}
                          </li>
                        </>
                      )
                  }
                </ul>
              </div>
            </div>
          </nav>
        </header>
        {address && showPresaleInfo ? (
          <>
            <SectionPresale></SectionPresale>
            <SectionFooter className={`footer_section ${isDark ? 'odd_background' : 'even_background'}`} />
          </>
        ) : showJobBoard > 0 ? (
          <>
            <SectionJobBoard parentIndex={showJobBoard} setParentIndex={setShowJobBoard}></SectionJobBoard>
            <SectionFooter className={`footer_section ${isDark ? 'odd_background' : 'even_background'}`} />
          </>
        ) : (
          <>
            <SectionHeader />
            <SectionPresaleBottom />
            <SectionPartner />
            <SectionAbout />
            <SectionMission />
            <SectionPlatformFeatures />
            <SectionLaunchpad />
            <SectionDexMechanics />
            {/* <SectionExchange></SectionExchange> */}
            <SectionCrosswiseFeature />
            {/* <SectionRoadmap></SectionRoadmap> */}
            <SectionRoadmapV2 />
            <SectionTeamwork />
            {/* <SectionTokenomic /> */}
            <SectionTokenomicV2 />
            {/* <SectionNews/> */}
            <SectionHelp />
            <SectionFooter />
          </>
        )}
      </div>
    </Fragment>
  );
}

export default Home;