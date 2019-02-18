import React, { Component } from 'react';
import './Quilt.scss';
import Block from '../Block/Block.js';

class Quilt extends Component {
  render() {
    const { rows, columns, blockData, options } = this.props;

    const quiltColumns = [...Array(columns)].map((n, index) => {
      return (
        <Block
          key={`${index}-block`}
          blockData={blockData}
          options={options}
        />
      )
    });

    const quiltRows = [...Array(rows)].map((n, index) => {
      return (
        <div className="row" key={`${index}-column`}>{quiltColumns}</div>
      )
    });

    return (
      <div className='quilt checkered' key='quilt'>
        {quiltRows}
      </div>
    );
  }


}

export default Quilt;