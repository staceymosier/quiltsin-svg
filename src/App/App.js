import React, { Component } from 'react';
import './App.scss';
import Quilt from '../Quilt/Quilt.js';
import Options from '../Options/Options.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: 6,
      columns: 8,
      layout: 'checkered',
      blockData: {
        name: 'Sparkle-Plenty',
        id: 1,
        initialRows: 6,
        initialColumns: 8
      }
    };
  }

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <header className="header">
            <div className="logo"><a href="./index.html">Amish Quilts</a></div>
            <Options
              blockData = {this.state.blockData}
              layout = {this.state.layout}
            />
          </header>
          <section className="quilt-preview">
            <Quilt
              rows={this.state.rows}
              columns = {this.state.columns}
              blockData = {this.state.blockData}
              layout = {this.state.layout}
            />
          </section>
          </div>
      </div>
    );
  }
}

export default App;
