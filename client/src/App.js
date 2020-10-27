import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

import Navigation from './components/Navigation';
import Home from './components/Home';
import PS12 from './components/PS12';
import PS3 from './components/PS3';
import Footer from './components/Footer';
import Login from './components/login'

function Main(){
  return (
    <div>
      <Home />
      <PS12 />
      <PS3 />
    </div>
  )
}
class App extends Component {


  render() {
    return (
      <div >
        <Router>
        <Navigation />
        <Switch>
          <Route exact path = {"/login"} component = {Login} />  
          <Route exact path = {"/"} component = {Main} />   
        </Switch>
        <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
