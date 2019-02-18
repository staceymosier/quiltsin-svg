import React, { Component } from 'react';
import './Options.scss';

class SelectQuilt extends Component {
  render() {
    return (
      <div className="quilt-options">
        <select>
          <option>Sparkle Plenty</option>
          <option>Amish Star</option>
        </select>
        <input defaultValue="5"size="1" />
        <input defaultValue="5" size="1" />
        <select>
          <option>None</option>
          <option>Checkers</option>
          <option>Stripes</option>
          <option>Chevron</option>
        </select>
      </div>
    );
  }
}

export default SelectQuilt;
