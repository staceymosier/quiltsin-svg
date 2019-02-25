import React, { Component } from 'react';
import Palette from './Palette/Palette.js';
import './Options.scss';

class Options extends Component {
  render() {
    const { activeBlock, data, updateActiveBlock, updateQuiltGrid, activeColors } = this.props;
    const { rows, columns } = activeBlock;
    const styles = {
      inputNumber: {
        backgroundColor: '#2a2a48',
        border: "none",
        color: '#b2ccdc',
        fontSize: '1rem',
        fontWeight: 100,
        fontFamily: '\'Zilla Slab\', serif',
        textAlign: 'center',
      }
    }

    return (
      <div className="quilt-options">
        <select value={activeBlock.id} onChange={updateActiveBlock}>
        {Object.entries(data).map( ([key, val]) => {
          return <option value={key} key={key} >{val.title}</option>
        })}
        </select>
        <input
          defaultValue={rows}
          size={1}
          onBlur={updateQuiltGrid}
          min={40} max={120}
          style={styles.inputNumber}
        />
        <input
          defaultValue={columns}
          size={1}
          onBlur={updateQuiltGrid}
          min={40} max={120}
          style={styles.inputNumber}
        />
        <Palette activeColors={activeColors} />
      </div>
    );
  }
}

export default Options;
