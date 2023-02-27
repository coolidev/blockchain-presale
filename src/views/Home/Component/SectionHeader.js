import React, { useState, useContext, useEffect, useRef } from "react"
import { Container } from 'reactstrap'
import 'react-accessible-accordion/dist/fancy-example.css';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  Row,
  Col
} from 'reactstrap';
import '../css/style.css';
import { ThemeContext } from "../../../contexts/ThemeContext"
import styled from "styled-components"
import useRefresh from '../../../redux/useRefresh'
import "react-step-progress-bar/styles.css"
import { ProgressBar, Step } from "react-step-progress-bar"
import { web3 } from "../../../crosswise/web3";
import {
  getPresaleTokenPrice,
  getPresaleTokenPrice2,
  getTotalDepositedAmount,
  getTotalDepositedAmount2
} from "../../../crosswise/token";

import backgroundCloud from '../../../assets/images/crosswise/backgroud-could.png'
import M from '../../../assets/images/crosswise/m.png'
import Paperplane from '../../../assets/images/crosswise/paperplane.png'
import Git from '../../../assets/images/crosswise/git.png'
import Twitter from '../../../assets/images/crosswise/twitter.png'
import Discord from '../../../assets/images/crosswise/discord.png'

import MLight from '../../../assets/images/crosswise/m-light.png'
import PaperplaneLight from '../../../assets/images/crosswise/paperplane-light.png'
import GitLight from '../../../assets/images/crosswise/git-light.png'
import TwitterLight from '../../../assets/images/crosswise/twitter-light.png'
import DiscordLight from '../../../assets/images/crosswise/discord-light.png'

import Planet8 from '../../../assets/images/crosswise/planet-8.png';
// import pdf from '../../../assets/images/crosswise/litepaper/Crosswise_Litepaper_Final.pdf'
import pitchdeck from '../../../assets/images/crosswise/pitchdeck/Crosswise_Pitch_Deck_1.2.pdf'

import bscscanImg from '../../../assets/images/bscscan.png';

const audit_pdf = 'https://github.com/TechRate/Smart-Contract-Audits/blob/main/October/Crosswise%20Token%20Full%20Smart%20Contract%20Security%20Audit.pdf'

const preSale2Contract = `https://bscscan.com/address/0x3DC2b7E5dc5274C2d603342E73D1d0A9DE96796A`
const crssContract = `https://bscscan.com/address/0x0999ba9aEA33DcA5B615fFc9F8f88D260eAB74F1`

const Oval = styled.div`
  width: 16px;
  height: 16px;
  margin: 0 111px 0 0;
  background-color: #ffffff;
  border-radius: 50%;
`;

const Section = styled.div`
  div.presale_progress > div > div:nth-child(2) {
    left: ${props => props.softCap}% !important;
  }
`;

const CombinedShape = styled.div`
  width: 86px;
  height: 38px;
  /* margin: 15px 40px 0 92px; */
  padding: 10px 16px;
  -webkit-backdrop-filter: blur(40px);
  backdrop-filter: blur(40px);
  box-shadow: 8px 8px 24px 0 rgba(9, 13, 20, 0.4), -4px -4px 8px 0 rgba(224, 224, 255, 0.04), 0 1px 1px 0 rgba(9, 13, 20, 0.4);
  border: solid 1px rgba(43, 43, 43, 0.5);
  background-image: linear-gradient(117deg, rgba(245, 247, 250, 0.12), rgba(43, 43, 43, 0.5) 52%, rgba(245, 247, 250, 0) 100%);
  ::after {
    content: " ";
    position: absolute;
    bottom: 100%;  /* At the top of the tooltip */
    left: 18%;
    margin-left: -13px;
    border-width: 8px;
    border-style: solid;
    // border-color: transparent transparent rgba(43, 43, 43, 0.5) transparent;
    border-color: transparent transparent rgb(71 73 77) transparent;
  }
`;

const PresaleTextTip = styled.div`
  width: 54px;
  height: 16px;
  font-family: Montserrat;
  font-size: 13px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.23;
  letter-spacing: -0.4px;
  color: #ffffff;
`;

