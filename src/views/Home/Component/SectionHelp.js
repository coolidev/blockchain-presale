import React, { Component, Fragment, useState, useContext } from "react";
import Accordion from "./Faq/accordion";
import { Container , Input} from 'reactstrap';

import 'react-accessible-accordion/dist/fancy-example.css';
import { Row, Col } from 'reactstrap';
import '../css/style.css'
import { ThemeContext } from "../../../contexts/ThemeContext";

import twitter_icon from '../../../assets/images/crosswise/social/twitter.png';
import medium_icon from '../../../assets/images/crosswise/social/medium.png';
import reddit_icon from '../../../assets/images/crosswise/social/reddit.png';
import tel_plan_icon from '../../../assets/images/crosswise/social/telegram-plane.png';
import tel_icon from '../../../assets/images/crosswise/social/telegram.png';

const questionsAnswers = [
    {
      question: "What is crosswise?",
      answer:
        "<p>A next-gen cross-chain Automated Market Maker (AMM) based Decentralized Exchange (DEX). Crosswise aims to bridge the user experience gap between traditional centralized exchanges and their decentralized counterparts.</p>",
    },
    {
      question: "How can I purchase CRSS token?",
      answer:
        "<p>During the pre-sale, you will only be able to purchase CRSS using BUSD on Binance Smart Chain. Once crosswise DEX is launched, you will be able to swap BUSD, BNB, ETH, BTC, LTC and others against CRSS.</p>",
    },
    {
      question: "How can I participate in the CRSS token pre-sale?",
      answer: `<p>Click on <a href='https://x9epe3je3fk.typeform.com/crosswise'>Get Whitelisted</a> in the top menu, complete the form, and wait for confirmation. Please use a MetaMask or WalletConnect compatible wallet, and ensure you have added Binance Smart Chain network. Once confirmed, you can click on "Buy Tokens" and do your transaction. </p>`,
    }
    
  ];


const SectionHelp = (props) => {

    const { isDark, toggleTheme } = useContext(ThemeContext)
    return (
        
          <section className="help_section section_padding odd_background" id="help">
            <Container>
              <div className="help_section_group">
              <div className="help_section_left">
                <Row>
                  <Accordion questionsAnswers={questionsAnswers} />
                </Row>
              </div>
              <div className="help_section_right">
                <div className="title">
                  <h1>Join our community</h1>
                </div>
                <div className="desc">
                  <p>Crosswise is also a thriving community of DeFi enthusiasts! Join our growing community and stay up to date with the latest project developments.</p>
                </div>
                
                <div className="social_link_btn">
                  <a className="social_link" href="https://twitter.com/crosswisefi" target="_blank" rel="noreferrer" ><img src={twitter_icon} /></a>
                  <a className="social_link" href="https://crosswise.medium.com/" target="_blank" rel="noreferrer"><img src={medium_icon} /></a>
                  <a className="social_link" ><img src={reddit_icon} /></a>
                  <a className="social_link" href="https://t.me/crosswise_a" target="_blank" rel="noreferrer" ><img src={tel_plan_icon} /></a>
                  <a className="social_link" href="https://t.me/crosswise" target="_blank" rel="noreferrer"><img src={tel_icon} /></a>
                </div>
              </div>
              </div>
              
            </Container>
          </section>
        );
}

export default SectionHelp;