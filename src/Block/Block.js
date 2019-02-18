import React, { Component } from 'react';
import './Block.scss';

import SparklePlenty from './SVG/SparklePlenty'

class Block extends Component {
  render() {
    return (
      <div className="block">
        <SparklePlenty/>
      </div>
    );
  }
}

export default Block;