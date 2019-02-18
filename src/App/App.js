import React, { Component } from 'react';
import './App.scss';
import Quilt from '../Quilt/Quilt.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <header className="header">
            <a href="./index.html">Amish Quilts</a>
          </header>
          <section className="quilt-preview">
            <Quilt />
          </section>
          </div>
      </div>
    );
  }
}

export default App;
