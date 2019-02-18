import React, { Component } from 'react';
import './Quilt.scss';
import Block from '../Block/Block.js';

// TODO: Quilt columns not rendering correctly in grid

class Quilt extends Component {
  render() {
    const { rows, columns, blockData, layout } = this.props;

    const quiltColumns = [...Array(columns)].map((n, index) => {
      return (
        <Block
          key={`${index}-block`}
          blockData={blockData}
        />
      )
    });

    const quiltRows = [...Array(rows)].map((n, index) => {
      return (
        <div className="row" key={`${index}-column`}>{quiltColumns}</div>
      )
    });

    return (
      <div className={`quilt ${layout}`} key='quilt'>
        {quiltRows}
      </div>
    );
  }


}

export default Quilt;