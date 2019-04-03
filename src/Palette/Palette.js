import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SquareUnit from '../Unit/Unit';
import PaletteBox from './PaletteBox';

const styles = {
  swatchList: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '1rem 0',
  },
};

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayColorPicker: false,
      selectedLetter: null,
    };
  }

  closePalette() {
    return this.setState({ displayColorPicker: false });
  }

  openPalette(letter) {
    const { displayColorPicker } = this.state;
    return this.setState({
      displayColorPicker: !displayColorPicker,
      selectedLetter: letter,
    });
  }

  render() {
    const squareProps = { width: 80, height: 80, viewBox: '0 0 80 80' };
    const { activeColors, updateColor, isShowingLetters } = this.props;
    const { displayColorPicker, selectedLetter } = this.state;

    return (
      <div className="palette-tray">
        <div style={styles.swatchList} className="palette">
          {Object.entries(activeColors).map(([key, value]) => {
            return (
              <button
                key={key}
                property={key}
                onClick={(e) => this.openPalette(key, e)}
                type="button"
              >
                <SquareUnit
                  {...squareProps}
                  color={activeColors[key]}
                  name={key}
                  isShowingLetters={isShowingLetters}
                />
              </button>
            );
          })}
        </div>

        { displayColorPicker
          ? (
            <div
              className="palette-box"
              onClick={(e) => this.closePalette(e)}
              style={styles.paletteBox}
            >
              <PaletteBox
                updateColor={updateColor}
                letter={selectedLetter}
                closePalette={this.closePalette}
              />
            </div>
          ) : null }
      </div>

    );
  }
}

export default Palette;
