import React, { Component, Fragment } from "react";
import { Container } from 'reactstrap';
import "./css/layout.scss";


// Components
import Sidebar from "../SideBar/SideBar";
import MyAccount from "../MyAccount/MyAccount";
//import  from '../src/views/PricePools';
import Header from "../../common/Header/Header";



class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sideMenu: false,
            sideMenuIndex: 0
        };
        this.expandCollapseMenu = this.expandCollapseMenu.bind(this);
    }
    expandCollapseMenu = () => {
        this.setState({ sideMenu: !this.state.sideMenu });
    }
    

    

    render() {
        const { sideMenuIndex, sideMenu } = this.state;
        return (
            <Fragment>
                <div className={sideMenu ? "basic-layout-container flip" : "basic-layout-container"}>
                    <Sidebar currentTab={sideMenuIndex} toggleClick={this.expandCollapseMenu}/>
                   <div className="main-content">
                        <Container>
                            <div className="com-div">
                                <Header toggleClick={this.expandCollapseMenu}/>
                                <div className="p-3">
                                    <MyAccount />
                                  
                                </div>
                            </div>
                        </Container>
                    </div>                   
                </div>
            </Fragment>
        );
    }
}

export default Layout;