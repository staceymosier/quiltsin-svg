import React, { Component } from 'react';
import Icon from '@mdi/react';
import { mdiCheckboxBlankOutline, mdiShuffle} from '@mdi/js';
import './App.scss';
import Quilt from '../Quilt/Quilt.js';
import Palette from '../Palette/Palette.js';
import ButtonGroup from '../ButtonGroup/ButtonGroup.js';
import Data from '../data.js';
import styles from '../styles.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: Data,
      activeBlock: Data['1'],
      activeColors: Data['1'].colors,
    };

    this.updateColor = this.updateColor.bind(this);
    this.randomizeActiveColors = this.randomizeActiveColors.bind(this);
  }

  randomizeActiveColors(e){
    const { activeColors } = this.state;
    const newColors = Object.values(activeColors);
    newColors.push(newColors.shift());
    this.setState({
      activeColors: Object.entries(activeColors).reduce((result, [key, val], idx) => {
        result[key] = newColors[idx];
        return result;
      }, {})
    });
  }

  updateActiveBlock(e) {
    const { data } = this.state;
    const id = e.target.value;
    this.setState({
      activeBlock: data[id],
      activeColors: data[id].colors
     });
    return;
  }

  updateColor({letter, color}, e) {
    var activeColors = {...this.state.activeColors}
    activeColors[letter] = color;
    return this.setState({activeColors})
  }

  render() {
    const { data, activeBlock, activeColors } = this.state;

    return (
      <div className='app' style={styles.app}>
        <ButtonGroup />
        <div className='wrapper' style={styles.wrapper}>
          <header>
            <div className='topbar'>
              <div className='logo'>
                <a href='./index.html'> Amish Quilts </a>
              </div>
              <div className="select-field">
                <select className="selected" value={activeBlock.id} onChange={(e) => this.updateActiveBlock(e)}>
                  {Object.entries(data).map( ([key, value]) => {
                    return <option value={key} key={key} className="option"> &nbsp; {value.title} &nbsp; </option>
                  })}
                </select>
              </div>
            </div>
            <Palette 
              activeColors={activeColors} 
              updateColor={({letter, color}, e) => this.updateColor({letter, color}, e)} />
            <div className='palette-tools'>
              <Icon path={mdiCheckboxBlankOutline} color="black" size={2}/>
              <Icon path={mdiShuffle} color="black" size={2} onClick={this.randomizeActiveColors} />
              <Icon path={mdiCheckboxBlankOutline} color="black" size={2} />
            </div>
          </header>
            <Quilt activeBlock={activeBlock} activeColors={activeColors} />
        </div>
      </div>
    );
  }
}

export default App;
