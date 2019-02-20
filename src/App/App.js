import React, { Component } from 'react';
import './App.scss';
import Quilt from '../Quilt/Quilt.js';
import Options from '../Options/Options.js';
import Data from '../data.json';

const defaultActiveBlock = 2;
const activeBlock = Data.filter(item => item.id === defaultActiveBlock)[0];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Data,
      activeBlock: activeBlock
    };
  }

  render() {
    const { data, activeBlock} = this.state;
    const { rows, columns, layout } = activeBlock;
    return (
      <div className="App">
        <div className="wrapper">
          <header className="header">
            <div className="logo"><a href="./index.html">Amish Quilts</a></div>
            <Options
              layout = {activeBlock.layout}
              data = {data}
              rows = {rows}
              columns = {columns}
              activeBlock = {activeBlock}
            />
          </header>
          <section className="quilt-preview">
            <Quilt
              rows={rows}
              columns = {columns}
              layout = {layout}
              activeBlock = {activeBlock}
            />
          </section>
          </div>
      </div>
    );
  }
}

export default App;
