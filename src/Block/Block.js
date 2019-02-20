import React, { Component } from 'react';
import './Block.scss';
import SparklePlenty from './SVG/SparklePlenty';

class Block extends Component {
  render() {

    // TODO: Load svg file from data source
    return (
        <SparklePlenty/>
    );
  }
}

export default Block;