import React, { Component } from 'react';
import './Quilt.scss';
import Block from '../Block/Block.js';

class Quilt extends Component {

  render() {
    const { activeBlock, activeColors } = this.props;
    const { rows, columns } = activeBlock;
    const styles = {
      border: 'solid 40px ' + activeColors.border
    };

    const quiltBlocks = [...Array(columns)].map((n, index) => {
      return [...Array(rows)].map((n, index) => {
        return (
          <div className="block" key={`${index}-block`}>
          <Block {...activeBlock} activeColors={activeColors} />
          </div>
        )
      });
    });

    return (
      <div className='quilt' key='quilt' style={styles}>
        {quiltBlocks}
      </div>
    );
  }


}

export default Quilt;