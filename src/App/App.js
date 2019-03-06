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
      activeBlock: Data['1'],
      activeColors: Data['1'].colors
    };

    this.updateColor = this.updateColor.bind(this);
  }

  updateActiveBlock(e) {
    const { data } = this.state;
    const id = e.target.value;
    this.setState({
      activeBlock: data[id],
      activeColors: data[id].colors
     });
    return;
  }

  updateColor({letter, color}, e) {
    var activeColors = {...this.state.activeColors}
    activeColors[letter] = color;
    return this.setState({activeColors})
  }

  render() {
    const { data, activeBlock, activeColors } = this.state;

    return (
      <div className='app' style={styles.app}>
        <div className='wrapper' style={styles.wrapper}>
          <header className='options'>
            <div className='logo'>
              <a href='./index.html'>Amish Quilts</a>
            </div>
            <Palette activeColors={activeColors} updateColor={({letter, color}, e) => this.updateColor({letter, color}, e)} />
            <select className="selected" value={activeBlock.id} onChange={(e) => this.updateActiveBlock(e)}>
              {Object.entries(data).map( ([key, val]) => {
                return <option value={key} key={key}>{val.title}</option>
              })}
            </select>
          </header>
            <Quilt activeBlock={activeBlock} activeColors={activeColors} />
        </div>
      </div>
    );
  }
}

export default App;
