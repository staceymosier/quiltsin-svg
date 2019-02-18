import React, { Component } from 'react';
import './Quilt.scss';
import Block from '../Block/Block.js';

const columns = 8;
const rows = 6;
const layout = 'is-checkered';

class Quilt extends Component {
  constructor(props) {
    super(props);
    this.state = {rows, columns, layout};
  }

  render() {
    return (
      <div className="quilt" key="quilt">
        <Block/>
      </div>
    );
  }
}

export default Quilt;