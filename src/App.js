import React, { Component } from 'react';
import './App.less';
import Header from './components/header/Header';
import Karthome from './components/karthome/Karthome';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Karthome />
      </div>
    );
  }
}

export default App; 