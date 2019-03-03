import React, { Component } from 'react';
import './Block.scss';
import SparklePlenty from './SVG/SparklePlenty';
import RobbingPeter from './SVG/RobbingPeter';

const designs = {
  'SparklePlenty': SparklePlenty,
  'RobbingPeter': RobbingPeter
}

class Block extends Component {
  render() {
    const { activeColors, block } = this.props;
    // const blockComponent = activeBlock.block;
    return React.createElement(designs[block], { activeColors }, null)
  }
}

export default Block;