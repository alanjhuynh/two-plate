import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';


import LandingPage from './components/LandingPage';
import ListLifts from './components/ListLifts';
//import CreateLift from './components/CreateLift';
//import UpdateLift from './components/UpdateLift';
//import LiftCard from './components/LiftCard';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <Route exact path='/' component={LandingPage} /> */}
          <Route path='/' component={ListLifts} />

        </div>
      </Router>
    );
  }
}

export default App;