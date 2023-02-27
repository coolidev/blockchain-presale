import React, { Component, Fragment, useState, useContext } from "react";
import { Container , Input} from 'reactstrap';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import '../css/style.css'
import { ThemeContext } from "../../../contexts/ThemeContext";

import backgroundCloud from '../../../assets/images/crosswise/backgroud-could.png';
import Thumb from '../../../assets/images/crosswise/thumb.png';
import Icon1 from '../../../assets/images/crosswise/multi-server.png';
import Icon2 from '../../../assets/images/crosswise/user-friendly.png';
import Icon3 from '../../../assets/images/crosswise/casless-mode.png';
import Icon4 from '../../../assets/images/crosswise/trade-tools.png';

const SectionAbout = (props) => {
   
  const [sideMenu, setsideMenu] = useState(false);
  const [sideMenuIndex, setsideMenuIndex] = useState(0);
  
  const expandCollapseMenu = () => {
    setsideMenu(!sideMenu)
 }
 const { isDark, toggleTheme } = useContext(ThemeContext)
  
    return (
        
          <section className="about_section section_padding even_background" id="about">
            <Container>
              <Row>
                  <div className="about_section_sub">
                    <div className="title">
                        <h1>About Crosswise</h1>
                    </div>
                    <div className="desc">
                        <p>Next-gen cross-chain Decentralized Exchange (DEX) building a seamless DeFi user experience. Crosswise bridges the gap between centralized and decentralized exchanges, aiming to bring together the best of both worlds. Crosswise is committed to it's users and brings back customer service and support to the DeFi space.</p>
                    </div>
                  </div>
                </Row>
                <Row>
                  <div className="features">
                      {/* <div className="feature_rectangle">
                        <div className="rectangle_icon">
                            <img src={Thumb} />
                        </div>
                        <div>
                            <h6>MuiltiChain</h6>
                        </div>
                      </div>

                      <div className="feature_rectangle">
                        <div className="rectangle_icon">
                            <img src={Icon2} />
                        </div>
                        <div>
                            <h6>User Friendly</h6>
                        </div>
                      </div>

                      <div className="feature_rectangle">
                        <div className="rectangle_icon">
                            <img src={Icon3} />
                        </div>
                        <div>
                            <h6>Gasless Mode</h6>
                        </div>
                      </div>

                      <div className="feature_rectangle gradient">
                        <div className="rectangle_icon white_icon">
                            <img src={Icon1} />
                        </div>
                        <div>
                            <h6>Trader Tools</h6>
                        </div>
                      </div> */}
                      <div className="feature_item">
                        <div className="feature_item_icon">
                          <img src={Icon1} />
                        </div>
                        <div className="desc">
                          <h6>Cross-Chain</h6>
                        </div>
                      </div>

                      <div className="feature_item">
                        <div className="feature_item_icon">
                          <img src={Icon2} />
                        </div>
                        <div className="desc">
                          <h6>User Friendly</h6>
                        </div>
                      </div>

                      <div className="feature_item">
                        <div className="feature_item_icon">
                          <img src={Icon3} />
                        </div>
                        <div className="desc">
                          <h6>Gasless Mode</h6>
                        </div>
                      </div>

                      <div className="feature_item">
                        <div className="feature_item_icon">
                          <img src={Icon4} />
                        </div>
                        <div className="desc">
                          <h6>Integrated Tools</h6>
                        </div>
                      </div>
                  </div>
              </Row>
            </Container>
          </section>
        );
}

export default SectionAbout;