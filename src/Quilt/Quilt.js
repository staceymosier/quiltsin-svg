import React, { Component } from 'react';
import SparklePlenty from './SVG/SparklePlenty';
import RobbingPeter from './SVG/RobbingPeter';

const designs = {
  'SparklePlenty': SparklePlenty,
  'RobbingPeter': RobbingPeter
}

class Quilt extends Component {

  render() {
    const { activeBlock, activeColors } = this.props;
    const styles = {
      quilt: {
        border: 'solid 40px ' + activeColors.a,
        backgroundColor: activeColors.a,
        fontSize: 0,
        margin: '0 auto'
      }
    };

    return (
      <div className='quilt' key='quilt' style={styles.quilt}>
        { React.createElement(designs[activeBlock.block], { activeColors }, null) }
      </div>
    );
  }
}

export default Quilt;