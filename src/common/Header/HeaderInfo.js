import React from 'react'
import {DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, UncontrolledDropdown} from "reactstrap";
import globeImg from "../../assets/images/globe.png";

const language = ['EN', 'US', 'UK']
const data = [
  {
    value: "AMC: $0.49",
    description: "+3.28%",
  },
  {
    value: "BNB: $308.93",
    description: "-1.80%",
    color: 'red',
  },
  {
    value: "TVL:",
    description: "$826,193.05"
  },
  {
    value: "Total Claimed Prizes:",
    description: "$12.998,113.66"
  },
]

const HeaderInfo = ({isOpen, address, onConnectClick, minimum}) => (
  <div className="desktop d-flex w-100 justify-content-end">
    <Nav className="mr-auto w-100" navbar>
      {data.map(el => (
        <NavItem>
          <span>{el.value}</span><span className={`ml-2 ${el.color || 'green'}`}>{el.description}</span>
        </NavItem>
      ))}
    </Nav>

    <ul className="right-side-nav">
      <li>
        {address === null ? (
          <button className="connect_btn mr-2" onClick={onConnectClick}>Wallet Connect</button>
        ) : (
          <span>{minimum(address)}</span>
        )}
      </li>
      <li>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            <img src={globeImg} className="mr-2" alt=""/>EN
          </DropdownToggle>
          <DropdownMenu right>
            {language.map(el => (
              <DropdownItem>
                {el}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </UncontrolledDropdown>
      </li>
    </ul>
  </div>
)

export default HeaderInfo