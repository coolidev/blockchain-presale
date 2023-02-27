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

const SectionPlatformFeatures = (props) => {

    const { isDark, toggleTheme } = useContext(ThemeContext)
    return (
        
          <section className="mission_section section_padding even_background">
            <Container>
                <Row>
                    <div className="platform_features">
                    <div className="title">
                        <h1>Platform Features</h1>
                    </div>
                    {/* <div className="" data-title="Hypertext Markup Language">HTML</div> */}
                    <div className="feature_item_group">
                        <div className="feature_item ">
                            <div className="feature_item_icon tooltip expand" data-title="A seamless way of swapping tokens. Swap Exchange uses automated liquidity pools to execute your swap in an instant.">
                              <img src={Icon1} alt="" />
                              
                            </div>
                            <div className="desc">
                             <h6>Interoperable Swap Exchange</h6>
                            </div>
                            <img src={pointerImg} className="vert-move" alt="" />
                        </div>

                        <div className="feature_item">
                            <div className="feature_item_icon tooltip expand" data-title="Advanced exchange functions arm you with tools to set and manage limit orders, executing swaps at specific price levels, to optimize your trading strategy.">
                              <img src={Icon2} alt="" />
                            </div>
                            <div className="desc">
                             <h6>Advanced Exchange</h6>
                            </div>
                        </div>

                        <div className="feature_item">
                            <div className="feature_item_icon tooltip expand" data-title="Track all your trades using the orderbook. Here you will find all your past and pending trades for both Quick Swap & Advanced Swap orders.">
                              <img src={Icon3} alt="" />
                            </div>
                            <div className="desc">
                             <h6>Order Book</h6>
                            </div>
                        </div>

                        <div className="feature_item">
                            <div className="feature_item_icon tooltip expand" data-title="Keep track of global as well as personal data using the analytics dashboard. Trade volume, liquidity, historical value of your LP  for your favorite tokens can be found here.">
                              <img src={Icon4} alt="" />
                            </div>
                            <div className="desc">
                             <h6>Analytics</h6>
                            </div>
                        </div>
                    
                
                    <div className="feature_item">
                        <div className="feature_item_icon tooltip expand" data-title="Crosswise uses it's own price charts. Get accurate live price data for all tokens traded on crosswise DEX.">
                          <img src={Icon5} alt="" />
                        </div>
                        <div className="desc">
                          <h6>Price Chart</h6>
                        </div>
                    </div>

                    <div className="feature_item">
                        <div className="feature_item_icon tooltip expand" data-title="Dive deeper into the numbers that matter. Personal account statistics allow you to track your assets and see their historical evolution. Much like a portfolio tracker, it provides an overview of assets in your wallet, as well as assets held in our pools and farms.">
                          <img src={Icon6} alt="" />
                        </div>
                        <div className="desc">
                          <h6>Account Statistics</h6>
                        </div>
                    </div>

                    <div className="feature_item">
                        <div className="feature_item_icon tooltip expand" data-title="Tell your friends about crosswise and earn 1% of the new users' lifetime earnings! A unique link will be given to all users to track their commissions.">
                          <img src={Icon7} alt="" />
                        </div>
                        <div className="desc">
                          <h6>Lifetime Referral Commissions</h6>
                        </div>
                    </div>
                    </div>
                    
                   </div>
                </Row>
            </Container>
          </section>
        );
}

export default SectionPlatformFeatures;