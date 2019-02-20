import React, { Component } from 'react';
import './App.scss';
import Quilt from '../Quilt/Quilt.js';
import Options from '../Options/Options.js';
import Data from '../data.json';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: Data,
      activeBlock: Data[0]
    };
    this.updateActiveBlock = this.updateActiveBlock.bind(this);
  }

  shouldComponentUpdate(nextProps){
    const { activeBlock } = this.props;
    return activeBlock !== nextProps.activeBlock;
  }

  updateActiveBlock(event) {
    console.log(event.target.value);
    this.setState({activeBlock: event.target.value});
  }

  render() {
    const { data, activeBlock} = this.state;
    return (
      <div className="App">
        <div className="wrapper">
          <header className="header">
            <div className="logo"><a href="./index.html">Amish Quilts</a></div>
            <Options
              data = {data}
              activeBlock = {activeBlock}
              updateActiveBlock={this.updateActiveBlock}
            />
          </header>
          <section className="quilt-preview">
            <Quilt
              activeBlock = {activeBlock}
            />
          </section>
          </div>
      </div>
    );
  }
}

export default App;
