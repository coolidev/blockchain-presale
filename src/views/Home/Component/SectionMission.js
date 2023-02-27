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

const SectionMission = (props) => {

    const { isDark, toggleTheme } = useContext(ThemeContext)
    return (
        
          <section className="mission_section section_padding odd_background">
            <Container>
                <Row>
                    <div className="mission_item">
                        <div className="item_img">
                            <img src={Img1} alt="" />
                        </div>
                        <div className="item_content">
                            <h1>Why Crosswise?</h1>
                            <p>DeFi is relatively new and packed with untapped utility. Crosswise is extending DEX functionality, tightening security and vetting, adding trading and portfolio tracking tools, as well as bringing back customers support, to enhance the overall DEX experience. Our native CRSS token has been carefully designed with sustainability in mind, benefitting from ample deflationary mechanisms to ensure price stability.</p>
                        </div>
                    </div>
                </Row>
            </Container>
          </section>
        );
}

export default SectionMission;