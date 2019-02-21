import React, { Component } from 'react';

class Unit extends Component {
  render() {
    const { height, width, viewBox, fill, stroke, children, label } = this.props;
    return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      stroke={stroke}
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
    const square = <rect x="0" y="0" width="100" height="100" />;
    return (
      <Unit {...this.props} children={square}/>
    )
  }
}


export { SquareUnit };

