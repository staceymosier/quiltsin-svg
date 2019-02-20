import React, { Component } from 'react';
import { CirclePicker } from 'react-color';

// TODO: put class names in state and control from this component
// TODO: Update palette when the quilt selection changes
// TODO: Use toggle to reassign colors to A-Z

class Palette extends Component {
  render() {
    return (
      <div className="quilt-options-palette">
        <CirclePicker />
      </div>
    );
  }
}

export default Palette;