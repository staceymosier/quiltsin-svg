import React, { Component } from 'react';
import SquareUnit from '../Unit/Unit.js';
import { CirclePicker } from 'react-color';
import bella from './moda-bella.js';

const styles = {
  popover: {
    background: '#2a2a48',
    padding: '1rem',
    position: 'fixed',
    textAlign: 'center',
    top: '3.5rem',
    right: '3.5rem'
  },
  cover: {
  },
  swatchList: {
    display: 'flex',
    flex: '1 1 0',
  }
};

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
            onChangeComplete={this.handleCC(letter, updateColor)}/>
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
    const squareProps = { width: 40, height: 40, viewBox: "0 0 40 40"};
    const {activeColors, updateColor} = this.props;

    return (
      <div className="quilt-colors" style={styles.swatchList}>
        {['a', 'b', 'c', 'd', 'e'].map( letter => {
          return (
            <div key={letter}
              property={letter}
              onClick={(e) => this.openPalette(letter, e)}>
              <SquareUnit {...squareProps} fill={activeColors[letter]}/>
            </div>
          )
        })}

        { this.state.displayColorPicker ?
        <div onClick={(e) => this.closePalette(e)}>
          <PaletteSelection updateColor={updateColor} letter={this.state.selectedLetter}/>
        </div>
        : null }
      </div>

    );
  }
}

export default Palette;