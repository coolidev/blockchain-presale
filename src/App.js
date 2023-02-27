import React, { Component, Suspense } from 'react';
import { connect } from "react-redux";
import { setAddress, setNetworkId, setError } from "./redux/actions";

import './App.css';
import './style.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../src/views/Home';

const App = (props) => {
  return (
    <div className="h-100">
      <React.Fragment>
        <Router history={props.history}>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </React.Fragment>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setAddressRequest: (address) => dispatch(setAddress(address)),
    setNetworkIdRequest: (networkId) => dispatch(setNetworkId(networkId)),
    setErrorRequest: (error) => dispatch(setError(error)),
  };
};

export default connect(null, mapDispatchToProps)(App);

//export default App;
