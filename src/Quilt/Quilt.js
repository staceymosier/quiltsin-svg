import React, { Component } from 'react';
import SparklePlenty from './SVG/SparklePlenty';
import RobbingPeter from './SVG/RobbingPeter';
import AmishHomage from './SVG/AmishHomage';

const designs = {
  'SparklePlenty': SparklePlenty,
  'RobbingPeter': RobbingPeter,
  'AmishHomage': AmishHomage
}

class Quilt extends Component {

  render() {
    const { activeBlock, activeColors, isOutlined } = this.props;
    const styles = {
      quilt: {
        // border: activeBlock.borderSize + activeColors.a,
        fontSize: 0,
        margin: '0 auto',
      }
    };

    return (
      <div className='quilt' key='quilt' style={styles.quilt}>
        <div className={ isOutlined ? 'is-outlined' : ''}>
          { React.createElement(designs[activeBlock.block], { activeColors }, null) }
        </div>
      </div>
    );
  }
}

export default Quilt;