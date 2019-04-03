import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CirclePicker } from 'react-color';
import colors from './colors';

const styles = {
  paletteBox: {
    position: 'relative',
  },
  popover: {
    background: '#fff',
    border: 'solid 1px #8e989d',
    boxShadow: '1px 1px 0px #8e989d',
    height: '200px',
    overflowY: 'scroll',
    padding: '1rem',
    position: 'absolute',
    textAlign: 'center',
  },
};

class PaletteBox extends Component {

  handleCC(letter, updateColor) {
    return (e) => {
      const color = e.hex;
      return updateColor({ letter, color });
    };
  }

  render() {
    const { updateColor, letter } = this.props;

    return (
      <div style={styles.popover}>
        <div style={styles.cover}>
          <CirclePicker
            colors={Object.entries(colors).map(([key, val]) => { return val.color; })}
            onChangeComplete={this.handleCC(letter, updateColor)}
            width="100%"
            circleSpacing={6}
          />
        </div>
      </div>
    );
  }
}

PaletteBox.propTypes = {
  updateColor: PropTypes.func,
  letter: PropTypes.string,
};

export default PaletteBox;
