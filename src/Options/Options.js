import React, { Component } from 'react';
import './Options.scss';
// import Palette from './Palette/Palette.js';

class Options extends Component {
  render() {
    const { activeBlock, data, updateActiveBlock, updateQuiltGrid } = this.props;
    const { rows, columns } = activeBlock;

    return (
      <div className="quilt-options">
        <select value={activeBlock.id} onChange={updateActiveBlock}>
        {data.map( (item, _i) => {
          return <option value={item.id} key={_i} >{item.title}</option>
        })}
        </select>
        <input value={rows} size="1" onChange={updateQuiltGrid} />
        <input value={columns} size="1" onChange={updateQuiltGrid} />
      </div>
    );
  }
}

export default Options;
