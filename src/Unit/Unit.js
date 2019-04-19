import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Unit extends PureComponent {
  render() {
    const {
      height,
      width,
      viewBox,
      color,
      children,
      name,
      isShowingLetters,
    } = this.props;

    return (
      <svg
        width={width}
        height={height}
        viewBox={viewBox}
        fill={color}
        stroke="#000"
        strokeWidth="2px"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        {children}
        { isShowingLetters ? (
          <foreignObject x="0" y="0" width="100%" height="100%">
            <div className="swatch-name" style={{ border: `solid 2px ${color}` }} xmlns="http://www.w3.org/1999/xhtml">
              {name}
            </div>
          </foreignObject>
        ) : '' }
      </svg>
    );
  }
}

Unit.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  viewBox: PropTypes.string,
  color: PropTypes.string,
  children: PropTypes.object,
  name: PropTypes.string,
  isShowingLetters: PropTypes.boolean,
};


class SquareUnit extends PureComponent {
  render() {
    const square = <rect x="0" y="0" width="100%" height="100%" />;
    return (
      <Unit {...this.props} children={square} />
    );
  }
}

export default SquareUnit;
