import React, { Component } from 'react';
import './Block.scss';
import SparklePlenty from './SVG/SparklePlenty';
import RobbingPeter from './SVG/RobbingPeter';

class Block extends Component {
  render() {
    const { activeColors } = this.props;
    return (
        <RobbingPeter activeColors={activeColors}/>
    );
  }
}

export default Block;