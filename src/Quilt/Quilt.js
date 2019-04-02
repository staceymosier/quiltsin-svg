import React, { PureComponent } from 'react';

// TODO: optimize adding quilt design as to not have to map name to component here
import AmishHomage from './SVG/AmishHomage';
import RobbingPeter from './SVG/RobbingPeter';
import RomanStripe from './SVG/RomanStripe';
import SparklePlenty from './SVG/SparklePlenty';

const designs = {
  SparklePlenty,
  RobbingPeter,
  AmishHomage,
  RomanStripe,
};

class Quilt extends PureComponent {
  render() {
    const { activeBlock, activeColors, isOutlined } = this.props;
    const styles = {
      quilt: {
        fontSize: 0,
        margin: '0 auto',
      },
    };

    return (
      <div className="quilt" key="quilt" style={styles.quilt}>
        <div className={isOutlined ? 'is-outlined' : ''}>
          { React.createElement(designs[activeBlock.block], { activeColors }, null) }
        </div>
      </div>
    );
  }
}

export default Quilt;
