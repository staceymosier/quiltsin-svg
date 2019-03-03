import React, { Component } from 'react';

class Unit extends Component {
  render() {
    const { height, width, viewBox, color, stroke, children, strokeWidth } = this.props;
    return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={color}
      stroke={ color === 'white' ? '#06283e' : ''}
      strokeWidth={strokeWidth}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      {children}
    </svg>
    )
  }
}

class SquareUnit extends Component {
  render(){
    const square = <rect x="0" y="0" width="100%" height="100%" />;
    return (
      <Unit {...this.props} children={square}/>
    )
  }
}

export default SquareUnit;

