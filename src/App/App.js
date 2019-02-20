import React, { Component } from 'react';
import './App.scss';
import Quilt from '../Quilt/Quilt.js';
import Options from '../Options/Options.js';
import Data from '../data.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: Data,
      activeBlock: Data[0]
    };
    this.updateActiveBlock = this.updateActiveBlock.bind(this);
    this.updateQuiltGrid = this.updateQuiltGrid.bind(this);
  }

  updateActiveBlock(event) {
    const { data } = this.state;
    const newID = event.target.value;
    const newActiveBlock = data.filter((item) => {
      return (item.id.toString() === newID);
    });
    this.setState({activeBlock: newActiveBlock[0]});
  }

  updateQuiltGrid(event) {
    console.log('Just acknowledging this is a thing to come');
  }

  render() {
    const { data, activeBlock} = this.state;
    return (
      <div className="App">
        <div className="wrapper">
          <header className="header">
            <div className="logo"><a href="./index.html">Amish Quilts</a></div>
            <Options
              data = {data}
              activeBlock = {activeBlock}
              updateActiveBlock={this.updateActiveBlock}
              updateQuiltGrid={this.updateQuiltGrid}
            />
          </header>
          <section className="quilt-preview">
            <Quilt
              activeBlock = {activeBlock}
            />
          </section>
          </div>
      </div>
    );
  }
}

export default App;
