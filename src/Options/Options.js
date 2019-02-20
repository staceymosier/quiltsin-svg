import React, { Component } from 'react';
import './Options.scss';
import Palette from './Palette/Palette.js';

class Options extends Component {
  constructor(props) {
    super(props);
    this.updateActiveBlock = this.updateActiveBlock.bind(this);
  }

  updateActiveBlock(event) {
    this.setState({activeBlock: event.target.value});
  }

  render() {
    const { rows, columns, data, activeBlock } = this.props;
    console.log(activeBlock.id);
    return (
      <div className="quilt-options">
        <select value={activeBlock.id} onChange={this.updateActiveBlock}>
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
