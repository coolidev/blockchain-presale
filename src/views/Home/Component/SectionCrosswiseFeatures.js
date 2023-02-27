import React, { Component, Fragment, useState, useContext } from "react";
import { Container, Input } from 'reactstrap';

import Slider from "react-slick";
import 'react-accessible-accordion/dist/fancy-example.css';
import { Row, Col } from 'reactstrap';
import classnames from 'classnames';
import '../css/style.css'
import { ThemeContext } from "../../../contexts/ThemeContext";

import Img4 from '../../../assets/images/crosswise/content-img-12.png';
import Img5 from '../../../assets/images/crosswise/content-img-13.png';
import Img6 from '../../../assets/images/crosswise/image-6.png';

import FeatImg1 from '../../../assets/images/crosswise/feature/img_crosswise_f_1.png';
import FeatImg2 from '../../../assets/images/crosswise/feature/img_crosswise_f_2.png';
import FeatImg3 from '../../../assets/images/crosswise/feature/img_crosswise_f_3.png';

const SectionCrosswiseFeatures = (props) => {

  const { isDark, toggleTheme } = useContext(ThemeContext)

  return (
    <section className="crosswise_feature_section section_padding odd_background">
      <Container>
        <Row>
          <div className="title">
            <h1>Crosswise Features</h1>
          </div>
        </Row>

        <div className="features_group">
          <div className="features_item">
            <div className="features_item_icon">
              <img src={FeatImg1} />
            </div>
            <div className="features_title">
              <h5 className="topic">Launchpad & Incubator</h5>
            </div>
            <div className="features_desc">
              Crosswise features a launchpad coupled with an incubation program to help budding entrepreneurs launch on crosswise DEX. Support will include funding, marketing, networking, as well as technical assistance to help projects deploy to our multi-chain ecosystem.
            </div>
          </div>

          <div className="features_item">
            <div className="features_item_icon">
              <img src={FeatImg2} />
            </div>
            <div className="features_title">
              <h5 className="topic">Solid Infrastructure</h5>
            </div>
            <div className="features_desc">
              Crosswise platform is capable of handling high user loads, during both peak trading and IDO hours. Our state-of-the-art IT infrastructure provides users with the best security, uptime, and premium tools built for a multi-chain environment.
            </div>
          </div>

          <div className="features_item">
            <div className="features_item_icon">
              <img src={FeatImg3} />
            </div>
            <div className="features_title">
              <h5 className="topic">User-Friendly DEX</h5>
            </div>
            <div className="features_desc">
              Crosswise is tightly integrating tools such as an Order Book, Analytics, Explorer, Price Charts, Account Statistics, Affiliate Rewards with a friendly user interface for a next-gen DEX experience. We're also bringing back real support to the DEX space, to ensure accessibility and customer satisfaction.
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}

export default SectionCrosswiseFeatures;