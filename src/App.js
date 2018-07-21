import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar'
import LeftPanel from './LeftPanel'
import MyMap from './Map'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="main-container">
          <Navbar/>
          <LeftPanel/>
        </div>
        <MyMap/>
      </div>
    );
  }
}

export default App;
