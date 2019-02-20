import React, { Component } from 'react';
import './Options.scss';
import Palette from './Palette/Palette.js';

class Options extends Component {
  render() {
    const { activeBlock, data, updateActiveBlock } = this.props;
    const { rows, columns } = activeBlock;

    console.log(activeBlock.id);
    return (
      <div className="quilt-options">
        <select value={activeBlock.id} onChange={updateActiveBlock}>
        {data.map( (item, _i) => {
          return <option value={item.id} key={_i} >{item.title}</option>
        })}
        </select>
        <input defaultValue={rows} size="1" />
        <input defaultValue={columns} size="1" />
      </div>
    );
  }
}

export default Options;
