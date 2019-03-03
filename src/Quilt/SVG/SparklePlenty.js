import React, { Component } from 'react';

class SparklePlenty extends Component {
  render() {

    // A is for the border
    const {b,c,d,e,f,g,h,i} = this.props.activeColors;
    return (
      <svg
        fill = "#000"
        width = "100%"
        viewBox = "0 0 260 340"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect fill={i} width="260" height="340"/>
        <polygon fill={b} points="29.95 20.05 29.95 20.05 29.94 20.04 29.95 20.05 40 10 10 10 25 25"/>
        <polygon fill={c} points="20 30 25 25 10 10 10 40 19.97 30.03"/>
        <polygon fill={b} points="30.05 39.94 30.05 39.95 30.06 39.95 30.05 39.95 20 49.99 50 49.99 35 34.99"/>
        <polygon fill={c} points="40 29.99 35 34.99 50 49.99 50 19.99 40.03 29.97"/>
        <polygon fill={d} points="14.99 35.01 10 40 19.99 40"/>
        <polygon fill={i} points="20 40 20 30 19.97 30.03 14.99 35.01 19.99 40"/>
        <rect fill={i} x="20" y="49.99" width="9.99" height=".01"/>
        <polygon fill={e} points="35 15 30 20 40 20"/>
        <polygon fill={f} points="25 25 20 30 29.99 30"/>
        <rect fill={i} x="29.99" y="49.99" width="20.01" height=".01"/>
        <polygon fill={g} points="30 30 30 20 29.95 20.05 29.95 20.05 25 25 25 25 29.99 30"/>
        <polygon fill={i} points="40 10 35 15 40 20"/>
        <polygon fill={f} points="30 30.01 34.99 35 35 34.99 39.99 30 30 30"/>
        <polygon fill={g} points="30 39.99 30.05 39.95 30.05 39.94 34.99 35 30 30.01"/>
        <polygon fill={i} points="40 29.99 40.03 29.97 45 25 40 20"/>
        <polygon fill={e} points="45 25 49.99 20 40 20"/>
        <polygon fill={i} points="20 49.99 24.99 45 20 40.01"/>
        <polygon fill={d} points="20 40.01 24.99 45 29.99 40 20 40"/>
        <polygon fill={e} points="40 10 40 20 45 15"/>
        <polygon fill={g} points="50 10 40 10 45 15"/>
        <polygon fill={i} points="40 20 49.99 20 45 15"/>
        <polygon fill={h} points="45 15 49.99 20 50 19.99 50 10"/>
        <polygon fill={f} points="30 20 30 30 35 25"/>
        <polygon fill={i} points="40 20 30 20 35 25"/>
        <polygon fill={g} points="30 30 39.99 30 35 25"/>
        <polygon fill={e} points="35 25 39.99 30 40 29.99 40 20"/>
        <polygon fill={d} points="20 30 20 40 25 35"/>
        <polygon fill={g} points="30 30 20 30 25 35"/>
        <polygon fill={i} points="20 40 29.99 40 25 35"/>
        <polygon fill={f} points="25 35 29.99 40 30 39.99 30 30"/>
        <polygon fill={h} points="10 40 10 50 15 45"/>
        <polygon fill={i} points="20 40 10 40 15 45"/>
        <polygon fill={g} points="10 50 19.99 50 15 45"/>
        <polygon fill={d} points="15 45 19.99 50 20 49.99 20 40"/>
        <polygon fill={b} points="60.05 30.05 60.05 30.05 60.04 30.06 60.05 30.05 50 20 50 50 65 35"/>
        <polygon fill={c} points="70 40 65 35 50 50 80 50 70.03 40.03"/>
        <polygon fill={b} points="79.94 29.95 79.95 29.95 79.95 29.94 79.95 29.95 89.99 40 89.99 10 74.99 25"/>
        <polygon fill={c} points="69.99 20 74.99 25 89.99 10 59.99 10 69.97 19.97"/>
        <polygon fill={d} points="75.01 45.01 80 50 80 40.01"/>
        <polygon fill={i} points="80 40 70 40 70.03 40.03 75.01 45.01 80 40.01"/>
        <rect fill={i} x="89.99" y="30.01" width=".01" height="9.99"/>
        <polygon fill={e} points="55 25 60 30 60 20"/>
        <polygon fill={f} points="65 35 70 40 70 30.01"/>
        <rect fill={i} x="89.99" y="10" width=".01" height="20.01"/>
        <polygon fill={g} points="70 30 60 30 60.05 30.05 60.05 30.05 65 35 65 35 70 30.01"/>
        <polygon fill={i} points="50 20 55 25 60 20"/>
        <polygon fill={f} points="70.01 30 75 25.01 74.99 25 70 20.01 70 30"/>
        <polygon fill={g} points="79.99 30 79.95 29.95 79.94 29.95 75 25.01 70.01 30"/>
        <polygon fill={i} points="69.99 20 69.97 19.97 65 15 60 20"/>
        <polygon fill={e} points="65 15 60 10.01 60 20"/>
        <polygon fill={i} points="89.99 40 85 35.01 80.01 40"/>
        <polygon fill={d} points="80.01 40 85 35.01 80 30.01 80 40"/>
        <polygon fill={e} points="50 20 60 20 55 15"/>
        <polygon fill={g} points="50 10 50 20 55 15"/>
        <polygon fill={i} points="60 20 60 10.01 55 15"/>
        <polygon fill={h} points="55 15 60 10.01 59.99 10 50 10"/>
        <polygon fill={f} points="60 30 70 30 65 25"/>
        <polygon fill={i} points="60 20 60 30 65 25"/>
        <polygon fill={g} points="70 30 70 20.01 65 25"/>
        <polygon fill={e} points="65 25 70 20.01 69.99 20 60 20"/>
        <polygon fill={d} points="70 40 80 40 75 35"/>
        <polygon fill={g} points="70 30 70 40 75 35"/>
        <polygon fill={i} points="80 40 80 30.01 75 35"/>
        <polygon fill={f} points="75 35 80 30.01 79.99 30 70 30"/>
        <polygon fill={h} points="80 50 90 50 85 45"/>
        <polygon fill={i} points="80 40 80 50 85 45"/>
        <polygon fill={g} points="90 50 90 40.01 85 45"/>
        <polygon fill={d} points="85 45 90 40.01 89.99 40 80 40"/>
        <polygon fill={b} points="109.95 20.05 109.95 20.05 109.94 20.04 109.95 20.05 120 10 90 10 105 25"/>
        <polygon fill={c} points="100 30 105 25 90 10 90 40 99.97 30.03"/>
        <polygon fill={b} points="110.05 39.94 110.05 39.95 110.06 39.95 110.05 39.95 100 49.99 130 49.99 115 34.99"/>
        <polygon fill={c} points="120 29.99 115 34.99 130 49.99 130 19.99 120.03 29.97"/>
        <polygon fill={d} points="94.99 35.01 90 40 99.99 40"/>
        <polygon fill={i} points="100 40 100 30 99.97 30.03 94.99 35.01 99.99 40"/>
        <rect fill={i} x="100" y="49.99" width="9.99" height=".01"/>
        <polygon fill={e} points="115 15 110 20 120 20"/>
        <polygon fill={f} points="105 25 100 30 109.99 30"/>
        <rect fill={i} x="109.99" y="49.99" width="20.01" height=".01"/>
        <polygon fill={g} points="110 30 110 20 109.95 20.05 109.95 20.05 105 25 105 25 109.99 30"/>
        <polygon fill={i} points="120 10 115 15 120 20"/>
        <polygon fill={f} points="110 30.01 114.99 35 115 34.99 119.99 30 110 30"/>
        <polygon fill={g} points="110 39.99 110.05 39.95 110.05 39.94 114.99 35 110 30.01"/>
        <polygon fill={i} points="120 29.99 120.03 29.97 125 25 120 20"/>
        <polygon fill={e} points="125 25 129.99 20 120 20"/>
        <polygon fill={i} points="100 49.99 104.99 45 100 40.01"/>
        <polygon fill={d} points="100 40.01 104.99 45 109.99 40 100 40"/>
        <polygon fill={e} points="120 10 120 20 125 15"/>
        <polygon fill={g} points="130 10 120 10 125 15"/>
        <polygon fill={i} points="120 20 129.99 20 125 15"/>
        <polygon fill={h} points="125 15 129.99 20 130 19.99 130 10"/>
        <polygon fill={f} points="110 20 110 30 115 25"/>
        <polygon fill={i} points="120 20 110 20 115 25"/>
        <polygon fill={g} points="110 30 119.99 30 115 25"/>
        <polygon fill={e} points="115 25 119.99 30 120 29.99 120 20"/>
        <polygon fill={d} points="100 30 100 40 105 35"/>
        <polygon fill={g} points="110 30 100 30 105 35"/>
        <polygon fill={i} points="100 40 109.99 40 105 35"/>
        <polygon fill={f} points="105 35 109.99 40 110 39.99 110 30"/>
        <polygon fill={h} points="90 40 90 50 95 45"/>
        <polygon fill={i} points="100 40 90 40 95 45"/>
        <polygon fill={g} points="90 50 99.99 50 95 45"/>
        <polygon fill={d} points="95 45 99.99 50 100 49.99 100 40"/>
        <polygon fill={b} points="159.95 29.95 159.95 29.95 159.96 29.94 159.95 29.95 170 40 170 10 155 25"/>
        <polygon fill={c} points="150 20 155 25 170 10 140 10 149.97 19.97"/>
        <polygon fill={b} points="140.06 30.05 140.05 30.05 140.04 30.06 140.05 30.05 130.01 20 130.01 50 145.01 35"/>
        <polygon fill={c} points="150.01 40 145.01 35 130.01 50 160.01 50 150.03 40.03"/>
        <polygon fill={d} points="144.99 14.99 140 10 140 19.99"/>
        <polygon fill={i} points="140 20 150 20 149.97 19.97 144.99 14.99 140 19.99"/>
        <rect fill={i} x="130" y="20" width=".01" height="9.99"/>
        <polygon fill={e} points="165 35 160 30 160 40"/>
        <polygon fill={f} points="155 25 150 20 150 29.99"/>
        <rect fill={i} x="130" y="29.99" width=".01" height="20.01"/>
        <polygon fill={g} points="150 30 160 30 159.95 29.95 159.95 29.95 155 25 155 25 150 29.99"/>
        <polygon fill={i} points="170 40 165 35 160 40"/>
        <polygon fill={f} points="149.99 30 145 34.99 145.01 35 150 39.99 150 30"/>
        <polygon fill={g} points="140.01 30 140.05 30.05 140.06 30.05 145 34.99 149.99 30"/>
        <polygon fill={i} points="150.01 40 150.03 40.03 155 45 160 40"/>
        <polygon fill={e} points="155 45 160 49.99 160 40"/>
        <polygon fill={i} points="130.01 20 135 24.99 139.99 20"/>
        <polygon fill={d} points="139.99 20 135 24.99 140 29.99 140 20"/>
        <polygon fill={e} points="170 40 160 40 165 45"/>
        <polygon fill={g} points="170 50 170 40 165 45"/>
        <polygon fill={i} points="160 40 160 49.99 165 45"/>
        <polygon fill={h} points="165 45 160 49.99 160.01 50 170 50"/>
        <polygon fill={f} points="160 30 150 30 155 35"/>
        <polygon fill={i} points="160 40 160 30 155 35"/>
        <polygon fill={g} points="150 30 150 39.99 155 35"/>
        <polygon fill={e} points="155 35 150 39.99 150.01 40 160 40"/>
        <polygon fill={d} points="150 20 140 20 145 25"/>
        <polygon fill={g} points="150 30 150 20 145 25"/>
        <polygon fill={i} points="140 20 140 29.99 145 25"/>
        <polygon fill={f} points="145 25 140 29.99 140.01 30 150 30"/>
        <polygon fill={h} points="140 10 130 10 135 15"/>
        <polygon fill={i} points="140 20 140 10 135 15"/>
        <polygon fill={g} points="130 10 130 19.99 135 15"/>
        <polygon fill={d} points="135 15 130 19.99 130.01 20 140 20"/>
        <polygon fill={b} points="189.95 20.05 189.95 20.05 189.94 20.04 189.95 20.05 200 10 170 10 185 25"/>
        <polygon fill={c} points="180 30 185 25 170 10 170 40 179.97 30.03"/>
        <polygon fill={b} points="190.05 39.94 190.05 39.95 190.06 39.95 190.05 39.95 180 49.99 210 49.99 195 34.99"/>
        <polygon fill={c} points="200 29.99 195 34.99 210 49.99 210 19.99 200.03 29.97"/>
        <polygon fill={d} points="174.99 35.01 170 40 179.99 40"/>
        <polygon fill={i} points="180 40 180 30 179.97 30.03 174.99 35.01 179.99 40"/>
        <rect fill={i} x="180" y="49.99" width="9.99" height=".01"/>
        <polygon fill={e} points="195 15 190 20 200 20"/>
        <polygon fill={f} points="185 25 180 30 189.99 30"/>
        <rect fill={i} x="189.99" y="49.99" width="20.01" height=".01"/>
        <polygon fill={g} points="190 30 190 20 189.95 20.05 189.95 20.05 185 25 185 25 189.99 30"/>
        <polygon fill={i} points="200 10 195 15 200 20"/>
        <polygon fill={f} points="190 30.01 194.99 35 195 34.99 199.99 30 190 30"/>
        <polygon fill={g} points="190 39.99 190.05 39.95 190.05 39.94 194.99 35 190 30.01"/>
        <polygon fill={i} points="200 29.99 200.03 29.97 205 25 200 20"/>
        <polygon fill={e} points="205 25 209.99 20 200 20"/>
        <polygon fill={i} points="180 49.99 184.99 45 180 40.01"/>
        <polygon fill={d} points="180 40.01 184.99 45 189.99 40 180 40"/>
        <polygon fill={e} points="200 10 200 20 205 15"/>
        <polygon fill={g} points="210 10 200 10 205 15"/>
        <polygon fill={i} points="200 20 209.99 20 205 15"/>
        <polygon fill={h} points="205 15 209.99 20 210 19.99 210 10"/>
        <polygon fill={f} points="190 20 190 30 195 25"/>
        <polygon fill={i} points="200 20 190 20 195 25"/>
        <polygon fill={g} points="190 30 199.99 30 195 25"/>
        <polygon fill={e} points="195 25 199.99 30 200 29.99 200 20"/>
        <polygon fill={d} points="180 30 180 40 185 35"/>
        <polygon fill={g} points="190 30 180 30 185 35"/>
        <polygon fill={i} points="180 40 189.99 40 185 35"/>
        <polygon fill={f} points="185 35 189.99 40 190 39.99 190 30"/>
        <polygon fill={h} points="170 40 170 50 175 45"/>
        <polygon fill={i} points="180 40 170 40 175 45"/>
        <polygon fill={g} points="170 50 179.99 50 175 45"/>
        <polygon fill={d} points="175 45 179.99 50 180 49.99 180 40"/>
        <polygon fill={b} points="220.05 30.05 220.05 30.05 220.04 30.06 220.05 30.05 210 20 210 50 225 35"/>
        <polygon fill={c} points="230 40 225 35 210 50 240 50 230.03 40.03"/>
        <polygon fill={b} points="239.94 29.95 239.95 29.95 239.96 29.94 239.95 29.95 249.99 40 249.99 10 234.99 25"/>
        <polygon fill={c} points="229.99 20 234.99 25 249.99 10 219.99 10 229.97 19.97"/>
        <polygon fill={d} points="235.01 45.01 240 50 240 40.01"/>
        <polygon fill={i} points="240 40 230 40 230.03 40.03 235.01 45.01 240 40.01"/>
        <rect fill={i} x="249.99" y="30.01" width=".01" height="9.99"/>
        <polygon fill={e} points="215 25 220 30 220 20"/>
        <polygon fill={f} points="225 35 230 40 230 30.01"/>
        <rect fill={i} x="249.99" y="10" width=".01" height="20.01"/>
        <polygon fill={g} points="230 30 220 30 220.05 30.05 220.05 30.05 225 35 225 35 230 30.01"/>
        <polygon fill={i} points="210 20 215 25 220 20"/>
        <polygon fill={f} points="230.01 30 235 25.01 234.99 25 230 20.01 230 30"/>
        <polygon fill={g} points="239.99 30 239.95 29.95 239.94 29.95 235 25.01 230.01 30"/>
        <polygon fill={i} points="229.99 20 229.97 19.97 225 15 220 20"/>
        <polygon fill={e} points="225 15 220 10.01 220 20"/>
        <polygon fill={i} points="249.99 40 245 35.01 240.01 40"/>
        <polygon fill={d} points="240.01 40 245 35.01 240 30.01 240 40"/>
        <polygon fill={e} points="210 20 220 20 215 15"/>
        <polygon fill={g} points="210 10 210 20 215 15"/>
        <polygon fill={i} points="220 20 220 10.01 215 15"/>
        <polygon fill={h} points="215 15 220 10.01 219.99 10 210 10"/>
        <polygon fill={f} points="220 30 230 30 225 25"/>
        <polygon fill={i} points="220 20 220 30 225 25"/>
        <polygon fill={g} points="230 30 230 20.01 225 25"/>
        <polygon fill={e} points="225 25 230 20.01 229.99 20 220 20"/>
        <polygon fill={d} points="230 40 240 40 235 35"/>
        <polygon fill={g} points="230 30 230 40 235 35"/>
        <polygon fill={i} points="240 40 240 30.01 235 35"/>
        <polygon fill={f} points="235 35 240 30.01 239.99 30 230 30"/>
        <polygon fill={h} points="240 50 250 50 245 45"/>
        <polygon fill={i} points="240 40 240 50 245 45"/>
        <polygon fill={g} points="250 50 250 40.01 245 45"/>
        <polygon fill={d} points="245 45 250 40.01 249.99 40 240 40"/>
        <polygon fill={b} points="20.05 70.05 20.05 70.05 20.04 70.06 20.05 70.05 10 60 10 90 25 75"/>
        <polygon fill={c} points="30 80 25 75 10 90 40 90 30.03 80.03"/>
        <polygon fill={b} points="39.94 69.95 39.95 69.95 39.95 69.94 39.95 69.95 49.99 80 49.99 50 34.99 65"/>
        <polygon fill={c} points="29.99 60 34.99 65 49.99 50 19.99 50 29.97 59.97"/>
        <polygon fill={d} points="35.01 85.01 40 90 40 80.01"/>
        <polygon fill={i} points="40 80 30 80 30.03 80.03 35.01 85.01 40 80.01"/>
        <rect fill={i} x="49.99" y="70.01" width=".01" height="9.99"/>
        <polygon fill={e} points="15 65 20 70 20 60"/>
        <polygon fill={f} points="25 75 30 80 30 70.01"/>
        <rect fill={i} x="49.99" y="50" width=".01" height="20.01"/>
        <polygon fill={g} points="30 70 20 70 20.05 70.05 20.05 70.05 25 75 25 75 30 70.01"/>
        <polygon fill={i} points="10 60 15 65 20 60"/>
        <polygon fill={f} points="30.01 70 35 65.01 34.99 65 30 60.01 30 70"/>
        <polygon fill={g} points="39.99 70 39.95 69.95 39.94 69.95 35 65.01 30.01 70"/>
        <polygon fill={i} points="29.99 60 29.97 59.97 25 55 20 60"/>
        <polygon fill={e} points="25 55 20 50.01 20 60"/>
        <polygon fill={i} points="49.99 80 45 75.01 40.01 80"/>
        <polygon fill={d} points="40.01 80 45 75.01 40 70.01 40 80"/>
        <polygon fill={e} points="10 60 20 60 15 55"/>
        <polygon fill={g} points="10 50 10 60 15 55"/>
        <polygon fill={i} points="20 60 20 50.01 15 55"/>
        <polygon fill={h} points="15 55 20 50.01 19.99 50 10 50"/>
        <polygon fill={f} points="20 70 30 70 25 65"/>
        <polygon fill={i} points="20 60 20 70 25 65"/>
        <polygon fill={g} points="30 70 30 60.01 25 65"/>
        <polygon fill={e} points="25 65 30 60.01 29.99 60 20 60"/>
        <polygon fill={d} points="30 80 40 80 35 75"/>
        <polygon fill={g} points="30 70 30 80 35 75"/>
        <polygon fill={i} points="40 80 40 70.01 35 75"/>
        <polygon fill={f} points="35 75 40 70.01 39.99 70 30 70"/>
        <polygon fill={h} points="40 90 50 90 45 85"/>
        <polygon fill={i} points="40 80 40 90 45 85"/>
        <polygon fill={g} points="50 90 50 80.01 45 85"/>
        <polygon fill={d} points="45 85 50 80.01 49.99 80 40 80"/>
        <polygon fill={b} points="69.95 60.05 69.95 60.05 69.94 60.04 69.95 60.05 80 50 50 50 65 65"/>
        <polygon fill={c} points="60 70 65 65 50 50 50 80 59.97 70.03"/>
        <polygon fill={b} points="70.05 79.94 70.05 79.95 70.06 79.95 70.05 79.95 60 89.99 90 89.99 75 74.99"/>
        <polygon fill={c} points="80 69.99 75 74.99 90 89.99 90 59.99 80.03 69.97"/>
        <polygon fill={d} points="54.99 75.01 50 80 59.99 80"/>
        <polygon fill={i} points="60 80 60 70 59.97 70.03 54.99 75.01 59.99 80"/>
        <rect fill={i} x="60" y="89.99" width="9.99" height=".01"/>
        <polygon fill={e} points="75 55 70 60 80 60"/>
        <polygon fill={f} points="65 65 60 70 69.99 70"/>
        <rect fill={i} x="69.99" y="89.99" width="20.01" height=".01"/>
        <polygon fill={g} points="70 70 70 60 69.95 60.05 69.95 60.05 65 65 65 65 69.99 70"/>
        <polygon fill={i} points="80 50 75 55 80 60"/>
        <polygon fill={f} points="70 70.01 74.99 75 75 74.99 79.99 70 70 70"/>
        <polygon fill={g} points="70 79.99 70.05 79.95 70.05 79.94 74.99 75 70 70.01"/>
        <polygon fill={i} points="80 69.99 80.03 69.97 85 65 80 60"/>
        <polygon fill={e} points="85 65 89.99 60 80 60"/>
        <polygon fill={i} points="60 89.99 64.99 85 60 80.01"/>
        <polygon fill={d} points="60 80.01 64.99 85 69.99 80 60 80"/>
        <polygon fill={e} points="80 50 80 60 85 55"/>
        <polygon fill={g} points="90 50 80 50 85 55"/>
        <polygon fill={i} points="80 60 89.99 60 85 55"/>
        <polygon fill={h} points="85 55 89.99 60 90 59.99 90 50"/>
        <polygon fill={f} points="70 60 70 70 75 65"/>
        <polygon fill={i} points="80 60 70 60 75 65"/>
        <polygon fill={g} points="70 70 79.99 70 75 65"/>
        <polygon fill={e} points="75 65 79.99 70 80 69.99 80 60"/>
        <polygon fill={d} points="60 70 60 80 65 75"/>
        <polygon fill={g} points="70 70 60 70 65 75"/>
        <polygon fill={i} points="60 80 69.99 80 65 75"/>
        <polygon fill={f} points="65 75 69.99 80 70 79.99 70 70"/>
        <polygon fill={h} points="50 80 50 90 55 85"/>
        <polygon fill={i} points="60 80 50 80 55 85"/>
        <polygon fill={g} points="50 90 59.99 90 55 85"/>
        <polygon fill={d} points="55 85 59.99 90 60 89.99 60 80"/>
        <polygon fill={b} points="100.05 70.05 100.05 70.05 100.04 70.06 100.05 70.05 90 60 90 90 105 75"/>
        <polygon fill={c} points="110 80 105 75 90 90 120 90 110.03 80.03"/>
        <polygon fill={b} points="119.94 69.95 119.95 69.95 119.95 69.94 119.95 69.95 129.99 80 129.99 50 114.99 65"/>
        <polygon fill={c} points="109.99 60 114.99 65 129.99 50 99.99 50 109.97 59.97"/>
        <polygon fill={d} points="115.01 85.01 120 90 120 80.01"/>
        <polygon fill={i} points="120 80 110 80 110.03 80.03 115.01 85.01 120 80.01"/>
        <rect fill={i} x="129.99" y="70.01" width=".01" height="9.99"/>
        <polygon fill={e} points="95 65 100 70 100 60"/>
        <polygon fill={f} points="105 75 110 80 110 70.01"/>
        <rect fill={i} x="129.99" y="50" width=".01" height="20.01"/>
        <polygon fill={g} points="110 70 100 70 100.05 70.05 100.05 70.05 105 75 105 75 110 70.01"/>
        <polygon fill={i} points="90 60 95 65 100 60"/>
        <polygon fill={f} points="110.01 70 115 65.01 114.99 65 110 60.01 110 70"/>
        <polygon fill={g} points="119.99 70 119.95 69.95 119.94 69.95 115 65.01 110.01 70"/>
        <polygon fill={i} points="109.99 60 109.97 59.97 105 55 100 60"/>
        <polygon fill={e} points="105 55 100 50.01 100 60"/>
        <polygon fill={i} points="129.99 80 125 75.01 120.01 80"/>
        <polygon fill={d} points="120.01 80 125 75.01 120 70.01 120 80"/>
        <polygon fill={e} points="90 60 100 60 95 55"/>
        <polygon fill={g} points="90 50 90 60 95 55"/>
        <polygon fill={i} points="100 60 100 50.01 95 55"/>
        <polygon fill={h} points="95 55 100 50.01 99.99 50 90 50"/>
        <polygon fill={f} points="100 70 110 70 105 65"/>
        <polygon fill={i} points="100 60 100 70 105 65"/>
        <polygon fill={g} points="110 70 110 60.01 105 65"/>
        <polygon fill={e} points="105 65 110 60.01 109.99 60 100 60"/>
        <polygon fill={d} points="110 80 120 80 115 75"/>
        <polygon fill={g} points="110 70 110 80 115 75"/>
        <polygon fill={i} points="120 80 120 70.01 115 75"/>
        <polygon fill={f} points="115 75 120 70.01 119.99 70 110 70"/>
        <polygon fill={h} points="120 90 130 90 125 85"/>
        <polygon fill={i} points="120 80 120 90 125 85"/>
        <polygon fill={g} points="130 90 130 80.01 125 85"/>
        <polygon fill={d} points="125 85 130 80.01 129.99 80 120 80"/>
        <polygon fill={b} points="149.95 60.05 149.95 60.05 149.94 60.04 149.95 60.05 160 50 130 50 145 65"/>
        <polygon fill={c} points="140 70 145 65 130 50 130 80 139.97 70.03"/>
        <polygon fill={b} points="150.05 79.94 150.05 79.95 150.06 79.95 150.05 79.95 140 89.99 170 89.99 155 74.99"/>
        <polygon fill={c} points="160 69.99 155 74.99 170 89.99 170 59.99 160.03 69.97"/>
        <polygon fill={d} points="134.99 75.01 130 80 139.99 80"/>
        <polygon fill={i} points="140 80 140 70 139.97 70.03 134.99 75.01 139.99 80"/>
        <rect fill={i} x="140" y="89.99" width="9.99" height=".01"/>
        <polygon fill={e} points="155 55 150 60 160 60"/>
        <polygon fill={f} points="145 65 140 70 149.99 70"/>
        <rect fill={i} x="149.99" y="89.99" width="20.01" height=".01"/>
        <polygon fill={g} points="150 70 150 60 149.95 60.05 149.95 60.05 145 65 145 65 149.99 70"/>
        <polygon fill={i} points="160 50 155 55 160 60"/>
        <polygon fill={f} points="150 70.01 154.99 75 155 74.99 159.99 70 150 70"/>
        <polygon fill={g} points="150 79.99 150.05 79.95 150.05 79.94 154.99 75 150 70.01"/>
        <polygon fill={i} points="160 69.99 160.03 69.97 165 65 160 60"/>
        <polygon fill={e} points="165 65 169.99 60 160 60"/>
        <polygon fill={i} points="140 89.99 144.99 85 140 80.01"/>
        <polygon fill={d} points="140 80.01 144.99 85 149.99 80 140 80"/>
        <polygon fill={e} points="160 50 160 60 165 55"/>
        <polygon fill={g} points="170 50 160 50 165 55"/>
        <polygon fill={i} points="160 60 169.99 60 165 55"/>
        <polygon fill={h} points="165 55 169.99 60 170 59.99 170 50"/>
        <polygon fill={f} points="150 60 150 70 155 65"/>
        <polygon fill={i} points="160 60 150 60 155 65"/>
        <polygon fill={g} points="150 70 159.99 70 155 65"/>
        <polygon fill={e} points="155 65 159.99 70 160 69.99 160 60"/>
        <polygon fill={d} points="140 70 140 80 145 75"/>
        <polygon fill={g} points="150 70 140 70 145 75"/>
        <polygon fill={i} points="140 80 149.99 80 145 75"/>
        <polygon fill={f} points="145 75 149.99 80 150 79.99 150 70"/>
        <polygon fill={h} points="130 80 130 90 135 85"/>
        <polygon fill={i} points="140 80 130 80 135 85"/>
        <polygon fill={g} points="130 90 139.99 90 135 85"/>
        <polygon fill={d} points="135 85 139.99 90 140 89.99 140 80"/>
        <polygon fill={b} points="180.05 70.05 180.05 70.05 180.04 70.06 180.05 70.05 170 60 170 90 185 75"/>
        <polygon fill={c} points="190 80 185 75 170 90 200 90 190.03 80.03"/>
        <polygon fill={b} points="199.94 69.95 199.95 69.95 199.96 69.94 199.95 69.95 209.99 80 209.99 50 194.99 65"/>
        <polygon fill={c} points="189.99 60 194.99 65 209.99 50 179.99 50 189.97 59.97"/>
        <polygon fill={d} points="195.01 85.01 200 90 200 80.01"/>
        <polygon fill={i} points="200 80 190 80 190.03 80.03 195.01 85.01 200 80.01"/>
        <rect fill={i} x="209.99" y="70.01" width=".01" height="9.99"/>
        <polygon fill={e} points="175 65 180 70 180 60"/>
        <polygon fill={f} points="185 75 190 80 190 70.01"/>
        <rect fill={i} x="209.99" y="50" width=".01" height="20.01"/>
        <polygon fill={g} points="190 70 180 70 180.05 70.05 180.05 70.05 185 75 185 75 190 70.01"/>
        <polygon fill={i} points="170 60 175 65 180 60"/>
        <polygon fill={f} points="190.01 70 195 65.01 194.99 65 190 60.01 190 70"/>
        <polygon fill={g} points="199.99 70 199.95 69.95 199.94 69.95 195 65.01 190.01 70"/>
        <polygon fill={i} points="189.99 60 189.97 59.97 185 55 180 60"/>
        <polygon fill={e} points="185 55 180 50.01 180 60"/>
        <polygon fill={i} points="209.99 80 205 75.01 200.01 80"/>
        <polygon fill={d} points="200.01 80 205 75.01 200 70.01 200 80"/>
        <polygon fill={e} points="170 60 180 60 175 55"/>
        <polygon fill={g} points="170 50 170 60 175 55"/>
        <polygon fill={i} points="180 60 180 50.01 175 55"/>
        <polygon fill={h} points="175 55 180 50.01 179.99 50 170 50"/>
        <polygon fill={f} points="180 70 190 70 185 65"/>
        <polygon fill={i} points="180 60 180 70 185 65"/>
        <polygon fill={g} points="190 70 190 60.01 185 65"/>
        <polygon fill={e} points="185 65 190 60.01 189.99 60 180 60"/>
        <polygon fill={d} points="190 80 200 80 195 75"/>
        <polygon fill={g} points="190 70 190 80 195 75"/>
        <polygon fill={i} points="200 80 200 70.01 195 75"/>
        <polygon fill={f} points="195 75 200 70.01 199.99 70 190 70"/>
        <polygon fill={h} points="200 90 210 90 205 85"/>
        <polygon fill={i} points="200 80 200 90 205 85"/>
        <polygon fill={g} points="210 90 210 80.01 205 85"/>
        <polygon fill={d} points="205 85 210 80.01 209.99 80 200 80"/>
        <polygon fill={b} points="229.95 60.05 229.95 60.05 229.94 60.04 229.95 60.05 240 50 210 50 225 65"/>
        <polygon fill={c} points="220 70 225 65 210 50 210 80 219.97 70.03"/>
        <polygon fill={b} points="230.05 79.94 230.05 79.95 230.06 79.95 230.05 79.95 220 89.99 250 89.99 235 74.99"/>
        <polygon fill={c} points="240 69.99 235 74.99 250 89.99 250 59.99 240.03 69.97"/>
        <polygon fill={d} points="214.99 75.01 210 80 219.99 80"/>
        <polygon fill={i} points="220 80 220 70 219.97 70.03 214.99 75.01 219.99 80"/>
        <rect fill={i} x="220" y="89.99" width="9.99" height=".01"/>
        <polygon fill={e} points="235 55 230 60 240 60"/>
        <polygon fill={f} points="225 65 220 70 229.99 70"/>
        <rect fill={i} x="229.99" y="89.99" width="20.01" height=".01"/>
        <polygon fill={g} points="230 70 230 60 229.95 60.05 229.95 60.05 225 65 225 65 229.99 70"/>
        <polygon fill={i} points="240 50 235 55 240 60"/>
        <polygon fill={f} points="230 70.01 234.99 75 235 74.99 239.99 70 230 70"/>
        <polygon fill={g} points="230 79.99 230.05 79.95 230.05 79.94 234.99 75 230 70.01"/>
        <polygon fill={i} points="240 69.99 240.03 69.97 245 65 240 60"/>
        <polygon fill={e} points="245 65 249.99 60 240 60"/>
        <polygon fill={i} points="220 89.99 224.99 85 220 80.01"/>
        <polygon fill={d} points="220 80.01 224.99 85 229.99 80 220 80"/>
        <polygon fill={e} points="240 50 240 60 245 55"/>
        <polygon fill={g} points="250 50 240 50 245 55"/>
        <polygon fill={i} points="240 60 249.99 60 245 55"/>
        <polygon fill={h} points="245 55 249.99 60 250 59.99 250 50"/>
        <polygon fill={f} points="230 60 230 70 235 65"/>
        <polygon fill={i} points="240 60 230 60 235 65"/>
        <polygon fill={g} points="230 70 239.99 70 235 65"/>
        <polygon fill={e} points="235 65 239.99 70 240 69.99 240 60"/>
        <polygon fill={d} points="220 70 220 80 225 75"/>
        <polygon fill={g} points="230 70 220 70 225 75"/>
        <polygon fill={i} points="220 80 229.99 80 225 75"/>
        <polygon fill={f} points="225 75 229.99 80 230 79.99 230 70"/>
        <polygon fill={h} points="210 80 210 90 215 85"/>
        <polygon fill={i} points="220 80 210 80 215 85"/>
        <polygon fill={g} points="210 90 219.99 90 215 85"/>
        <polygon fill={d} points="215 85 219.99 90 220 89.99 220 80"/>
        <polygon fill={b} points="29.95 100.05 29.95 100.05 29.94 100.04 29.95 100.05 40 90 10 90 25 105"/>
        <polygon fill={c} points="20 110 25 105 10 90 10 120 19.97 110.03"/>
        <polygon fill={b} points="30.05 119.94 30.05 119.95 30.06 119.95 30.05 119.95 20 129.99 50 129.99 35 114.99"/>
        <polygon fill={c} points="40 109.99 35 114.99 50 129.99 50 99.99 40.03 109.97"/>
        <polygon fill={d} points="14.99 115.01 10 120 19.99 120"/>
        <polygon fill={i} points="20 120 20 110 19.97 110.03 14.99 115.01 19.99 120"/>
        <rect fill={i} x="20" y="129.99" width="9.99" height=".01"/>
        <polygon fill={e} points="35 95 30 100 40 100"/>
        <polygon fill={f} points="25 105 20 110 29.99 110"/>
        <rect fill={i} x="29.99" y="129.99" width="20.01" height=".01"/>
        <polygon fill={g} points="30 110 30 100 29.95 100.05 29.95 100.05 25 105 25 105 29.99 110"/>
        <polygon fill={i} points="40 90 35 95 40 100"/>
        <polygon fill={f} points="30 110.01 34.99 115 35 114.99 39.99 110 30 110"/>
        <polygon fill={g} points="30 119.99 30.05 119.95 30.05 119.94 34.99 115 30 110.01"/>
        <polygon fill={i} points="40 109.99 40.03 109.97 45 105 40 100"/>
        <polygon fill={e} points="45 105 49.99 100 40 100"/>
        <polygon fill={i} points="20 129.99 24.99 125 20 120.01"/>
        <polygon fill={d} points="20 120.01 24.99 125 29.99 120 20 120"/>
        <polygon fill={e} points="40 90 40 100 45 95"/>
        <polygon fill={g} points="50 90 40 90 45 95"/>
        <polygon fill={i} points="40 100 49.99 100 45 95"/>
        <polygon fill={h} points="45 95 49.99 100 50 99.99 50 90"/>
        <polygon fill={f} points="30 100 30 110 35 105"/>
        <polygon fill={i} points="40 100 30 100 35 105"/>
        <polygon fill={g} points="30 110 39.99 110 35 105"/>
        <polygon fill={e} points="35 105 39.99 110 40 109.99 40 100"/>
        <polygon fill={d} points="20 110 20 120 25 115"/>
        <polygon fill={g} points="30 110 20 110 25 115"/>
        <polygon fill={i} points="20 120 29.99 120 25 115"/>
        <polygon fill={f} points="25 115 29.99 120 30 119.99 30 110"/>
        <polygon fill={h} points="10 120 10 130 15 125"/>
        <polygon fill={i} points="20 120 10 120 15 125"/>
        <polygon fill={g} points="10 130 19.99 130 15 125"/>
        <polygon fill={d} points="15 125 19.99 130 20 129.99 20 120"/>
        <polygon fill={b} points="60.05 110.05 60.05 110.05 60.04 110.06 60.05 110.05 50 100 50 130 65 115"/>
        <polygon fill={c} points="70 120 65 115 50 130 80 130 70.03 120.03"/>
        <polygon fill={b} points="79.94 109.95 79.95 109.95 79.95 109.94 79.95 109.95 89.99 120 89.99 90 74.99 105"/>
        <polygon fill={c} points="69.99 100 74.99 105 89.99 90 59.99 90 69.97 99.97"/>
        <polygon fill={d} points="75.01 125.01 80 130 80 120.01"/>
        <polygon fill={i} points="80 120 70 120 70.03 120.03 75.01 125.01 80 120.01"/>
        <rect fill={i} x="89.99" y="110.01" width=".01" height="9.99"/>
        <polygon fill={e} points="55 105 60 110 60 100"/>
        <polygon fill={f} points="65 115 70 120 70 110.01"/>
        <rect fill={i} x="89.99" y="90" width=".01" height="20.01"/>
        <polygon fill={g} points="70 110 60 110 60.05 110.05 60.05 110.05 65 115 65 115 70 110.01"/>
        <polygon fill={i} points="50 100 55 105 60 100"/>
        <polygon fill={f} points="70.01 110 75 105.01 74.99 105 70 100.01 70 110"/>
        <polygon fill={g} points="79.99 110 79.95 109.95 79.94 109.95 75 105.01 70.01 110"/>
        <polygon fill={i} points="69.99 100 69.97 99.97 65 95 60 100"/>
        <polygon fill={e} points="65 95 60 90.01 60 100"/>
        <polygon fill={i} points="89.99 120 85 115.01 80.01 120"/>
        <polygon fill={d} points="80.01 120 85 115.01 80 110.01 80 120"/>
        <polygon fill={e} points="50 100 60 100 55 95"/>
        <polygon fill={g} points="50 90 50 100 55 95"/>
        <polygon fill={i} points="60 100 60 90.01 55 95"/>
        <polygon fill={h} points="55 95 60 90.01 59.99 90 50 90"/>
        <polygon fill={f} points="60 110 70 110 65 105"/>
        <polygon fill={i} points="60 100 60 110 65 105"/>
        <polygon fill={g} points="70 110 70 100.01 65 105"/>
        <polygon fill={e} points="65 105 70 100.01 69.99 100 60 100"/>
        <polygon fill={d} points="70 120 80 120 75 115"/>
        <polygon fill={g} points="70 110 70 120 75 115"/>
        <polygon fill={i} points="80 120 80 110.01 75 115"/>
        <polygon fill={f} points="75 115 80 110.01 79.99 110 70 110"/>
        <polygon fill={h} points="80 130 90 130 85 125"/>
        <polygon fill={i} points="80 120 80 130 85 125"/>
        <polygon fill={g} points="90 130 90 120.01 85 125"/>
        <polygon fill={d} points="85 125 90 120.01 89.99 120 80 120"/>
        <polygon fill={b} points="109.95 100.05 109.95 100.05 109.94 100.04 109.95 100.05 120 90 90 90 105 105"/>
        <polygon fill={c} points="100 110 105 105 90 90 90 120 99.97 110.03"/>
        <polygon fill={b} points="110.05 119.94 110.05 119.95 110.06 119.95 110.05 119.95 100 129.99 130 129.99 115 114.99"/>
        <polygon fill={c} points="120 109.99 115 114.99 130 129.99 130 99.99 120.03 109.97"/>
        <polygon fill={d} points="94.99 115.01 90 120 99.99 120"/>
        <polygon fill={i} points="100 120 100 110 99.97 110.03 94.99 115.01 99.99 120"/>
        <rect fill={i} x="100" y="129.99" width="9.99" height=".01"/>
        <polygon fill={e} points="115 95 110 100 120 100"/>
        <polygon fill={f} points="105 105 100 110 109.99 110"/>
        <rect fill={i} x="109.99" y="129.99" width="20.01" height=".01"/>
        <polygon fill={g} points="110 110 110 100 109.95 100.05 109.95 100.05 105 105 105 105 109.99 110"/>
        <polygon fill={i} points="120 90 115 95 120 100"/>
        <polygon fill={f} points="110 110.01 114.99 115 115 114.99 119.99 110 110 110"/>
        <polygon fill={g} points="110 119.99 110.05 119.95 110.05 119.94 114.99 115 110 110.01"/>
        <polygon fill={i} points="120 109.99 120.03 109.97 125 105 120 100"/>
        <polygon fill={e} points="125 105 129.99 100 120 100"/>
        <polygon fill={i} points="100 129.99 104.99 125 100 120.01"/>
        <polygon fill={d} points="100 120.01 104.99 125 109.99 120 100 120"/>
        <polygon fill={e} points="120 90 120 100 125 95"/>
        <polygon fill={g} points="130 90 120 90 125 95"/>
        <polygon fill={i} points="120 100 129.99 100 125 95"/>
        <polygon fill={h} points="125 95 129.99 100 130 99.99 130 90"/>
        <polygon fill={f} points="110 100 110 110 115 105"/>
        <polygon fill={i} points="120 100 110 100 115 105"/>
        <polygon fill={g} points="110 110 119.99 110 115 105"/>
        <polygon fill={e} points="115 105 119.99 110 120 109.99 120 100"/>
        <polygon fill={d} points="100 110 100 120 105 115"/>
        <polygon fill={g} points="110 110 100 110 105 115"/>
        <polygon fill={i} points="100 120 109.99 120 105 115"/>
        <polygon fill={f} points="105 115 109.99 120 110 119.99 110 110"/>
        <polygon fill={h} points="90 120 90 130 95 125"/>
        <polygon fill={i} points="100 120 90 120 95 125"/>
        <polygon fill={g} points="90 130 99.99 130 95 125"/>
        <polygon fill={d} points="95 125 99.99 130 100 129.99 100 120"/>
        <polygon fill={b} points="140.05 110.05 140.05 110.05 140.04 110.06 140.05 110.05 130 100 130 130 145 115"/>
        <polygon fill={c} points="150 120 145 115 130 130 160 130 150.03 120.03"/>
        <polygon fill={b} points="159.94 109.95 159.95 109.95 159.96 109.94 159.95 109.95 169.99 120 169.99 90 154.99 105"/>
        <polygon fill={c} points="149.99 100 154.99 105 169.99 90 139.99 90 149.97 99.97"/>
        <polygon fill={d} points="155.01 125.01 160 130 160 120.01"/>
        <polygon fill={i} points="160 120 150 120 150.03 120.03 155.01 125.01 160 120.01"/>
        <rect fill={i} x="169.99" y="110.01" width=".01" height="9.99"/>
        <polygon fill={e} points="135 105 140 110 140 100"/>
        <polygon fill={f} points="145 115 150 120 150 110.01"/>
        <rect fill={i} x="169.99" y="90" width=".01" height="20.01"/>
        <polygon fill={g} points="150 110 140 110 140.05 110.05 140.05 110.05 145 115 145 115 150 110.01"/>
        <polygon fill={i} points="130 100 135 105 140 100"/>
        <polygon fill={f} points="150.01 110 155 105.01 154.99 105 150 100.01 150 110"/>
        <polygon fill={g} points="159.99 110 159.95 109.95 159.94 109.95 155 105.01 150.01 110"/>
        <polygon fill={i} points="149.99 100 149.97 99.97 145 95 140 100"/>
        <polygon fill={e} points="145 95 140 90.01 140 100"/>
        <polygon fill={i} points="169.99 120 165 115.01 160.01 120"/>
        <polygon fill={d} points="160.01 120 165 115.01 160 110.01 160 120"/>
        <polygon fill={e} points="130 100 140 100 135 95"/>
        <polygon fill={g} points="130 90 130 100 135 95"/>
        <polygon fill={i} points="140 100 140 90.01 135 95"/>
        <polygon fill={h} points="135 95 140 90.01 139.99 90 130 90"/>
        <polygon fill={f} points="140 110 150 110 145 105"/>
        <polygon fill={i} points="140 100 140 110 145 105"/>
        <polygon fill={g} points="150 110 150 100.01 145 105"/>
        <polygon fill={e} points="145 105 150 100.01 149.99 100 140 100"/>
        <polygon fill={d} points="150 120 160 120 155 115"/>
        <polygon fill={g} points="150 110 150 120 155 115"/>
        <polygon fill={i} points="160 120 160 110.01 155 115"/>
        <polygon fill={f} points="155 115 160 110.01 159.99 110 150 110"/>
        <polygon fill={h} points="160 130 170 130 165 125"/>
        <polygon fill={i} points="160 120 160 130 165 125"/>
        <polygon fill={g} points="170 130 170 120.01 165 125"/>
        <polygon fill={d} points="165 125 170 120.01 169.99 120 160 120"/>
        <polygon fill={b} points="189.95 100.05 189.95 100.05 189.94 100.04 189.95 100.05 200 90 170 90 185 105"/>
        <polygon fill={c} points="180 110 185 105 170 90 170 120 179.97 110.03"/>
        <polygon fill={b} points="190.05 119.94 190.05 119.95 190.06 119.95 190.05 119.95 180 129.99 210 129.99 195 114.99"/>
        <polygon fill={c} points="200 109.99 195 114.99 210 129.99 210 99.99 200.03 109.97"/>
        <polygon fill={d} points="174.99 115.01 170 120 179.99 120"/>
        <polygon fill={i} points="180 120 180 110 179.97 110.03 174.99 115.01 179.99 120"/>
        <rect fill={i} x="180" y="129.99" width="9.99" height=".01"/>
        <polygon fill={e} points="195 95 190 100 200 100"/>
        <polygon fill={f} points="185 105 180 110 189.99 110"/>
        <rect fill={i} x="189.99" y="129.99" width="20.01" height=".01"/>
        <polygon fill={g} points="190 110 190 100 189.95 100.05 189.95 100.05 185 105 185 105 189.99 110"/>
        <polygon fill={i} points="200 90 195 95 200 100"/>
        <polygon fill={f} points="190 110.01 194.99 115 195 114.99 199.99 110 190 110"/>
        <polygon fill={g} points="190 119.99 190.05 119.95 190.05 119.94 194.99 115 190 110.01"/>
        <polygon fill={i} points="200 109.99 200.03 109.97 205 105 200 100"/>
        <polygon fill={e} points="205 105 209.99 100 200 100"/>
        <polygon fill={i} points="180 129.99 184.99 125 180 120.01"/>
        <polygon fill={d} points="180 120.01 184.99 125 189.99 120 180 120"/>
        <polygon fill={e} points="200 90 200 100 205 95"/>
        <polygon fill={g} points="210 90 200 90 205 95"/>
        <polygon fill={i} points="200 100 209.99 100 205 95"/>
        <polygon fill={h} points="205 95 209.99 100 210 99.99 210 90"/>
        <polygon fill={f} points="190 100 190 110 195 105"/>
        <polygon fill={i} points="200 100 190 100 195 105"/>
        <polygon fill={g} points="190 110 199.99 110 195 105"/>
        <polygon fill={e} points="195 105 199.99 110 200 109.99 200 100"/>
        <polygon fill={d} points="180 110 180 120 185 115"/>
        <polygon fill={g} points="190 110 180 110 185 115"/>
        <polygon fill={i} points="180 120 189.99 120 185 115"/>
        <polygon fill={f} points="185 115 189.99 120 190 119.99 190 110"/>
        <polygon fill={h} points="170 120 170 130 175 125"/>
        <polygon fill={i} points="180 120 170 120 175 125"/>
        <polygon fill={g} points="170 130 179.99 130 175 125"/>
        <polygon fill={d} points="175 125 179.99 130 180 129.99 180 120"/>
        <polygon fill={b} points="220.05 110.05 220.05 110.05 220.04 110.06 220.05 110.05 210 100 210 130 225 115"/>
        <polygon fill={c} points="230 120 225 115 210 130 240 130 230.03 120.03"/>
        <polygon fill={b} points="239.94 109.95 239.95 109.95 239.96 109.94 239.95 109.95 249.99 120 249.99 90 234.99 105"/>
        <polygon fill={c} points="229.99 100 234.99 105 249.99 90 219.99 90 229.97 99.97"/>
        <polygon fill={d} points="235.01 125.01 240 130 240 120.01"/>
        <polygon fill={i} points="240 120 230 120 230.03 120.03 235.01 125.01 240 120.01"/>
        <rect fill={i} x="249.99" y="110.01" width=".01" height="9.99"/>
        <polygon fill={e} points="215 105 220 110 220 100"/>
        <polygon fill={f} points="225 115 230 120 230 110.01"/>
        <rect fill={i} x="249.99" y="90" width=".01" height="20.01"/>
        <polygon fill={g} points="230 110 220 110 220.05 110.05 220.05 110.05 225 115 225 115 230 110.01"/>
        <polygon fill={i} points="210 100 215 105 220 100"/>
        <polygon fill={f} points="230.01 110 235 105.01 234.99 105 230 100.01 230 110"/>
        <polygon fill={g} points="239.99 110 239.95 109.95 239.94 109.95 235 105.01 230.01 110"/>
        <polygon fill={i} points="229.99 100 229.97 99.97 225 95 220 100"/>
        <polygon fill={e} points="225 95 220 90.01 220 100"/>
        <polygon fill={i} points="249.99 120 245 115.01 240.01 120"/>
        <polygon fill={d} points="240.01 120 245 115.01 240 110.01 240 120"/>
        <polygon fill={e} points="210 100 220 100 215 95"/>
        <polygon fill={g} points="210 90 210 100 215 95"/>
        <polygon fill={i} points="220 100 220 90.01 215 95"/>
        <polygon fill={h} points="215 95 220 90.01 219.99 90 210 90"/>
        <polygon fill={f} points="220 110 230 110 225 105"/>
        <polygon fill={i} points="220 100 220 110 225 105"/>
        <polygon fill={g} points="230 110 230 100.01 225 105"/>
        <polygon fill={e} points="225 105 230 100.01 229.99 100 220 100"/>
        <polygon fill={d} points="230 120 240 120 235 115"/>
        <polygon fill={g} points="230 110 230 120 235 115"/>
        <polygon fill={i} points="240 120 240 110.01 235 115"/>
        <polygon fill={f} points="235 115 240 110.01 239.99 110 230 110"/>
        <polygon fill={h} points="240 130 250 130 245 125"/>
        <polygon fill={i} points="240 120 240 130 245 125"/>
        <polygon fill={g} points="250 130 250 120.01 245 125"/>
        <polygon fill={d} points="245 125 250 120.01 249.99 120 240 120"/>
        <polygon fill={b} points="39.95 149.95 39.95 149.95 39.96 149.94 39.95 149.95 50 160 50 130 35 145"/>
        <polygon fill={c} points="30 140 35 145 50 130 20 130 29.97 139.97"/>
        <polygon fill={b} points="20.06 150.05 20.05 150.05 20.05 150.06 20.05 150.05 10.01 140 10.01 170 25.01 155"/>
        <polygon fill={c} points="30.01 160 25.01 155 10.01 170 40.01 170 30.03 160.03"/>
        <polygon fill={d} points="24.99 134.99 20 130 20 139.99"/>
        <polygon fill={i} points="20 140 30 140 29.97 139.97 24.99 134.99 20 139.99"/>
        <rect fill={i} x="10" y="140" width=".01" height="9.99"/>
        <polygon fill={e} points="45 155 40 150 40 160"/>
        <polygon fill={f} points="35 145 30 140 30 149.99"/>
        <rect fill={i} x="10" y="149.99" width=".01" height="20.01"/>
        <polygon fill={g} points="30 150 40 150 39.95 149.95 39.95 149.95 35 145 35 145 30 149.99"/>
        <polygon fill={i} points="50 160 45 155 40 160"/>
        <polygon fill={f} points="29.99 150 25 154.99 25.01 155 30 159.99 30 150"/>
        <polygon fill={g} points="20.01 150 20.05 150.05 20.06 150.05 25 154.99 29.99 150"/>
        <polygon fill={i} points="30.01 160 30.03 160.03 35 165 40 160"/>
        <polygon fill={e} points="35 165 40 169.99 40 160"/>
        <polygon fill={i} points="10.01 140 15 144.99 19.99 140"/>
        <polygon fill={d} points="19.99 140 15 144.99 20 149.99 20 140"/>
        <polygon fill={e} points="50 160 40 160 45 165"/>
        <polygon fill={g} points="50 170 50 160 45 165"/>
        <polygon fill={i} points="40 160 40 169.99 45 165"/>
        <polygon fill={h} points="45 165 40 169.99 40.01 170 50 170"/>
        <polygon fill={f} points="40 150 30 150 35 155"/>
        <polygon fill={i} points="40 160 40 150 35 155"/>
        <polygon fill={g} points="30 150 30 159.99 35 155"/>
        <polygon fill={e} points="35 155 30 159.99 30.01 160 40 160"/>
        <polygon fill={d} points="30 140 20 140 25 145"/>
        <polygon fill={g} points="30 150 30 140 25 145"/>
        <polygon fill={i} points="20 140 20 149.99 25 145"/>
        <polygon fill={f} points="25 145 20 149.99 20.01 150 30 150"/>
        <polygon fill={h} points="20 130 10 130 15 135"/>
        <polygon fill={i} points="20 140 20 130 15 135"/>
        <polygon fill={g} points="10 130 10 139.99 15 135"/>
        <polygon fill={d} points="15 135 10 139.99 10.01 140 20 140"/>
        <polygon fill={b} points="69.95 140.05 69.95 140.05 69.94 140.04 69.95 140.05 80 130 50 130 65 145"/>
        <polygon fill={c} points="60 150 65 145 50 130 50 160 59.97 150.03"/>
        <polygon fill={b} points="70.05 159.94 70.05 159.95 70.06 159.96 70.05 159.95 60 169.99 90 169.99 75 154.99"/>
        <polygon fill={c} points="80 149.99 75 154.99 90 169.99 90 139.99 80.03 149.97"/>
        <polygon fill={d} points="54.99 155.01 50 160 59.99 160"/>
        <polygon fill={i} points="60 160 60 150 59.97 150.03 54.99 155.01 59.99 160"/>
        <rect fill={i} x="60" y="169.99" width="9.99" height=".01"/>
        <polygon fill={e} points="75 135 70 140 80 140"/>
        <polygon fill={f} points="65 145 60 150 69.99 150"/>
        <rect fill={i} x="69.99" y="169.99" width="20.01" height=".01"/>
        <polygon fill={g} points="70 150 70 140 69.95 140.05 69.95 140.05 65 145 65 145 69.99 150"/>
        <polygon fill={i} points="80 130 75 135 80 140"/>
        <polygon fill={f} points="70 150.01 74.99 155 75 154.99 79.99 150 70 150"/>
        <polygon fill={g} points="70 159.99 70.05 159.95 70.05 159.94 74.99 155 70 150.01"/>
        <polygon fill={i} points="80 149.99 80.03 149.97 85 145 80 140"/>
        <polygon fill={e} points="85 145 89.99 140 80 140"/>
        <polygon fill={i} points="60 169.99 64.99 165 60 160.01"/>
        <polygon fill={d} points="60 160.01 64.99 165 69.99 160 60 160"/>
        <polygon fill={e} points="80 130 80 140 85 135"/>
        <polygon fill={g} points="90 130 80 130 85 135"/>
        <polygon fill={i} points="80 140 89.99 140 85 135"/>
        <polygon fill={h} points="85 135 89.99 140 90 139.99 90 130"/>
        <polygon fill={f} points="70 140 70 150 75 145"/>
        <polygon fill={i} points="80 140 70 140 75 145"/>
        <polygon fill={g} points="70 150 79.99 150 75 145"/>
        <polygon fill={e} points="75 145 79.99 150 80 149.99 80 140"/>
        <polygon fill={d} points="60 150 60 160 65 155"/>
        <polygon fill={g} points="70 150 60 150 65 155"/>
        <polygon fill={i} points="60 160 69.99 160 65 155"/>
        <polygon fill={f} points="65 155 69.99 160 70 159.99 70 150"/>
        <polygon fill={h} points="50 160 50 170 55 165"/>
        <polygon fill={i} points="60 160 50 160 55 165"/>
        <polygon fill={g} points="50 170 59.99 170 55 165"/>
        <polygon fill={d} points="55 165 59.99 170 60 169.99 60 160"/>
        <polygon fill={b} points="119.95 149.95 119.95 149.95 119.96 149.94 119.95 149.95 130 160 130 130 115 145"/>
        <polygon fill={c} points="110 140 115 145 130 130 100 130 109.97 139.97"/>
        <polygon fill={b} points="100.06 150.05 100.05 150.05 100.05 150.06 100.05 150.05 90.01 140 90.01 170 105.01 155"/>
        <polygon fill={c} points="110.01 160 105.01 155 90.01 170 120.01 170 110.03 160.03"/>
        <polygon fill={d} points="104.99 134.99 100 130 100 139.99"/>
        <polygon fill={i} points="100 140 110 140 109.97 139.97 104.99 134.99 100 139.99"/>
        <rect fill={i} x="90" y="140" width=".01" height="9.99"/>
        <polygon fill={e} points="125 155 120 150 120 160"/>
        <polygon fill={f} points="115 145 110 140 110 149.99"/>
        <rect fill={i} x="90" y="149.99" width=".01" height="20.01"/>
        <polygon fill={g} points="110 150 120 150 119.95 149.95 119.95 149.95 115 145 115 145 110 149.99"/>
        <polygon fill={i} points="130 160 125 155 120 160"/>
        <polygon fill={f} points="109.99 150 105 154.99 105.01 155 110 159.99 110 150"/>
        <polygon fill={g} points="100.01 150 100.05 150.05 100.06 150.05 105 154.99 109.99 150"/>
        <polygon fill={i} points="110.01 160 110.03 160.03 115 165 120 160"/>
        <polygon fill={e} points="115 165 120 169.99 120 160"/>
        <polygon fill={i} points="90.01 140 95 144.99 99.99 140"/>
        <polygon fill={d} points="99.99 140 95 144.99 100 149.99 100 140"/>
        <polygon fill={e} points="130 160 120 160 125 165"/>
        <polygon fill={g} points="130 170 130 160 125 165"/>
        <polygon fill={i} points="120 160 120 169.99 125 165"/>
        <polygon fill={h} points="125 165 120 169.99 120.01 170 130 170"/>
        <polygon fill={f} points="120 150 110 150 115 155"/>
        <polygon fill={i} points="120 160 120 150 115 155"/>
        <polygon fill={g} points="110 150 110 159.99 115 155"/>
        <polygon fill={e} points="115 155 110 159.99 110.01 160 120 160"/>
        <polygon fill={d} points="110 140 100 140 105 145"/>
        <polygon fill={g} points="110 150 110 140 105 145"/>
        <polygon fill={i} points="100 140 100 149.99 105 145"/>
        <polygon fill={f} points="105 145 100 149.99 100.01 150 110 150"/>
        <polygon fill={h} points="100 130 90 130 95 135"/>
        <polygon fill={i} points="100 140 100 130 95 135"/>
        <polygon fill={g} points="90 130 90 139.99 95 135"/>
        <polygon fill={d} points="95 135 90 139.99 90.01 140 100 140"/>
        <polygon fill={b} points="149.95 140.05 149.95 140.05 149.94 140.04 149.95 140.05 160 130 130 130 145 145"/>
        <polygon fill={c} points="140 150 145 145 130 130 130 160 139.97 150.03"/>
        <polygon fill={b} points="150.05 159.94 150.05 159.95 150.06 159.96 150.05 159.95 140 169.99 170 169.99 155 154.99"/>
        <polygon fill={c} points="160 149.99 155 154.99 170 169.99 170 139.99 160.03 149.97"/>
        <polygon fill={d} points="134.99 155.01 130 160 139.99 160"/>
        <polygon fill={i} points="140 160 140 150 139.97 150.03 134.99 155.01 139.99 160"/>
        <rect fill={i} x="140" y="169.99" width="9.99" height=".01"/>
        <polygon fill={e} points="155 135 150 140 160 140"/>
        <polygon fill={f} points="145 145 140 150 149.99 150"/>
        <rect fill={i} x="149.99" y="169.99" width="20.01" height=".01"/>
        <polygon fill={g} points="150 150 150 140 149.95 140.05 149.95 140.05 145 145 145 145 149.99 150"/>
        <polygon fill={i} points="160 130 155 135 160 140"/>
        <polygon fill={f} points="150 150.01 154.99 155 155 154.99 159.99 150 150 150"/>
        <polygon fill={g} points="150 159.99 150.05 159.95 150.05 159.94 154.99 155 150 150.01"/>
        <polygon fill={i} points="160 149.99 160.03 149.97 165 145 160 140"/>
        <polygon fill={e} points="165 145 169.99 140 160 140"/>
        <polygon fill={i} points="140 169.99 144.99 165 140 160.01"/>
        <polygon fill={d} points="140 160.01 144.99 165 149.99 160 140 160"/>
        <polygon fill={e} points="160 130 160 140 165 135"/>
        <polygon fill={g} points="170 130 160 130 165 135"/>
        <polygon fill={i} points="160 140 169.99 140 165 135"/>
        <polygon fill={h} points="165 135 169.99 140 170 139.99 170 130"/>
        <polygon fill={f} points="150 140 150 150 155 145"/>
        <polygon fill={i} points="160 140 150 140 155 145"/>
        <polygon fill={g} points="150 150 159.99 150 155 145"/>
        <polygon fill={e} points="155 145 159.99 150 160 149.99 160 140"/>
        <polygon fill={d} points="140 150 140 160 145 155"/>
        <polygon fill={g} points="150 150 140 150 145 155"/>
        <polygon fill={i} points="140 160 149.99 160 145 155"/>
        <polygon fill={f} points="145 155 149.99 160 150 159.99 150 150"/>
        <polygon fill={h} points="130 160 130 170 135 165"/>
        <polygon fill={i} points="140 160 130 160 135 165"/>
        <polygon fill={g} points="130 170 139.99 170 135 165"/>
        <polygon fill={d} points="135 165 139.99 170 140 169.99 140 160"/>
        <polygon fill={b} points="199.95 149.95 199.95 149.95 199.96 149.94 199.95 149.95 210 160 210 130 195 145"/>
        <polygon fill={c} points="190 140 195 145 210 130 180 130 189.97 139.97"/>
        <polygon fill={b} points="180.06 150.05 180.05 150.05 180.04 150.06 180.05 150.05 170.01 140 170.01 170 185.01 155"/>
        <polygon fill={c} points="190.01 160 185.01 155 170.01 170 200.01 170 190.03 160.03"/>
        <polygon fill={d} points="184.99 134.99 180 130 180 139.99"/>
        <polygon fill={i} points="180 140 190 140 189.97 139.97 184.99 134.99 180 139.99"/>
        <rect fill={i} x="170" y="140" width=".01" height="9.99"/>
        <polygon fill={e} points="205 155 200 150 200 160"/>
        <polygon fill={f} points="195 145 190 140 190 149.99"/>
        <rect fill={i} x="170" y="149.99" width=".01" height="20.01"/>
        <polygon fill={g} points="190 150 200 150 199.95 149.95 199.95 149.95 195 145 195 145 190 149.99"/>
        <polygon fill={i} points="210 160 205 155 200 160"/>
        <polygon fill={f} points="189.99 150 185 154.99 185.01 155 190 159.99 190 150"/>
        <polygon fill={g} points="180.01 150 180.05 150.05 180.06 150.05 185 154.99 189.99 150"/>
        <polygon fill={i} points="190.01 160 190.03 160.03 195 165 200 160"/>
        <polygon fill={e} points="195 165 200 169.99 200 160"/>
        <polygon fill={i} points="170.01 140 175 144.99 179.99 140"/>
        <polygon fill={d} points="179.99 140 175 144.99 180 149.99 180 140"/>
        <polygon fill={e} points="210 160 200 160 205 165"/>
        <polygon fill={g} points="210 170 210 160 205 165"/>
        <polygon fill={i} points="200 160 200 169.99 205 165"/>
        <polygon fill={h} points="205 165 200 169.99 200.01 170 210 170"/>
        <polygon fill={f} points="200 150 190 150 195 155"/>
        <polygon fill={i} points="200 160 200 150 195 155"/>
        <polygon fill={g} points="190 150 190 159.99 195 155"/>
        <polygon fill={e} points="195 155 190 159.99 190.01 160 200 160"/>
        <polygon fill={d} points="190 140 180 140 185 145"/>
        <polygon fill={g} points="190 150 190 140 185 145"/>
        <polygon fill={i} points="180 140 180 149.99 185 145"/>
        <polygon fill={f} points="185 145 180 149.99 180.01 150 190 150"/>
        <polygon fill={h} points="180 130 170 130 175 135"/>
        <polygon fill={i} points="180 140 180 130 175 135"/>
        <polygon fill={g} points="170 130 170 139.99 175 135"/>
        <polygon fill={d} points="175 135 170 139.99 170.01 140 180 140"/>
        <polygon fill={b} points="229.95 140.05 229.95 140.05 229.94 140.04 229.95 140.05 240 130 210 130 225 145"/>
        <polygon fill={c} points="220 150 225 145 210 130 210 160 219.97 150.03"/>
        <polygon fill={b} points="230.05 159.94 230.05 159.95 230.06 159.96 230.05 159.95 220 169.99 250 169.99 235 154.99"/>
        <polygon fill={c} points="240 149.99 235 154.99 250 169.99 250 139.99 240.03 149.97"/>
        <polygon fill={d} points="214.99 155.01 210 160 219.99 160"/>
        <polygon fill={i} points="220 160 220 150 219.97 150.03 214.99 155.01 219.99 160"/>
        <rect fill={i} x="220" y="169.99" width="9.99" height=".01"/>
        <polygon fill={e} points="235 135 230 140 240 140"/>
        <polygon fill={f} points="225 145 220 150 229.99 150"/>
        <rect fill={i} x="229.99" y="169.99" width="20.01" height=".01"/>
        <polygon fill={g} points="230 150 230 140 229.95 140.05 229.95 140.05 225 145 225 145 229.99 150"/>
        <polygon fill={i} points="240 130 235 135 240 140"/>
        <polygon fill={f} points="230 150.01 234.99 155 235 154.99 239.99 150 230 150"/>
        <polygon fill={g} points="230 159.99 230.05 159.95 230.05 159.94 234.99 155 230 150.01"/>
        <polygon fill={i} points="240 149.99 240.03 149.97 245 145 240 140"/>
        <polygon fill={e} points="245 145 249.99 140 240 140"/>
        <polygon fill={i} points="220 169.99 224.99 165 220 160.01"/>
        <polygon fill={d} points="220 160.01 224.99 165 229.99 160 220 160"/>
        <polygon fill={e} points="240 130 240 140 245 135"/>
        <polygon fill={g} points="250 130 240 130 245 135"/>
        <polygon fill={i} points="240 140 249.99 140 245 135"/>
        <polygon fill={h} points="245 135 249.99 140 250 139.99 250 130"/>
        <polygon fill={f} points="230 140 230 150 235 145"/>
        <polygon fill={i} points="240 140 230 140 235 145"/>
        <polygon fill={g} points="230 150 239.99 150 235 145"/>
        <polygon fill={e} points="235 145 239.99 150 240 149.99 240 140"/>
        <polygon fill={d} points="220 150 220 160 225 155"/>
        <polygon fill={g} points="230 150 220 150 225 155"/>
        <polygon fill={i} points="220 160 229.99 160 225 155"/>
        <polygon fill={f} points="225 155 229.99 160 230 159.99 230 150"/>
        <polygon fill={h} points="210 160 210 170 215 165"/>
        <polygon fill={i} points="220 160 210 160 215 165"/>
        <polygon fill={g} points="210 170 219.99 170 215 165"/>
        <polygon fill={d} points="215 165 219.99 170 220 169.99 220 160"/>
        <polygon fill={b} points="29.95 180.05 29.95 180.05 29.94 180.04 29.95 180.05 40 170 10 170 25 185"/>
        <polygon fill={c} points="20 190 25 185 10 170 10 200 19.97 190.03"/>
        <polygon fill={b} points="30.05 199.94 30.05 199.95 30.06 199.96 30.05 199.95 20 209.99 50 209.99 35 194.99"/>
        <polygon fill={c} points="40 189.99 35 194.99 50 209.99 50 179.99 40.03 189.97"/>
        <polygon fill={d} points="14.99 195.01 10 200 19.99 200"/>
        <polygon fill={i} points="20 200 20 190 19.97 190.03 14.99 195.01 19.99 200"/>
        <rect fill={i} x="20" y="209.99" width="9.99" height=".01"/>
        <polygon fill={e} points="35 175 30 180 40 180"/>
        <polygon fill={f} points="25 185 20 190 29.99 190"/>
        <rect fill={i} x="29.99" y="209.99" width="20.01" height=".01"/>
        <polygon fill={g} points="30 190 30 180 29.95 180.05 29.95 180.05 25 185 25 185 29.99 190"/>
        <polygon fill={i} points="40 170 35 175 40 180"/>
        <polygon fill={f} points="30 190.01 34.99 195 35 194.99 39.99 190 30 190"/>
        <polygon fill={g} points="30 199.99 30.05 199.95 30.05 199.94 34.99 195 30 190.01"/>
        <polygon fill={i} points="40 189.99 40.03 189.97 45 185 40 180"/>
        <polygon fill={e} points="45 185 49.99 180 40 180"/>
        <polygon fill={i} points="20 209.99 24.99 205 20 200.01"/>
        <polygon fill={d} points="20 200.01 24.99 205 29.99 200 20 200"/>
        <polygon fill={e} points="40 170 40 180 45 175"/>
        <polygon fill={g} points="50 170 40 170 45 175"/>
        <polygon fill={i} points="40 180 49.99 180 45 175"/>
        <polygon fill={h} points="45 175 49.99 180 50 179.99 50 170"/>
        <polygon fill={f} points="30 180 30 190 35 185"/>
        <polygon fill={i} points="40 180 30 180 35 185"/>
        <polygon fill={g} points="30 190 39.99 190 35 185"/>
        <polygon fill={e} points="35 185 39.99 190 40 189.99 40 180"/>
        <polygon fill={d} points="20 190 20 200 25 195"/>
        <polygon fill={g} points="30 190 20 190 25 195"/>
        <polygon fill={i} points="20 200 29.99 200 25 195"/>
        <polygon fill={f} points="25 195 29.99 200 30 199.99 30 190"/>
        <polygon fill={h} points="10 200 10 210 15 205"/>
        <polygon fill={i} points="20 200 10 200 15 205"/>
        <polygon fill={g} points="10 210 19.99 210 15 205"/>
        <polygon fill={d} points="15 205 19.99 210 20 209.99 20 200"/>
        <polygon fill={b} points="60.05 190.05 60.05 190.05 60.04 190.06 60.05 190.05 50 180 50 210 65 195"/>
        <polygon fill={c} points="70 200 65 195 50 210 80 210 70.03 200.03"/>
        <polygon fill={b} points="79.94 189.95 79.95 189.95 79.95 189.94 79.95 189.95 89.99 200 89.99 170 74.99 185"/>
        <polygon fill={c} points="69.99 180 74.99 185 89.99 170 59.99 170 69.97 179.97"/>
        <polygon fill={d} points="75.01 205.01 80 210 80 200.01"/>
        <polygon fill={i} points="80 200 70 200 70.03 200.03 75.01 205.01 80 200.01"/>
        <rect fill={i} x="89.99" y="190.01" width=".01" height="9.99"/>
        <polygon fill={e} points="55 185 60 190 60 180"/>
        <polygon fill={f} points="65 195 70 200 70 190.01"/>
        <rect fill={i} x="89.99" y="170" width=".01" height="20.01"/>
        <polygon fill={g} points="70 190 60 190 60.05 190.05 60.05 190.05 65 195 65 195 70 190.01"/>
        <polygon fill={i} points="50 180 55 185 60 180"/>
        <polygon fill={f} points="70.01 190 75 185.01 74.99 185 70 180.01 70 190"/>
        <polygon fill={g} points="79.99 190 79.95 189.95 79.94 189.95 75 185.01 70.01 190"/>
        <polygon fill={i} points="69.99 180 69.97 179.97 65 175 60 180"/>
        <polygon fill={e} points="65 175 60 170.01 60 180"/>
        <polygon fill={i} points="89.99 200 85 195.01 80.01 200"/>
        <polygon fill={d} points="80.01 200 85 195.01 80 190.01 80 200"/>
        <polygon fill={e} points="50 180 60 180 55 175"/>
        <polygon fill={g} points="50 170 50 180 55 175"/>
        <polygon fill={i} points="60 180 60 170.01 55 175"/>
        <polygon fill={h} points="55 175 60 170.01 59.99 170 50 170"/>
        <polygon fill={f} points="60 190 70 190 65 185"/>
        <polygon fill={i} points="60 180 60 190 65 185"/>
        <polygon fill={g} points="70 190 70 180.01 65 185"/>
        <polygon fill={e} points="65 185 70 180.01 69.99 180 60 180"/>
        <polygon fill={d} points="70 200 80 200 75 195"/>
        <polygon fill={g} points="70 190 70 200 75 195"/>
        <polygon fill={i} points="80 200 80 190.01 75 195"/>
        <polygon fill={f} points="75 195 80 190.01 79.99 190 70 190"/>
        <polygon fill={h} points="80 210 90 210 85 205"/>
        <polygon fill={i} points="80 200 80 210 85 205"/>
        <polygon fill={g} points="90 210 90 200.01 85 205"/>
        <polygon fill={d} points="85 205 90 200.01 89.99 200 80 200"/>
        <polygon fill={b} points="109.95 180.05 109.95 180.05 109.94 180.04 109.95 180.05 120 170 90 170 105 185"/>
        <polygon fill={c} points="100 190 105 185 90 170 90 200 99.97 190.03"/>
        <polygon fill={b} points="110.05 199.94 110.05 199.95 110.06 199.96 110.05 199.95 100 209.99 130 209.99 115 194.99"/>
        <polygon fill={c} points="120 189.99 115 194.99 130 209.99 130 179.99 120.03 189.97"/>
        <polygon fill={d} points="94.99 195.01 90 200 99.99 200"/>
        <polygon fill={i} points="100 200 100 190 99.97 190.03 94.99 195.01 99.99 200"/>
        <rect fill={i} x="100" y="209.99" width="9.99" height=".01"/>
        <polygon fill={e} points="115 175 110 180 120 180"/>
        <polygon fill={f} points="105 185 100 190 109.99 190"/>
        <rect fill={i} x="109.99" y="209.99" width="20.01" height=".01"/>
        <polygon fill={g} points="110 190 110 180 109.95 180.05 109.95 180.05 105 185 105 185 109.99 190"/>
        <polygon fill={i} points="120 170 115 175 120 180"/>
        <polygon fill={f} points="110 190.01 114.99 195 115 194.99 119.99 190 110 190"/>
        <polygon fill={g} points="110 199.99 110.05 199.95 110.05 199.94 114.99 195 110 190.01"/>
        <polygon fill={i} points="120 189.99 120.03 189.97 125 185 120 180"/>
        <polygon fill={e} points="125 185 129.99 180 120 180"/>
        <polygon fill={i} points="100 209.99 104.99 205 100 200.01"/>
        <polygon fill={d} points="100 200.01 104.99 205 109.99 200 100 200"/>
        <polygon fill={e} points="120 170 120 180 125 175"/>
        <polygon fill={g} points="130 170 120 170 125 175"/>
        <polygon fill={i} points="120 180 129.99 180 125 175"/>
        <polygon fill={h} points="125 175 129.99 180 130 179.99 130 170"/>
        <polygon fill={f} points="110 180 110 190 115 185"/>
        <polygon fill={i} points="120 180 110 180 115 185"/>
        <polygon fill={g} points="110 190 119.99 190 115 185"/>
        <polygon fill={e} points="115 185 119.99 190 120 189.99 120 180"/>
        <polygon fill={d} points="100 190 100 200 105 195"/>
        <polygon fill={g} points="110 190 100 190 105 195"/>
        <polygon fill={i} points="100 200 109.99 200 105 195"/>
        <polygon fill={f} points="105 195 109.99 200 110 199.99 110 190"/>
        <polygon fill={h} points="90 200 90 210 95 205"/>
        <polygon fill={i} points="100 200 90 200 95 205"/>
        <polygon fill={g} points="90 210 99.99 210 95 205"/>
        <polygon fill={d} points="95 205 99.99 210 100 209.99 100 200"/>
        <polygon fill={b} points="140.05 190.05 140.05 190.05 140.04 190.06 140.05 190.05 130 180 130 210 145 195"/>
        <polygon fill={c} points="150 200 145 195 130 210 160 210 150.03 200.03"/>
        <polygon fill={b} points="159.94 189.95 159.95 189.95 159.96 189.94 159.95 189.95 169.99 200 169.99 170 154.99 185"/>
        <polygon fill={c} points="149.99 180 154.99 185 169.99 170 139.99 170 149.97 179.97"/>
        <polygon fill={d} points="155.01 205.01 160 210 160 200.01"/>
        <polygon fill={i} points="160 200 150 200 150.03 200.03 155.01 205.01 160 200.01"/>
        <rect fill={i} x="169.99" y="190.01" width=".01" height="9.99"/>
        <polygon fill={e} points="135 185 140 190 140 180"/>
        <polygon fill={f} points="145 195 150 200 150 190.01"/>
        <rect fill={i} x="169.99" y="170" width=".01" height="20.01"/>
        <polygon fill={g} points="150 190 140 190 140.05 190.05 140.05 190.05 145 195 145 195 150 190.01"/>
        <polygon fill={i} points="130 180 135 185 140 180"/>
        <polygon fill={f} points="150.01 190 155 185.01 154.99 185 150 180.01 150 190"/>
        <polygon fill={g} points="159.99 190 159.95 189.95 159.94 189.95 155 185.01 150.01 190"/>
        <polygon fill={i} points="149.99 180 149.97 179.97 145 175 140 180"/>
        <polygon fill={e} points="145 175 140 170.01 140 180"/>
        <polygon fill={i} points="169.99 200 165 195.01 160.01 200"/>
        <polygon fill={d} points="160.01 200 165 195.01 160 190.01 160 200"/>
        <polygon fill={e} points="130 180 140 180 135 175"/>
        <polygon fill={g} points="130 170 130 180 135 175"/>
        <polygon fill={i} points="140 180 140 170.01 135 175"/>
        <polygon fill={h} points="135 175 140 170.01 139.99 170 130 170"/>
        <polygon fill={f} points="140 190 150 190 145 185"/>
        <polygon fill={i} points="140 180 140 190 145 185"/>
        <polygon fill={g} points="150 190 150 180.01 145 185"/>
        <polygon fill={e} points="145 185 150 180.01 149.99 180 140 180"/>
        <polygon fill={d} points="150 200 160 200 155 195"/>
        <polygon fill={g} points="150 190 150 200 155 195"/>
        <polygon fill={i} points="160 200 160 190.01 155 195"/>
        <polygon fill={f} points="155 195 160 190.01 159.99 190 150 190"/>
        <polygon fill={h} points="160 210 170 210 165 205"/>
        <polygon fill={i} points="160 200 160 210 165 205"/>
        <polygon fill={g} points="170 210 170 200.01 165 205"/>
        <polygon fill={d} points="165 205 170 200.01 169.99 200 160 200"/>
        <polygon fill={b} points="189.95 180.05 189.95 180.05 189.94 180.04 189.95 180.05 200 170 170 170 185 185"/>
        <polygon fill={c} points="180 190 185 185 170 170 170 200 179.97 190.03"/>
        <polygon fill={b} points="190.05 199.94 190.05 199.95 190.06 199.96 190.05 199.95 180 209.99 210 209.99 195 194.99"/>
        <polygon fill={c} points="200 189.99 195 194.99 210 209.99 210 179.99 200.03 189.97"/>
        <polygon fill={d} points="174.99 195.01 170 200 179.99 200"/>
        <polygon fill={i} points="180 200 180 190 179.97 190.03 174.99 195.01 179.99 200"/>
        <rect fill={i} x="180" y="209.99" width="9.99" height=".01"/>
        <polygon fill={e} points="195 175 190 180 200 180"/>
        <polygon fill={f} points="185 185 180 190 189.99 190"/>
        <rect fill={i} x="189.99" y="209.99" width="20.01" height=".01"/>
        <polygon fill={g} points="190 190 190 180 189.95 180.05 189.95 180.05 185 185 185 185 189.99 190"/>
        <polygon fill={i} points="200 170 195 175 200 180"/>
        <polygon fill={f} points="190 190.01 194.99 195 195 194.99 199.99 190 190 190"/>
        <polygon fill={g} points="190 199.99 190.05 199.95 190.05 199.94 194.99 195 190 190.01"/>
        <polygon fill={i} points="200 189.99 200.03 189.97 205 185 200 180"/>
        <polygon fill={e} points="205 185 209.99 180 200 180"/>
        <polygon fill={i} points="180 209.99 184.99 205 180 200.01"/>
        <polygon fill={d} points="180 200.01 184.99 205 189.99 200 180 200"/>
        <polygon fill={e} points="200 170 200 180 205 175"/>
        <polygon fill={g} points="210 170 200 170 205 175"/>
        <polygon fill={i} points="200 180 209.99 180 205 175"/>
        <polygon fill={h} points="205 175 209.99 180 210 179.99 210 170"/>
        <polygon fill={f} points="190 180 190 190 195 185"/>
        <polygon fill={i} points="200 180 190 180 195 185"/>
        <polygon fill={g} points="190 190 199.99 190 195 185"/>
        <polygon fill={e} points="195 185 199.99 190 200 189.99 200 180"/>
        <polygon fill={d} points="180 190 180 200 185 195"/>
        <polygon fill={g} points="190 190 180 190 185 195"/>
        <polygon fill={i} points="180 200 189.99 200 185 195"/>
        <polygon fill={f} points="185 195 189.99 200 190 199.99 190 190"/>
        <polygon fill={h} points="170 200 170 210 175 205"/>
        <polygon fill={i} points="180 200 170 200 175 205"/>
        <polygon fill={g} points="170 210 179.99 210 175 205"/>
        <polygon fill={d} points="175 205 179.99 210 180 209.99 180 200"/>
        <polygon fill={b} points="220.05 190.05 220.05 190.05 220.04 190.06 220.05 190.05 210 180 210 210 225 195"/>
        <polygon fill={c} points="230 200 225 195 210 210 240 210 230.03 200.03"/>
        <polygon fill={b} points="239.94 189.95 239.95 189.95 239.96 189.94 239.95 189.95 249.99 200 249.99 170 234.99 185"/>
        <polygon fill={c} points="229.99 180 234.99 185 249.99 170 219.99 170 229.97 179.97"/>
        <polygon fill={d} points="235.01 205.01 240 210 240 200.01"/>
        <polygon fill={i} points="240 200 230 200 230.03 200.03 235.01 205.01 240 200.01"/>
        <rect fill={i} x="249.99" y="190.01" width=".01" height="9.99"/>
        <polygon fill={e} points="215 185 220 190 220 180"/>
        <polygon fill={f} points="225 195 230 200 230 190.01"/>
        <rect fill={i} x="249.99" y="170" width=".01" height="20.01"/>
        <polygon fill={g} points="230 190 220 190 220.05 190.05 220.05 190.05 225 195 225 195 230 190.01"/>
        <polygon fill={i} points="210 180 215 185 220 180"/>
        <polygon fill={f} points="230.01 190 235 185.01 234.99 185 230 180.01 230 190"/>
        <polygon fill={g} points="239.99 190 239.95 189.95 239.94 189.95 235 185.01 230.01 190"/>
        <polygon fill={i} points="229.99 180 229.97 179.97 225 175 220 180"/>
        <polygon fill={e} points="225 175 220 170.01 220 180"/>
        <polygon fill={i} points="249.99 200 245 195.01 240.01 200"/>
        <polygon fill={d} points="240.01 200 245 195.01 240 190.01 240 200"/>
        <polygon fill={e} points="210 180 220 180 215 175"/>
        <polygon fill={g} points="210 170 210 180 215 175"/>
        <polygon fill={i} points="220 180 220 170.01 215 175"/>
        <polygon fill={h} points="215 175 220 170.01 219.99 170 210 170"/>
        <polygon fill={f} points="220 190 230 190 225 185"/>
        <polygon fill={i} points="220 180 220 190 225 185"/>
        <polygon fill={g} points="230 190 230 180.01 225 185"/>
        <polygon fill={e} points="225 185 230 180.01 229.99 180 220 180"/>
        <polygon fill={d} points="230 200 240 200 235 195"/>
        <polygon fill={g} points="230 190 230 200 235 195"/>
        <polygon fill={i} points="240 200 240 190.01 235 195"/>
        <polygon fill={f} points="235 195 240 190.01 239.99 190 230 190"/>
        <polygon fill={h} points="240 210 250 210 245 205"/>
        <polygon fill={i} points="240 200 240 210 245 205"/>
        <polygon fill={g} points="250 210 250 200.01 245 205"/>
        <polygon fill={d} points="245 205 250 200.01 249.99 200 240 200"/>
        <polygon fill={b} points="20.05 230.05 20.05 230.05 20.04 230.06 20.05 230.05 10 220 10 250 25 235"/>
        <polygon fill={c} points="30 240 25 235 10 250 40 250 30.03 240.03"/>
        <polygon fill={b} points="39.94 229.95 39.95 229.95 39.95 229.94 39.95 229.95 49.99 240 49.99 210 34.99 225"/>
        <polygon fill={c} points="29.99 220 34.99 225 49.99 210 19.99 210 29.97 219.97"/>
        <polygon fill={d} points="35.01 245.01 40 250 40 240.01"/>
        <polygon fill={i} points="40 240 30 240 30.03 240.03 35.01 245.01 40 240.01"/>
        <rect fill={i} x="49.99" y="230.01" width=".01" height="9.99"/>
        <polygon fill={e} points="15 225 20 230 20 220"/>
        <polygon fill={f} points="25 235 30 240 30 230.01"/>
        <rect fill={i} x="49.99" y="210" width=".01" height="20.01"/>
        <polygon fill={g} points="30 230 20 230 20.05 230.05 20.05 230.05 25 235 25 235 30 230.01"/>
        <polygon fill={i} points="10 220 15 225 20 220"/>
        <polygon fill={f} points="30.01 230 35 225.01 34.99 225 30 220.01 30 230"/>
        <polygon fill={g} points="39.99 230 39.95 229.95 39.94 229.95 35 225.01 30.01 230"/>
        <polygon fill={i} points="29.99 220 29.97 219.97 25 215 20 220"/>
        <polygon fill={e} points="25 215 20 210.01 20 220"/>
        <polygon fill={i} points="49.99 240 45 235.01 40.01 240"/>
        <polygon fill={d} points="40.01 240 45 235.01 40 230.01 40 240"/>
        <polygon fill={e} points="10 220 20 220 15 215"/>
        <polygon fill={g} points="10 210 10 220 15 215"/>
        <polygon fill={i} points="20 220 20 210.01 15 215"/>
        <polygon fill={h} points="15 215 20 210.01 19.99 210 10 210"/>
        <polygon fill={f} points="20 230 30 230 25 225"/>
        <polygon fill={i} points="20 220 20 230 25 225"/>
        <polygon fill={g} points="30 230 30 220.01 25 225"/>
        <polygon fill={e} points="25 225 30 220.01 29.99 220 20 220"/>
        <polygon fill={d} points="30 240 40 240 35 235"/>
        <polygon fill={g} points="30 230 30 240 35 235"/>
        <polygon fill={i} points="40 240 40 230.01 35 235"/>
        <polygon fill={f} points="35 235 40 230.01 39.99 230 30 230"/>
        <polygon fill={h} points="40 250 50 250 45 245"/>
        <polygon fill={i} points="40 240 40 250 45 245"/>
        <polygon fill={g} points="50 250 50 240.01 45 245"/>
        <polygon fill={d} points="45 245 50 240.01 49.99 240 40 240"/>
        <polygon fill={b} points="69.95 220.05 69.95 220.05 69.94 220.04 69.95 220.05 80 210 50 210 65 225"/>
        <polygon fill={c} points="60 230 65 225 50 210 50 240 59.97 230.03"/>
        <polygon fill={b} points="70.05 239.94 70.05 239.95 70.06 239.96 70.05 239.95 60 249.99 90 249.99 75 234.99"/>
        <polygon fill={c} points="80 229.99 75 234.99 90 249.99 90 219.99 80.03 229.97"/>
        <polygon fill={d} points="54.99 235.01 50 240 59.99 240"/>
        <polygon fill={i} points="60 240 60 230 59.97 230.03 54.99 235.01 59.99 240"/>
        <rect fill={i} x="60" y="249.99" width="9.99" height=".01"/>
        <polygon fill={e} points="75 215 70 220 80 220"/>
        <polygon fill={f} points="65 225 60 230 69.99 230"/>
        <rect fill={i} x="69.99" y="249.99" width="20.01" height=".01"/>
        <polygon fill={g} points="70 230 70 220 69.95 220.05 69.95 220.05 65 225 65 225 69.99 230"/>
        <polygon fill={i} points="80 210 75 215 80 220"/>
        <polygon fill={f} points="70 230.01 74.99 235 75 234.99 79.99 230 70 230"/>
        <polygon fill={g} points="70 239.99 70.05 239.95 70.05 239.94 74.99 235 70 230.01"/>
        <polygon fill={i} points="80 229.99 80.03 229.97 85 225 80 220"/>
        <polygon fill={e} points="85 225 89.99 220 80 220"/>
        <polygon fill={i} points="60 249.99 64.99 245 60 240.01"/>
        <polygon fill={d} points="60 240.01 64.99 245 69.99 240 60 240"/>
        <polygon fill={e} points="80 210 80 220 85 215"/>
        <polygon fill={g} points="90 210 80 210 85 215"/>
        <polygon fill={i} points="80 220 89.99 220 85 215"/>
        <polygon fill={h} points="85 215 89.99 220 90 219.99 90 210"/>
        <polygon fill={f} points="70 220 70 230 75 225"/>
        <polygon fill={i} points="80 220 70 220 75 225"/>
        <polygon fill={g} points="70 230 79.99 230 75 225"/>
        <polygon fill={e} points="75 225 79.99 230 80 229.99 80 220"/>
        <polygon fill={d} points="60 230 60 240 65 235"/>
        <polygon fill={g} points="70 230 60 230 65 235"/>
        <polygon fill={i} points="60 240 69.99 240 65 235"/>
        <polygon fill={f} points="65 235 69.99 240 70 239.99 70 230"/>
        <polygon fill={h} points="50 240 50 250 55 245"/>
        <polygon fill={i} points="60 240 50 240 55 245"/>
        <polygon fill={g} points="50 250 59.99 250 55 245"/>
        <polygon fill={d} points="55 245 59.99 250 60 249.99 60 240"/>
        <polygon fill={b} points="100.05 230.05 100.05 230.05 100.04 230.06 100.05 230.05 90 220 90 250 105 235"/>
        <polygon fill={c} points="110 240 105 235 90 250 120 250 110.03 240.03"/>
        <polygon fill={b} points="119.94 229.95 119.95 229.95 119.95 229.94 119.95 229.95 129.99 240 129.99 210 114.99 225"/>
        <polygon fill={c} points="109.99 220 114.99 225 129.99 210 99.99 210 109.97 219.97"/>
        <polygon fill={d} points="115.01 245.01 120 250 120 240.01"/>
        <polygon fill={i} points="120 240 110 240 110.03 240.03 115.01 245.01 120 240.01"/>
        <rect fill={i} x="129.99" y="230.01" width=".01" height="9.99"/>
        <polygon fill={e} points="95 225 100 230 100 220"/>
        <polygon fill={f} points="105 235 110 240 110 230.01"/>
        <rect fill={i} x="129.99" y="210" width=".01" height="20.01"/>
        <polygon fill={g} points="110 230 100 230 100.05 230.05 100.05 230.05 105 235 105 235 110 230.01"/>
        <polygon fill={i} points="90 220 95 225 100 220"/>
        <polygon fill={f} points="110.01 230 115 225.01 114.99 225 110 220.01 110 230"/>
        <polygon fill={g} points="119.99 230 119.95 229.95 119.94 229.95 115 225.01 110.01 230"/>
        <polygon fill={i} points="109.99 220 109.97 219.97 105 215 100 220"/>
        <polygon fill={e} points="105 215 100 210.01 100 220"/>
        <polygon fill={i} points="129.99 240 125 235.01 120.01 240"/>
        <polygon fill={d} points="120.01 240 125 235.01 120 230.01 120 240"/>
        <polygon fill={e} points="90 220 100 220 95 215"/>
        <polygon fill={g} points="90 210 90 220 95 215"/>
        <polygon fill={i} points="100 220 100 210.01 95 215"/>
        <polygon fill={h} points="95 215 100 210.01 99.99 210 90 210"/>
        <polygon fill={f} points="100 230 110 230 105 225"/>
        <polygon fill={i} points="100 220 100 230 105 225"/>
        <polygon fill={g} points="110 230 110 220.01 105 225"/>
        <polygon fill={e} points="105 225 110 220.01 109.99 220 100 220"/>
        <polygon fill={d} points="110 240 120 240 115 235"/>
        <polygon fill={g} points="110 230 110 240 115 235"/>
        <polygon fill={i} points="120 240 120 230.01 115 235"/>
        <polygon fill={f} points="115 235 120 230.01 119.99 230 110 230"/>
        <polygon fill={h} points="120 250 130 250 125 245"/>
        <polygon fill={i} points="120 240 120 250 125 245"/>
        <polygon fill={g} points="130 250 130 240.01 125 245"/>
        <polygon fill={d} points="125 245 130 240.01 129.99 240 120 240"/>
        <polygon fill={b} points="149.95 220.05 149.95 220.05 149.94 220.04 149.95 220.05 160 210 130 210 145 225"/>
        <polygon fill={c} points="140 230 145 225 130 210 130 240 139.97 230.03"/>
        <polygon fill={b} points="150.05 239.94 150.05 239.95 150.06 239.96 150.05 239.95 140 249.99 170 249.99 155 234.99"/>
        <polygon fill={c} points="160 229.99 155 234.99 170 249.99 170 219.99 160.03 229.97"/>
        <polygon fill={d} points="134.99 235.01 130 240 139.99 240"/>
        <polygon fill={i} points="140 240 140 230 139.97 230.03 134.99 235.01 139.99 240"/>
        <rect fill={i} x="140" y="249.99" width="9.99" height=".01"/>
        <polygon fill={e} points="155 215 150 220 160 220"/>
        <polygon fill={f} points="145 225 140 230 149.99 230"/>
        <rect fill={i} x="149.99" y="249.99" width="20.01" height=".01"/>
        <polygon fill={g} points="150 230 150 220 149.95 220.05 149.95 220.05 145 225 145 225 149.99 230"/>
        <polygon fill={i} points="160 210 155 215 160 220"/>
        <polygon fill={f} points="150 230.01 154.99 235 155 234.99 159.99 230 150 230"/>
        <polygon fill={g} points="150 239.99 150.05 239.95 150.05 239.94 154.99 235 150 230.01"/>
        <polygon fill={i} points="160 229.99 160.03 229.97 165 225 160 220"/>
        <polygon fill={e} points="165 225 169.99 220 160 220"/>
        <polygon fill={i} points="140 249.99 144.99 245 140 240.01"/>
        <polygon fill={d} points="140 240.01 144.99 245 149.99 240 140 240"/>
        <polygon fill={e} points="160 210 160 220 165 215"/>
        <polygon fill={g} points="170 210 160 210 165 215"/>
        <polygon fill={i} points="160 220 169.99 220 165 215"/>
        <polygon fill={h} points="165 215 169.99 220 170 219.99 170 210"/>
        <polygon fill={f} points="150 220 150 230 155 225"/>
        <polygon fill={i} points="160 220 150 220 155 225"/>
        <polygon fill={g} points="150 230 159.99 230 155 225"/>
        <polygon fill={e} points="155 225 159.99 230 160 229.99 160 220"/>
        <polygon fill={d} points="140 230 140 240 145 235"/>
        <polygon fill={g} points="150 230 140 230 145 235"/>
        <polygon fill={i} points="140 240 149.99 240 145 235"/>
        <polygon fill={f} points="145 235 149.99 240 150 239.99 150 230"/>
        <polygon fill={h} points="130 240 130 250 135 245"/>
        <polygon fill={i} points="140 240 130 240 135 245"/>
        <polygon fill={g} points="130 250 139.99 250 135 245"/>
        <polygon fill={d} points="135 245 139.99 250 140 249.99 140 240"/>
        <polygon fill={b} points="180.05 230.05 180.05 230.05 180.04 230.06 180.05 230.05 170 220 170 250 185 235"/>
        <polygon fill={c} points="190 240 185 235 170 250 200 250 190.03 240.03"/>
        <polygon fill={b} points="199.94 229.95 199.95 229.95 199.96 229.94 199.95 229.95 209.99 240 209.99 210 194.99 225"/>
        <polygon fill={c} points="189.99 220 194.99 225 209.99 210 179.99 210 189.97 219.97"/>
        <polygon fill={d} points="195.01 245.01 200 250 200 240.01"/>
        <polygon fill={i} points="200 240 190 240 190.03 240.03 195.01 245.01 200 240.01"/>
        <rect fill={i} x="209.99" y="230.01" width=".01" height="9.99"/>
        <polygon fill={e} points="175 225 180 230 180 220"/>
        <polygon fill={f} points="185 235 190 240 190 230.01"/>
        <rect fill={i} x="209.99" y="210" width=".01" height="20.01"/>
        <polygon fill={g} points="190 230 180 230 180.05 230.05 180.05 230.05 185 235 185 235 190 230.01"/>
        <polygon fill={i} points="170 220 175 225 180 220"/>
        <polygon fill={f} points="190.01 230 195 225.01 194.99 225 190 220.01 190 230"/>
        <polygon fill={g} points="199.99 230 199.95 229.95 199.94 229.95 195 225.01 190.01 230"/>
        <polygon fill={i} points="189.99 220 189.97 219.97 185 215 180 220"/>
        <polygon fill={e} points="185 215 180 210.01 180 220"/>
        <polygon fill={i} points="209.99 240 205 235.01 200.01 240"/>
        <polygon fill={d} points="200.01 240 205 235.01 200 230.01 200 240"/>
        <polygon fill={e} points="170 220 180 220 175 215"/>
        <polygon fill={g} points="170 210 170 220 175 215"/>
        <polygon fill={i} points="180 220 180 210.01 175 215"/>
        <polygon fill={h} points="175 215 180 210.01 179.99 210 170 210"/>
        <polygon fill={f} points="180 230 190 230 185 225"/>
        <polygon fill={i} points="180 220 180 230 185 225"/>
        <polygon fill={g} points="190 230 190 220.01 185 225"/>
        <polygon fill={e} points="185 225 190 220.01 189.99 220 180 220"/>
        <polygon fill={d} points="190 240 200 240 195 235"/>
        <polygon fill={g} points="190 230 190 240 195 235"/>
        <polygon fill={i} points="200 240 200 230.01 195 235"/>
        <polygon fill={f} points="195 235 200 230.01 199.99 230 190 230"/>
        <polygon fill={h} points="200 250 210 250 205 245"/>
        <polygon fill={i} points="200 240 200 250 205 245"/>
        <polygon fill={g} points="210 250 210 240.01 205 245"/>
        <polygon fill={d} points="205 245 210 240.01 209.99 240 200 240"/>
        <polygon fill={b} points="229.95 220.05 229.95 220.05 229.94 220.04 229.95 220.05 240 210 210 210 225 225"/>
        <polygon fill={c} points="220 230 225 225 210 210 210 240 219.97 230.03"/>
        <polygon fill={b} points="230.05 239.94 230.05 239.95 230.06 239.96 230.05 239.95 220 249.99 250 249.99 235 234.99"/>
        <polygon fill={c} points="240 229.99 235 234.99 250 249.99 250 219.99 240.03 229.97"/>
        <polygon fill={d} points="214.99 235.01 210 240 219.99 240"/>
        <polygon fill={i} points="220 240 220 230 219.97 230.03 214.99 235.01 219.99 240"/>
        <rect fill={i} x="220" y="249.99" width="9.99" height=".01"/>
        <polygon fill={e} points="235 215 230 220 240 220"/>
        <polygon fill={f} points="225 225 220 230 229.99 230"/>
        <rect fill={i} x="229.99" y="249.99" width="20.01" height=".01"/>
        <polygon fill={g} points="230 230 230 220 229.95 220.05 229.95 220.05 225 225 225 225 229.99 230"/>
        <polygon fill={i} points="240 210 235 215 240 220"/>
        <polygon fill={f} points="230 230.01 234.99 235 235 234.99 239.99 230 230 230"/>
        <polygon fill={g} points="230 239.99 230.05 239.95 230.05 239.94 234.99 235 230 230.01"/>
        <polygon fill={i} points="240 229.99 240.03 229.97 245 225 240 220"/>
        <polygon fill={e} points="245 225 249.99 220 240 220"/>
        <polygon fill={i} points="220 249.99 224.99 245 220 240.01"/>
        <polygon fill={d} points="220 240.01 224.99 245 229.99 240 220 240"/>
        <polygon fill={e} points="240 210 240 220 245 215"/>
        <polygon fill={g} points="250 210 240 210 245 215"/>
        <polygon fill={i} points="240 220 249.99 220 245 215"/>
        <polygon fill={h} points="245 215 249.99 220 250 219.99 250 210"/>
        <polygon fill={f} points="230 220 230 230 235 225"/>
        <polygon fill={i} points="240 220 230 220 235 225"/>
        <polygon fill={g} points="230 230 239.99 230 235 225"/>
        <polygon fill={e} points="235 225 239.99 230 240 229.99 240 220"/>
        <polygon fill={d} points="220 230 220 240 225 235"/>
        <polygon fill={g} points="230 230 220 230 225 235"/>
        <polygon fill={i} points="220 240 229.99 240 225 235"/>
        <polygon fill={f} points="225 235 229.99 240 230 239.99 230 230"/>
        <polygon fill={h} points="210 240 210 250 215 245"/>
        <polygon fill={i} points="220 240 210 240 215 245"/>
        <polygon fill={g} points="210 250 219.99 250 215 245"/>
        <polygon fill={d} points="215 245 219.99 250 220 249.99 220 240"/>
        <polygon fill={b} points="29.95 260.05 29.95 260.05 29.94 260.04 29.95 260.05 40 250 10 250 25 265"/>
        <polygon fill={c} points="20 270 25 265 10 250 10 280 19.97 270.03"/>
        <polygon fill={b} points="30.05 279.94 30.05 279.95 30.06 279.95 30.05 279.95 20 289.99 50 289.99 35 274.99"/>
        <polygon fill={c} points="40 269.99 35 274.99 50 289.99 50 259.99 40.03 269.97"/>
        <polygon fill={d} points="14.99 275.01 10 280 19.99 280"/>
        <polygon fill={i} points="20 280 20 270 19.97 270.03 14.99 275.01 19.99 280"/>
        <rect fill={i} x="20" y="289.99" width="9.99" height=".01"/>
        <polygon fill={e} points="35 255 30 260 40 260"/>
        <polygon fill={f} points="25 265 20 270 29.99 270"/>
        <rect fill={i} x="29.99" y="289.99" width="20.01" height=".01"/>
        <polygon fill={g} points="30 270 30 260 29.95 260.05 29.95 260.05 25 265 25 265 29.99 270"/>
        <polygon fill={i} points="40 250 35 255 40 260"/>
        <polygon fill={f} points="30 270.01 34.99 275 35 274.99 39.99 270 30 270"/>
        <polygon fill={g} points="30 279.99 30.05 279.95 30.05 279.94 34.99 275 30 270.01"/>
        <polygon fill={i} points="40 269.99 40.03 269.97 45 265 40 260"/>
        <polygon fill={e} points="45 265 49.99 260 40 260"/>
        <polygon fill={i} points="20 289.99 24.99 285 20 280.01"/>
        <polygon fill={d} points="20 280.01 24.99 285 29.99 280 20 280"/>
        <polygon fill={e} points="40 250 40 260 45 255"/>
        <polygon fill={g} points="50 250 40 250 45 255"/>
        <polygon fill={i} points="40 260 49.99 260 45 255"/>
        <polygon fill={h} points="45 255 49.99 260 50 259.99 50 250"/>
        <polygon fill={f} points="30 260 30 270 35 265"/>
        <polygon fill={i} points="40 260 30 260 35 265"/>
        <polygon fill={g} points="30 270 39.99 270 35 265"/>
        <polygon fill={e} points="35 265 39.99 270 40 269.99 40 260"/>
        <polygon fill={d} points="20 270 20 280 25 275"/>
        <polygon fill={g} points="30 270 20 270 25 275"/>
        <polygon fill={i} points="20 280 29.99 280 25 275"/>
        <polygon fill={f} points="25 275 29.99 280 30 279.99 30 270"/>
        <polygon fill={h} points="10 280 10 290 15 285"/>
        <polygon fill={i} points="20 280 10 280 15 285"/>
        <polygon fill={g} points="10 290 19.99 290 15 285"/>
        <polygon fill={d} points="15 285 19.99 290 20 289.99 20 280"/>
        <polygon fill={b} points="79.95 269.95 79.95 269.95 79.96 269.94 79.95 269.95 90 280 90 250 75 265"/>
        <polygon fill={c} points="70 260 75 265 90 250 60 250 69.97 259.97"/>
        <polygon fill={b} points="60.06 270.05 60.05 270.05 60.05 270.06 60.05 270.05 50.01 260 50.01 290 65.01 275"/>
        <polygon fill={c} points="70.01 280 65.01 275 50.01 290 80.01 290 70.03 280.03"/>
        <polygon fill={d} points="64.99 254.99 60 250 60 259.99"/>
        <polygon fill={i} points="60 260 70 260 69.97 259.97 64.99 254.99 60 259.99"/>
        <rect fill={i} x="50" y="260" width=".01" height="9.99"/>
        <polygon fill={e} points="85 275 80 270 80 280"/>
        <polygon fill={f} points="75 265 70 260 70 269.99"/>
        <rect fill={i} x="50" y="269.99" width=".01" height="20.01"/>
        <polygon fill={g} points="70 270 80 270 79.95 269.95 79.95 269.95 75 265 75 265 70 269.99"/>
        <polygon fill={i} points="90 280 85 275 80 280"/>
        <polygon fill={f} points="69.99 270 65 274.99 65.01 275 70 279.99 70 270"/>
        <polygon fill={g} points="60.01 270 60.05 270.05 60.06 270.05 65 274.99 69.99 270"/>
        <polygon fill={i} points="70.01 280 70.03 280.03 75 285 80 280"/>
        <polygon fill={e} points="75 285 80 289.99 80 280"/>
        <polygon fill={i} points="50.01 260 55 264.99 59.99 260"/>
        <polygon fill={d} points="59.99 260 55 264.99 60 269.99 60 260"/>
        <polygon fill={e} points="90 280 80 280 85 285"/>
        <polygon fill={g} points="90 290 90 280 85 285"/>
        <polygon fill={i} points="80 280 80 289.99 85 285"/>
        <polygon fill={h} points="85 285 80 289.99 80.01 290 90 290"/>
        <polygon fill={f} points="80 270 70 270 75 275"/>
        <polygon fill={i} points="80 280 80 270 75 275"/>
        <polygon fill={g} points="70 270 70 279.99 75 275"/>
        <polygon fill={e} points="75 275 70 279.99 70.01 280 80 280"/>
        <polygon fill={d} points="70 260 60 260 65 265"/>
        <polygon fill={g} points="70 270 70 260 65 265"/>
        <polygon fill={i} points="60 260 60 269.99 65 265"/>
        <polygon fill={f} points="65 265 60 269.99 60.01 270 70 270"/>
        <polygon fill={h} points="60 250 50 250 55 255"/>
        <polygon fill={i} points="60 260 60 250 55 255"/>
        <polygon fill={g} points="50 250 50 259.99 55 255"/>
        <polygon fill={d} points="55 255 50 259.99 50.01 260 60 260"/>
        <polygon fill={b} points="109.95 260.05 109.95 260.05 109.94 260.04 109.95 260.05 120 250 90 250 105 265"/>
        <polygon fill={c} points="100 270 105 265 90 250 90 280 99.97 270.03"/>
        <polygon fill={b} points="110.05 279.94 110.05 279.95 110.06 279.95 110.05 279.95 100 289.99 130 289.99 115 274.99"/>
        <polygon fill={c} points="120 269.99 115 274.99 130 289.99 130 259.99 120.03 269.97"/>
        <polygon fill={d} points="94.99 275.01 90 280 99.99 280"/>
        <polygon fill={i} points="100 280 100 270 99.97 270.03 94.99 275.01 99.99 280"/>
        <rect fill={i} x="100" y="289.99" width="9.99" height=".01"/>
        <polygon fill={e} points="115 255 110 260 120 260"/>
        <polygon fill={f} points="105 265 100 270 109.99 270"/>
        <rect fill={i} x="109.99" y="289.99" width="20.01" height=".01"/>
        <polygon fill={g} points="110 270 110 260 109.95 260.05 109.95 260.05 105 265 105 265 109.99 270"/>
        <polygon fill={i} points="120 250 115 255 120 260"/>
        <polygon fill={f} points="110 270.01 114.99 275 115 274.99 119.99 270 110 270"/>
        <polygon fill={g} points="110 279.99 110.05 279.95 110.05 279.94 114.99 275 110 270.01"/>
        <polygon fill={i} points="120 269.99 120.03 269.97 125 265 120 260"/>
        <polygon fill={e} points="125 265 129.99 260 120 260"/>
        <polygon fill={i} points="100 289.99 104.99 285 100 280.01"/>
        <polygon fill={d} points="100 280.01 104.99 285 109.99 280 100 280"/>
        <polygon fill={e} points="120 250 120 260 125 255"/>
        <polygon fill={g} points="130 250 120 250 125 255"/>
        <polygon fill={i} points="120 260 129.99 260 125 255"/>
        <polygon fill={h} points="125 255 129.99 260 130 259.99 130 250"/>
        <polygon fill={f} points="110 260 110 270 115 265"/>
        <polygon fill={i} points="120 260 110 260 115 265"/>
        <polygon fill={g} points="110 270 119.99 270 115 265"/>
        <polygon fill={e} points="115 265 119.99 270 120 269.99 120 260"/>
        <polygon fill={d} points="100 270 100 280 105 275"/>
        <polygon fill={g} points="110 270 100 270 105 275"/>
        <polygon fill={i} points="100 280 109.99 280 105 275"/>
        <polygon fill={f} points="105 275 109.99 280 110 279.99 110 270"/>
        <polygon fill={h} points="90 280 90 290 95 285"/>
        <polygon fill={i} points="100 280 90 280 95 285"/>
        <polygon fill={g} points="90 290 99.99 290 95 285"/>
        <polygon fill={d} points="95 285 99.99 290 100 289.99 100 280"/>
        <polygon fill={b} points="159.95 269.95 159.95 269.95 159.96 269.94 159.95 269.95 170 280 170 250 155 265"/>
        <polygon fill={c} points="150 260 155 265 170 250 140 250 149.97 259.97"/>
        <polygon fill={b} points="140.06 270.05 140.05 270.05 140.04 270.06 140.05 270.05 130.01 260 130.01 290 145.01 275"/>
        <polygon fill={c} points="150.01 280 145.01 275 130.01 290 160.01 290 150.03 280.03"/>
        <polygon fill={d} points="144.99 254.99 140 250 140 259.99"/>
        <polygon fill={i} points="140 260 150 260 149.97 259.97 144.99 254.99 140 259.99"/>
        <rect fill={i} x="130" y="260" width=".01" height="9.99"/>
        <polygon fill={e} points="165 275 160 270 160 280"/>
        <polygon fill={f} points="155 265 150 260 150 269.99"/>
        <rect fill={i} x="130" y="269.99" width=".01" height="20.01"/>
        <polygon fill={g} points="150 270 160 270 159.95 269.95 159.95 269.95 155 265 155 265 150 269.99"/>
        <polygon fill={i} points="170 280 165 275 160 280"/>
        <polygon fill={f} points="149.99 270 145 274.99 145.01 275 150 279.99 150 270"/>
        <polygon fill={g} points="140.01 270 140.05 270.05 140.06 270.05 145 274.99 149.99 270"/>
        <polygon fill={i} points="150.01 280 150.03 280.03 155 285 160 280"/>
        <polygon fill={e} points="155 285 160 289.99 160 280"/>
        <polygon fill={i} points="130.01 260 135 264.99 139.99 260"/>
        <polygon fill={d} points="139.99 260 135 264.99 140 269.99 140 260"/>
        <polygon fill={e} points="170 280 160 280 165 285"/>
        <polygon fill={g} points="170 290 170 280 165 285"/>
        <polygon fill={i} points="160 280 160 289.99 165 285"/>
        <polygon fill={h} points="165 285 160 289.99 160.01 290 170 290"/>
        <polygon fill={f} points="160 270 150 270 155 275"/>
        <polygon fill={i} points="160 280 160 270 155 275"/>
        <polygon fill={g} points="150 270 150 279.99 155 275"/>
        <polygon fill={e} points="155 275 150 279.99 150.01 280 160 280"/>
        <polygon fill={d} points="150 260 140 260 145 265"/>
        <polygon fill={g} points="150 270 150 260 145 265"/>
        <polygon fill={i} points="140 260 140 269.99 145 265"/>
        <polygon fill={f} points="145 265 140 269.99 140.01 270 150 270"/>
        <polygon fill={h} points="140 250 130 250 135 255"/>
        <polygon fill={i} points="140 260 140 250 135 255"/>
        <polygon fill={g} points="130 250 130 259.99 135 255"/>
        <polygon fill={d} points="135 255 130 259.99 130.01 260 140 260"/>
        <polygon fill={b} points="189.95 260.05 189.95 260.05 189.94 260.04 189.95 260.05 200 250 170 250 185 265"/>
        <polygon fill={c} points="180 270 185 265 170 250 170 280 179.97 270.03"/>
        <polygon fill={b} points="190.05 279.94 190.05 279.95 190.06 279.95 190.05 279.95 180 289.99 210 289.99 195 274.99"/>
        <polygon fill={c} points="200 269.99 195 274.99 210 289.99 210 259.99 200.03 269.97"/>
        <polygon fill={d} points="174.99 275.01 170 280 179.99 280"/>
        <polygon fill={i} points="180 280 180 270 179.97 270.03 174.99 275.01 179.99 280"/>
        <rect fill={i} x="180" y="289.99" width="9.99" height=".01"/>
        <polygon fill={e} points="195 255 190 260 200 260"/>
        <polygon fill={f} points="185 265 180 270 189.99 270"/>
        <rect fill={i} x="189.99" y="289.99" width="20.01" height=".01"/>
        <polygon fill={g} points="190 270 190 260 189.95 260.05 189.95 260.05 185 265 185 265 189.99 270"/>
        <polygon fill={i} points="200 250 195 255 200 260"/>
        <polygon fill={f} points="190 270.01 194.99 275 195 274.99 199.99 270 190 270"/>
        <polygon fill={g} points="190 279.99 190.05 279.95 190.05 279.94 194.99 275 190 270.01"/>
        <polygon fill={i} points="200 269.99 200.03 269.97 205 265 200 260"/>
        <polygon fill={e} points="205 265 209.99 260 200 260"/>
        <polygon fill={i} points="180 289.99 184.99 285 180 280.01"/>
        <polygon fill={d} points="180 280.01 184.99 285 189.99 280 180 280"/>
        <polygon fill={e} points="200 250 200 260 205 255"/>
        <polygon fill={g} points="210 250 200 250 205 255"/>
        <polygon fill={i} points="200 260 209.99 260 205 255"/>
        <polygon fill={h} points="205 255 209.99 260 210 259.99 210 250"/>
        <polygon fill={f} points="190 260 190 270 195 265"/>
        <polygon fill={i} points="200 260 190 260 195 265"/>
        <polygon fill={g} points="190 270 199.99 270 195 265"/>
        <polygon fill={e} points="195 265 199.99 270 200 269.99 200 260"/>
        <polygon fill={d} points="180 270 180 280 185 275"/>
        <polygon fill={g} points="190 270 180 270 185 275"/>
        <polygon fill={i} points="180 280 189.99 280 185 275"/>
        <polygon fill={f} points="185 275 189.99 280 190 279.99 190 270"/>
        <polygon fill={h} points="170 280 170 290 175 285"/>
        <polygon fill={i} points="180 280 170 280 175 285"/>
        <polygon fill={g} points="170 290 179.99 290 175 285"/>
        <polygon fill={d} points="175 285 179.99 290 180 289.99 180 280"/>
        <polygon fill={b} points="239.95 269.95 239.95 269.95 239.96 269.94 239.95 269.95 250 280 250 250 235 265"/>
        <polygon fill={c} points="230 260 235 265 250 250 220 250 229.97 259.97"/>
        <polygon fill={b} points="220.06 270.05 220.05 270.05 220.04 270.06 220.05 270.05 210.01 260 210.01 290 225.01 275"/>
        <polygon fill={c} points="230.01 280 225.01 275 210.01 290 240.01 290 230.03 280.03"/>
        <polygon fill={d} points="224.99 254.99 220 250 220 259.99"/>
        <polygon fill={i} points="220 260 230 260 229.97 259.97 224.99 254.99 220 259.99"/>
        <rect fill={i} x="210" y="260" width=".01" height="9.99"/>
        <polygon fill={e} points="245 275 240 270 240 280"/>
        <polygon fill={f} points="235 265 230 260 230 269.99"/>
        <rect fill={i} x="210" y="269.99" width=".01" height="20.01"/>
        <polygon fill={g} points="230 270 240 270 239.95 269.95 239.95 269.95 235 265 235 265 230 269.99"/>
        <polygon fill={i} points="250 280 245 275 240 280"/>
        <polygon fill={f} points="229.99 270 225 274.99 225.01 275 230 279.99 230 270"/>
        <polygon fill={g} points="220.01 270 220.05 270.05 220.06 270.05 225 274.99 229.99 270"/>
        <polygon fill={i} points="230.01 280 230.03 280.03 235 285 240 280"/>
        <polygon fill={e} points="235 285 240 289.99 240 280"/>
        <polygon fill={i} points="210.01 260 215 264.99 219.99 260"/>
        <polygon fill={d} points="219.99 260 215 264.99 220 269.99 220 260"/>
        <polygon fill={e} points="250 280 240 280 245 285"/>
        <polygon fill={g} points="250 290 250 280 245 285"/>
        <polygon fill={i} points="240 280 240 289.99 245 285"/>
        <polygon fill={h} points="245 285 240 289.99 240.01 290 250 290"/>
        <polygon fill={f} points="240 270 230 270 235 275"/>
        <polygon fill={i} points="240 280 240 270 235 275"/>
        <polygon fill={g} points="230 270 230 279.99 235 275"/>
        <polygon fill={e} points="235 275 230 279.99 230.01 280 240 280"/>
        <polygon fill={d} points="230 260 220 260 225 265"/>
        <polygon fill={g} points="230 270 230 260 225 265"/>
        <polygon fill={i} points="220 260 220 269.99 225 265"/>
        <polygon fill={f} points="225 265 220 269.99 220.01 270 230 270"/>
        <polygon fill={h} points="220 250 210 250 215 255"/>
        <polygon fill={i} points="220 260 220 250 215 255"/>
        <polygon fill={g} points="210 250 210 259.99 215 255"/>
        <polygon fill={d} points="215 255 210 259.99 210.01 260 220 260"/>
        <polygon fill={b} points="20.05 310.05 20.05 310.05 20.04 310.06 20.05 310.05 10 300 10 330 25 315"/>
        <polygon fill={c} points="30 320 25 315 10 330 40 330 30.03 320.03"/>
        <polygon fill={b} points="39.94 309.95 39.95 309.95 39.95 309.94 39.95 309.95 49.99 320 49.99 290 34.99 305"/>
        <polygon fill={c} points="29.99 300 34.99 305 49.99 290 19.99 290 29.97 299.97"/>
        <polygon fill={d} points="35.01 325.01 40 330 40 320.01"/>
        <polygon fill={i} points="40 320 30 320 30.03 320.03 35.01 325.01 40 320.01"/>
        <rect fill={i} x="49.99" y="310.01" width=".01" height="9.99"/>
        <polygon fill={e} points="15 305 20 310 20 300"/>
        <polygon fill={f} points="25 315 30 320 30 310.01"/>
        <rect fill={i} x="49.99" y="290" width=".01" height="20.01"/>
        <polygon fill={g} points="30 310 20 310 20.05 310.05 20.05 310.05 25 315 25 315 30 310.01"/>
        <polygon fill={i} points="10 300 15 305 20 300"/>
        <polygon fill={f} points="30.01 310 35 305.01 34.99 305 30 300.01 30 310"/>
        <polygon fill={g} points="39.99 310 39.95 309.95 39.94 309.95 35 305.01 30.01 310"/>
        <polygon fill={i} points="29.99 300 29.97 299.97 25 295 20 300"/>
        <polygon fill={e} points="25 295 20 290.01 20 300"/>
        <polygon fill={i} points="49.99 320 45 315.01 40.01 320"/>
        <polygon fill={d} points="40.01 320 45 315.01 40 310.01 40 320"/>
        <polygon fill={e} points="10 300 20 300 15 295"/>
        <polygon fill={g} points="10 290 10 300 15 295"/>
        <polygon fill={i} points="20 300 20 290.01 15 295"/>
        <polygon fill={h} points="15 295 20 290.01 19.99 290 10 290"/>
        <polygon fill={f} points="20 310 30 310 25 305"/>
        <polygon fill={i} points="20 300 20 310 25 305"/>
        <polygon fill={g} points="30 310 30 300.01 25 305"/>
        <polygon fill={e} points="25 305 30 300.01 29.99 300 20 300"/>
        <polygon fill={d} points="30 320 40 320 35 315"/>
        <polygon fill={g} points="30 310 30 320 35 315"/>
        <polygon fill={i} points="40 320 40 310.01 35 315"/>
        <polygon fill={f} points="35 315 40 310.01 39.99 310 30 310"/>
        <polygon fill={h} points="40 330 50 330 45 325"/>
        <polygon fill={i} points="40 320 40 330 45 325"/>
        <polygon fill={g} points="50 330 50 320.01 45 325"/>
        <polygon fill={d} points="45 325 50 320.01 49.99 320 40 320"/>
        <polygon fill={b} points="69.95 300.05 69.95 300.05 69.94 300.04 69.95 300.05 80 290 50 290 65 305"/>
        <polygon fill={c} points="60 310 65 305 50 290 50 320 59.97 310.03"/>
        <polygon fill={b} points="70.05 319.94 70.05 319.95 70.06 319.95 70.05 319.95 60 329.99 90 329.99 75 314.99"/>
        <polygon fill={c} points="80 309.99 75 314.99 90 329.99 90 299.99 80.03 309.97"/>
        <polygon fill={d} points="54.99 315.01 50 320 59.99 320"/>
        <polygon fill={i} points="60 320 60 310 59.97 310.03 54.99 315.01 59.99 320"/>
        <rect fill={i} x="60" y="329.99" width="9.99" height=".01"/>
        <polygon fill={e} points="75 295 70 300 80 300"/>
        <polygon fill={f} points="65 305 60 310 69.99 310"/>
        <rect fill={i} x="69.99" y="329.99" width="20.01" height=".01"/>
        <polygon fill={g} points="70 310 70 300 69.95 300.05 69.95 300.05 65 305 65 305 69.99 310"/>
        <polygon fill={i} points="80 290 75 295 80 300"/>
        <polygon fill={f} points="70 310.01 74.99 315 75 314.99 79.99 310 70 310"/>
        <polygon fill={g} points="70 319.99 70.05 319.95 70.05 319.94 74.99 315 70 310.01"/>
        <polygon fill={i} points="80 309.99 80.03 309.97 85 305 80 300"/>
        <polygon fill={e} points="85 305 89.99 300 80 300"/>
        <polygon fill={i} points="60 329.99 64.99 325 60 320.01"/>
        <polygon fill={d} points="60 320.01 64.99 325 69.99 320 60 320"/>
        <polygon fill={e} points="80 290 80 300 85 295"/>
        <polygon fill={g} points="90 290 80 290 85 295"/>
        <polygon fill={i} points="80 300 89.99 300 85 295"/>
        <polygon fill={h} points="85 295 89.99 300 90 299.99 90 290"/>
        <polygon fill={f} points="70 300 70 310 75 305"/>
        <polygon fill={i} points="80 300 70 300 75 305"/>
        <polygon fill={g} points="70 310 79.99 310 75 305"/>
        <polygon fill={e} points="75 305 79.99 310 80 309.99 80 300"/>
        <polygon fill={d} points="60 310 60 320 65 315"/>
        <polygon fill={g} points="70 310 60 310 65 315"/>
        <polygon fill={i} points="60 320 69.99 320 65 315"/>
        <polygon fill={f} points="65 315 69.99 320 70 319.99 70 310"/>
        <polygon fill={h} points="50 320 50 330 55 325"/>
        <polygon fill={i} points="60 320 50 320 55 325"/>
        <polygon fill={g} points="50 330 59.99 330 55 325"/>
        <polygon fill={d} points="55 325 59.99 330 60 329.99 60 320"/>
        <polygon fill={b} points="100.05 310.05 100.05 310.05 100.04 310.06 100.05 310.05 90 300 90 330 105 315"/>
        <polygon fill={c} points="110 320 105 315 90 330 120 330 110.03 320.03"/>
        <polygon fill={b} points="119.94 309.95 119.95 309.95 119.95 309.94 119.95 309.95 129.99 320 129.99 290 114.99 305"/>
        <polygon fill={c} points="109.99 300 114.99 305 129.99 290 99.99 290 109.97 299.97"/>
        <polygon fill={d} points="115.01 325.01 120 330 120 320.01"/>
        <polygon fill={i} points="120 320 110 320 110.03 320.03 115.01 325.01 120 320.01"/>
        <rect fill={i} x="129.99" y="310.01" width=".01" height="9.99"/>
        <polygon fill={e} points="95 305 100 310 100 300"/>
        <polygon fill={f} points="105 315 110 320 110 310.01"/>
        <rect fill={i} x="129.99" y="290" width=".01" height="20.01"/>
        <polygon fill={g} points="110 310 100 310 100.05 310.05 100.05 310.05 105 315 105 315 110 310.01"/>
        <polygon fill={i} points="90 300 95 305 100 300"/>
        <polygon fill={f} points="110.01 310 115 305.01 114.99 305 110 300.01 110 310"/>
        <polygon fill={g} points="119.99 310 119.95 309.95 119.94 309.95 115 305.01 110.01 310"/>
        <polygon fill={i} points="109.99 300 109.97 299.97 105 295 100 300"/>
        <polygon fill={e} points="105 295 100 290.01 100 300"/>
        <polygon fill={i} points="129.99 320 125 315.01 120.01 320"/>
        <polygon fill={d} points="120.01 320 125 315.01 120 310.01 120 320"/>
        <polygon fill={e} points="90 300 100 300 95 295"/>
        <polygon fill={g} points="90 290 90 300 95 295"/>
        <polygon fill={i} points="100 300 100 290.01 95 295"/>
        <polygon fill={h} points="95 295 100 290.01 99.99 290 90 290"/>
        <polygon fill={f} points="100 310 110 310 105 305"/>
        <polygon fill={i} points="100 300 100 310 105 305"/>
        <polygon fill={g} points="110 310 110 300.01 105 305"/>
        <polygon fill={e} points="105 305 110 300.01 109.99 300 100 300"/>
        <polygon fill={d} points="110 320 120 320 115 315"/>
        <polygon fill={g} points="110 310 110 320 115 315"/>
        <polygon fill={i} points="120 320 120 310.01 115 315"/>
        <polygon fill={f} points="115 315 120 310.01 119.99 310 110 310"/>
        <polygon fill={h} points="120 330 130 330 125 325"/>
        <polygon fill={i} points="120 320 120 330 125 325"/>
        <polygon fill={g} points="130 330 130 320.01 125 325"/>
        <polygon fill={d} points="125 325 130 320.01 129.99 320 120 320"/>
        <polygon fill={b} points="149.95 300.05 149.95 300.05 149.94 300.04 149.95 300.05 160 290 130 290 145 305"/>
        <polygon fill={c} points="140 310 145 305 130 290 130 320 139.97 310.03"/>
        <polygon fill={b} points="150.05 319.94 150.05 319.95 150.06 319.95 150.05 319.95 140 329.99 170 329.99 155 314.99"/>
        <polygon fill={c} points="160 309.99 155 314.99 170 329.99 170 299.99 160.03 309.97"/>
        <polygon fill={d} points="134.99 315.01 130 320 139.99 320"/>
        <polygon fill={i} points="140 320 140 310 139.97 310.03 134.99 315.01 139.99 320"/>
        <rect fill={i} x="140" y="329.99" width="9.99" height=".01"/>
        <polygon fill={e} points="155 295 150 300 160 300"/>
        <polygon fill={f} points="145 305 140 310 149.99 310"/>
        <rect fill={i} x="149.99" y="329.99" width="20.01" height=".01"/>
        <polygon fill={g} points="150 310 150 300 149.95 300.05 149.95 300.05 145 305 145 305 149.99 310"/>
        <polygon fill={i} points="160 290 155 295 160 300"/>
        <polygon fill={f} points="150 310.01 154.99 315 155 314.99 159.99 310 150 310"/>
        <polygon fill={g} points="150 319.99 150.05 319.95 150.05 319.94 154.99 315 150 310.01"/>
        <polygon fill={i} points="160 309.99 160.03 309.97 165 305 160 300"/>
        <polygon fill={e} points="165 305 169.99 300 160 300"/>
        <polygon fill={i} points="140 329.99 144.99 325 140 320.01"/>
        <polygon fill={d} points="140 320.01 144.99 325 149.99 320 140 320"/>
        <polygon fill={e} points="160 290 160 300 165 295"/>
        <polygon fill={g} points="170 290 160 290 165 295"/>
        <polygon fill={i} points="160 300 169.99 300 165 295"/>
        <polygon fill={h} points="165 295 169.99 300 170 299.99 170 290"/>
        <polygon fill={f} points="150 300 150 310 155 305"/>
        <polygon fill={i} points="160 300 150 300 155 305"/>
        <polygon fill={g} points="150 310 159.99 310 155 305"/>
        <polygon fill={e} points="155 305 159.99 310 160 309.99 160 300"/>
        <polygon fill={d} points="140 310 140 320 145 315"/>
        <polygon fill={g} points="150 310 140 310 145 315"/>
        <polygon fill={i} points="140 320 149.99 320 145 315"/>
        <polygon fill={f} points="145 315 149.99 320 150 319.99 150 310"/>
        <polygon fill={h} points="130 320 130 330 135 325"/>
        <polygon fill={i} points="140 320 130 320 135 325"/>
        <polygon fill={g} points="130 330 139.99 330 135 325"/>
        <polygon fill={d} points="135 325 139.99 330 140 329.99 140 320"/>
        <polygon fill={b} points="199.95 309.95 199.95 309.95 199.96 309.94 199.95 309.95 210 320 210 290 195 305"/>
        <polygon fill={c} points="190 300 195 305 210 290 180 290 189.97 299.97"/>
        <polygon fill={b} points="180.06 310.05 180.05 310.05 180.04 310.06 180.05 310.05 170.01 300 170.01 330 185.01 315"/>
        <polygon fill={c} points="190.01 320 185.01 315 170.01 330 200.01 330 190.03 320.03"/>
        <polygon fill={d} points="184.99 294.99 180 290 180 299.99"/>
        <polygon fill={i} points="180 300 190 300 189.97 299.97 184.99 294.99 180 299.99"/>
        <rect fill={i} x="170" y="300" width=".01" height="9.99"/>
        <polygon fill={e} points="205 315 200 310 200 320"/>
        <polygon fill={f} points="195 305 190 300 190 309.99"/>
        <rect fill={i} x="170" y="309.99" width=".01" height="20.01"/>
        <polygon fill={g} points="190 310 200 310 199.95 309.95 199.95 309.95 195 305 195 305 190 309.99"/>
        <polygon fill={i} points="210 320 205 315 200 320"/>
        <polygon fill={f} points="189.99 310 185 314.99 185.01 315 190 319.99 190 310"/>
        <polygon fill={g} points="180.01 310 180.05 310.05 180.06 310.05 185 314.99 189.99 310"/>
        <polygon fill={i} points="190.01 320 190.03 320.03 195 325 200 320"/>
        <polygon fill={e} points="195 325 200 329.99 200 320"/>
        <polygon fill={i} points="170.01 300 175 304.99 179.99 300"/>
        <polygon fill={d} points="179.99 300 175 304.99 180 309.99 180 300"/>
        <polygon fill={e} points="210 320 200 320 205 325"/>
        <polygon fill={g} points="210 330 210 320 205 325"/>
        <polygon fill={i} points="200 320 200 329.99 205 325"/>
        <polygon fill={h} points="205 325 200 329.99 200.01 330 210 330"/>
        <polygon fill={f} points="200 310 190 310 195 315"/>
        <polygon fill={i} points="200 320 200 310 195 315"/>
        <polygon fill={g} points="190 310 190 319.99 195 315"/>
        <polygon fill={e} points="195 315 190 319.99 190.01 320 200 320"/>
        <polygon fill={d} points="190 300 180 300 185 305"/>
        <polygon fill={g} points="190 310 190 300 185 305"/>
        <polygon fill={i} points="180 300 180 309.99 185 305"/>
        <polygon fill={f} points="185 305 180 309.99 180.01 310 190 310"/>
        <polygon fill={h} points="180 290 170 290 175 295"/>
        <polygon fill={i} points="180 300 180 290 175 295"/>
        <polygon fill={g} points="170 290 170 299.99 175 295"/>
        <polygon fill={d} points="175 295 170 299.99 170.01 300 180 300"/>
        <polygon fill={b} points="229.95 300.05 229.95 300.05 229.94 300.04 229.95 300.05 240 290 210 290 225 305"/>
        <polygon fill={c} points="220 310 225 305 210 290 210 320 219.97 310.03"/>
        <polygon fill={b} points="230.05 319.94 230.05 319.95 230.06 319.95 230.05 319.95 220 329.99 250 329.99 235 314.99"/>
        <polygon fill={c} points="240 309.99 235 314.99 250 329.99 250 299.99 240.03 309.97"/>
        <polygon fill={d} points="214.99 315.01 210 320 219.99 320"/>
        <polygon fill={i} points="220 320 220 310 219.97 310.03 214.99 315.01 219.99 320"/>
        <rect fill={i} x="220" y="329.99" width="9.99" height=".01"/>
        <polygon fill={e} points="235 295 230 300 240 300"/>
        <polygon fill={f} points="225 305 220 310 229.99 310"/>
        <rect fill={i} x="229.99" y="329.99" width="20.01" height=".01"/>
        <polygon fill={g} points="230 310 230 300 229.95 300.05 229.95 300.05 225 305 225 305 229.99 310"/>
        <polygon fill={i} points="240 290 235 295 240 300"/>
        <polygon fill={f} points="230 310.01 234.99 315 235 314.99 239.99 310 230 310"/>
        <polygon fill={g} points="230 319.99 230.05 319.95 230.05 319.94 234.99 315 230 310.01"/>
        <polygon fill={i} points="240 309.99 240.03 309.97 245 305 240 300"/>
        <polygon fill={e} points="245 305 249.99 300 240 300"/>
        <polygon fill={i} points="220 329.99 224.99 325 220 320.01"/>
        <polygon fill={d} points="220 320.01 224.99 325 229.99 320 220 320"/>
        <polygon fill={e} points="240 290 240 300 245 295"/>
        <polygon fill={g} points="250 290 240 290 245 295"/>
        <polygon fill={i} points="240 300 249.99 300 245 295"/>
        <polygon fill={h} points="245 295 249.99 300 250 299.99 250 290"/>
        <polygon fill={f} points="230 300 230 310 235 305"/>
        <polygon fill={i} points="240 300 230 300 235 305"/>
        <polygon fill={g} points="230 310 239.99 310 235 305"/>
        <polygon fill={e} points="235 305 239.99 310 240 309.99 240 300"/>
        <polygon fill={d} points="220 310 220 320 225 315"/>
        <polygon fill={g} points="230 310 220 310 225 315"/>
        <polygon fill={i} points="220 320 229.99 320 225 315"/>
        <polygon fill={f} points="225 315 229.99 320 230 319.99 230 310"/>
        <polygon fill={h} points="210 320 210 330 215 325"/>
        <polygon fill={i} points="220 320 210 320 215 325"/>
        <polygon fill={g} points="210 330 219.99 330 215 325"/>
        <polygon fill={d} points="215 325 219.99 330 220 329.99 220 320"/>
        <polygon fill={h} points="44.99 5 39.99 10 49.99 10"/>
        <polygon fill={g} points="49.99 0 44.99 5 49.99 10"/>
        <polygon fill={h} points="49.99 0 49.99 10 54.99 5"/>
        <polygon fill={g} points="49.99 10 59.99 10 54.99 5"/>
        <polygon fill={h} points="125 5 120 10 130 10"/>
        <polygon fill={g} points="130 0 125 5 130 10"/>
        <polygon fill={h} points="130 0 130 10 135 5"/>
        <polygon fill={g} points="130 10 139.99 10 135 5"/>
        <polygon fill={h} points="205 5 200 10 210 10"/>
        <polygon fill={g} points="210 0 205 5 210 10"/>
        <polygon fill={h} points="210 0 210 10 215 5"/>
        <polygon fill={g} points="210 10 220 10 215 5"/>
        <polygon fill={g} points="44.99 335 39.99 330 49.99 330"/>
        <polygon fill={h} points="49.99 340 44.99 335 49.99 330"/>
        <polygon fill={g} points="49.99 340 49.99 330 54.99 335"/>
        <polygon fill={h} points="49.99 330 59.99 330 54.99 335"/>
        <polygon fill={g} points="125 335 120 330 130 330"/>
        <polygon fill={h} points="130 340 125 335 130 330"/>
        <polygon fill={g} points="130 340 130 330 135 335"/>
        <polygon fill={h} points="130 330 139.99 330 135 335"/>
        <polygon fill={g} points="205 335 200 330 210 330"/>
        <polygon fill={h} points="210 340 205 335 210 330"/>
        <polygon fill={g} points="210 340 210 330 215 335"/>
        <polygon fill={h} points="210 330 220 330 215 335"/>
        <polygon fill={g} points="5 45 10 40 10 50"/>
        <polygon fill={h} points="0 50 5 45 10 50"/>
        <polygon fill={g} points="0 50 10 50 5 55"/>
        <polygon fill={h} points="10 50 10 59.99 5 55"/>
        <polygon fill={g} points="5 125 10 120 10 130"/>
        <polygon fill={h} points="0 130 5 125 10 130"/>
        <polygon fill={g} points="0 130 10 130 5 135"/>
        <polygon fill={h} points="10 130 10 140 5 135"/>
        <polygon fill={g} points="5 205.01 10 200.01 10 210.01"/>
        <polygon fill={h} points="0 210.01 5 205.01 10 210.01"/>
        <polygon fill={g} points="0 210.01 10 210.01 5 215.01"/>
        <polygon fill={h} points="10 210.01 10 220 5 215.01"/>
        <polygon fill={g} points="5 285.01 10 280.01 10 290.01"/>
        <polygon fill={h} points="0 290.01 5 285.01 10 290.01"/>
        <polygon fill={g} points="0 290.01 10 290.01 5 295"/>
        <polygon fill={h} points="10 290.01 10 300 5 295"/>
        <polygon fill={h} points="255 45 250 40 250 50"/>
        <polygon fill={g} points="260 50 255 45 250 50"/>
        <polygon fill={h} points="260 50 250 50 255 55"/>
        <polygon fill={g} points="250 50 250 59.99 255 55"/>
        <polygon fill={h} points="255 125 250 120 250 130"/>
        <polygon fill={g} points="260 130 255 125 250 130"/>
        <polygon fill={h} points="260 130 250 130 255 135"/>
        <polygon fill={g} points="250 130 250 140 255 135"/>
        <polygon fill={h} points="255 205.01 250 200.01 250 210.01"/>
        <polygon fill={g} points="260 210.01 255 205.01 250 210.01"/>
        <polygon fill={h} points="260 210.01 250 210.01 255 215.01"/>
        <polygon fill={g} points="250 210.01 250 220 255 215.01"/>
        <polygon fill={h} points="255 285.01 250 280.01 250 290.01"/>
        <polygon fill={g} points="260 290.01 255 285.01 250 290.01"/>
        <polygon fill={h} points="260 290.01 250 290.01 255 295"/>
        <polygon fill={g} points="250 290.01 250 300 255 295"/>
      </svg>
    );
  }
}

export default SparklePlenty;