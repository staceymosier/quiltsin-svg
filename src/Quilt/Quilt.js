import React, { Component } from 'react';
import Block from '../Block/Block.js';

class Quilt extends Component {

  render() {
    const { activeBlock, activeColors } = this.props;
    const styles = {
      quilt: {
        border: 'solid 40px ' + activeColors.a,
        fontSize: 0,
        margin: '0 auto'
      }
    };

    return (
      <div className='quilt' key='quilt' style={styles.quilt}>
        <Block {...activeBlock} activeColors={activeColors} />
      </div>
    );
  }
}

export default Quilt;