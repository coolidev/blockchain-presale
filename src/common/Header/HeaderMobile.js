import React from 'react'
import amcImg from "../../assets/images/Logo-AMC.png";
import menuImg from "../../assets/images/menu.png";

const HeaderMobile = ({toggleClick}) => (
  <div className="navbar-mobile-action">
    <img src={amcImg} className="mx-auto mob-logo" alt=""/>
    <div className="float-left ml-4">
      <a href="#" className="button-left" onClick={toggleClick}>
        <img src={menuImg} className="toggle-img" alt=""/>
      </a>
    </div>
  </div>
)

export default HeaderMobile