const SectionHeader = (props) => {
  const { isDark, toggleTheme } = useContext(ThemeContext)
  const { fastRefresh } = useRefresh()

  // represents softcap amount
  // This should be updated with softcap of presale
  const [softCap, setSoftCap] = useState(0)
  const [softCap2, setSoftCap2] = useState(0)
  const [raised, setRaised] = useState(0);
  const [raised2, setRaised2] = useState(0);

  const [counter, setCounter] = useState(0);

  const [second, setSecond] = useState('00');
  const [minute, setMinute] = useState('00');
  const [day, setDay] = useState('00');
  const [hour, setHour] = useState('00');

  const [tokenPrice, setTokenPrice] = useState(web3.utils.toBN(0));
  const [tokenPrice2, setTokenPrice2] = useState(web3.utils.toBN(0));

  const [activeCarouselIndex, setActiveCarouselIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const mountedRef = useRef(true);

  useEffect(() => {
    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    mountedRef.current = true;
    const fetchDataFromContract = async () => {
      if (!mountedRef.current) {
        return;
      }
      
      setTokenPrice(await getPresaleTokenPrice());
      setTokenPrice2(await getPresaleTokenPrice2());

      // console.log(parseFloat(web3.utils.fromWei(tokenPrice)));
      const tempSoftCap = await getTotalDepositedAmount();
      const tempSoftCap2 = await getTotalDepositedAmount2();

      // console.log("tempSoftCap", tempSoftCap)
      const percent = parseFloat((web3.utils.fromWei(tempSoftCap)).toString()) / 1100000 * 100;
      setRaised(web3.utils.fromWei(tempSoftCap));
      setSoftCap(percent);
      const percent2 = parseFloat((web3.utils.fromWei(tempSoftCap2)).toString()) / 750000 * 100;
      setRaised2(web3.utils.fromWei(tempSoftCap2));
      setSoftCap2(percent2);
    }
    fetchDataFromContract()
  }, [fastRefresh])

  useEffect(() => {
    const currentTime = Date.now();
    // console.log("currentTime", currentTime);
    const presaleTime = new Date(2021, 9, 27, 12, 0, 0).getTime();
    // console.log("presaleTime",  presaleTime)
    const presaleTimezoneOffset = new Date(presaleTime).getTimezoneOffset();
    // console.log("presaleTimezoneOffset", presaleTimezoneOffset)
    const utcPresaleTime = presaleTime - presaleTimezoneOffset * 60 * 1000;
    // console.log("utcPresaleTime", utcPresaleTime)

    const timeStamp = utcPresaleTime - currentTime;
    // console.log("timestamp", timeStamp);
    if (counter > 0) return;
    // get timestamp
    // 18.10.2021 3PM CET UTC + 2(+120)
    setCounter(Math.floor(timeStamp / 1000));
  }, [counter]);

  useEffect(() => {

    const intervalId = setInterval(() => {
      // const dayCounter = Math.floor(counter / (60 * 60 * 24));
      // const hourCounter = Math.floor((counter / (60 * 60)) % 24);
      // const minuteCounter = Math.floor((counter / 60) % 60);
      // const secondCounter = counter % 60;

      // const computedDay   = String(dayCounter).length === 1 ? `0${dayCounter}`: dayCounter;
      // const computedHour   = String(hourCounter).length === 1 ? `0${hourCounter}`: hourCounter;
      // const computedSecond = String(secondCounter).length === 1 ? `0${secondCounter}`: secondCounter;
      // const computedMinute = String(minuteCounter).length === 1 ? `0${minuteCounter}`: minuteCounter;
      // console.log("type",  typeof(computedSecond));

      // setDay(computedDay.toString());
      // setHour(computedHour.toString());
      // setSecond(computedSecond.toString());
      // setMinute(computedMinute.toString());
      setDay('00');
      setMinute('00');
      setHour('00');
      setSecond('00');
      // console.log("counter tuype", typeof(counter));
      if (counter === 0) {
        setDay('00');
        setMinute('00');
        setHour('00');
        setSecond('00');
        clearInterval(intervalId);
        return;
      }
      if (counter > 0) {
        setCounter(counter - 1);
      }

    }, 1000);
    // console.log(counter)
    return () => clearInterval(intervalId);
  }, [counter]);

  const carouselItems = [
    {
      key: 1,
      title: 'Pre-Sale Round 2: Finished',
      tokenPrice: tokenPrice2,
      softCap: '1 BUSD',
      hardCap: '750,000 BUSD',
      stages: [
        {
          title: 'Stage 1 = 500,000 CRSS @ 0.7 BUSD',
          price: 0.7
        },
        {
          title: 'Stage 2 = 500,000 CRSS @ 0.8 BUSD',
          price: 0.8
        }
      ],
      raised: raised2,
      percent: softCap2
    },
    {
      key: 2,
      title: 'Pre-Sale Round 1: Sold Out',
      tokenPrice: tokenPrice,
      softCap: '200,000 BUSD',
      hardCap: '1,100,000 BUSD',
      stages: [
        {
          title: 'Stage 1 = 1 Million CRSS @ 0.2 BUSD',
          price: 0.2
        },
        {
          title: 'Stage 2 = 1 Million CRSS @ 0.3 BUSD',
          price: 0.3
        },
        {
          title: 'Stage 3 = 1 Million CRSS @ 0.6 BUSD',
          price: 0.6
        }
      ],
      raised: raised,
      percent: softCap
    }
  ];

  const next = () => {
    if (animating) return;
    const nextIndex = activeCarouselIndex === carouselItems.length - 1 ? 0 : activeCarouselIndex + 1;
    setActiveCarouselIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeCarouselIndex === 0 ? carouselItems.length - 1 : activeCarouselIndex - 1;
    setActiveCarouselIndex(nextIndex);
  };
  const goToIndex = newIndex => {
    if (animating) return;
    setActiveCarouselIndex(newIndex);
  };

  const slides = carouselItems.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.key}
      >
        <div className="header_presale_board_round2">
          <h5>{item.title}</h5>

          <div className="presale_info">
            <div className="presale_info_rectangle token_price">
              <p>
                Token Price
              </p>
              <h5>
                1 CRSS = {web3.utils.fromWei(item.tokenPrice)} BUSD
              </h5>
            </div>
            <div className="presale_info_rectangle_left presale_info_rectangle">
              <p>
                Min Purchase
              </p>
              <h6>
                1 BUSD
              </h6>
            </div>
            <div className="presale_info_rectangle_right presale_info_rectangle">
              <p>
                Max Purchase
              </p>
              <h6>
                25,000 BUSD
              </h6>
            </div>
            <div className="presale_info_rectangle_left presale_info_rectangle">
              <p>
                Soft Cap
              </p>
              <h6>
                {item.softCap}
              </h6>
            </div>

            <div className="presale_info_rectangle_right presale_info_rectangle">
              <p>
                Hard Cap
              </p>
              <h6>
                {item.hardCap}
              </h6>
            </div>
            <div className="presale_info_rectangle long_width">
              {item.stages.map((stage, index) => {
                return <h6
                  className={
                    (
                      index < item.stages.length - 1 &&
                      parseFloat(web3.utils.fromWei(item.tokenPrice)) < item.stages[index + 1].price &&
                      parseFloat(web3.utils.fromWei(item.tokenPrice)) >= stage.price
                    ) ||
                    (
                      index >= item.stages.length - 1 &&
                      parseFloat(web3.utils.fromWei(item.tokenPrice)) >= item.stages[index].price
                    )
                    ? "highlight active"
                    : ""
                  }
                >
                  {stage.title}
                </h6>
              })}
            </div>

            <div className="presale_info_rectangle_left presale_info_rectangle">
              <p>Launch Price</p>
              <h6>0.95 BUSD</h6>
            </div>

            <div className="presale_info_rectangle_right presale_info_rectangle">
              <p>Launch Date</p>
              <h6>Dec 2021</h6>
            </div>
          </div>

          <div className="presale_tips">
            <div className="tips_item">
              <p>Raised: </p>
              <span>&nbsp;&nbsp;{parseInt(item.raised).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} BUSD</span>
            </div>
            <div className="tips_item">
              <p>Target: </p>
              <span> &nbsp;&nbsp;{item.hardCap}</span>
            </div>
          </div>

          <div className="presale_progress">
            <ProgressBar
              percent={item.percent}
              fillBackground="linear-gradient(to right, #fefb72, #f0bb31)"
            >
              <Step transition="scale">
                {() => (
                  <Oval
                    width="30"
                  />
                )}
              </Step>
              <Step transition="scale">
                {() => (
                  <Oval
                    width="30"
                  />
                )}
              </Step>
              <Step transition="scale">
                {() => (
                  <Oval
                    width="30"
                  />
                )}
              </Step>
            </ProgressBar>
            <Row>
              <CombinedShape className="soft-cap2">
                <PresaleTextTip className="presale-text-cap">
                  Soft Cap
                </PresaleTextTip>
              </CombinedShape>
              <CombinedShape className="hard-cap">
                <PresaleTextTip className="presale-text-cap">Hard Cap</PresaleTextTip>
              </CombinedShape>
            </Row>
          </div>
        </div>
      </CarouselItem>
    );
  });

  return (
    <Section
      className="header_section"
      style={isDark ? { backgroundImage: 'url(' + backgroundCloud + ')' } : {}}
      softCap={softCap}
    >
      <Container>
        <Row className="pRelative">
          <div className="col-lg-7 col-md-12">
            <Row>
              <div className="header_section_left">
                <h1>Cross-Chain DEX 2.0 With Built-In Tools & Gas Savings</h1>
                <p className="desc">Crosswise takes the DEX trading experience to the next level! Tighter security,  cross-chain transactions, gasless swaps, verified listings and the right tools. All tightly integrated and easy to use.</p>
                <Row className="mt-3">
                  <Col sm={4} xs={6}>
                    <a className="btn btn_primary p-2 btn_whitelisted custom-btn" href="https://x9epe3je3fk.typeform.com/crosswise" target="_blank" rel="noreferrer">Get Whitelisted</a>
                  </Col>
                  <Col sm={4} xs={6}>
                    <a className="btn btn_primary p-2 custom-btn" target="_blank" href="https://crosswise.notion.site/MetaMask-Needed-How-to-Buy-More-Details-about-the-Presale-f68a173c9b024949b6844519a537196c" rel="noreferrer">How To Buy</a>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col sm={4} xs={6}>
                    <a className="btn btn_primary p-2 btn_pitchdeck custom-btn" href="https://crosswise.gitbook.io/crosswise-litepaper/" target="_blank" rel="noreferrer">Litepaper</a>
                  </Col>
                  <Col sm={4} xs={6}>
                    <a className="btn btn_primary p-2 btn_pitchdeck custom-btn" href={pitchdeck} target="_blank" rel="noreferrer">Pitchdeck</a>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col sm={4} xs={6}>
                    <a className="btn btn_primary p-2 btn_pitchdeck contract-btn custom-btn" href={preSale2Contract} target="_blank" rel="noreferrer">
                      <img className="scan_img" src={bscscanImg} alt="" />Pre-Sale V2
                    </a>
                  </Col>
                  <Col sm={4} xs={6}>
                    <a className="btn btn_primary p-2 btn_pitchdeck contract-btn custom-btn" href={crssContract} target="_blank" rel="noreferrer">
                      <img className="scan_img" src={bscscanImg} alt="" />CRSS
                    </a>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col sm={4} xs={12}>
                    <a className="btn btn_primary p-2 btn_audit custom-btn" href={audit_pdf} target="_blank" rel="noreferrer">TechRate Audit</a>
                  </Col>
                </Row>
                <Row className="mt-4">
                  <Col className="text-center social-icon">
                    <div className="dapp_bar shadow">
                      <div>
                        <p>Social Media</p>
                      </div>
                      <div className="social_links">
                        <ul className="list-group list-group-horizontal">
                          <a href="https://discord.gg/4BuwxMz24J" target="_blank" className="list-group-item list-group-item-action" rel="noreferrer">
                            {
                              isDark ? (<img src={Discord} alt="discord.png" />) :
                                (<img src={DiscordLight} alt="discord.png" />)
                            }
                          </a>
                          <a href="https://crosswise.medium.com/" target="_blank" className="list-group-item list-group-item-action" rel="noreferrer">
                            {isDark ? (<img src={M} alt="m.png" />) :
                              (<img src={MLight} alt="m.png" />)
                            }
                          </a>
                          <a href="https://t.me/crosswise" target="_blank" className="list-group-item list-group-item-action" rel="noreferrer">
                            {
                              isDark ? (<img src={Paperplane} alt="paperplane.png" />) :
                                (<img src={PaperplaneLight} alt="paperplane.png" />)
                            }
                          </a>
                          <a href="https://github.com/crosswise-finance" target="_blank" className="list-group-item list-group-item-action" rel="noreferrer">
                            {
                              isDark ? (<img src={Git} alt="git.png" />) :
                                (<img src={GitLight} alt="git.png" />)
                            }
                          </a>
                          <a href="https://twitter.com/crosswisefi" target="_blank" className="list-group-item list-group-item-action" rel="noreferrer">
                            {
                              isDark ? (<img src={Twitter} alt="twitter.png" />) :
                                (<img src={TwitterLight} alt="twitter.png" />)
                            }
                          </a>
                        </ul>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Row>
          </div>
          <div className="col-lg-5 col-md-12 pRelativeSecond">
            <div className="header_section_right">
              <div className="header_presale_board">
                <Carousel
                  activeIndex={activeCarouselIndex}
                  next={next}
                  previous={previous}
                  interval={false}
                >
                  <CarouselIndicators
                    items={carouselItems}
                    activeIndex={activeCarouselIndex}
                    onClickHandler={goToIndex}
                  />
                  {slides}
                  <CarouselControl
                    direction="prev"
                    directionText=" "
                    onClickHandler={previous}
                  />
                  <CarouselControl
                    direction="next"
                    directionText=" "
                    onClickHandler={next}
                  />
                </Carousel>
              </div>
            </div>
          </div>
          <img src={Planet8} className="planet8_img shadow" alt="" />
        </Row>
      </Container>
    </Section>
  );
}

export default SectionHeader;