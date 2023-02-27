import React from "react";
import { Container, Row } from 'reactstrap';
import '../css/style.css'
import { OpenPositions, JobTemplate } from './Jobs'

const SectionJobBoard = (props) => {
  const openPosition = (index) => {
    props.setParentIndex(2 + index);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  
  return (
    <div id="job-board">
      {props.parentIndex === 1 && (
        <section className="header_section section-job-board h-100 fade-in">
          <Container className="job-board-container">
            <div className="title text-center">
              <h1>Crosswise Job Board</h1>
            </div>
            <Row className="mission d-flex flex-column">
              <div className="title text-left mt-5">
                <h5>What is Crosswise? What is your mission?</h5>
              </div>
              <p className="description mt-3">
              We are bringing together the best of two worlds: the support and variety of functions you are used to from a centralized exchange and the widespread technical possibilities of a decentralized exchange. We are offering accountability and support on our DAPP which retail investors are missing on other exchanges.          
              Strengthening our Team to ensure growth and quality of our DAPP is essential.
              Our workflow is 100% remote and we are using common Scrum methods to create workflows.
              </p>
            </Row>
            <Row className="open-positions d-flex flex-column mt-5">
              <div className="title text-left mb-3">
                <h5>Open Positions</h5>
              </div>
              {OpenPositions.map((position, index) => {
                return (
                  <div
                    key={`${index}th-position`}
                    className="position d-flex justify-content-between align-items-center flex-nowrap"
                    onClick={() => openPosition(index)}
                  >
                    <div className="title">
                      <h6>{position.title}</h6>
                      <div className="d-flex flex-wrap">
                        <p>{position.department}</p>
                        <p>&nbsp;/&nbsp;</p>
                        <p>{position.contract}</p>
                        <p>&nbsp;/&nbsp;</p>
                        <p>{position.location}</p>
                      </div>
                    </div>
                    <div className="activity">
                      <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.46967 11.4697L4.93934 12L6 13.0607L6.53033 12.5303L5.46967 11.4697ZM10 8L10.5303 8.53033C10.8232 8.23744 10.8232 7.76256 10.5303 7.46967L10 8ZM6.53033 3.46967L6 2.93934L4.93934 4L5.46967 4.53033L6.53033 3.46967ZM6.53033 12.5303L10.5303 8.53033L9.46967 7.46967L5.46967 11.4697L6.53033 12.5303ZM10.5303 7.46967L6.53033 3.46967L5.46967 4.53033L9.46967 8.53033L10.5303 7.46967Z" fill="currentColor"></path>
                      </svg>
                    </div>
                  </div>
                )
              })}
            </Row>
            <Row className="contact-us d-flex flex-column mt-5">
              <div className="title text-left">
                <h5>Contact us</h5>
              </div>
              <p className="email mt-3">
                Email: <a href="mailto:fb@crosswise.finance">fb@crosswise.finance</a>
              </p>
              <p className="telegram">
                Telegram: @fbeeg
              </p>
            </Row>
          </Container>
        </section >
      )}
      {OpenPositions.map((position, index) => {
        return (index === props.parentIndex - 2 && (
          <JobTemplate key={`${index}-job-template`} {...position}></JobTemplate>
        ))
      })}
    </div>
  );
}

export default SectionJobBoard;