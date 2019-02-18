import React from "react";

const SVG = ({
  style = {},
  fill = "#000",
  width = "100%",
  className = "",
  viewBox = "0 0 40 40"
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
  <polygon className="a" points="10.03 20.03 10 20 10 20 10 20 0 10 0 40 15 25 10.03 20.03"/>
  <polygon className="b" points="15 25 0 40 30 40 20 30 15 25"/>
  <polygon className="a" points="25 15 29.95 19.95 29.95 19.95 29.96 19.94 29.95 19.95 40 30 40 0 25 15"/>
  <polygon className="b" points="20 10 25 15 40 0 10 0 19.97 9.97 20 10"/>
  <polygon className="a" points="10 0 0 0 5 5 10 0"/>
  <polygon className="b" points="0 0 0 10 5 5 0 0"/>
  <polygon className="c" points="10 20 10 20 10 20 10 20"/>
  <polygon className="b" points="40 40 40 30 35 35 40 40"/>
  <polygon className="a" points="30 40 40 40 35 35 30 40"/>
  <polygon className="c" points="10 20 10.03 20.03 10.05 20 10 20"/>
  <polygon className="c" points="29.9 20 29.95 19.95 29.95 19.95 25 15 20 20 29.9 20"/>
  <polygon className="c" points="20 20 10.05 20 10.03 20.03 15 25 20 20 20 20"/>
  <polygon className="c" points="15 25 20 30 20 20 15 25"/>
  <polygon className="c" points="19.97 9.97 19.95 10 20 10 19.97 9.97"/>
  <polygon className="c" points="10 10 10 10 10 10 10 10"/>
  <polygon className="c" points="10 10 10 10 0 10 10 20 10 10"/>
  <polygon className="c" points="29.9 20 30 20 30 30 40 30 29.95 19.95 29.9 20"/>
  <polygon className="c" points="19.95 10 19.97 9.97 10 0 10 10 19.95 10"/>
  <polygon className="c" points="20 20 20 20 25 15 20 10 20 20"/>
  <polygon className="c" points="30 30 20 30 30 40 30 30 30 30"/>
  <polygon className="b" points="10 10 10 10 10 0 5 5 10 10"/>
  <polygon className="a" points="5 5 0 10 10 10 5 5"/>
  <polygon className="c" points="10.05 20 20 20 20 20 15 15 10.05 20"/>
  <polygon className="b" points="15 15 10 10 10 20 10 20 10.05 20 15 15"/>
  <polygon className="c" points="19.95 10 10 10 10 10 15 15 19.95 10"/>
  <polygon className="b" points="20 20 20 10 19.95 10 15 15 20 20"/>
  <polygon className="b" points="30 30 30 30 30 20 29.9 20 24.98 24.98 30 30"/>
  <polygon className="b" points="30 30 30 40 35 35 30 30"/>
  <polygon className="a" points="30 30 35 35 40 30 30 30 30 30"/>
  <polygon className="a" points="10.05 20 20 20 20 20 15 15 10.05 20"/>
  <polygon className="b" points="15 15 10 10 10 20 10 20 10.05 20 15 15"/>
  <polygon className="a" points="19.95 10 10 10 10 10 15 15 19.95 10"/>
  <polygon className="a" points="20.05 30 30 30 30 30 25 25 20.05 30"/>
  <polygon className="b" points="25 25 20 20 20 30 20 30 20.05 30 25 25"/>
  <polygon className="a" points="29.95 20 20 20 20 20 25 25 29.95 20"/>
  </svg>
);

export default SVG;