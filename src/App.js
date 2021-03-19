import './App.css';
import React, { Component } from 'react';
import Example1 from './test';
 
const API = 'https://vef2-2021-ruv-rss-json-proxy.herokuapp.com/';
 
class App extends Component {
  render() {
    return (
        <div className="App">
          <Example1></Example1>
        </div>
    );
}
}
 
export default App;
