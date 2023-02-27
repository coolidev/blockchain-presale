import React from "react";
import { CardTitle, Container , Input} from 'reactstrap';

import 'react-accessible-accordion/dist/fancy-example.css';
import { Row } from 'reactstrap';
import '../../css/style.css'
import styled from "styled-components";
import { Chrono } from "react-chrono";
import data from "./RoadmapData";

import { Oval, InnerOval, ActiveOval, ActiveInnerOval, Milestone } from "./StyledTimeline";

const Content = styled.div`
  font-family: sans-serif;
  text-align: center;
  font-family: "Nunito", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  
  #timeline-main-wrapper > div {
    margin-bottom: 3rem;
  }

  #timeline-main-wrapper {
    height: 20rem;
  }

  div[color="#0f52ba"] {
    height: 4px;
    opacity: 0.12;
    background-color: grey;
  }

  div[data-testid="timeline-title"] {
    top: -120px;
  }

  .timeline-item-title {
    font-size: 1rem;
    font-weight: normal;
    text-align: left;
    background: none;
    color: white;
    opacity: 0.6;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.71;
    letter-spacing: normal;
  }

  .timeline-item-title.active {
    background: none;
    color: white;
    opacity: 0.6;
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.71;
    letter-spacing: normal;
  }

  #react-chrono-timeline {
    display: none;
  }

  div[mode="HORIZONTAL"]{
    display: none;
  }

  .timeline-circle {
    margin-left: -105px;
  }

  .timeline-horz-item-container {
    width: 255px;
  }

  ul.timeline-horz-container {
      padding-inline-start: 0;
  }
`;

const ovals = (activeIndex) => {
    let content = [];
    let milestone = [
        'AUGUST 2021',
        'SEPTEMBER 2021',
        'OCTOBER 2021',
        'NOVEMBER 2021',
        'DECEMBER 2021',
        'JANUARY 2022',
        'FEBURARY 2022',
        'MARCH 2022',
        'APRIL 2022',
        'MAY 2022',
        'JUNE 2022',
        'JULY 2022'
    ];
    for (let i = 0; i < 7; i ++) {
        if (i === activeIndex)
            content.push(
                <ActiveOval className="active-oval">
                    <ActiveInnerOval className="active-inner-oval"/>
                    <Milestone className="milestone">
                        {milestone[i]}
                    </Milestone>
                </ActiveOval>
            );
        else
            content.push(
                <Oval className="oval">
                    <InnerOval className="inner-oval"/>
                    <Milestone className="milestone">
                        {milestone[i]}
                    </Milestone>
                </Oval>
            );
    }
    return content;
};

const SectionRoadmap = (props) => {
    return (
        <section className="roadmap_section">
            <Container>
                <Row>
                    <div className="title" style={{ textAlign: "left", marginTop: "72px" }}>
                        <h1>Roadmap Company</h1>
                    </div>
                </Row>
                <Content>
                    <div style={{ width: "100%", height: "328px", marginTop: "20px" }}>
                        <Chrono
                            items={data}
                            mode="HORIZONTAL"
                        >
                            <div className="chrono-icons">
                                {ovals(1)}
                            </div>
                            <div>
                                <div style={{ width: "250px", height: "250px" }}>
                                <img
                                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                                    alt="test"
                                    src="https://cdn.tutsplus.com/net/uploads/2013/08/github-collab-retina-preview.gif"
                                />
                                </div>
                            </div>
                        </Chrono>
                    </div>
                </Content>
            </Container>
        </section>
    );
}

export default SectionRoadmap;