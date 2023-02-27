import React, { useState, useContext, useEffect } from "react";
import { Container } from 'reactstrap';

import 'react-accessible-accordion/dist/fancy-example.css';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
  } from 'reactstrap';

import '../css/style.css'
import { ThemeContext } from "../../../contexts/ThemeContext";

import arrow1 from '../../../assets/images/crosswise/presale_arrow_1.png'
import arrow2 from '../../../assets/images/crosswise/presale_arrow_2.png'

import stepImg1 from '../../../assets/images/crosswise/presale_step_img1.png'
import stepImg2 from '../../../assets/images/crosswise/presale_step_img2.png'

const SectionPresaleBottom = (props) => {

    const { isDark, toggleTheme } = useContext(ThemeContext)

    const [counter, setCounter] = useState(0);
  
    const [second, setSecond] = useState('00');
    const [minute, setMinute] = useState('00');
    const [day, setDay] = useState('00');
    const [hour, setHour] = useState('00');

    const [activeCarouselIndex, setActiveCarouselIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    useEffect(() => {
        const currentTime = Date.now();
        // console.log("currentTime", currentTime);
            const presaleTime = new Date(2021, 9, 27, 12, 0, 0).getTime();
        // console.log("presaleTime",  presaleTime)
        const presaleTimezoneOffset = new Date(presaleTime).getTimezoneOffset();
        //  console.log("presaleTimezoneOffset1", presaleTimezoneOffset)
        const utcPresaleTime = presaleTime - presaleTimezoneOffset * 60 * 1000;
        // console.log("utcPresaleTime", utcPresaleTime)

        const timeStamp = utcPresaleTime - currentTime;
        // console.log("timestamp", timeStamp);
        if(counter > 0 ) return;
        // get timestamp
        // 18.10.2021 3PM CET UTC + 2(+120)
        setCounter(Math.floor(timeStamp/1000));
    }, [counter]);

    useEffect(()=> {
        const intervalId = setInterval(() => {
            setDay('00');
            setMinute('00');
            setHour('00');
            setSecond('00');
            if(counter === 0){
                setDay('00');
                setMinute('00');
                setHour('00');
                setSecond('00');
                clearInterval(intervalId);
                return;
            }
            if(counter > 0){
                setCounter(counter - 1);
            }
            
        }, 1000);
        return () => clearInterval(intervalId);
    }, [counter]);

    const carouselItems = [
        {
            key: 1,
            title: "Pre-Sale Round 2 End",
            stages: [
                {
                    title: "Stage 1",
                    price: "0.7 BUSD",
                    desc: "0.5M Tokens = 350K BUSD"
                },
                {
                    title: "Stage 2",
                    price: "0.8 BUSD",
                    desc: "0.5M Tokens = 400K BUSD"
                }
            ]
        },
        {
            key: 2,
            title: "Pre-Sale Round 1 Closed",
            stages: [
                {
                    title: "Stage 1",
                    price: "0.2 BUSD",
                    desc: "1M Tokens = 200K BUSD"
                },
                {
                    title: "Stage 2",
                    price: "0.3 BUSD",
                    desc: "1M Tokens = 300K BUSD"
                },
                {
                    title: "Stage 3",
                    price: "0.6 BUSD",
                    desc: "1M Tokens = 600K BUSD"
                }
            ]
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
                <Container style={{ paddingBottom: '40px' }}>
                    <div className="title">
                        <h1>{item.title}</h1>
                    </div>
                    <div className="d-flex flex-row justify-content-center pt-30">
                        <a
                            className="btn btn_primary maxContent presale_round_button"
                            onClick={() => setActiveCarouselIndex(1)}
                        >
                            Round 1
                        </a>
                        <a
                            className="btn btn_primary maxContent presale_round_button"
                            onClick={() => setActiveCarouselIndex(0)}
                        >
                            Round 2
                        </a>
                    </div>
                    <div className="presale_info">
                        <div className="info_desc pt-50">Vesting Schedule</div>
                        <div className="info_desc t_b pt-30">5 months linearly with 20% unlock every 30 days after purchase</div>
                    </div>
                    <div className="presale_stages">
                        <div className="info_desc">Pre-Sale Stages</div>
                        <div className="s_diagram size_md round2">
                            {item.stages.map((stage, index) => {
                                return (
                                    <>
                                        {index > 0 ? <img src={arrow1} alt="" /> : null}
                                        <div className="stage_item">
                                            <div className="item_title">{stage.title}</div>
                                            <h6 className="item_desc pt-30">Price <b>{stage.price}</b></h6>
                                            <h6 className="item_desc">{stage.desc}</h6>
                                        </div>
                                    </>
                                )
                            })}
                        </div>

                        <div className="s_diagram size_sm">
                            {item.stages.map((stage, index) => {
                                return (
                                    <>
                                        {index > 0 ? <img src={arrow2} className="mt-30" alt="" /> : null}
                                        <div className="stage_item">
                                            <div className="item_title">{stage.title}</div>
                                            <h6 className="item_desc  pt-30">Price <b>{stage.price}</b></h6>
                                            <h6 className="item_desc">{stage.desc}</h6>
                                        </div>
                                    </>
                                )
                            })}
                        </div>

                        <div className="stage_step">
                            <div className="step_item b_green">
                                <img src={stepImg1} alt="" />
                                <div className="step_desc">Maximum 25K BUSD per wallet</div>
                            </div>
                            <div className="step_item">
                                <img src={stepImg2} alt="" />
                                <div className="step_desc">Combined total of 1.85 million BUSD hard cap, 200K soft cap</div>
                            </div>
                            <div className="step_item b_green">
                                <img src={stepImg1} alt="" />
                                <div className="step_desc">70% of presale amount for development and marketing</div>
                            </div>
                            <div className="step_item">
                                <img src={stepImg2} alt="" />
                                <div className="step_desc">30% for initial CRSS/BNB and CRSS/BUSD liquidity</div>
                            </div>
                            <div className="step_item b_green">
                                <img src={stepImg1} alt="" />
                                <div className="step_desc">Combined maximum total of 4 million tokens at pre-sale (8% of max supply)</div>
                            </div>
                            <div className="step_item">
                                <img src={stepImg2} alt="" />
                                <div className="step_desc">Base price 0.95 BUSD after pre-sale</div>
                            </div>
                            <div className="step_item b_green">
                                <img src={stepImg1} alt="" />
                                <div className="step_desc">Launching December 2021</div>
                            </div>
                        </div>
                    </div>

                    <div className="see_full_roadmap">
                        <a className="btn btn_primary btn_whitelisted m-auto p-15 maxContent"  href="https://x9epe3je3fk.typeform.com/crosswise">Get Whitelisted</a>
                    </div>
                </Container>
            </CarouselItem>
        );
    });

    return (
        <section className="presale_bottom_section section_padding even_background">
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
        </section>
    );
}

export default SectionPresaleBottom;