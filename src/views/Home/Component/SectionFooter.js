import React, { Component, Fragment, useState, useContext } from "react";
import { Container , Input} from 'reactstrap';

import { Row, Col } from 'reactstrap';
import '../css/style.css'
import { ThemeContext } from "../../../contexts/ThemeContext";
// import pdf from '../../../assets/images/crosswise/litepaper/Crosswise_Litepaper_Final.pdf'
import pitchdeck from '../../../assets/images/crosswise/pitchdeck/Crosswise_Pitch_Deck_1.2.pdf'

const SectionFooter = (props) => {

    const { isDark, toggleTheme } = useContext(ThemeContext)
    return (
        
          <section className="footer_section even_background" {...props}>
            <Container>
              <div className="footer_bar">
                  <div className="footer_bar_icon">
                    {
                      isDark? (<img src="assets/images/logo@3x.png" className="nav_logo" id="crosswise_logo"/>):
                      <img src="assets/images/logo-light-theme-2.png" className="nav_logo" id="crosswise_logo"/>
                    }
                    <div className="footer_bar_connections">
                        {/* <div className="bar_item">
                          {
                            isDark? (<img src="assets/images/location.png"  />):
                            <img src="assets/images/location-light.png"/>
                          } 
                        <span className="item">United States</span>
                        </div> */}

                        {/* <div className="bar_item">
                          {
                            isDark? (<img src="assets/images/message.png"  />):
                            <img src="assets/images/message-light.png"/>
                          } 
                        <span className="item">English (US/UK)</span>
                        </div> */}
                    </div>
                  </div>
                  <div className="footer_bar_links">
                    <div className="group_links">
                      <div className="title">
                        MEDIA
                      </div>
                      <div className="links">
                          <a className="link-item" href={pitchdeck} target="_blank" rel="noreferrer">Pitchdeck</a>
                          <a className="link-item" href="https://crosswise.gitbook.io/crosswise-litepaper/" target="_blank" rel="noreferrer">Litepaper</a>
                      </div>
                    </div>
                    <div className="group_links">
                      <div className="title">
                        LEARN
                      </div>
                      <div className="links">
                          <a className="link-item" href="https://crosswise.gitbook.io/crosswise/" target="_blank" rel="noreferrer">Gitbook</a>
                          <a className="link-item" href="https://intercom.help/crosswise-f/en" target="_blank" rel="noreferrer">Support </a>
                          <a className="link-item" href="https://crosswise.notion.site/Crosswise-ICO-Affiliate-Program-221dc5555eb8422b8210c03c952d1673" target="_blank" rel="noreferrer">Affiliate Program</a>
                      </div>
                    </div>
                    <div className="group_links">
                      <div className="title">
                        FOLLOW
                      </div>
                      <div className="links">
                      <a className="link-item" href="https://t.me/crosswise" target="_blank" rel="noreferrer">Telegram</a>
                      <a className="link-item" href="https://discord.gg/4BuwxMz24J" target="_blank" rel="noreferrer" >Discord</a>
                          <a className="link-item" href="https://twitter.com/crosswisefi" target="_blank" rel="noreferrer">Twitter</a>
                          <a className="link-item" href="https://crosswise.medium.com/" target="_blank" rel="noreferrer">Medium</a>
                          <a className="link-item" href="https://www.instagram.com/crosswisedefi/" target="_blank" rel="noreferrer" >Instagram</a>
                      </div>
                    </div>

                  </div>
              </div>
              <div className="copyright">
                {/* <div className="made_by">made by &nbsp;<p> roobinium.io</p></div> */}
                <div className="copyrightyear">© 2021 Crosswise, a SublimeMinds Brand</div>
              </div>
            </Container>
          </section>
        );
}

export default SectionFooter;