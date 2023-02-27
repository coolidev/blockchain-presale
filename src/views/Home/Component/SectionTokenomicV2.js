import React, { Component, Fragment, useState, useContext } from "react";
import { Container } from 'reactstrap';

import 'react-accessible-accordion/dist/fancy-example.css';
import { Row } from 'reactstrap';

import '../css/style.css'
import { ThemeContext } from "../../../contexts/ThemeContext";

import crss from '../../../assets/images/crosswise/CRSS-b.png';
import xcrss from '../../../assets/images/crosswise/XCRSS.png';
import gradientCircle from '../../../assets/images/crosswise/ellipse.png';
import crssAvatarImg from '../../../assets/images/crosswise/tokenomic-img-v1.png';
import xcrssAvatarImg from '../../../assets/images/crosswise/tokenomic-img-v2.png';

const SectionTokenomicV2 = (props) => {

  const { isDark, toggleTheme } = useContext(ThemeContext)

  return (
    <section className="tokenomic_section section_padding even_background" id="tokenomics">
      <Container>
        <Row>
          <div className="title">
            <h1>Tokenomics</h1>
          </div>
        </Row>
        <div className="tokenomic_content">
          <div className="tokenomic_block pb-5">
            <div className="token_avata_wrap">
              <img src={crss} className="tokenMainImg" />
              <img src={crssAvatarImg} className="tokenAvatar" />
              <div className="tokenName">
                <img src={gradientCircle} />
                <div className="desc">CRSS</div>
              </div>
            </div>
            <div className="token_desc pb-5">
              <div className="max_supply pb-5">
                <h5 className="topic">Maximum Supply</h5>
                <div className="content">
                  <h6>50,000,000 <b className="textBlue">CRSS</b></h6>
                </div>
              </div>
              <div className="emission_rate pb-5">
                <h5 className="topic">Emission Rate</h5>
                <div className="content">
                  <h6>first 14 days <b className="textBlue">1.2</b></h6>
                </div>
                <div className="content">
                  <h6>after 14 days <b className="textBlue">1</b></h6>
                </div>
              </div>
              <div className="teamToken">
                <h5>No VC or Team Tokens</h5>
                <h6>share of emission going to team wallet <b className="textBlue">8%</b></h6>
              </div>

            </div>
          </div>

          <div className="tokenomic_block pb-5">
            <div className="token_avata_wrap">
              <img src={xcrss} className="tokenMainImg" alt="" />
              <img src={xcrssAvatarImg} className="tokenAvatar" alt="" />
              <div className="tokenName">
                <img src={gradientCircle} alt="" />
                <div className="desc">XCRSS</div>
              </div>
            </div>
            <div className="token_desc pb-5">
              <div className="desc pb-5">
                <h5>Pre-Sale Tokens</h5>
                <h6>maximum amount for sale <b className="textBlue">4M</b> or <b className="textBlue">8%</b></h6>
              </div>
              <div className="desc pb-5">
                <h5>Rewards Vesting</h5>
                <h6><b className="textBlue">50%</b> of rewards distributed in farms and pools are paid out in XCRSS token, which is linearly vested into CRSS within 5 months, with <b className="textBlue">20%</b> unlocked every 30 days.</h6>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container>
        <Row>
            <div className="title">
                <h1>Fees</h1>
            </div>
        </Row>
        <div className="fee_classification">
        <div className="fee_item">
          <div className="item_title">Quick Swap</div>
          <div className="item_content">
            <div className="sub_title">0.2%</div>
            <div className="sub_desc">fee on every swap</div>
            <div className="sub_title">0.17%</div>
            <div className="sub_desc">Returned to liquidity pools and awarded to  liquidity providers</div>
            <div className="sub_title">0.03%</div>
            <div className="sub_desc">to treasury</div>
          </div>
        </div>
        <div className="fee_item">
          <div className="item_title">Advanced Swap</div>
          <div className="item_content">
            <div className="sub_title">0.3%</div>
            <div className="sub_desc">fee on every swap</div>
            <div className="sub_title">0.17%</div>
            <div className="sub_desc">Returned to liquidity pools and awarded to liquidity providers</div>
            <div className="sub_title">0.13%</div>
            <div className="sub_desc">to treasury</div>
          </div>
        </div>
        <div className="fee_item">
          <div className="item_title">Auto-Compound</div>
          <div className="item_content">
            <div className="sub_title">5%</div>
            <div className="sub_desc">fee on auto-compounded rewards</div>
            <div className="sub_title">5%</div>
            <div className="sub_desc">fee used to buy back and burn CRSS</div>
            <div className="sub_desc">rewards are auto-compounded, we do our own yield optimization</div>
          </div>
        </div>
        <div className="fee_item">
          <div className="item_title">Transactions</div>
          <div className="item_content">
            <div className="sub_title">0.1%</div>
            <div className="sub_desc">fee on all transactions</div>
            <div className="sub_desc">Every time CRSS is transferred, whether for staking, creating LP or sending to another wallet, a <b className="textBlue">0.1%</b> transaction fee takes place.</div>
            <div className="sub_desc">Of this <b className="textBlue">0.04%</b> goes to the development and marketing wallet, <b className="textBlue">0.03%</b> goes into liquidity, and <b className="textBlue">0.03%</b> is used to buy back and burn CRSS.</div>
            <div className="sub_desc">This adds deflationary pressure and auto-liquidity for the CRSS token, further encouraging users to hold CRSS.</div>
          </div>
        </div>
        <div className="fee_item">
          <div className="item_title">Instant Rewards</div>
          <div className="item_content">
            <div className="sub_title">25%</div>
            <div className="sub_desc">fee on instant rewards</div>
            <div className="sub_desc">Farm and pool rewards are paid in <b className="textBlue">50%</b> CRSS and <b className="textBlue">50%</b> XCRSS, with XCRSS linearly vested within 5 months.</div>
            <div className="sub_desc">If users prefer, they can choose to claim rewards instantly but will only receive <b className="textBlue">75%</b>, with <b className="textBlue">25%</b> being burned. </div>
            <div className="sub_desc">This further reduces CRSS circulating supply and potential sell pressure.</div>
          </div>
        </div>
        </div>
    
    </Container>
    </section>
  );
}

export default SectionTokenomicV2;