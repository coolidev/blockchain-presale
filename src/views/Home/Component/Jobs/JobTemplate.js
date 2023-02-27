import React from "react";
import { Container, Row, Col } from 'reactstrap';
import '../../css/style.css'

const JobTemplate = (props) => {
  const {
    title,
    posted,
    department,
    contract,
    location,
    wage,
    role,
    responsibilities,
    qualifications,
    benefits
  } = props;

  return (
    <section className="header_section section-position-board h-100 fade-in">
      <Container className="position-container">
        <div className="title text-center">
          <h1>{title}</h1>
        </div>
        <Row className="brief d-flex flex-column mt-5">
          <Row className="item d-flex flex-row">
            <Col xs={5} sm={3}>
              <p>
                <i className="fa fa-clock mr-3"></i>
                Posted
              </p>
              </Col>
            <Col xs={7} sm={9}>
              <p>{posted}</p>
            </Col>
          </Row>
          <Row className="item d-flex flex-row">
            <Col xs={5} sm={3}>
              <p>
                <i className="fa fa-map-marker-alt mr-3"></i>
                Location
              </p>
            </Col>
            <Col xs={7} sm={9}><p>{location}</p></Col>
          </Row>
          <Row className="item d-flex flex-row">
            <Col xs={5} sm={3}>
              <p>
                <i className="fa fa-coins mr-3"></i>
                Wage
              </p></Col>
            <Col xs={7} sm={9}><p>{wage}</p></Col>
          </Row>
        </Row>
        <Row className="mission d-flex flex-column mt-5">
          <div className="title text-left">
            <h5>What we're looking for</h5>
          </div>
          <p className="description mt-3">{role}</p>
        </Row>
        <Row className="responsibilities d-flex flex-column mt-5">
          <div className="title text-left">
            <h5>Responsibilities</h5>
          </div>
          <div className="description mt-3">
            <ul>
              {responsibilities.map((responsibility, index) => {
                return <li key={`${index}th`}><p>{responsibility}</p></li>
              })}
            </ul>
          </div>
        </Row>
        <Row className="qualifications d-flex flex-column mt-5">
          <div className="title text-left">
            <h5>Qualifications</h5>
          </div>
          <div className="description mt-3">
            <ul>
              {qualifications.map((qualification, index) => {
                return <li key={`${index}th`}><p>{qualification}</p></li>
              })}
            </ul>
          </div>
        </Row>
        <Row className="benefits d-flex flex-column mt-5">
          <div className="title text-left">
            <h5>Benefits</h5>
          </div>
          <div className="description mt-3">
            <ul>
              {benefits.map((benefit, index) => {
                return <li key={`${index}th`}><p>{benefit}</p></li>
              })}
            </ul>
          </div>
        </Row>
        <Row className="about-us d-flex flex-column mt-5">
          <div className="title text-left">
            <h5>About Us</h5>
          </div>
          <p className="description mt-3">
          We are bringing together the best of two worlds: the support and variety of functions you are used to from a centralized exchange and the widespread technical possibilities of a decentralized exchange. We are offering accountability and support on our DAPP which retail investors are missing on other exchanges.
          </p>
        </Row>
        <Row className="apply d-flex flex-column mt-5">
          <div className="title text-left">
            <h5>How to Apply</h5>
          </div>
          <p className="description mt-3">
          Does this role sound like a good fit? Email us at <a href="mailto:fb@crosswise.finance">fb@crosswise.finance</a>
          </p>
          <div className="description apply">
            <ul>
              <li><p>Include the role's title in your subject line.</p></li>
              <li><p>Include your CV & Portfolio.</p></li>
              <li><p>Send along links that best showase the relevant things you've built and done.</p></li>
            </ul>
          </div>
        </Row>
      </Container>
    </section >
  );
}

export default JobTemplate;