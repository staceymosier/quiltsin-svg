import React, { Component } from 'react';
import './Palette.scss';

// TODO: put class names in state and control from this component
// TODO: Update palette when the quilt selection changes
// TODO: Use toggle to reassign colors to A-Z

class Palette extends Component {
  render() {
    return (
      <div className="quilt-options-palette">
        <div className="a"> A </div>
        <div className="b"> B </div>
        <div className="c"> C </div>
        <div className="d"> D </div>
      </div>
    );
  }
}

export default Palette;