import React, { Component, Fragment, useState, useContext } from "react";
import { Container , Input} from 'reactstrap';

import Slider from "react-slick";
import 'react-accessible-accordion/dist/fancy-example.css';
import { Row, Col } from 'reactstrap';
import classnames from 'classnames';
import '../css/style.css'
import { ThemeContext } from "../../../contexts/ThemeContext";

import imgToken from '../../../assets/images/crosswise/tokenomic-img-v1.png'

import checkImg from '../../../assets/images/crosswise/roadmap-check.png'
import spinnerImg from '../../../assets/images/crosswise/roadmap-spinner.png'

const SectionRoadmapV2 = (props) => {

    const [viewOption, setViewOption] = useState(false);

    const changeView = () => {
        setViewOption(!viewOption);
        console.log(viewOption)
    }
    var settings = {
        dots: true,
        infinite: false,
        arrows: false,
        swipeToSlide: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        draggable: true,
        autoplay: false,
        autoplaySpeed: 1500,
    //    variableWidth: true,
        centerMode: false,
        fade: false,
        cssEase: 'linear',
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                dots:true
            }
        },

        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                draggable: true,
                dots: true
            }
        },

        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                
                draggable: true,
                dots: true
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                draggable: true,
                dots: true
            }
        }
    ]
      };
    return (
          <section className="roadmap_section_v2 section_padding even_background" id="roadmap">
            <Container>
                <Row>
                    <div className="title">
                        <h1>Roadmap</h1>
                    </div>
                </Row>
                {
                    (!viewOption)?(
                        <div className="exchange_slider">
                        <div className="gallery_images">
                            <ul>
                                <Slider {...settings}>
                                        <li>
                                            <div className="gallery_photo shadow">
                                                {/* <img className="card-img-top" src={Img6} /> */}
                                                <div className="gradient-box">Q3/2021</div>
                                                <div className="card-img-overlay p-3">
                                                </div>
                                                <div className="photo_content">
                                                    <div className="content-desc">
                                                        <img src={checkImg} alt="" />
                                                        <div className="content-text">Web & Dapp Design</div>
                                                    </div>
                                                    <div className="content-desc">
                                                         <img src={checkImg} alt="" />
                                                        <div className="content-text">Pre-Sale Frontend</div>
                                                    </div>
                                                    <div className="content-desc">
                                                        <img src={checkImg} alt="" />
                                                        <div className="content-text">DAPP Frontend</div>
                                                    </div>
                                                    <div className="content-desc">
                                                        <img src={checkImg} alt="" />
                                                        <div className="content-text">Pitchdeck & Litepaper</div>
                                                    </div>
                                                    <div className="content-desc">
                                                        <img src={spinnerImg} alt="" />
                                                        <div className="content-text">Beta Release</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
        
                                        <li>
                                            <div className="gallery_photo shadow">
                                                <div className="gradient-box">Q4/2021</div>
                                                <div className="card-img-overlay p-3">
                                                </div>
                                                <div className="photo_content">
                                                    <div className="content-desc">
                                                        <img src={spinnerImg} alt="" />
                                                        <div className="content-text">V1 Release on BSC</div>
                                                    </div>
                                                    <div className="content-desc">
                                                        <img src={spinnerImg} alt="" />
                                                        <div className="content-text">Limit Orders</div>
                                                    </div>
                                                    <div className="content-desc">
                                                        <img src={spinnerImg} alt="" />
                                                        <div className="content-text">Statistics / Account Area</div>
                                                    </div>
                                                    <div className="content-desc">
                                                        <img src={spinnerImg} alt="" />
                                                        <div className="content-text">Explorer</div>
                                                    </div>
                                                    <div className="content-desc">
                                                        <img src={spinnerImg} alt="" />
                                                        <div className="content-text">Anti Bot Features</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
        
        
        
                                        <li>
                                            <div className="gallery_photo shadow">
                                                <div className="gradient-box">Q1/2022</div>
                                                <div className="card-img-overlay p-3">
                                                </div>
                                                <div className="photo_content">
                                                    <div className="content-desc">
                                                        <img src={spinnerImg} />
                                                        <div className="content-text">LaunchPad</div>
                                                    </div>
                                                    <div className="content-desc">
                                                        <img src={spinnerImg} />
                                                        <div className="content-text">Own Price Charts</div>
                                                    </div>
                                                    <div className="content-desc">
                                                        <img src={spinnerImg} />
                                                        <div className="content-text">Bookmarking</div>
                                                    </div>
                                                    <div className="content-desc">
                                                        <img src={spinnerImg} />
                                                        <div className="content-text">Vaults for 3rd Parties</div>
                                                    </div>
                                                    <div className="content-desc">
                                                        <img src={spinnerImg} />
                                                        <div className="content-text">Release on Polygon</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
        
                                        <li>
                                            <div className="gallery_photo shadow">
                                                <div className="gradient-box">Q2/2022</div>
                                                <div className="card-img-overlay p-3">
                                                </div>
                                                <div className="photo_content">
                                                    <div className="content-desc">
                                                        <img src={spinnerImg} />
                                                        <div className="content-text">Synthetic Assets</div>
                                                    </div>
                                                    <div className="content-desc">
                                                        <img src={spinnerImg} />
                                                        <div className="content-text">Own Bridge</div>
                                                    </div>
                                                    <div className="content-desc">
                                                        <img src={spinnerImg} />
                                                        <div className="content-text">1-Click Cross-Chain Swaps</div>
                                                    </div>
                                                    <div className="content-desc">
                                                        <img src={spinnerImg} />
                                                        <div className="content-text">Release on ETH</div>
                                                    </div>
                                                    <div className="content-desc">
                                                        <img src={spinnerImg} />
                                                        <div className="content-text">Token Owner Area</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
        
                                        <li>
                                            <div className="gallery_photo shadow">
                                                <div className="gradient-box">Q3/2022</div>
                                                <div className="card-img-overlay p-3">
                                                </div>
                                                <div className="photo_content">
                                                    <div className="content-desc">
                                                        <img src={spinnerImg} />
                                                        <div className="content-text">Release on Avalanche</div>
                                                    </div>
                                                    <div className="content-desc">
                                                        <img src={spinnerImg} />
                                                        <div className="content-text">Crosswise Wallet</div>
                                                    </div>
                                                    <div className="content-desc">
                                                        <img src={spinnerImg} />
                                                        <div className="content-text">IFFT style swaps using Chainlink Keepers</div>
                                                    </div>                                                    
                                                    <div className="content-desc">
                                                        <img src={spinnerImg} />
                                                        <div className="content-text">Shareholder / Governance Token</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
        
                                        <li>
                                            <div className="gallery_photo shadow">
                                                <div className="gradient-box">Q4/2022</div>
                                                <div className="card-img-overlay p-3">
                                                </div>
                                                <div className="photo_content">
                                                    <div className="content-desc">
                                                        <img src={spinnerImg} />
                                                        <div className="content-text">Mobile App</div>
                                                    </div>
                                                    <div className="content-desc">
                                                        <img src={spinnerImg} />
                                                        <div className="content-text">Release on Solana</div>
                                                    </div>
                                                    <div className="content-desc">
                                                        <img src={spinnerImg} />
                                                        <div className="content-text">Extended Chart Features</div>
                                                    </div>
                                                    <div className="content-desc">
                                                        <img src={spinnerImg} />
                                                        <div className="content-text">NFT marketplace</div>
                                                    </div>
                                                    <div className="content-desc">
                                                        <img src={spinnerImg} />
                                                        <div className="content-text">Skill-Based Game</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
        
                                    </Slider>
                                </ul>
                            </div>
                      </div> 
                    ):(
                        <div className="see_full_roadmap_section">
                        <div className="roadmap_item">
                            <div className="gallery_photo shadow">
                                <div className="gradient-box">Q3/2021</div>
                                <div className="card-img-overlay p-3">
                            </div>
                                <div className="photo_content">
                                    <div className="content-desc">
                                        <img src={checkImg} alt="" />
                                        <div className="content-text">Website & Dapp Design</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={checkImg} alt="" />
                                        <div className="content-text">DEX Smart Contracts</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={checkImg} alt="" />
                                        <div className="content-text">CRSS & XCRSS Smart Contracts</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={checkImg} alt="" />
                                        <div className="content-text">Pre-Sale Contract</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={checkImg} alt="" />
                                        <div className="content-text">Pre-Sale Frontend</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={checkImg} alt="" />
                                        <div className="content-text">Pitchdeck & Litepaper</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={checkImg} alt="" />
                                        <div className="content-text">Locked LP Vesting contracts</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={checkImg} alt="" />
                                        <div className="content-text">Anti Whale Router</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={checkImg} alt="" />
                                        <div className="content-text">Mass Harvest and Mass Stake</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={checkImg} alt="" />
                                        <div className="content-text">Lockup feature</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={checkImg} alt="" />
                                        <div className="content-text">Trading Fee on DEX</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={checkImg} alt="" />
                                        <div className="content-text">Vesting/Immediate Claim</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={checkImg} alt="" />
                                        <div className="content-text">Referral</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={checkImg} alt="" />
                                        <div className="content-text">DAPP Frontend</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={spinnerImg} alt="" />
                                        <div className="content-text">Beta Release</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={checkImg} alt="" />
                                        <div className="content-text">Integrate Subgraph</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={checkImg} alt="" />
                                        <div className="content-text">Integrate Price Oracle</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={spinnerImg} alt="" />
                                        <div className="content-text">Orderbook</div>
                                    </div>
                                </div>
                            </div>
                            </div>
                       
        
                        <div className="roadmap_item">
                            <img src={imgToken} className="tokenImage" alt="" />
                            <div className="gallery_photo shadow space_img">
                                <div className="gradient-box">Q4/2021</div>
                                <div className="card-img-overlay p-3">
                                </div>
                                <div className="photo_content">
                                    <div className="content-desc">
                                        <img src={spinnerImg} alt="" />
                                        <div className="content-text">V1 Release on BSC</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={spinnerImg} alt="" />
                                        <div className="content-text">Limit Orders</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={spinnerImg} alt="" />
                                        <div className="content-text">Statistics / Account Area</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={spinnerImg} alt="" />
                                        <div className="content-text">Explorer</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={spinnerImg} alt="" />
                                        <div className="content-text">Anti Bot Features</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={spinnerImg} alt="" />
                                        <div className="content-text">Own API</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={spinnerImg} alt="" />
                                        <div className="content-text">User Notifications</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={spinnerImg} alt="" />
                                        <div className="content-text">Gasless Feature</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={spinnerImg} alt="" />
                                        <div className="content-text">Voting/ Snapshot</div>
                                    </div>
                                </div>
                            </div>
                        </div>
        
        
                        <div className="roadmap_item">
                            <div className="gallery_photo shadow">
                                <div className="gradient-box">Q1/2022</div>
                                <div className="card-img-overlay p-3">
                                </div>
                                <div className="photo_content">
                                    <div className="content-desc">
                                        <img src={spinnerImg} />
                                        <div className="content-text">LaunchPad</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={spinnerImg} />
                                        <div className="content-text">Own Price Charts</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={spinnerImg} />
                                        <div className="content-text">Bookmarking</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={spinnerImg} />
                                        <div className="content-text">Vaults for 3rd Parties</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={spinnerImg} />
                                        <div className="content-text">Ramp Network Integration</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={spinnerImg} />
                                        <div className="content-text">Front-running deterrents</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={spinnerImg} />
                                        <div className="content-text">Release on Polygon</div>
                                    </div>
                                </div>
                            </div>
                        </div>
        
        
                        <div className="roadmap_item">
                            <div className="gallery_photo shadow">
                                <div className="gradient-box">Q2/2022</div>
                                <div className="card-img-overlay p-3">
                                </div>
                                <div className="photo_content">
                                    <div className="content-desc">
                                        <img src={spinnerImg} />
                                        <div className="content-text">Synthetic Assets</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={spinnerImg} />
                                        <div className="content-text">Own Bridge</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={spinnerImg} />
                                        <div className="content-text">1-Click Cross-Chain Swaps</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={spinnerImg} />
                                        <div className="content-text">Release on ETH</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={spinnerImg} />
                                        <div className="content-text">Token Owner Area</div>
                                    </div>
                                </div>
                            </div>
                        </div>
        
                        <div className="roadmap_item">
                            <div className="gallery_photo shadow">
                                <div className="gradient-box">Q3/2022</div>
                                <div className="card-img-overlay p-3">
                                </div>
                                <div className="photo_content">
                                    <div className="content-desc">
                                        <img src={spinnerImg} />
                                        <div className="content-text">Release on Avalanche</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={spinnerImg} />
                                        <div className="content-text">Crosswise Wallet</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={spinnerImg} />
                                        <div className="content-text">IFFT style swaps using Chainlink Keepers</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={spinnerImg} />
                                        <div className="content-text">Shareholder / Governance Token</div>
                                    </div>
                                </div>
                            </div>
                        </div>
        
                        <div className="roadmap_item">
                            <div className="gallery_photo shadow">
                                <div className="gradient-box">Q4/2022</div>
                                <div className="card-img-overlay p-3">
                                </div>
                                <div className="photo_content">
                                    <div className="content-desc">
                                        <img src={spinnerImg} />
                                        <div className="content-text">Mobile App</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={spinnerImg} />
                                        <div className="content-text">Release on Solana</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={spinnerImg} />
                                        <div className="content-text">Extended Chart Features</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={spinnerImg} />
                                        <div className="content-text">NFT marketplace</div>
                                    </div>
                                    <div className="content-desc">
                                        <img src={spinnerImg} />
                                        <div className="content-text">Skill-Based Game</div>
                                    </div>
                                </div>
                            </div>
                        </div>
        
        
                      </div>
                    )
                }
                
             
              <div className="see_full_roadmap">
                  {
                      (!viewOption)?(
                        <button className="btn btn_primary p-15 m-auto" onClick={changeView}>See Full Roadmap</button>
                      ):(
                        <button className="btn btn_primary p-15 m-auto" onClick={changeView}>See Partial Roadmap</button>
                      )
                  }
                     
              </div>
            </Container>
          </section>
        );
}

export default SectionRoadmapV2;