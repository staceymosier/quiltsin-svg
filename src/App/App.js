import React, { Component } from 'react';
import Icon from '@mdi/react';
import { mdiCheckboxBlankOutline, mdiShuffle, mdiLayersOff, mdiAlphaABoxOutline, mdiRefresh } from '@mdi/js';
import './App.scss';
import Quilt from '../Quilt/Quilt.js';
import Palette from '../Palette/Palette.js';
import Data from '../data.js';
import styles from '../styles.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeBlock: Data['1'],
      activeColors: Data['1'].colors,
      allowClearPalette: true,
      allowRefresh: false,
      data: Data,
      isOutlined: false,
      isShowingLetters: false
    };

    this.updateColor = this.updateColor.bind(this);
    this.randomizeActiveColors = this.randomizeActiveColors.bind(this);
    this.clearPalette = this.clearPalette.bind(this);
    this.toggleOutline = this.toggleOutline.bind(this);
    this.showLetters = this.showLetters.bind(this);
    this.resetActiveColors = this.resetActiveColors.bind(this);
  }

  clearPalette(e){
    const { activeColors } = this.state;
    this.setState({
      isOutlined: true,
      allowClearPalette: false,
      allowRefresh: true,
      activeColors: Object.entries(activeColors).reduce( (result, [key, val], idx) => {
        result[key] = '#fdfefc';
        return result;
      }, {})
    });
  }

  randomizeActiveColors(e){
    const { activeColors } = this.state;
    const newColors = Object.values(activeColors);
    newColors.push(newColors.shift());
    this.setState({
      allowClearPalette: true,
      allowRefresh: true,
      activeColors: Object.entries(activeColors).reduce((result, [key, val], idx) => {
        result[key] = newColors[idx];
        return result;
      }, {})
    });
  }

  resetActiveColors(e){
    const { activeBlock } = this.state;
    return this.setState({
      allowClearPalette: true,
      isOutlined: false,
      allowRefresh: false,
      activeColors: activeBlock.colors
    });
  }

  showLetters(e) {
    const { isShowingLetters } = this.state;
    return this.setState({ isShowingLetters: !isShowingLetters});
  }

  toggleOutline(e){
    const { isOutlined } = this.state;
    return this.setState({
      isOutlined: !isOutlined
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
    const {
      activeBlock,
      allowClearPalette,
      activeColors,
      allowRefresh,
      data,
      isOutlined,
      isShowingLetters
    } = this.state;

    return (
      <div className='app' style={styles.app}>
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
              isShowingLetters={isShowingLetters}
              updateColor={({letter, color}, e) => this.updateColor({letter, color}, e)}/>
            <div className='palette-tools'>
              <Icon 
                path={mdiCheckboxBlankOutline}
                color={ isOutlined ? 'black' : '#c9c9cb'}
                size={2} 
                onClick={this.toggleOutline}
              />
              <Icon 
                path={mdiAlphaABoxOutline}
                color={ isShowingLetters ? 'black' : '#c9c9cb'}
                size={2}
                onClick={this.showLetters}
              />
              <Icon
                path={mdiLayersOff}
                color={ allowClearPalette ? 'black' : '#c9c9cb'}
                size={2}
                onClick={this.clearPalette}
              />
              <Icon path={mdiShuffle} color="black" size={2} onClick={this.randomizeActiveColors} />
              <Icon
                path={mdiRefresh}
                color={ allowRefresh ? 'black' : '#c9c9cb'}
                size={2}
                onClick={this.resetActiveColors}
              />
            </div>
          </header>
            <Quilt activeBlock={activeBlock} activeColors={activeColors} isOutlined={isOutlined} />
        </div>
      </div>
    );
  }
}

export default App;
