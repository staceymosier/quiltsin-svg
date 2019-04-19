import React, { Component } from 'react';
import Icon from '@mdi/react';
import {
  mdiAlphaABoxOutline,
  mdiCheckboxBlankOutline,
  mdiLayersOff,
  mdiRefresh,
  mdiShuffle,
} from '@mdi/js';

import './App.scss';
import Quilt from '../Quilt/Quilt';
import Palette from '../Palette/Palette';
import Fab from './Fab.js';
import Data from '../data';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeBlock: Data['1'],
      activeColors: Data['1'].colors,
      allowRefresh: false,
      data: Data,
      isOutlined: false,
      isShowingLetters: true,
    };

    this.updateColor = this.updateColor.bind(this);
    this.randomizeActiveColors = this.randomizeActiveColors.bind(this);
    this.clearPalette = this.clearPalette.bind(this);
    this.toggleOutline = this.toggleOutline.bind(this);
    this.showLetters = this.showLetters.bind(this);
    this.resetActiveColors = this.resetActiveColors.bind(this);
  }

  clearPalette() {
    const { activeColors } = this.state;
    this.setState({
      isOutlined: true,
      allowRefresh: true,
      activeColors: Object.entries(activeColors).reduce((result, [key]) => ({ ...result, [key]: '#fdfefc' }), {}),
    });
  }

  randomizeActiveColors() {
    const { activeColors } = this.state;
    const newColors = Object.values(activeColors);
    newColors.push(newColors.shift());
    this.setState({
      allowRefresh: true,
      activeColors: Object.entries(activeColors).reduce((result, [key], idx) => (
        { ...result, [key]: newColors[idx] }), {}),
    });
  }

  resetActiveColors() {
    const { activeBlock } = this.state;
    return this.setState({
      isOutlined: false,
      allowRefresh: false,
      activeColors: activeBlock.colors,
    });
  }

  showLetters() {
    const { isShowingLetters } = this.state;
    return this.setState({ isShowingLetters: !isShowingLetters });
  }

  toggleOutline() {
    const { isOutlined } = this.state;
    return this.setState({
      isOutlined: !isOutlined,
    });
  }

  updateActiveBlock(e) {
    const { data } = this.state;
    const id = e.target.value;
    this.setState({
      activeBlock: data[id],
      activeColors: data[id].colors,
    });
  }

  updateColor({ letter, color }) {
    const { activeColors } = this.state;
    return this.setState({ activeColors: { ...activeColors, [letter]: color } });
  }

  render() {
    const {
      activeBlock,
      activeColors,
      allowRefresh,
      data,
      isOutlined,
      isShowingLetters,
    } = this.state;

    return (
      <div className="app" style={{ borderTop: `solid 8px ${activeColors.a}` }}>
        <div className="wrapper">
          <header>
            <div className="palette-tools">
              <button type="button" onClick={this.toggleOutline} className={isOutlined ? 'active' : 'inactive'}>
                <Icon path={mdiCheckboxBlankOutline} size={2} />
                <div className="tool-label">Outlines</div>
              </button>
              <button type="button" onClick={this.showLetters} className={isShowingLetters ? 'active' : 'inactive'}>
                <Icon path={mdiAlphaABoxOutline} size={2} />
                <div className="tool-label">Letters</div>
              </button>
              <button type="button" onClick={this.clearPalette}>
                <Icon path={mdiLayersOff} size={2} />
                <div className="tool-label">Clear</div>
              </button>
              <button type="button" onClick={this.randomizeActiveColors}>
                <Icon path={mdiShuffle} size={2} />
                <div className="tool-label">Shuffle</div>
              </button>
              <button type="button" onClick={this.resetActiveColors} className={allowRefresh ? 'active' : 'inactive'}>
                <Icon path={mdiRefresh} size={2} />
                <div className="tool-label">Reset</div>
              </button>
            </div>
            <Palette
              activeColors={activeColors}
              isShowingLetters={isShowingLetters}
              updateColor={({ letter, color }, e) => this.updateColor({ letter, color }, e)}
            />
            <Fab data={data} />
          </header>
          <Quilt activeBlock={activeBlock} activeColors={activeColors} isOutlined={isOutlined} />
        </div>
      </div>
    );
  }
}

export default App;
