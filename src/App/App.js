import React, { Component } from 'react';
import './App.scss';
import Options from '../Options/Options.js';
import Quilt from '../Quilt/Quilt.js';
import Data from '../data.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: Data,
      activeBlock: {
        "title": "Sparkle Plenty",
        "rows": 6,
        "columns": 8,
        "block": "SparklePlenty.js",
        "layout": "checkered"
      },
      activeColors: { border: 'teal', a: 'cadetblue', b: "lightgoldenrodyellow", c: "teal", d: "aqua" }
    };

    this.updateActiveBlock = this.updateActiveBlock.bind(this);
    this.updateQuiltGrid = this.updateQuiltGrid.bind(this);
    this.updateBorderColor = this.updateBorderColor.bind(this);
    this.updateColor = this.updateColor.bind(this);
  }

  updateActiveBlock(e) {
    const { data } = this.state;
    const newID = e.target.value;
    //this.setState({activeBlock: data[newID]});
    return;
  }

  updateQuiltGrid(e) {
    console.log('the new value is ' + e.target.value);
    return;
  }

  updateBorderColor(e) {
    const { activeColors } = this.state;
    console.log(activeColors.border);
    return;
  }

  updateColor(e) {
    console.log(e);
    return;
  }

  render() {
    const { data, activeBlock, activeColors} = this.state;
    const styles = {
      preview: {
        backgroundColor: '#1f1f38'
      }
    }

    return (
      <div className="App">
        <div className="wrapper">
          <header className="header">
            <div className="logo"><a href="./index.html">Amish Quilts</a></div>
            <Options
              data = {data}
              activeBlock = {activeBlock}
              activeColors = {activeColors}
              updateActiveBlock={this.updateActiveBlock}
              updateQuiltGrid={this.updateQuiltGrid}
              updateBorderColor={this.updateBorderColor}
              updateColor={this.updateColor}
            />
          </header>
          <section className="quilt-preview" style={styles.preview}>
            <Quilt
              activeBlock = {activeBlock}
              activeColors = {activeColors}
            />
          </section>
          </div>
      </div>
    );
  }
}

export default App;
