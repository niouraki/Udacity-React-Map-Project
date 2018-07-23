import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar'
import LeftPanel from './LeftPanel'
import MyMap from './Map'

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navbar/>
        <div className="main-container">
          <LeftPanel/>
          <MyMap/>
        </div>
      </div>
    );
  }
}

export default App;
