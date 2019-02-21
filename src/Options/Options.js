import React, { Component } from 'react';
import './Options.scss';
import { SquareUnit } from '../Block/Unit/Unit.js';

// import Palette from './Palette/Palette.js';

class Options extends Component {
  render() {
    const { activeBlock, data, updateActiveBlock, updateQuiltGrid, activeColors } = this.props;
    const { rows, columns } = activeBlock;
    const squareProps = { width: 40, height: 40, viewBox: "0 0 40 40"}; 

    return (
      <div className="quilt-options">
        <select value={activeBlock.id} onChange={updateActiveBlock}>
        {data.map( (item, _i) => {
          return <option value={item.id} key={_i} >{item.title}</option>
        })}
        </select>
        <input value={rows} size="1" onChange={updateQuiltGrid} />
        <input value={columns} size="1" onChange={updateQuiltGrid} />
        <div className="quilt-colors">
          <SquareUnit {...squareProps} fill={activeColors.border} label="border"/>
          <SquareUnit {...squareProps} fill={activeColors.a} label="A"/>
          <SquareUnit {...squareProps} fill={activeColors.b} label="B"/>
          <SquareUnit {...squareProps} fill={activeColors.c} label="C"/>
          <SquareUnit {...squareProps} fill={activeColors.d} label="D"/>
        </div>
      </div>
    );
  }
}

export default Options;
