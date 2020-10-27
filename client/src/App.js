import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './components/Navigation';
import Home from './components/Home';
import PS12 from './components/PS12';
import PS3 from './components/PS3';
import Footer from './components/Footer';

class App extends Component {


  render() {
    return (
      <div >
        <Navigation />
        <Home />
        <PS12 />
        <PS3 />
        <Footer />
      </div>
    );
  }
}

export default App;
