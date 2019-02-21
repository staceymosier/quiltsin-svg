import React, { Component } from 'react';
import './Block.scss';
import SparklePlenty from './SVG/SparklePlenty';

class Block extends Component {
  render() {
    const { activeColors } = this.props;
    return (
        <SparklePlenty activeColors={activeColors}/>
    );
  }
}

export default Block;