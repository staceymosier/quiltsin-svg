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
  }
};

class PaletteSelection extends Component {

  render() {
    return (
      <div style={styles.popover}>
        <div style={styles.cover}>
          <CirclePicker colors={Object.entries(bella).map( ([key, val]) => { return val.color }) }/>
      </div>
    </div>
    );
  }
}

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayColorPicker: false
    };
    this.openPalette = this.openPalette.bind(this);
    this.handleColorPickerComplete = this.handleColorPickerComplete.bind(this);
  }

  closeColorPicker(e) {
    return this.setState({displayColorPicker: false});
  }

  openPalette(e) {
    return this.setState({displayColorPicker: !this.state.displayColorPicker});
  }

  handleColorPickerComplete(color, e) {
    //this.setState({ background: color.hex });
    return;
  }

  render() {
    const squareProps = { width: 40, height: 40, viewBox: "0 0 40 40"};
    const {activeColors} = this.props;
    const styles = {
      swatchList: {
        display: 'flex',
        flex: '1 1 0',
      }
    };

    return (
      <div className="quilt-colors" style={styles.swatchList}>
        {['a', 'b', 'c', 'd', 'e'].map( letter => {
          return (
            <div key={letter} onClick={this.openPalette}>
              <SquareUnit {...squareProps} fill={activeColors[letter]}/>
            </div>
          )
        })}

        { this.state.displayColorPicker ?
        <div onClick={ this.closeColorPicker }>
          <PaletteSelection />
        </div>
        : null }
      </div>

    );
  }
}

export default Palette;