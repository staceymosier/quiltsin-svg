import React, { Component } from 'react';
import './Quilt.scss';
import Block from '../Block/Block.js';


class Quilt extends Component {

  render() {
    const { activeBlock } = this.props;
    const { rows, columns, layout } = activeBlock;
    const quiltBlocks = [...Array(columns)].map((n, index) => {
      return [...Array(rows)].map((n, index) => {
        return (
          <div className="block" key={`${index}-block`}>
          <Block />
          </div>
        )
      });
    });

    return (
      <div className={`quilt ${layout}`} key='quilt'>
        {quiltBlocks}
      </div>
    );
  }


}

export default Quilt;