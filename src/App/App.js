import React, { Component } from 'react';
import './App.scss';
import Quilt from '../Quilt/Quilt.js';
import Palette from '../Palette/Palette.js';
import Data from '../data.js';
import styles from '../styles.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: Data,
      activeBlock: {
        'title': 'Sparkle Plenty',
        'rows': 6,
        'columns': 8,
        'block': 'SparklePlenty.js',
        'layout': 'checkered'
      },
      activeColors: { a: '#3a4c95', b: '#c6d347', c: 'aqua', d: 'white' }
    };

    this.updateActiveBlock = this.updateActiveBlock.bind(this);
    this.updateQuiltGrid = this.updateQuiltGrid.bind(this);
    this.updateColor = this.updateColor.bind(this);
  }

  updateActiveBlock(e) {
    //const { data } = this.state;
    //const newID = e.target.value;
    //this.setState({activeBlock: data[newID]});
    return;
  }

  updateQuiltGrid(e) {
    console.log('the new value is ' + e.target.value);
    return;
  }

  updateColor(e) {
    console.log(e);
    return;
  }

  render() {
    const { data, activeBlock, activeColors} = this.state;

    return (
      <div className='app'>
        <div className='wrapper'>
          <header className='header'>
            <div className='logo'>
              <a href='./index.html'>Amish Quilts</a>
            </div>
            <div className='quilt-options'>
              <select value={activeBlock.id} onChange={this.updateActiveBlock}>
                {Object.entries(data).map( ([key, val]) => {
                  return <option value={key} key={key} >{val.title}</option>
                })}
              </select>

              {Object.entries({
                'rows': { default: 8, min: 40, max: 120},
                'columns': { default: 6, min: 40, max: 40}
              }).map( ([key, val]) => {
                return <input key={key}
                  defaultValue={val.default}
                  size={1}
                  onBlur={this.updateQuiltGrid}
                  min={val.min}
                  max={val.max}
                  style={styles.inputNumber}
                />
              })}

              <Palette activeColors={activeColors} />
            </div>
          </header>
          <section style={styles.quiltPreview}>
            <Quilt activeBlock = {activeBlock} activeColors = {activeColors}
            />
          </section>
        </div>
      </div>
    );
  }
}

export default App;
