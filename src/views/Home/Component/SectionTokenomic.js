import React, { useState, useContext } from "react";
import { Container } from 'reactstrap';

import 'react-accessible-accordion/dist/fancy-example.css';
import { Row } from 'reactstrap';
import '../css/style.css'
import { ThemeContext } from "../../../contexts/ThemeContext";

import Pie from './Chart';

const initialData = [{
	content: 'Uniswap',
	value: 16,
	active: false
},{
	content: 'USD Coin',
	value: 17,
	active: false
},{
	content: 'CRSS',
	value: 17,
	active: true
},{
	content: 'Ethereum',
	value: 15,
	active: false
},{
	content: 'Bitcoin',
	value: 26,
	active: false
},{
	content: 'Tether',
	value: 19,
	active: false
},{
	content: 'Chainlink',
	value: 8,
	active: false
},{
	content: 'Dai',
	value: 3,
	active: false
}];

const SectionTokenomic = (props) => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const [data, setData] = useState(initialData);

  return (
    <section className="mission_section">
      <Container>
        <Row>
          <div className="mission_item">
            <div className="item_img">
              <Pie
                data={ data }
                radius={ 212 }
                hole={ 0 }
                labels={ true }
                percent={ true }
                strokeWidth={ 1 }
                stroke={ 'rgba(0, 0, 0, 0.1)' }
                isDark={ isDark }
              />
            </div>
            <div className="item_content">
              <h1>Tokenomics</h1>
              <div className="col">
                <div className="row spaceBetween mb-4">
                  <div className="textCrss">
                    <h4>CRSS</h4>
                  </div>
                  <div className="textGreen">
                    ▲ 13.19%
                  </div>
                </div>
              </div>
              <p>
                Following a long period of research and analyzation we started developing Crosswise. Combining developers with the needed amount of experience and entrepreneurs with the right long-term vision we have developed a next level DEX.
              </p>
              <p>
                In the traditional economy, economists monitor the issuance of a currency using official money supply data. The numbers they report are generally called M1, M2 and — depending upon the country — M3 or M4 as well.
              </p>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default SectionTokenomic;
