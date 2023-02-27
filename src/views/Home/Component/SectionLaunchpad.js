import React, { Component, Fragment, useState, useContext } from "react";
import { Container , Input} from 'reactstrap';

import 'react-accessible-accordion/dist/fancy-example.css';
import { Row, Col } from 'reactstrap';
import classnames from 'classnames';
import '../css/style.css'
import { ThemeContext } from "../../../contexts/ThemeContext";

import Img1 from '../../../assets/images/crosswise/image-1.png';
import Icon1 from '../../../assets/images/crosswise/feature/img_advanced_exchange.png';
import Icon2 from '../../../assets/images/crosswise/feature/img_interoperable_swap_exchange.png';
import Icon3 from '../../../assets/images/crosswise/feature/img_order_books.png';
import Icon4 from '../../../assets/images/crosswise/feature/img_analytics.png';
import Icon5 from '../../../assets/images/crosswise/feature/img_price_chart.png';
import Icon6 from '../../../assets/images/crosswise/feature/img_account_stats.png';
import Icon7 from '../../../assets/images/crosswise/feature/img_referral_affiliate_commissions.png';

import Lan1 from '../../../assets/images/crosswise/launchpad/launchpad_project.png';
import Lan2 from '../../../assets/images/crosswise/launchpad/launchpad-token_pool.png';
import Lan3 from '../../../assets/images/crosswise/launchpad/launchpad-token_area.png';
import Lan4 from '../../../assets/images/crosswise/launchpad/launchpad-development.png';

import Dex1 from '../../../assets/images/crosswise/dex/img_tokens_crss_xcrss.png';
import Dex2 from '../../../assets/images/crosswise/dex/img_emissions.png';
import Dex3 from '../../../assets/images/crosswise/dex/img_gasless_mode.png';
import Dex4 from '../../../assets/images/crosswise/dex/img_voting_options.png';
import Dex5 from '../../../assets/images/crosswise/dex/img_subgraph_graph.png';
import Dex6 from '../../../assets/images/crosswise/dex/img_dex_mech.png';
import Dex7 from '../../../assets/images/crosswise/dex/dex-mech-04.png';
import Dex8 from '../../../assets/images/crosswise/dex/dex-mech_1.png';
import Dex9 from '../../../assets/images/crosswise/dex/dex-mech-02.png';

import pointerImg from '../../../assets/images/crosswise/pointer.png';

const SectionLaunchpad = (props) => {

    const { isDark, toggleTheme } = useContext(ThemeContext)
    return (
        
          <section className="mission_section section_padding odd_background">
            <Container>
                <Row>
                   <div className="launchpad_features">
                    <div className="title">
                        <h1>Launchpad</h1>
                    </div>
                    <div className="feature_item_group">
                        <div className="feature_item">
                            <div className="feature_item_icon">
                              <img src={Lan1} alt="" />
                            </div>
                            <div className="desc">
                             <h6>Verified Projects Launchpad</h6>
                            </div>
                        </div>

                        <div className="feature_item">
                            <div className="feature_item_icon">
                              <img src={Lan2} alt="" />
                            </div>
                            <div className="desc">
                             <h6>Native & Cross-Chain Token Pools</h6>
                            </div>
                        </div>

                        <div className="feature_item">
                            <div className="feature_item_icon">
                              <img src={Lan3} alt="" />
                            </div>
                            <div className="desc">
                             <h6>Token Owners Area</h6>
                            </div>
                        </div>

                        <div className="feature_item">
                            <div className="feature_item_icon">
                              <img src={Lan4} alt="" />
                            </div>
                            <div className="desc">
                             <h6>Incubation Program for Ecosystem Growth & Development</h6>
                            </div>
                        </div>
                    </div>
                   </div>
                </Row>
            </Container>
          </section>
        );
}

export default SectionLaunchpad;