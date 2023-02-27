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

const SectionDexMechanics = (props) => {

    const { isDark, toggleTheme } = useContext(ThemeContext)
    return (
        
          <section className="mission_section section_padding even_background">
            <Container>
                <Row>
                  <div className="dex_mechanics">
                    <div className="title">
                        <h1>Dex Mechanics</h1>
                    </div>
                    <div className="feature_item_group">
                        <div className="feature_item">
                            <div className="feature_item_icon tooltip expand" data-title="CRSS is our native token used for both rewards and governance, whilst XCRSS is our vesting token.
">
                              <img src={Dex1} alt="" />
                            </div>
                            <div className="desc">
                             <h6>CRSS & XCRSS Tokens</h6>
                            </div>
                        </div>

                        <div className="feature_item">
                            <div className="feature_item_icon tooltip expand" data-title="Crosswise uses a constant emission of 1 CRSS per block, and is capped to a max supply 50 million CRSS.">
                              <img src={Dex2} alt="" />
                            </div>
                            <div className="desc">
                             <h6>Emissions</h6>
                            </div>
                        </div>

                        <div className="feature_item">
                            <div className="feature_item_icon tooltip expand" data-title="Gasless Swap mode allows users to trade without having to pay for gas. Trade with confidence without worrying about transaction fees.">
                              <img src={Dex3} alt="" />
                            </div>
                            <div className="desc">
                             <h6>Gasless Mode</h6>
                            </div>
                        </div>

                        <div className="feature_item">
                            <div className="feature_item_icon tooltip expand" data-title="Your opinions matter. Add proposals and vote on protocol changes. We're building this DEX with our community!">
                              <img src={Dex4} alt="" />
                            </div>
                            <div className="desc">
                             <h6>Governance & Voting</h6>
                            </div>
                        </div>

                        <div className="feature_item">
                            <div className="feature_item_icon tooltip expand" data-title="Flawless indexing and up to date data. Our subgraph is powered by The Graph to query networks like Ethereum & IPFS. Our open subgraph API makes our data easily accessible.">
                              <img src={Dex5} alt="" />
                            </div>
                            <div className="desc">
                             <h6>The Graph Subgraph</h6>
                            </div>
                        </div>

                        <div className="feature_item">
                            <div className="feature_item_icon tooltip expand" data-title="We're partnering with Chainlink and have implemented their price oracle to avoid flash loan attacks and any other price manipulation on crosswise.">
                              <img src={Dex6} alt="" />
                            </div>
                            <div className="desc">
                             <h6>Chainlink Price Oracle</h6>
                            </div>
                        </div>

                        <div className="feature_item">
                            <div className="feature_item_icon tooltip expand" data-title="CRSS token has anti-whale protection that limits transaction size as a proportion of total supply. Projects listing on crosswise also have the option to enable anti-whale protection for their tokens.">
                              <img src={Dex7} alt="" />
                            </div>
                            <div className="desc">
                             <h6>Anti-Whale Protection</h6>
                            </div>
                        </div>

                        <div className="feature_item">
                            <div className="feature_item_icon tooltip expand" data-title="Crosswise uses virtual rates provided by the Chainlink price oracle, making front-running unprofitable. We also use a transaction limiter that is able to throttle bot activity.">
                              <img src={Dex8} alt="" />
                            </div>
                            <div className="desc">
                             <h6>Anti-Bot Protection</h6>
                            </div>
                        </div>

                        <div className="feature_item">
                            <div className="feature_item_icon tooltip expand" data-title="Crosswise will offer generous farming rewards from the start, with a 1.2 multiplier for the first 2 weeks.">
                              <img src={Dex9} alt="" />
                            </div>
                            <div className="desc">
                             <h6>Farms & Pools Upon Launch</h6>
                            </div>
                        </div>
                    </div>
                   </div>
                </Row>
            </Container>
          </section>
        );
}

export default SectionDexMechanics;