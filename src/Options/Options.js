import React, { Component } from 'react';
import './Options.scss';
import Palette from './Palette/Palette.js';

class SelectQuilt extends Component {
  render() {
    const { blockData, options } = this.props;
    return (
      <div className="quilt-options">
        <select className="quilt-name">
          <option>Sparkle Plenty</option>
          <option>Amish Star</option>
        </select>
        <input defaultValue="5"size="1" />
        <input defaultValue="5" size="1" />
        <select className="quilt-layout">
          <option>None</option>
          <option>Checkers</option>
          <option>Stripes</option>
          <option>Chevron</option>
        </select>
        <Palette />
      </div>
    );
  }
}

export default SelectQuilt;
