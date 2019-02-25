import React, { Component } from 'react';
import SquareUnit from '../Unit/Unit.js';

const styles = {
  swatchList: {
    display: 'flex',
    flex: '1 1 0',
  }
}

class Palette extends Component {

  render() {
    const squareProps = { width: 40, height: 40, viewBox: "0 0 40 40"};
    const {activeColors} = this.props;
    return (
      <div className="quilt-colors" style={styles.swatchList}>
        <div key="borderColor">
          test
        </div>
      </div>
    );
  }
}

export default Palette;