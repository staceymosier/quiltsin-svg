import React, { Component } from 'react';
import SquareUnit from '../Unit/Unit.js';
import { CirclePicker } from 'react-color';
import bella from './moda-bella.js';
import styles from '../styles.js';

class PaletteSelection extends Component {

  handleCC(letter, updateColor) {
    return (e) => {
      const color = e['hex'];
      return updateColor({letter, color});
    }
  }

  render() {
    const { updateColor, letter } = this.props;

    return (
      <div style={styles.popover}>
        <div style={styles.cover}>
          <CirclePicker 
            colors={Object.entries(bella).map( ([key, val]) => { return val.color }) }
            onChangeComplete={this.handleCC(letter, updateColor)}
            width="100%"
            circleSpacing={6}
          />
        </div>
      </div>
    );
  }
}

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayColorPicker: false,
      selectedLetter: null
    };
  }

  closePalette(e) {
    return this.setState({displayColorPicker: false});
  }

  openPalette(letter, e) {
    return this.setState({
      displayColorPicker: !this.state.displayColorPicker,
      selectedLetter: letter
      },
    );
  }

  render() {
    const squareProps = { width: 80, height: 80, viewBox: "0 0 80 80"};
    const {activeColors, updateColor} = this.props;

    return (
      <div className='palette-tray'>
        <div style={styles.swatchList} className='palette'>
          {Object.entries(activeColors).map( ([key, value]) => {
            return (
              <div key={key}
                property={key}
                onClick={(e) => this.openPalette(key, e)}>
                <SquareUnit {...squareProps} color={activeColors[key]}/>
              </div>
            )
          })}
        </div>

        { this.state.displayColorPicker ?
        <div className='palette-box' onClick={(e) => this.closePalette(e)} style={styles.paletteBox}>
          <PaletteSelection updateColor={updateColor} letter={this.state.selectedLetter}/>
        </div>
        : null }
      </div>

    );
  }
}

export default Palette;