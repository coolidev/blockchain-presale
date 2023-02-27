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
import Icon1 from '../../../assets/images/crosswise/partners/techrate.png';
import Icon2 from '../../../assets/images/crosswise/partners/chainlink.png';

import Icon3 from '../../../assets/images/crosswise/partners/certik_1.png';
import Icon4 from '../../../assets/images/crosswise/partners/biconomy.png';

const SectionPartner = (props) => {
   
  const [sideMenu, setsideMenu] = useState(false);
  const [sideMenuIndex, setsideMenuIndex] = useState(0);
  
  const expandCollapseMenu = () => {
    setsideMenu(!sideMenu)
 }
 const { isDark, toggleTheme } = useContext(ThemeContext)
  
    return (
        
          <section className="about_section section_padding odd_background" id="about">
            <Container>
              <Row>
                  <div className="about_section_sub">
                    <div className="title">
                        <h1>Technical Partners</h1>
                    </div>
                    {/* <div className="desc">
                        <p></p>
                    </div> */}
                  </div>
                </Row>
                <Row>
                  <div className="features">
                      <div className="feature_item">
                        <div className="feature_item_icon">
                          <img src={Icon1} />
                        </div>
                        <div className="desc">
                        </div>
                      </div>

                      <div className="feature_item">
                        <div className="feature_item_icon">
                          <img src={Icon2} />
                        </div>
                        <div className="desc">
                        </div>
                      </div>

                      <div className="feature_item">
                        <div className="feature_item_icon">
                          <img src={Icon3} />
                        </div>
                        <div className="desc">
                        </div>
                      </div>

                      <div className="feature_item">
                        <div className="feature_item_icon">
                          <img src={Icon4} />
                        </div>
                        <div className="desc">
                          {/* <h6>Gasless Mode</h6> */}
                        </div>
                      </div>
                  </div>
              </Row>
            </Container>
          </section>
        );
}

export default SectionPartner;