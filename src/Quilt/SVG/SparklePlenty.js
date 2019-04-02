import React, { Component } from 'react';

class SparklePlenty extends Component {
  render() {

    // A is for the border
    const {a,b,c,d,e,f,g,h} = this.props.activeColors;
    return (
      <svg
        fill="#000"
        viewBox="0 0 320 400"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
  <rect fill={a} width="320" height="400"/>
  <rect fill={b} x="25" y="25" width="270" height="350"/>
  <rect fill={c} x="30" y="30" width="260" height="340"/>
  <polygon fill={a} points="59.95 50.05 59.95 50.05 59.94 50.04 59.95 50.05 70 40 40 40 55 55 59.95 50.05"/>
  <polygon fill={b} points="50 60 55 55 40 40 40 70 49.97 60.03 50 60"/>
  <polygon fill={a} points="60.05 69.94 60.05 69.95 60.06 69.95 60.05 69.95 50 79.99 80 79.99 65 64.99 60.05 69.94"/>
  <polygon fill={b} points="70 59.99 65 64.99 80 79.99 80 49.99 70.03 59.97 70 59.99"/>
  <polygon fill={d} points="44.99 65.01 40 70 49.99 70 44.99 65.01"/>
  <polygon fill={c} points="50 70 50 60 49.97 60.03 44.99 65.01 49.99 70 50 70"/>
  <rect fill={c} x="50" y="79.99" width="9.99" height="0.01"/>
  <polygon fill={e} points="65 45 60 50 70 50 65 45"/>
  <polygon fill={f} points="55 55 50 60 59.99 60 55 55"/>
  <rect fill={c} x="59.99" y="79.99" width="20.01" height="0.01"/>
  <polygon fill={g} points="60 60 60 50 59.95 50.05 59.95 50.05 55 55 55 55 59.99 60 60 60"/>
  <polygon fill={c} points="70 40 65 45 70 50 70 40"/>
  <polygon fill={f} points="60 60.01 64.99 65 65 64.99 69.99 60 60 60 60 60.01"/>
  <polygon fill={g} points="60 69.99 60.05 69.95 60.05 69.94 64.99 65 60 60.01 60 69.99"/>
  <polygon fill={c} points="70 59.99 70.03 59.97 75 55 70 50 70 59.99"/>
  <polygon fill={e} points="75 55 79.99 50 70 50 75 55"/>
  <polygon fill={c} points="50 79.99 54.99 75 50 70.01 50 79.99"/>
  <polygon fill={d} points="50 70.01 54.99 75 59.99 70 50 70 50 70.01"/>
  <polygon fill={e} points="70 40 70 50 75 45 70 40"/>
  <polygon fill={g} points="80 40 70 40 75 45 80 40"/>
  <polygon fill={c} points="70 50 79.99 50 75 45 70 50"/>
  <polygon fill={h} points="75 45 79.99 50 80 49.99 80 40 75 45"/>
  <polygon fill={f} points="60 50 60 60 65 55 60 50"/>
  <polygon fill={c} points="70 50 60 50 65 55 70 50"/>
  <polygon fill={g} points="60 60 69.99 60 65 55 60 60"/>
  <polygon fill={e} points="65 55 69.99 60 70 59.99 70 50 65 55"/>
  <polygon fill={d} points="50 60 50 70 55 65 50 60"/>
  <polygon fill={g} points="60 60 50 60 55 65 60 60"/>
  <polygon fill={c} points="50 70 59.99 70 55 65 50 70"/>
  <polygon fill={f} points="55 65 59.99 70 60 69.99 60 60 55 65"/>
  <polygon fill={h} points="40 70 40 80 45 75 40 70"/>
  <polygon fill={c} points="50 70 40 70 45 75 50 70"/>
  <polygon fill={g} points="40 80 49.99 80 45 75 40 80"/>
  <polygon fill={d} points="45 75 49.99 80 50 79.99 50 70 45 75"/>
  <polygon fill={a} points="90.05 60.05 90.05 60.05 90.04 60.06 90.05 60.05 80 50 80 80 95 65 90.05 60.05"/>
  <polygon fill={b} points="100 70 95 65 80 80 110 80 100.03 70.03 100 70"/>
  <polygon fill={a} points="109.94 59.95 109.95 59.95 109.95 59.94 109.95 59.95 119.99 70 119.99 40 104.99 55 109.94 59.95"/>
  <polygon fill={b} points="99.99 50 104.99 55 119.99 40 89.99 40 99.97 49.97 99.99 50"/>
  <polygon fill={d} points="105.01 75.01 110 80 110 70.01 105.01 75.01"/>
  <polygon fill={c} points="110 70 100 70 100.03 70.03 105.01 75.01 110 70.01 110 70"/>
  <rect fill={c} x="119.99" y="60.01" width="0.01" height="9.99"/>
  <polygon fill={e} points="85 55 90 60 90 50 85 55"/>
  <polygon fill={f} points="95 65 100 70 100 60.01 95 65"/>
  <rect fill={c} x="119.99" y="40" width="0.01" height="20.01"/>
  <polygon fill={g} points="100 60 90 60 90.05 60.05 90.05 60.05 95 65 95 65 100 60.01 100 60"/>
  <polygon fill={c} points="80 50 85 55 90 50 80 50"/>
  <polygon fill={f} points="100.01 60 105 55.01 104.99 55 100 50.01 100 60 100.01 60"/>
  <polygon fill={g} points="109.99 60 109.95 59.95 109.94 59.95 105 55.01 100.01 60 109.99 60"/>
  <polygon fill={c} points="99.99 50 99.97 49.97 95 45 90 50 99.99 50"/>
  <polygon fill={e} points="95 45 90 40.01 90 50 95 45"/>
  <polygon fill={c} points="119.99 70 115 65.01 110.01 70 119.99 70"/>
  <polygon fill={d} points="110.01 70 115 65.01 110 60.01 110 70 110.01 70"/>
  <polygon fill={e} points="80 50 90 50 85 45 80 50"/>
  <polygon fill={g} points="80 40 80 50 85 45 80 40"/>
  <polygon fill={c} points="90 50 90 40.01 85 45 90 50"/>
  <polygon fill={h} points="85 45 90 40.01 89.99 40 80 40 85 45"/>
  <polygon fill={f} points="90 60 100 60 95 55 90 60"/>
  <polygon fill={c} points="90 50 90 60 95 55 90 50"/>
  <polygon fill={g} points="100 60 100 50.01 95 55 100 60"/>
  <polygon fill={e} points="95 55 100 50.01 99.99 50 90 50 95 55"/>
  <polygon fill={d} points="100 70 110 70 105 65 100 70"/>
  <polygon fill={g} points="100 60 100 70 105 65 100 60"/>
  <polygon fill={c} points="110 70 110 60.01 105 65 110 70"/>
  <polygon fill={f} points="105 65 110 60.01 109.99 60 100 60 105 65"/>
  <polygon fill={h} points="110 80 120 80 115 75 110 80"/>
  <polygon fill={c} points="110 70 110 80 115 75 110 70"/>
  <polygon fill={g} points="120 80 120 70.01 115 75 120 80"/>
  <polygon fill={d} points="115 75 120 70.01 119.99 70 110 70 115 75"/>
  <polygon fill={a} points="139.95 50.05 139.95 50.05 139.94 50.04 139.95 50.05 150 40 120 40 135 55 139.95 50.05"/>
  <polygon fill={b} points="130 60 135 55 120 40 120 70 129.97 60.03 130 60"/>
  <polygon fill={a} points="140.05 69.94 140.05 69.95 140.06 69.95 140.05 69.95 130 79.99 160 79.99 145 64.99 140.05 69.94"/>
  <polygon fill={b} points="150 59.99 145 64.99 160 79.99 160 49.99 150.03 59.97 150 59.99"/>
  <polygon fill={d} points="124.99 65.01 120 70 129.99 70 124.99 65.01"/>
  <polygon fill={c} points="130 70 130 60 129.97 60.03 124.99 65.01 129.99 70 130 70"/>
  <rect fill={c} x="130" y="79.99" width="9.99" height="0.01"/>
  <polygon fill={e} points="145 45 140 50 150 50 145 45"/>
  <polygon fill={f} points="135 55 130 60 139.99 60 135 55"/>
  <rect fill={c} x="139.99" y="79.99" width="20.01" height="0.01"/>
  <polygon fill={g} points="140 60 140 50 139.95 50.05 139.95 50.05 135 55 135 55 139.99 60 140 60"/>
  <polygon fill={c} points="150 40 145 45 150 50 150 40"/>
  <polygon fill={f} points="140 60.01 144.99 65 145 64.99 149.99 60 140 60 140 60.01"/>
  <polygon fill={g} points="140 69.99 140.05 69.95 140.05 69.94 144.99 65 140 60.01 140 69.99"/>
  <polygon fill={c} points="150 59.99 150.03 59.97 155 55 150 50 150 59.99"/>
  <polygon fill={e} points="155 55 159.99 50 150 50 155 55"/>
  <polygon fill={c} points="130 79.99 134.99 75 130 70.01 130 79.99"/>
  <polygon fill={d} points="130 70.01 134.99 75 139.99 70 130 70 130 70.01"/>
  <polygon fill={e} points="150 40 150 50 155 45 150 40"/>
  <polygon fill={g} points="160 40 150 40 155 45 160 40"/>
  <polygon fill={c} points="150 50 159.99 50 155 45 150 50"/>
  <polygon fill={h} points="155 45 159.99 50 160 49.99 160 40 155 45"/>
  <polygon fill={f} points="140 50 140 60 145 55 140 50"/>
  <polygon fill={c} points="150 50 140 50 145 55 150 50"/>
  <polygon fill={g} points="140 60 149.99 60 145 55 140 60"/>
  <polygon fill={e} points="145 55 149.99 60 150 59.99 150 50 145 55"/>
  <polygon fill={d} points="130 60 130 70 135 65 130 60"/>
  <polygon fill={g} points="140 60 130 60 135 65 140 60"/>
  <polygon fill={c} points="130 70 139.99 70 135 65 130 70"/>
  <polygon fill={f} points="135 65 139.99 70 140 69.99 140 60 135 65"/>
  <polygon fill={h} points="120 70 120 80 125 75 120 70"/>
  <polygon fill={c} points="130 70 120 70 125 75 130 70"/>
  <polygon fill={g} points="120 80 129.99 80 125 75 120 80"/>
  <polygon fill={d} points="125 75 129.99 80 130 79.99 130 70 125 75"/>
  <polygon fill={a} points="189.95 59.95 189.95 59.95 189.96 59.94 189.95 59.95 200 70 200 40 185 55 189.95 59.95"/>
  <polygon fill={b} points="180 50 185 55 200 40 170 40 179.97 49.97 180 50"/>
  <polygon fill={a} points="170.06 60.05 170.05 60.05 170.04 60.06 170.05 60.05 160.01 50 160.01 80 175.01 65 170.06 60.05"/>
  <polygon fill={b} points="180.01 70 175.01 65 160.01 80 190.01 80 180.03 70.03 180.01 70"/>
  <polygon fill={d} points="174.99 44.99 170 40 170 49.99 174.99 44.99"/>
  <polygon fill={c} points="170 50 180 50 179.97 49.97 174.99 44.99 170 49.99 170 50"/>
  <rect fill={c} x="160" y="50" width="0.01" height="9.99"/>
  <polygon fill={e} points="195 65 190 60 190 70 195 65"/>
  <polygon fill={f} points="185 55 180 50 180 59.99 185 55"/>
  <rect fill={c} x="160" y="59.99" width="0.01" height="20.01"/>
  <polygon fill={g} points="180 60 190 60 189.95 59.95 189.95 59.95 185 55 185 55 180 59.99 180 60"/>
  <polygon fill={c} points="200 70 195 65 190 70 200 70"/>
  <polygon fill={f} points="179.99 60 175 64.99 175.01 65 180 69.99 180 60 179.99 60"/>
  <polygon fill={g} points="170.01 60 170.05 60.05 170.06 60.05 175 64.99 179.99 60 170.01 60"/>
  <polygon fill={c} points="180.01 70 180.03 70.03 185 75 190 70 180.01 70"/>
  <polygon fill={e} points="185 75 190 79.99 190 70 185 75"/>
  <polygon fill={c} points="160.01 50 165 54.99 169.99 50 160.01 50"/>
  <polygon fill={d} points="169.99 50 165 54.99 170 59.99 170 50 169.99 50"/>
  <polygon fill={e} points="200 70 190 70 195 75 200 70"/>
  <polygon fill={g} points="200 80 200 70 195 75 200 80"/>
  <polygon fill={c} points="190 70 190 79.99 195 75 190 70"/>
  <polygon fill={h} points="195 75 190 79.99 190.01 80 200 80 195 75"/>
  <polygon fill={f} points="190 60 180 60 185 65 190 60"/>
  <polygon fill={c} points="190 70 190 60 185 65 190 70"/>
  <polygon fill={g} points="180 60 180 69.99 185 65 180 60"/>
  <polygon fill={e} points="185 65 180 69.99 180.01 70 190 70 185 65"/>
  <polygon fill={d} points="180 50 170 50 175 55 180 50"/>
  <polygon fill={g} points="180 60 180 50 175 55 180 60"/>
  <polygon fill={c} points="170 50 170 59.99 175 55 170 50"/>
  <polygon fill={f} points="175 55 170 59.99 170.01 60 180 60 175 55"/>
  <polygon fill={h} points="170 40 160 40 165 45 170 40"/>
  <polygon fill={c} points="170 50 170 40 165 45 170 50"/>
  <polygon fill={g} points="160 40 160 49.99 165 45 160 40"/>
  <polygon fill={d} points="165 45 160 49.99 160.01 50 170 50 165 45"/>
  <polygon fill={a} points="219.95 50.05 219.95 50.05 219.94 50.04 219.95 50.05 230 40 200 40 215 55 219.95 50.05"/>
  <polygon fill={b} points="210 60 215 55 200 40 200 70 209.97 60.03 210 60"/>
  <polygon fill={a} points="220.05 69.94 220.05 69.95 220.06 69.95 220.05 69.95 210 79.99 240 79.99 225 64.99 220.05 69.94"/>
  <polygon fill={b} points="230 59.99 225 64.99 240 79.99 240 49.99 230.03 59.97 230 59.99"/>
  <polygon fill={d} points="204.99 65.01 200 70 209.99 70 204.99 65.01"/>
  <polygon fill={c} points="210 70 210 60 209.97 60.03 204.99 65.01 209.99 70 210 70"/>
  <rect fill={c} x="210" y="79.99" width="9.99" height="0.01"/>
  <polygon fill={e} points="225 45 220 50 230 50 225 45"/>
  <polygon fill={f} points="215 55 210 60 219.99 60 215 55"/>
  <rect fill={c} x="219.99" y="79.99" width="20.01" height="0.01"/>
  <polygon fill={g} points="220 60 220 50 219.95 50.05 219.95 50.05 215 55 215 55 219.99 60 220 60"/>
  <polygon fill={c} points="230 40 225 45 230 50 230 40"/>
  <polygon fill={f} points="220 60.01 224.99 65 225 64.99 229.99 60 220 60 220 60.01"/>
  <polygon fill={g} points="220 69.99 220.05 69.95 220.05 69.94 224.99 65 220 60.01 220 69.99"/>
  <polygon fill={c} points="230 59.99 230.03 59.97 235 55 230 50 230 59.99"/>
  <polygon fill={e} points="235 55 239.99 50 230 50 235 55"/>
  <polygon fill={c} points="210 79.99 214.99 75 210 70.01 210 79.99"/>
  <polygon fill={d} points="210 70.01 214.99 75 219.99 70 210 70 210 70.01"/>
  <polygon fill={e} points="230 40 230 50 235 45 230 40"/>
  <polygon fill={g} points="240 40 230 40 235 45 240 40"/>
  <polygon fill={c} points="230 50 239.99 50 235 45 230 50"/>
  <polygon fill={h} points="235 45 239.99 50 240 49.99 240 40 235 45"/>
  <polygon fill={f} points="220 50 220 60 225 55 220 50"/>
  <polygon fill={c} points="230 50 220 50 225 55 230 50"/>
  <polygon fill={g} points="220 60 229.99 60 225 55 220 60"/>
  <polygon fill={e} points="225 55 229.99 60 230 59.99 230 50 225 55"/>
  <polygon fill={d} points="210 60 210 70 215 65 210 60"/>
  <polygon fill={g} points="220 60 210 60 215 65 220 60"/>
  <polygon fill={c} points="210 70 219.99 70 215 65 210 70"/>
  <polygon fill={f} points="215 65 219.99 70 220 69.99 220 60 215 65"/>
  <polygon fill={h} points="200 70 200 80 205 75 200 70"/>
  <polygon fill={c} points="210 70 200 70 205 75 210 70"/>
  <polygon fill={g} points="200 80 209.99 80 205 75 200 80"/>
  <polygon fill={d} points="205 75 209.99 80 210 79.99 210 70 205 75"/>
  <polygon fill={a} points="250.05 60.05 250.05 60.05 250.04 60.06 250.05 60.05 240 50 240 80 255 65 250.05 60.05"/>
  <polygon fill={b} points="260 70 255 65 240 80 270 80 260.03 70.03 260 70"/>
  <polygon fill={a} points="269.94 59.95 269.95 59.95 269.95 59.94 269.95 59.95 279.99 70 279.99 40 264.99 55 269.94 59.95"/>
  <polygon fill={b} points="259.99 50 264.99 55 279.99 40 249.99 40 259.97 49.97 259.99 50"/>
  <polygon fill={d} points="265.01 75.01 270 80 270 70.01 265.01 75.01"/>
  <polygon fill={c} points="270 70 260 70 260.03 70.03 265.01 75.01 270 70.01 270 70"/>
  <rect fill={c} x="279.99" y="60.01" width="0.01" height="9.99"/>
  <polygon fill={e} points="245 55 250 60 250 50 245 55"/>
  <polygon fill={f} points="255 65 260 70 260 60.01 255 65"/>
  <rect fill={c} x="279.99" y="40" width="0.01" height="20.01"/>
  <polygon fill={g} points="260 60 250 60 250.05 60.05 250.05 60.05 255 65 255 65 260 60.01 260 60"/>
  <polygon fill={c} points="240 50 245 55 250 50 240 50"/>
  <polygon fill={f} points="260.01 60 265 55.01 264.99 55 260 50.01 260 60 260.01 60"/>
  <polygon fill={g} points="269.99 60 269.95 59.95 269.94 59.95 265 55.01 260.01 60 269.99 60"/>
  <polygon fill={c} points="259.99 50 259.97 49.97 255 45 250 50 259.99 50"/>
  <polygon fill={e} points="255 45 250 40.01 250 50 255 45"/>
  <polygon fill={c} points="279.99 70 275 65.01 270.01 70 279.99 70"/>
  <polygon fill={d} points="270.01 70 275 65.01 270 60.01 270 70 270.01 70"/>
  <polygon fill={e} points="240 50 250 50 245 45 240 50"/>
  <polygon fill={g} points="240 40 240 50 245 45 240 40"/>
  <polygon fill={c} points="250 50 250 40.01 245 45 250 50"/>
  <polygon fill={h} points="245 45 250 40.01 249.99 40 240 40 245 45"/>
  <polygon fill={f} points="250 60 260 60 255 55 250 60"/>
  <polygon fill={c} points="250 50 250 60 255 55 250 50"/>
  <polygon fill={g} points="260 60 260 50.01 255 55 260 60"/>
  <polygon fill={e} points="255 55 260 50.01 259.99 50 250 50 255 55"/>
  <polygon fill={d} points="260 70 270 70 265 65 260 70"/>
  <polygon fill={g} points="260 60 260 70 265 65 260 60"/>
  <polygon fill={c} points="270 70 270 60.01 265 65 270 70"/>
  <polygon fill={f} points="265 65 270 60.01 269.99 60 260 60 265 65"/>
  <polygon fill={h} points="270 80 280 80 275 75 270 80"/>
  <polygon fill={c} points="270 70 270 80 275 75 270 70"/>
  <polygon fill={g} points="280 80 280 70.01 275 75 280 80"/>
  <polygon fill={d} points="275 75 280 70.01 279.99 70 270 70 275 75"/>
  <polygon fill={a} points="50.05 100.05 50.05 100.05 50.04 100.06 50.05 100.05 40 90 40 120 55 105 50.05 100.05"/>
  <polygon fill={b} points="60 110 55 105 40 120 70 120 60.03 110.03 60 110"/>
  <polygon fill={a} points="69.94 99.95 69.95 99.95 69.95 99.94 69.95 99.95 79.99 110 79.99 80 64.99 95 69.94 99.95"/>
  <polygon fill={b} points="59.99 90 64.99 95 79.99 80 49.99 80 59.97 89.97 59.99 90"/>
  <polygon fill={d} points="65.01 115.01 70 120 70 110.01 65.01 115.01"/>
  <polygon fill={c} points="70 110 60 110 60.03 110.03 65.01 115.01 70 110.01 70 110"/>
  <rect fill={c} x="79.99" y="100.01" width="0.01" height="9.99"/>
  <polygon fill={e} points="45 95 50 100 50 90 45 95"/>
  <polygon fill={f} points="55 105 60 110 60 100.01 55 105"/>
  <rect fill={c} x="79.99" y="80" width="0.01" height="20.01"/>
  <polygon fill={g} points="60 100 50 100 50.05 100.05 50.05 100.05 55 105 55 105 60 100.01 60 100"/>
  <polygon fill={c} points="40 90 45 95 50 90 40 90"/>
  <polygon fill={f} points="60.01 100 65 95.01 64.99 95 60 90.01 60 100 60.01 100"/>
  <polygon fill={g} points="69.99 100 69.95 99.95 69.94 99.95 65 95.01 60.01 100 69.99 100"/>
  <polygon fill={c} points="59.99 90 59.97 89.97 55 85 50 90 59.99 90"/>
  <polygon fill={e} points="55 85 50 80.01 50 90 55 85"/>
  <polygon fill={c} points="79.99 110 75 105.01 70.01 110 79.99 110"/>
  <polygon fill={d} points="70.01 110 75 105.01 70 100.01 70 110 70.01 110"/>
  <polygon fill={e} points="40 90 50 90 45 85 40 90"/>
  <polygon fill={g} points="40 80 40 90 45 85 40 80"/>
  <polygon fill={c} points="50 90 50 80.01 45 85 50 90"/>
  <polygon fill={h} points="45 85 50 80.01 49.99 80 40 80 45 85"/>
  <polygon fill={f} points="50 100 60 100 55 95 50 100"/>
  <polygon fill={c} points="50 90 50 100 55 95 50 90"/>
  <polygon fill={g} points="60 100 60 90.01 55 95 60 100"/>
  <polygon fill={e} points="55 95 60 90.01 59.99 90 50 90 55 95"/>
  <polygon fill={d} points="60 110 70 110 65 105 60 110"/>
  <polygon fill={g} points="60 100 60 110 65 105 60 100"/>
  <polygon fill={c} points="70 110 70 100.01 65 105 70 110"/>
  <polygon fill={f} points="65 105 70 100.01 69.99 100 60 100 65 105"/>
  <polygon fill={h} points="70 120 80 120 75 115 70 120"/>
  <polygon fill={c} points="70 110 70 120 75 115 70 110"/>
  <polygon fill={g} points="80 120 80 110.01 75 115 80 120"/>
  <polygon fill={d} points="75 115 80 110.01 79.99 110 70 110 75 115"/>
  <polygon fill={a} points="99.95 90.05 99.95 90.05 99.94 90.04 99.95 90.05 110 80 80 80 95 95 99.95 90.05"/>
  <polygon fill={b} points="90 100 95 95 80 80 80 110 89.97 100.03 90 100"/>
  <polygon fill={a} points="100.05 109.94 100.05 109.95 100.06 109.95 100.05 109.95 90 119.99 120 119.99 105 104.99 100.05 109.94"/>
  <polygon fill={b} points="110 99.99 105 104.99 120 119.99 120 89.99 110.03 99.97 110 99.99"/>
  <polygon fill={d} points="84.99 105.01 80 110 89.99 110 84.99 105.01"/>
  <polygon fill={c} points="90 110 90 100 89.97 100.03 84.99 105.01 89.99 110 90 110"/>
  <rect fill={c} x="90" y="119.99" width="9.99" height="0.01"/>
  <polygon fill={e} points="105 85 100 90 110 90 105 85"/>
  <polygon fill={f} points="95 95 90 100 99.99 100 95 95"/>
  <rect fill={c} x="99.99" y="119.99" width="20.01" height="0.01"/>
  <polygon fill={g} points="100 100 100 90 99.95 90.05 99.95 90.05 95 95 95 95 99.99 100 100 100"/>
  <polygon fill={c} points="110 80 105 85 110 90 110 80"/>
  <polygon fill={f} points="100 100.01 104.99 105 105 104.99 109.99 100 100 100 100 100.01"/>
  <polygon fill={g} points="100 109.99 100.05 109.95 100.05 109.94 104.99 105 100 100.01 100 109.99"/>
  <polygon fill={c} points="110 99.99 110.03 99.97 115 95 110 90 110 99.99"/>
  <polygon fill={e} points="115 95 119.99 90 110 90 115 95"/>
  <polygon fill={c} points="90 119.99 94.99 115 90 110.01 90 119.99"/>
  <polygon fill={d} points="90 110.01 94.99 115 99.99 110 90 110 90 110.01"/>
  <polygon fill={e} points="110 80 110 90 115 85 110 80"/>
  <polygon fill={g} points="120 80 110 80 115 85 120 80"/>
  <polygon fill={c} points="110 90 119.99 90 115 85 110 90"/>
  <polygon fill={h} points="115 85 119.99 90 120 89.99 120 80 115 85"/>
  <polygon fill={f} points="100 90 100 100 105 95 100 90"/>
  <polygon fill={c} points="110 90 100 90 105 95 110 90"/>
  <polygon fill={g} points="100 100 109.99 100 105 95 100 100"/>
  <polygon fill={e} points="105 95 109.99 100 110 99.99 110 90 105 95"/>
  <polygon fill={d} points="90 100 90 110 95 105 90 100"/>
  <polygon fill={g} points="100 100 90 100 95 105 100 100"/>
  <polygon fill={c} points="90 110 99.99 110 95 105 90 110"/>
  <polygon fill={f} points="95 105 99.99 110 100 109.99 100 100 95 105"/>
  <polygon fill={h} points="80 110 80 120 85 115 80 110"/>
  <polygon fill={c} points="90 110 80 110 85 115 90 110"/>
  <polygon fill={g} points="80 120 89.99 120 85 115 80 120"/>
  <polygon fill={d} points="85 115 89.99 120 90 119.99 90 110 85 115"/>
  <polygon fill={a} points="130.05 100.05 130.05 100.05 130.04 100.06 130.05 100.05 120 90 120 120 135 105 130.05 100.05"/>
  <polygon fill={b} points="140 110 135 105 120 120 150 120 140.03 110.03 140 110"/>
  <polygon fill={a} points="149.94 99.95 149.95 99.95 149.96 99.94 149.95 99.95 159.99 110 159.99 80 144.99 95 149.94 99.95"/>
  <polygon fill={b} points="139.99 90 144.99 95 159.99 80 129.99 80 139.97 89.97 139.99 90"/>
  <polygon fill={d} points="145.01 115.01 150 120 150 110.01 145.01 115.01"/>
  <polygon fill={c} points="150 110 140 110 140.03 110.03 145.01 115.01 150 110.01 150 110"/>
  <rect fill={c} x="159.99" y="100.01" width="0.01" height="9.99"/>
  <polygon fill={e} points="125 95 130 100 130 90 125 95"/>
  <polygon fill={f} points="135 105 140 110 140 100.01 135 105"/>
  <rect fill={c} x="159.99" y="80" width="0.01" height="20.01"/>
  <polygon fill={g} points="140 100 130 100 130.05 100.05 130.05 100.05 135 105 135 105 140 100.01 140 100"/>
  <polygon fill={c} points="120 90 125 95 130 90 120 90"/>
  <polygon fill={f} points="140.01 100 145 95.01 144.99 95 140 90.01 140 100 140.01 100"/>
  <polygon fill={g} points="149.99 100 149.95 99.95 149.94 99.95 145 95.01 140.01 100 149.99 100"/>
  <polygon fill={c} points="139.99 90 139.97 89.97 135 85 130 90 139.99 90"/>
  <polygon fill={e} points="135 85 130 80.01 130 90 135 85"/>
  <polygon fill={c} points="159.99 110 155 105.01 150.01 110 159.99 110"/>
  <polygon fill={d} points="150.01 110 155 105.01 150 100.01 150 110 150.01 110"/>
  <polygon fill={e} points="120 90 130 90 125 85 120 90"/>
  <polygon fill={g} points="120 80 120 90 125 85 120 80"/>
  <polygon fill={c} points="130 90 130 80.01 125 85 130 90"/>
  <polygon fill={h} points="125 85 130 80.01 129.99 80 120 80 125 85"/>
  <polygon fill={f} points="130 100 140 100 135 95 130 100"/>
  <polygon fill={c} points="130 90 130 100 135 95 130 90"/>
  <polygon fill={g} points="140 100 140 90.01 135 95 140 100"/>
  <polygon fill={e} points="135 95 140 90.01 139.99 90 130 90 135 95"/>
  <polygon fill={d} points="140 110 150 110 145 105 140 110"/>
  <polygon fill={g} points="140 100 140 110 145 105 140 100"/>
  <polygon fill={c} points="150 110 150 100.01 145 105 150 110"/>
  <polygon fill={f} points="145 105 150 100.01 149.99 100 140 100 145 105"/>
  <polygon fill={h} points="150 120 160 120 155 115 150 120"/>
  <polygon fill={c} points="150 110 150 120 155 115 150 110"/>
  <polygon fill={g} points="160 120 160 110.01 155 115 160 120"/>
  <polygon fill={d} points="155 115 160 110.01 159.99 110 150 110 155 115"/>
  <polygon fill={a} points="179.95 90.05 179.95 90.05 179.94 90.04 179.95 90.05 190 80 160 80 175 95 179.95 90.05"/>
  <polygon fill={b} points="170 100 175 95 160 80 160 110 169.97 100.03 170 100"/>
  <polygon fill={a} points="180.05 109.94 180.05 109.95 180.06 109.95 180.05 109.95 170 119.99 200 119.99 185 104.99 180.05 109.94"/>
  <polygon fill={b} points="190 99.99 185 104.99 200 119.99 200 89.99 190.03 99.97 190 99.99"/>
  <polygon fill={d} points="164.99 105.01 160 110 169.99 110 164.99 105.01"/>
  <polygon fill={c} points="170 110 170 100 169.97 100.03 164.99 105.01 169.99 110 170 110"/>
  <rect fill={c} x="170" y="119.99" width="9.99" height="0.01"/>
  <polygon fill={e} points="185 85 180 90 190 90 185 85"/>
  <polygon fill={f} points="175 95 170 100 179.99 100 175 95"/>
  <rect fill={c} x="179.99" y="119.99" width="20.01" height="0.01"/>
  <polygon fill={g} points="180 100 180 90 179.95 90.05 179.95 90.05 175 95 175 95 179.99 100 180 100"/>
  <polygon fill={c} points="190 80 185 85 190 90 190 80"/>
  <polygon fill={f} points="180 100.01 184.99 105 185 104.99 189.99 100 180 100 180 100.01"/>
  <polygon fill={g} points="180 109.99 180.05 109.95 180.05 109.94 184.99 105 180 100.01 180 109.99"/>
  <polygon fill={c} points="190 99.99 190.03 99.97 195 95 190 90 190 99.99"/>
  <polygon fill={e} points="195 95 199.99 90 190 90 195 95"/>
  <polygon fill={c} points="170 119.99 174.99 115 170 110.01 170 119.99"/>
  <polygon fill={d} points="170 110.01 174.99 115 179.99 110 170 110 170 110.01"/>
  <polygon fill={e} points="190 80 190 90 195 85 190 80"/>
  <polygon fill={g} points="200 80 190 80 195 85 200 80"/>
  <polygon fill={c} points="190 90 199.99 90 195 85 190 90"/>
  <polygon fill={h} points="195 85 199.99 90 200 89.99 200 80 195 85"/>
  <polygon fill={f} points="180 90 180 100 185 95 180 90"/>
  <polygon fill={c} points="190 90 180 90 185 95 190 90"/>
  <polygon fill={g} points="180 100 189.99 100 185 95 180 100"/>
  <polygon fill={e} points="185 95 189.99 100 190 99.99 190 90 185 95"/>
  <polygon fill={d} points="170 100 170 110 175 105 170 100"/>
  <polygon fill={g} points="180 100 170 100 175 105 180 100"/>
  <polygon fill={c} points="170 110 179.99 110 175 105 170 110"/>
  <polygon fill={f} points="175 105 179.99 110 180 109.99 180 100 175 105"/>
  <polygon fill={h} points="160 110 160 120 165 115 160 110"/>
  <polygon fill={c} points="170 110 160 110 165 115 170 110"/>
  <polygon fill={g} points="160 120 169.99 120 165 115 160 120"/>
  <polygon fill={d} points="165 115 169.99 120 170 119.99 170 110 165 115"/>
  <polygon fill={a} points="210.05 100.05 210.05 100.05 210.04 100.06 210.05 100.05 200 90 200 120 215 105 210.05 100.05"/>
  <polygon fill={b} points="220 110 215 105 200 120 230 120 220.03 110.03 220 110"/>
  <polygon fill={a} points="229.94 99.95 229.95 99.95 229.96 99.94 229.95 99.95 239.99 110 239.99 80 224.99 95 229.94 99.95"/>
  <polygon fill={b} points="219.99 90 224.99 95 239.99 80 209.99 80 219.97 89.97 219.99 90"/>
  <polygon fill={d} points="225.01 115.01 230 120 230 110.01 225.01 115.01"/>
  <polygon fill={c} points="230 110 220 110 220.03 110.03 225.01 115.01 230 110.01 230 110"/>
  <rect fill={c} x="239.99" y="100.01" width="0.01" height="9.99"/>
  <polygon fill={e} points="205 95 210 100 210 90 205 95"/>
  <polygon fill={f} points="215 105 220 110 220 100.01 215 105"/>
  <rect fill={c} x="239.99" y="80" width="0.01" height="20.01"/>
  <polygon fill={g} points="220 100 210 100 210.05 100.05 210.05 100.05 215 105 215 105 220 100.01 220 100"/>
  <polygon fill={c} points="200 90 205 95 210 90 200 90"/>
  <polygon fill={f} points="220.01 100 225 95.01 224.99 95 220 90.01 220 100 220.01 100"/>
  <polygon fill={g} points="229.99 100 229.95 99.95 229.94 99.95 225 95.01 220.01 100 229.99 100"/>
  <polygon fill={c} points="219.99 90 219.97 89.97 215 85 210 90 219.99 90"/>
  <polygon fill={e} points="215 85 210 80.01 210 90 215 85"/>
  <polygon fill={c} points="239.99 110 235 105.01 230.01 110 239.99 110"/>
  <polygon fill={d} points="230.01 110 235 105.01 230 100.01 230 110 230.01 110"/>
  <polygon fill={e} points="200 90 210 90 205 85 200 90"/>
  <polygon fill={g} points="200 80 200 90 205 85 200 80"/>
  <polygon fill={c} points="210 90 210 80.01 205 85 210 90"/>
  <polygon fill={h} points="205 85 210 80.01 209.99 80 200 80 205 85"/>
  <polygon fill={f} points="210 100 220 100 215 95 210 100"/>
  <polygon fill={c} points="210 90 210 100 215 95 210 90"/>
  <polygon fill={g} points="220 100 220 90.01 215 95 220 100"/>
  <polygon fill={e} points="215 95 220 90.01 219.99 90 210 90 215 95"/>
  <polygon fill={d} points="220 110 230 110 225 105 220 110"/>
  <polygon fill={g} points="220 100 220 110 225 105 220 100"/>
  <polygon fill={c} points="230 110 230 100.01 225 105 230 110"/>
  <polygon fill={f} points="225 105 230 100.01 229.99 100 220 100 225 105"/>
  <polygon fill={h} points="230 120 240 120 235 115 230 120"/>
  <polygon fill={c} points="230 110 230 120 235 115 230 110"/>
  <polygon fill={g} points="240 120 240 110.01 235 115 240 120"/>
  <polygon fill={d} points="235 115 240 110.01 239.99 110 230 110 235 115"/>
  <polygon fill={a} points="259.95 90.05 259.95 90.05 259.94 90.04 259.95 90.05 270 80 240 80 255 95 259.95 90.05"/>
  <polygon fill={b} points="250 100 255 95 240 80 240 110 249.97 100.03 250 100"/>
  <polygon fill={a} points="260.05 109.94 260.05 109.95 260.06 109.95 260.05 109.95 250 119.99 280 119.99 265 104.99 260.05 109.94"/>
  <polygon fill={b} points="270 99.99 265 104.99 280 119.99 280 89.99 270.03 99.97 270 99.99"/>
  <polygon fill={d} points="244.99 105.01 240 110 249.99 110 244.99 105.01"/>
  <polygon fill={c} points="250 110 250 100 249.97 100.03 244.99 105.01 249.99 110 250 110"/>
  <rect fill={c} x="250" y="119.99" width="9.99" height="0.01"/>
  <polygon fill={e} points="265 85 260 90 270 90 265 85"/>
  <polygon fill={f} points="255 95 250 100 259.99 100 255 95"/>
  <rect fill={c} x="259.99" y="119.99" width="20.01" height="0.01"/>
  <polygon fill={g} points="260 100 260 90 259.95 90.05 259.95 90.05 255 95 255 95 259.99 100 260 100"/>
  <polygon fill={c} points="270 80 265 85 270 90 270 80"/>
  <polygon fill={f} points="260 100.01 264.99 105 265 104.99 269.99 100 260 100 260 100.01"/>
  <polygon fill={g} points="260 109.99 260.05 109.95 260.05 109.94 264.99 105 260 100.01 260 109.99"/>
  <polygon fill={c} points="270 99.99 270.03 99.97 275 95 270 90 270 99.99"/>
  <polygon fill={e} points="275 95 279.99 90 270 90 275 95"/>
  <polygon fill={c} points="250 119.99 254.99 115 250 110.01 250 119.99"/>
  <polygon fill={d} points="250 110.01 254.99 115 259.99 110 250 110 250 110.01"/>
  <polygon fill={e} points="270 80 270 90 275 85 270 80"/>
  <polygon fill={g} points="280 80 270 80 275 85 280 80"/>
  <polygon fill={c} points="270 90 279.99 90 275 85 270 90"/>
  <polygon fill={h} points="275 85 279.99 90 280 89.99 280 80 275 85"/>
  <polygon fill={f} points="260 90 260 100 265 95 260 90"/>
  <polygon fill={c} points="270 90 260 90 265 95 270 90"/>
  <polygon fill={g} points="260 100 269.99 100 265 95 260 100"/>
  <polygon fill={e} points="265 95 269.99 100 270 99.99 270 90 265 95"/>
  <polygon fill={d} points="250 100 250 110 255 105 250 100"/>
  <polygon fill={g} points="260 100 250 100 255 105 260 100"/>
  <polygon fill={c} points="250 110 259.99 110 255 105 250 110"/>
  <polygon fill={f} points="255 105 259.99 110 260 109.99 260 100 255 105"/>
  <polygon fill={h} points="240 110 240 120 245 115 240 110"/>
  <polygon fill={c} points="250 110 240 110 245 115 250 110"/>
  <polygon fill={g} points="240 120 249.99 120 245 115 240 120"/>
  <polygon fill={d} points="245 115 249.99 120 250 119.99 250 110 245 115"/>
  <polygon fill={a} points="59.95 130.05 59.95 130.05 59.94 130.04 59.95 130.05 70 120 40 120 55 135 59.95 130.05"/>
  <polygon fill={b} points="50 140 55 135 40 120 40 150 49.97 140.03 50 140"/>
  <polygon fill={a} points="60.05 149.94 60.05 149.95 60.06 149.96 60.05 149.95 50 159.99 80 159.99 65 144.99 60.05 149.94"/>
  <polygon fill={b} points="70 139.99 65 144.99 80 159.99 80 129.99 70.03 139.97 70 139.99"/>
  <polygon fill={d} points="44.99 145.01 40 150 49.99 150 44.99 145.01"/>
  <polygon fill={c} points="50 150 50 140 49.97 140.03 44.99 145.01 49.99 150 50 150"/>
  <rect fill={c} x="50" y="159.99" width="9.99" height="0.01"/>
  <polygon fill={e} points="65 125 60 130 70 130 65 125"/>
  <polygon fill={f} points="55 135 50 140 59.99 140 55 135"/>
  <rect fill={c} x="59.99" y="159.99" width="20.01" height="0.01"/>
  <polygon fill={g} points="60 140 60 130 59.95 130.05 59.95 130.05 55 135 55 135 59.99 140 60 140"/>
  <polygon fill={c} points="70 120 65 125 70 130 70 120"/>
  <polygon fill={f} points="60 140.01 64.99 145 65 144.99 69.99 140 60 140 60 140.01"/>
  <polygon fill={g} points="60 149.99 60.05 149.95 60.05 149.94 64.99 145 60 140.01 60 149.99"/>
  <polygon fill={c} points="70 139.99 70.03 139.97 75 135 70 130 70 139.99"/>
  <polygon fill={e} points="75 135 79.99 130 70 130 75 135"/>
  <polygon fill={c} points="50 159.99 54.99 155 50 150.01 50 159.99"/>
  <polygon fill={d} points="50 150.01 54.99 155 59.99 150 50 150 50 150.01"/>
  <polygon fill={e} points="70 120 70 130 75 125 70 120"/>
  <polygon fill={g} points="80 120 70 120 75 125 80 120"/>
  <polygon fill={c} points="70 130 79.99 130 75 125 70 130"/>
  <polygon fill={h} points="75 125 79.99 130 80 129.99 80 120 75 125"/>
  <polygon fill={f} points="60 130 60 140 65 135 60 130"/>
  <polygon fill={c} points="70 130 60 130 65 135 70 130"/>
  <polygon fill={g} points="60 140 69.99 140 65 135 60 140"/>
  <polygon fill={e} points="65 135 69.99 140 70 139.99 70 130 65 135"/>
  <polygon fill={d} points="50 140 50 150 55 145 50 140"/>
  <polygon fill={g} points="60 140 50 140 55 145 60 140"/>
  <polygon fill={c} points="50 150 59.99 150 55 145 50 150"/>
  <polygon fill={f} points="55 145 59.99 150 60 149.99 60 140 55 145"/>
  <polygon fill={h} points="40 150 40 160 45 155 40 150"/>
  <polygon fill={c} points="50 150 40 150 45 155 50 150"/>
  <polygon fill={g} points="40 160 49.99 160 45 155 40 160"/>
  <polygon fill={d} points="45 155 49.99 160 50 159.99 50 150 45 155"/>
  <polygon fill={a} points="90.05 140.05 90.05 140.05 90.04 140.06 90.05 140.05 80 130 80 160 95 145 90.05 140.05"/>
  <polygon fill={b} points="100 150 95 145 80 160 110 160 100.03 150.03 100 150"/>
  <polygon fill={a} points="109.94 139.95 109.95 139.95 109.95 139.94 109.95 139.95 119.99 150 119.99 120 104.99 135 109.94 139.95"/>
  <polygon fill={b} points="99.99 130 104.99 135 119.99 120 89.99 120 99.97 129.97 99.99 130"/>
  <polygon fill={d} points="105.01 155.01 110 160 110 150.01 105.01 155.01"/>
  <polygon fill={c} points="110 150 100 150 100.03 150.03 105.01 155.01 110 150.01 110 150"/>
  <rect fill={c} x="119.99" y="140.01" width="0.01" height="9.99"/>
  <polygon fill={e} points="85 135 90 140 90 130 85 135"/>
  <polygon fill={f} points="95 145 100 150 100 140.01 95 145"/>
  <rect fill={c} x="119.99" y="120" width="0.01" height="20.01"/>
  <polygon fill={g} points="100 140 90 140 90.05 140.05 90.05 140.05 95 145 95 145 100 140.01 100 140"/>
  <polygon fill={c} points="80 130 85 135 90 130 80 130"/>
  <polygon fill={f} points="100.01 140 105 135.01 104.99 135 100 130.01 100 140 100.01 140"/>
  <polygon fill={g} points="109.99 140 109.95 139.95 109.94 139.95 105 135.01 100.01 140 109.99 140"/>
  <polygon fill={c} points="99.99 130 99.97 129.97 95 125 90 130 99.99 130"/>
  <polygon fill={e} points="95 125 90 120.01 90 130 95 125"/>
  <polygon fill={c} points="119.99 150 115 145.01 110.01 150 119.99 150"/>
  <polygon fill={d} points="110.01 150 115 145.01 110 140.01 110 150 110.01 150"/>
  <polygon fill={e} points="80 130 90 130 85 125 80 130"/>
  <polygon fill={g} points="80 120 80 130 85 125 80 120"/>
  <polygon fill={c} points="90 130 90 120.01 85 125 90 130"/>
  <polygon fill={h} points="85 125 90 120.01 89.99 120 80 120 85 125"/>
  <polygon fill={f} points="90 140 100 140 95 135 90 140"/>
  <polygon fill={c} points="90 130 90 140 95 135 90 130"/>
  <polygon fill={g} points="100 140 100 130.01 95 135 100 140"/>
  <polygon fill={e} points="95 135 100 130.01 99.99 130 90 130 95 135"/>
  <polygon fill={d} points="100 150 110 150 105 145 100 150"/>
  <polygon fill={g} points="100 140 100 150 105 145 100 140"/>
  <polygon fill={c} points="110 150 110 140.01 105 145 110 150"/>
  <polygon fill={f} points="105 145 110 140.01 109.99 140 100 140 105 145"/>
  <polygon fill={h} points="110 160 120 160 115 155 110 160"/>
  <polygon fill={c} points="110 150 110 160 115 155 110 150"/>
  <polygon fill={g} points="120 160 120 150.01 115 155 120 160"/>
  <polygon fill={d} points="115 155 120 150.01 119.99 150 110 150 115 155"/>
  <polygon fill={a} points="139.95 130.05 139.95 130.05 139.94 130.04 139.95 130.05 150 120 120 120 135 135 139.95 130.05"/>
  <polygon fill={b} points="130 140 135 135 120 120 120 150 129.97 140.03 130 140"/>
  <polygon fill={a} points="140.05 149.94 140.05 149.95 140.06 149.96 140.05 149.95 130 159.99 160 159.99 145 144.99 140.05 149.94"/>
  <polygon fill={b} points="150 139.99 145 144.99 160 159.99 160 129.99 150.03 139.97 150 139.99"/>
  <polygon fill={d} points="124.99 145.01 120 150 129.99 150 124.99 145.01"/>
  <polygon fill={c} points="130 150 130 140 129.97 140.03 124.99 145.01 129.99 150 130 150"/>
  <rect fill={c} x="130" y="159.99" width="9.99" height="0.01"/>
  <polygon fill={e} points="145 125 140 130 150 130 145 125"/>
  <polygon fill={f} points="135 135 130 140 139.99 140 135 135"/>
  <rect fill={c} x="139.99" y="159.99" width="20.01" height="0.01"/>
  <polygon fill={g} points="140 140 140 130 139.95 130.05 139.95 130.05 135 135 135 135 139.99 140 140 140"/>
  <polygon fill={c} points="150 120 145 125 150 130 150 120"/>
  <polygon fill={f} points="140 140.01 144.99 145 145 144.99 149.99 140 140 140 140 140.01"/>
  <polygon fill={g} points="140 149.99 140.05 149.95 140.05 149.94 144.99 145 140 140.01 140 149.99"/>
  <polygon fill={c} points="150 139.99 150.03 139.97 155 135 150 130 150 139.99"/>
  <polygon fill={e} points="155 135 159.99 130 150 130 155 135"/>
  <polygon fill={c} points="130 159.99 134.99 155 130 150.01 130 159.99"/>
  <polygon fill={d} points="130 150.01 134.99 155 139.99 150 130 150 130 150.01"/>
  <polygon fill={e} points="150 120 150 130 155 125 150 120"/>
  <polygon fill={g} points="160 120 150 120 155 125 160 120"/>
  <polygon fill={c} points="150 130 159.99 130 155 125 150 130"/>
  <polygon fill={h} points="155 125 159.99 130 160 129.99 160 120 155 125"/>
  <polygon fill={f} points="140 130 140 140 145 135 140 130"/>
  <polygon fill={c} points="150 130 140 130 145 135 150 130"/>
  <polygon fill={g} points="140 140 149.99 140 145 135 140 140"/>
  <polygon fill={e} points="145 135 149.99 140 150 139.99 150 130 145 135"/>
  <polygon fill={d} points="130 140 130 150 135 145 130 140"/>
  <polygon fill={g} points="140 140 130 140 135 145 140 140"/>
  <polygon fill={c} points="130 150 139.99 150 135 145 130 150"/>
  <polygon fill={f} points="135 145 139.99 150 140 149.99 140 140 135 145"/>
  <polygon fill={h} points="120 150 120 160 125 155 120 150"/>
  <polygon fill={c} points="130 150 120 150 125 155 130 150"/>
  <polygon fill={g} points="120 160 129.99 160 125 155 120 160"/>
  <polygon fill={d} points="125 155 129.99 160 130 159.99 130 150 125 155"/>
  <polygon fill={a} points="170.05 140.05 170.05 140.05 170.04 140.06 170.05 140.05 160 130 160 160 175 145 170.05 140.05"/>
  <polygon fill={b} points="180 150 175 145 160 160 190 160 180.03 150.03 180 150"/>
  <polygon fill={a} points="189.94 139.95 189.95 139.95 189.96 139.94 189.95 139.95 199.99 150 199.99 120 184.99 135 189.94 139.95"/>
  <polygon fill={b} points="179.99 130 184.99 135 199.99 120 169.99 120 179.97 129.97 179.99 130"/>
  <polygon fill={d} points="185.01 155.01 190 160 190 150.01 185.01 155.01"/>
  <polygon fill={c} points="190 150 180 150 180.03 150.03 185.01 155.01 190 150.01 190 150"/>
  <rect fill={c} x="199.99" y="140.01" width="0.01" height="9.99"/>
  <polygon fill={e} points="165 135 170 140 170 130 165 135"/>
  <polygon fill={f} points="175 145 180 150 180 140.01 175 145"/>
  <rect fill={c} x="199.99" y="120" width="0.01" height="20.01"/>
  <polygon fill={g} points="180 140 170 140 170.05 140.05 170.05 140.05 175 145 175 145 180 140.01 180 140"/>
  <polygon fill={c} points="160 130 165 135 170 130 160 130"/>
  <polygon fill={f} points="180.01 140 185 135.01 184.99 135 180 130.01 180 140 180.01 140"/>
  <polygon fill={g} points="189.99 140 189.95 139.95 189.94 139.95 185 135.01 180.01 140 189.99 140"/>
  <polygon fill={c} points="179.99 130 179.97 129.97 175 125 170 130 179.99 130"/>
  <polygon fill={e} points="175 125 170 120.01 170 130 175 125"/>
  <polygon fill={c} points="199.99 150 195 145.01 190.01 150 199.99 150"/>
  <polygon fill={d} points="190.01 150 195 145.01 190 140.01 190 150 190.01 150"/>
  <polygon fill={e} points="160 130 170 130 165 125 160 130"/>
  <polygon fill={g} points="160 120 160 130 165 125 160 120"/>
  <polygon fill={c} points="170 130 170 120.01 165 125 170 130"/>
  <polygon fill={h} points="165 125 170 120.01 169.99 120 160 120 165 125"/>
  <polygon fill={f} points="170 140 180 140 175 135 170 140"/>
  <polygon fill={c} points="170 130 170 140 175 135 170 130"/>
  <polygon fill={g} points="180 140 180 130.01 175 135 180 140"/>
  <polygon fill={e} points="175 135 180 130.01 179.99 130 170 130 175 135"/>
  <polygon fill={d} points="180 150 190 150 185 145 180 150"/>
  <polygon fill={g} points="180 140 180 150 185 145 180 140"/>
  <polygon fill={c} points="190 150 190 140.01 185 145 190 150"/>
  <polygon fill={f} points="185 145 190 140.01 189.99 140 180 140 185 145"/>
  <polygon fill={h} points="190 160 200 160 195 155 190 160"/>
  <polygon fill={c} points="190 150 190 160 195 155 190 150"/>
  <polygon fill={g} points="200 160 200 150.01 195 155 200 160"/>
  <polygon fill={d} points="195 155 200 150.01 199.99 150 190 150 195 155"/>
  <polygon fill={a} points="219.95 130.05 219.95 130.05 219.94 130.04 219.95 130.05 230 120 200 120 215 135 219.95 130.05"/>
  <polygon fill={b} points="210 140 215 135 200 120 200 150 209.97 140.03 210 140"/>
  <polygon fill={a} points="220.05 149.94 220.05 149.95 220.06 149.96 220.05 149.95 210 159.99 240 159.99 225 144.99 220.05 149.94"/>
  <polygon fill={b} points="230 139.99 225 144.99 240 159.99 240 129.99 230.03 139.97 230 139.99"/>
  <polygon fill={d} points="204.99 145.01 200 150 209.99 150 204.99 145.01"/>
  <polygon fill={c} points="210 150 210 140 209.97 140.03 204.99 145.01 209.99 150 210 150"/>
  <rect fill={c} x="210" y="159.99" width="9.99" height="0.01"/>
  <polygon fill={e} points="225 125 220 130 230 130 225 125"/>
  <polygon fill={f} points="215 135 210 140 219.99 140 215 135"/>
  <rect fill={c} x="219.99" y="159.99" width="20.01" height="0.01"/>
  <polygon fill={g} points="220 140 220 130 219.95 130.05 219.95 130.05 215 135 215 135 219.99 140 220 140"/>
  <polygon fill={c} points="230 120 225 125 230 130 230 120"/>
  <polygon fill={f} points="220 140.01 224.99 145 225 144.99 229.99 140 220 140 220 140.01"/>
  <polygon fill={g} points="220 149.99 220.05 149.95 220.05 149.94 224.99 145 220 140.01 220 149.99"/>
  <polygon fill={c} points="230 139.99 230.03 139.97 235 135 230 130 230 139.99"/>
  <polygon fill={e} points="235 135 239.99 130 230 130 235 135"/>
  <polygon fill={c} points="210 159.99 214.99 155 210 150.01 210 159.99"/>
  <polygon fill={d} points="210 150.01 214.99 155 219.99 150 210 150 210 150.01"/>
  <polygon fill={e} points="230 120 230 130 235 125 230 120"/>
  <polygon fill={g} points="240 120 230 120 235 125 240 120"/>
  <polygon fill={c} points="230 130 239.99 130 235 125 230 130"/>
  <polygon fill={h} points="235 125 239.99 130 240 129.99 240 120 235 125"/>
  <polygon fill={f} points="220 130 220 140 225 135 220 130"/>
  <polygon fill={c} points="230 130 220 130 225 135 230 130"/>
  <polygon fill={g} points="220 140 229.99 140 225 135 220 140"/>
  <polygon fill={e} points="225 135 229.99 140 230 139.99 230 130 225 135"/>
  <polygon fill={d} points="210 140 210 150 215 145 210 140"/>
  <polygon fill={g} points="220 140 210 140 215 145 220 140"/>
  <polygon fill={c} points="210 150 219.99 150 215 145 210 150"/>
  <polygon fill={f} points="215 145 219.99 150 220 149.99 220 140 215 145"/>
  <polygon fill={h} points="200 150 200 160 205 155 200 150"/>
  <polygon fill={c} points="210 150 200 150 205 155 210 150"/>
  <polygon fill={g} points="200 160 209.99 160 205 155 200 160"/>
  <polygon fill={d} points="205 155 209.99 160 210 159.99 210 150 205 155"/>
  <polygon fill={a} points="250.05 140.05 250.05 140.05 250.04 140.06 250.05 140.05 240 130 240 160 255 145 250.05 140.05"/>
  <polygon fill={b} points="260 150 255 145 240 160 270 160 260.03 150.03 260 150"/>
  <polygon fill={a} points="269.94 139.95 269.95 139.95 269.95 139.94 269.95 139.95 279.99 150 279.99 120 264.99 135 269.94 139.95"/>
  <polygon fill={b} points="259.99 130 264.99 135 279.99 120 249.99 120 259.97 129.97 259.99 130"/>
  <polygon fill={d} points="265.01 155.01 270 160 270 150.01 265.01 155.01"/>
  <polygon fill={c} points="270 150 260 150 260.03 150.03 265.01 155.01 270 150.01 270 150"/>
  <rect fill={c} x="279.99" y="140.01" width="0.01" height="9.99"/>
  <polygon fill={e} points="245 135 250 140 250 130 245 135"/>
  <polygon fill={f} points="255 145 260 150 260 140.01 255 145"/>
  <rect fill={c} x="279.99" y="120" width="0.01" height="20.01"/>
  <polygon fill={g} points="260 140 250 140 250.05 140.05 250.05 140.05 255 145 255 145 260 140.01 260 140"/>
  <polygon fill={c} points="240 130 245 135 250 130 240 130"/>
  <polygon fill={f} points="260.01 140 265 135.01 264.99 135 260 130.01 260 140 260.01 140"/>
  <polygon fill={g} points="269.99 140 269.95 139.95 269.94 139.95 265 135.01 260.01 140 269.99 140"/>
  <polygon fill={c} points="259.99 130 259.97 129.97 255 125 250 130 259.99 130"/>
  <polygon fill={e} points="255 125 250 120.01 250 130 255 125"/>
  <polygon fill={c} points="279.99 150 275 145.01 270.01 150 279.99 150"/>
  <polygon fill={d} points="270.01 150 275 145.01 270 140.01 270 150 270.01 150"/>
  <polygon fill={e} points="240 130 250 130 245 125 240 130"/>
  <polygon fill={g} points="240 120 240 130 245 125 240 120"/>
  <polygon fill={c} points="250 130 250 120.01 245 125 250 130"/>
  <polygon fill={h} points="245 125 250 120.01 249.99 120 240 120 245 125"/>
  <polygon fill={f} points="250 140 260 140 255 135 250 140"/>
  <polygon fill={c} points="250 130 250 140 255 135 250 130"/>
  <polygon fill={g} points="260 140 260 130.01 255 135 260 140"/>
  <polygon fill={e} points="255 135 260 130.01 259.99 130 250 130 255 135"/>
  <polygon fill={d} points="260 150 270 150 265 145 260 150"/>
  <polygon fill={g} points="260 140 260 150 265 145 260 140"/>
  <polygon fill={c} points="270 150 270 140.01 265 145 270 150"/>
  <polygon fill={f} points="265 145 270 140.01 269.99 140 260 140 265 145"/>
  <polygon fill={h} points="270 160 280 160 275 155 270 160"/>
  <polygon fill={c} points="270 150 270 160 275 155 270 150"/>
  <polygon fill={g} points="280 160 280 150.01 275 155 280 160"/>
  <polygon fill={d} points="275 155 280 150.01 279.99 150 270 150 275 155"/>
  <polygon fill={a} points="69.95 179.95 69.95 179.95 69.96 179.94 69.95 179.95 80 190 80 160 65 175 69.95 179.95"/>
  <polygon fill={b} points="60 170 65 175 80 160 50 160 59.97 169.97 60 170"/>
  <polygon fill={a} points="50.06 180.05 50.05 180.05 50.05 180.06 50.05 180.05 40.01 170 40.01 200 55.01 185 50.06 180.05"/>
  <polygon fill={b} points="60.01 190 55.01 185 40.01 200 70.01 200 60.03 190.03 60.01 190"/>
  <polygon fill={d} points="54.99 164.99 50 160 50 169.99 54.99 164.99"/>
  <polygon fill={c} points="50 170 60 170 59.97 169.97 54.99 164.99 50 169.99 50 170"/>
  <rect fill={c} x="40" y="170" width="0.01" height="9.99"/>
  <polygon fill={e} points="75 185 70 180 70 190 75 185"/>
  <polygon fill={f} points="65 175 60 170 60 179.99 65 175"/>
  <rect fill={c} x="40" y="179.99" width="0.01" height="20.01"/>
  <polygon fill={g} points="60 180 70 180 69.95 179.95 69.95 179.95 65 175 65 175 60 179.99 60 180"/>
  <polygon fill={c} points="80 190 75 185 70 190 80 190"/>
  <polygon fill={f} points="59.99 180 55 184.99 55.01 185 60 189.99 60 180 59.99 180"/>
  <polygon fill={g} points="50.01 180 50.05 180.05 50.06 180.05 55 184.99 59.99 180 50.01 180"/>
  <polygon fill={c} points="60.01 190 60.03 190.03 65 195 70 190 60.01 190"/>
  <polygon fill={e} points="65 195 70 199.99 70 190 65 195"/>
  <polygon fill={c} points="40.01 170 45 174.99 49.99 170 40.01 170"/>
  <polygon fill={d} points="49.99 170 45 174.99 50 179.99 50 170 49.99 170"/>
  <polygon fill={e} points="80 190 70 190 75 195 80 190"/>
  <polygon fill={g} points="80 200 80 190 75 195 80 200"/>
  <polygon fill={c} points="70 190 70 199.99 75 195 70 190"/>
  <polygon fill={h} points="75 195 70 199.99 70.01 200 80 200 75 195"/>
  <polygon fill={f} points="70 180 60 180 65 185 70 180"/>
  <polygon fill={c} points="70 190 70 180 65 185 70 190"/>
  <polygon fill={g} points="60 180 60 189.99 65 185 60 180"/>
  <polygon fill={e} points="65 185 60 189.99 60.01 190 70 190 65 185"/>
  <polygon fill={d} points="60 170 50 170 55 175 60 170"/>
  <polygon fill={g} points="60 180 60 170 55 175 60 180"/>
  <polygon fill={c} points="50 170 50 179.99 55 175 50 170"/>
  <polygon fill={f} points="55 175 50 179.99 50.01 180 60 180 55 175"/>
  <polygon fill={h} points="50 160 40 160 45 165 50 160"/>
  <polygon fill={c} points="50 170 50 160 45 165 50 170"/>
  <polygon fill={g} points="40 160 40 169.99 45 165 40 160"/>
  <polygon fill={d} points="45 165 40 169.99 40.01 170 50 170 45 165"/>
  <polygon fill={a} points="99.95 170.05 99.95 170.05 99.94 170.04 99.95 170.05 110 160 80 160 95 175 99.95 170.05"/>
  <polygon fill={b} points="90 180 95 175 80 160 80 190 89.97 180.03 90 180"/>
  <polygon fill={a} points="100.05 189.94 100.05 189.95 100.06 189.96 100.05 189.95 90 199.99 120 199.99 105 184.99 100.05 189.94"/>
  <polygon fill={b} points="110 179.99 105 184.99 120 199.99 120 169.99 110.03 179.97 110 179.99"/>
  <polygon fill={d} points="84.99 185.01 80 190 89.99 190 84.99 185.01"/>
  <polygon fill={c} points="90 190 90 180 89.97 180.03 84.99 185.01 89.99 190 90 190"/>
  <rect fill={c} x="90" y="199.99" width="9.99" height="0.01"/>
  <polygon fill={e} points="105 165 100 170 110 170 105 165"/>
  <polygon fill={f} points="95 175 90 180 99.99 180 95 175"/>
  <rect fill={c} x="99.99" y="199.99" width="20.01" height="0.01"/>
  <polygon fill={g} points="100 180 100 170 99.95 170.05 99.95 170.05 95 175 95 175 99.99 180 100 180"/>
  <polygon fill={c} points="110 160 105 165 110 170 110 160"/>
  <polygon fill={f} points="100 180.01 104.99 185 105 184.99 109.99 180 100 180 100 180.01"/>
  <polygon fill={g} points="100 189.99 100.05 189.95 100.05 189.94 104.99 185 100 180.01 100 189.99"/>
  <polygon fill={c} points="110 179.99 110.03 179.97 115 175 110 170 110 179.99"/>
  <polygon fill={e} points="115 175 119.99 170 110 170 115 175"/>
  <polygon fill={c} points="90 199.99 94.99 195 90 190.01 90 199.99"/>
  <polygon fill={d} points="90 190.01 94.99 195 99.99 190 90 190 90 190.01"/>
  <polygon fill={e} points="110 160 110 170 115 165 110 160"/>
  <polygon fill={g} points="120 160 110 160 115 165 120 160"/>
  <polygon fill={c} points="110 170 119.99 170 115 165 110 170"/>
  <polygon fill={h} points="115 165 119.99 170 120 169.99 120 160 115 165"/>
  <polygon fill={f} points="100 170 100 180 105 175 100 170"/>
  <polygon fill={c} points="110 170 100 170 105 175 110 170"/>
  <polygon fill={g} points="100 180 109.99 180 105 175 100 180"/>
  <polygon fill={e} points="105 175 109.99 180 110 179.99 110 170 105 175"/>
  <polygon fill={d} points="90 180 90 190 95 185 90 180"/>
  <polygon fill={g} points="100 180 90 180 95 185 100 180"/>
  <polygon fill={c} points="90 190 99.99 190 95 185 90 190"/>
  <polygon fill={f} points="95 185 99.99 190 100 189.99 100 180 95 185"/>
  <polygon fill={h} points="80 190 80 200 85 195 80 190"/>
  <polygon fill={c} points="90 190 80 190 85 195 90 190"/>
  <polygon fill={g} points="80 200 89.99 200 85 195 80 200"/>
  <polygon fill={d} points="85 195 89.99 200 90 199.99 90 190 85 195"/>
  <polygon fill={a} points="149.95 179.95 149.95 179.95 149.96 179.94 149.95 179.95 160 190 160 160 145 175 149.95 179.95"/>
  <polygon fill={b} points="140 170 145 175 160 160 130 160 139.97 169.97 140 170"/>
  <polygon fill={a} points="130.06 180.05 130.05 180.05 130.04 180.06 130.05 180.05 120.01 170 120.01 200 135.01 185 130.06 180.05"/>
  <polygon fill={b} points="140.01 190 135.01 185 120.01 200 150.01 200 140.03 190.03 140.01 190"/>
  <polygon fill={d} points="134.99 164.99 130 160 130 169.99 134.99 164.99"/>
  <polygon fill={c} points="130 170 140 170 139.97 169.97 134.99 164.99 130 169.99 130 170"/>
  <rect fill={c} x="120" y="170" width="0.01" height="9.99"/>
  <polygon fill={e} points="155 185 150 180 150 190 155 185"/>
  <polygon fill={f} points="145 175 140 170 140 179.99 145 175"/>
  <rect fill={c} x="120" y="179.99" width="0.01" height="20.01"/>
  <polygon fill={g} points="140 180 150 180 149.95 179.95 149.95 179.95 145 175 145 175 140 179.99 140 180"/>
  <polygon fill={c} points="160 190 155 185 150 190 160 190"/>
  <polygon fill={f} points="139.99 180 135 184.99 135.01 185 140 189.99 140 180 139.99 180"/>
  <polygon fill={g} points="130.01 180 130.05 180.05 130.06 180.05 135 184.99 139.99 180 130.01 180"/>
  <polygon fill={c} points="140.01 190 140.03 190.03 145 195 150 190 140.01 190"/>
  <polygon fill={e} points="145 195 150 199.99 150 190 145 195"/>
  <polygon fill={c} points="120.01 170 125 174.99 129.99 170 120.01 170"/>
  <polygon fill={d} points="129.99 170 125 174.99 130 179.99 130 170 129.99 170"/>
  <polygon fill={e} points="160 190 150 190 155 195 160 190"/>
  <polygon fill={g} points="160 200 160 190 155 195 160 200"/>
  <polygon fill={c} points="150 190 150 199.99 155 195 150 190"/>
  <polygon fill={h} points="155 195 150 199.99 150.01 200 160 200 155 195"/>
  <polygon fill={f} points="150 180 140 180 145 185 150 180"/>
  <polygon fill={c} points="150 190 150 180 145 185 150 190"/>
  <polygon fill={g} points="140 180 140 189.99 145 185 140 180"/>
  <polygon fill={e} points="145 185 140 189.99 140.01 190 150 190 145 185"/>
  <polygon fill={d} points="140 170 130 170 135 175 140 170"/>
  <polygon fill={g} points="140 180 140 170 135 175 140 180"/>
  <polygon fill={c} points="130 170 130 179.99 135 175 130 170"/>
  <polygon fill={f} points="135 175 130 179.99 130.01 180 140 180 135 175"/>
  <polygon fill={h} points="130 160 120 160 125 165 130 160"/>
  <polygon fill={c} points="130 170 130 160 125 165 130 170"/>
  <polygon fill={g} points="120 160 120 169.99 125 165 120 160"/>
  <polygon fill={d} points="125 165 120 169.99 120.01 170 130 170 125 165"/>
  <polygon fill={a} points="179.95 170.05 179.95 170.05 179.94 170.04 179.95 170.05 190 160 160 160 175 175 179.95 170.05"/>
  <polygon fill={b} points="170 180 175 175 160 160 160 190 169.97 180.03 170 180"/>
  <polygon fill={a} points="180.05 189.94 180.05 189.95 180.06 189.96 180.05 189.95 170 199.99 200 199.99 185 184.99 180.05 189.94"/>
  <polygon fill={b} points="190 179.99 185 184.99 200 199.99 200 169.99 190.03 179.97 190 179.99"/>
  <polygon fill={d} points="164.99 185.01 160 190 169.99 190 164.99 185.01"/>
  <polygon fill={c} points="170 190 170 180 169.97 180.03 164.99 185.01 169.99 190 170 190"/>
  <rect fill={c} x="170" y="199.99" width="9.99" height="0.01"/>
  <polygon fill={e} points="185 165 180 170 190 170 185 165"/>
  <polygon fill={f} points="175 175 170 180 179.99 180 175 175"/>
  <rect fill={c} x="179.99" y="199.99" width="20.01" height="0.01"/>
  <polygon fill={g} points="180 180 180 170 179.95 170.05 179.95 170.05 175 175 175 175 179.99 180 180 180"/>
  <polygon fill={c} points="190 160 185 165 190 170 190 160"/>
  <polygon fill={f} points="180 180.01 184.99 185 185 184.99 189.99 180 180 180 180 180.01"/>
  <polygon fill={g} points="180 189.99 180.05 189.95 180.05 189.94 184.99 185 180 180.01 180 189.99"/>
  <polygon fill={c} points="190 179.99 190.03 179.97 195 175 190 170 190 179.99"/>
  <polygon fill={e} points="195 175 199.99 170 190 170 195 175"/>
  <polygon fill={c} points="170 199.99 174.99 195 170 190.01 170 199.99"/>
  <polygon fill={d} points="170 190.01 174.99 195 179.99 190 170 190 170 190.01"/>
  <polygon fill={e} points="190 160 190 170 195 165 190 160"/>
  <polygon fill={g} points="200 160 190 160 195 165 200 160"/>
  <polygon fill={c} points="190 170 199.99 170 195 165 190 170"/>
  <polygon fill={h} points="195 165 199.99 170 200 169.99 200 160 195 165"/>
  <polygon fill={f} points="180 170 180 180 185 175 180 170"/>
  <polygon fill={c} points="190 170 180 170 185 175 190 170"/>
  <polygon fill={g} points="180 180 189.99 180 185 175 180 180"/>
  <polygon fill={e} points="185 175 189.99 180 190 179.99 190 170 185 175"/>
  <polygon fill={d} points="170 180 170 190 175 185 170 180"/>
  <polygon fill={g} points="180 180 170 180 175 185 180 180"/>
  <polygon fill={c} points="170 190 179.99 190 175 185 170 190"/>
  <polygon fill={f} points="175 185 179.99 190 180 189.99 180 180 175 185"/>
  <polygon fill={h} points="160 190 160 200 165 195 160 190"/>
  <polygon fill={c} points="170 190 160 190 165 195 170 190"/>
  <polygon fill={g} points="160 200 169.99 200 165 195 160 200"/>
  <polygon fill={d} points="165 195 169.99 200 170 199.99 170 190 165 195"/>
  <polygon fill={a} points="229.95 179.95 229.95 179.95 229.96 179.94 229.95 179.95 240 190 240 160 225 175 229.95 179.95"/>
  <polygon fill={b} points="220 170 225 175 240 160 210 160 219.97 169.97 220 170"/>
  <polygon fill={a} points="210.06 180.05 210.05 180.05 210.04 180.06 210.05 180.05 200.01 170 200.01 200 215.01 185 210.06 180.05"/>
  <polygon fill={b} points="220.01 190 215.01 185 200.01 200 230.01 200 220.03 190.03 220.01 190"/>
  <polygon fill={d} points="214.99 164.99 210 160 210 169.99 214.99 164.99"/>
  <polygon fill={c} points="210 170 220 170 219.97 169.97 214.99 164.99 210 169.99 210 170"/>
  <rect fill={c} x="200" y="170" width="0.01" height="9.99"/>
  <polygon fill={e} points="235 185 230 180 230 190 235 185"/>
  <polygon fill={f} points="225 175 220 170 220 179.99 225 175"/>
  <rect fill={c} x="200" y="179.99" width="0.01" height="20.01"/>
  <polygon fill={g} points="220 180 230 180 229.95 179.95 229.95 179.95 225 175 225 175 220 179.99 220 180"/>
  <polygon fill={c} points="240 190 235 185 230 190 240 190"/>
  <polygon fill={f} points="219.99 180 215 184.99 215.01 185 220 189.99 220 180 219.99 180"/>
  <polygon fill={g} points="210.01 180 210.05 180.05 210.06 180.05 215 184.99 219.99 180 210.01 180"/>
  <polygon fill={c} points="220.01 190 220.03 190.03 225 195 230 190 220.01 190"/>
  <polygon fill={e} points="225 195 230 199.99 230 190 225 195"/>
  <polygon fill={c} points="200.01 170 205 174.99 209.99 170 200.01 170"/>
  <polygon fill={d} points="209.99 170 205 174.99 210 179.99 210 170 209.99 170"/>
  <polygon fill={e} points="240 190 230 190 235 195 240 190"/>
  <polygon fill={g} points="240 200 240 190 235 195 240 200"/>
  <polygon fill={c} points="230 190 230 199.99 235 195 230 190"/>
  <polygon fill={h} points="235 195 230 199.99 230.01 200 240 200 235 195"/>
  <polygon fill={f} points="230 180 220 180 225 185 230 180"/>
  <polygon fill={c} points="230 190 230 180 225 185 230 190"/>
  <polygon fill={g} points="220 180 220 189.99 225 185 220 180"/>
  <polygon fill={e} points="225 185 220 189.99 220.01 190 230 190 225 185"/>
  <polygon fill={d} points="220 170 210 170 215 175 220 170"/>
  <polygon fill={g} points="220 180 220 170 215 175 220 180"/>
  <polygon fill={c} points="210 170 210 179.99 215 175 210 170"/>
  <polygon fill={f} points="215 175 210 179.99 210.01 180 220 180 215 175"/>
  <polygon fill={h} points="210 160 200 160 205 165 210 160"/>
  <polygon fill={c} points="210 170 210 160 205 165 210 170"/>
  <polygon fill={g} points="200 160 200 169.99 205 165 200 160"/>
  <polygon fill={d} points="205 165 200 169.99 200.01 170 210 170 205 165"/>
  <polygon fill={a} points="259.95 170.05 259.95 170.05 259.94 170.04 259.95 170.05 270 160 240 160 255 175 259.95 170.05"/>
  <polygon fill={b} points="250 180 255 175 240 160 240 190 249.97 180.03 250 180"/>
  <polygon fill={a} points="260.05 189.94 260.05 189.95 260.06 189.96 260.05 189.95 250 199.99 280 199.99 265 184.99 260.05 189.94"/>
  <polygon fill={b} points="270 179.99 265 184.99 280 199.99 280 169.99 270.03 179.97 270 179.99"/>
  <polygon fill={d} points="244.99 185.01 240 190 249.99 190 244.99 185.01"/>
  <polygon fill={c} points="250 190 250 180 249.97 180.03 244.99 185.01 249.99 190 250 190"/>
  <rect fill={c} x="250" y="199.99" width="9.99" height="0.01"/>
  <polygon fill={e} points="265 165 260 170 270 170 265 165"/>
  <polygon fill={f} points="255 175 250 180 259.99 180 255 175"/>
  <rect fill={c} x="259.99" y="199.99" width="20.01" height="0.01"/>
  <polygon fill={g} points="260 180 260 170 259.95 170.05 259.95 170.05 255 175 255 175 259.99 180 260 180"/>
  <polygon fill={c} points="270 160 265 165 270 170 270 160"/>
  <polygon fill={f} points="260 180.01 264.99 185 265 184.99 269.99 180 260 180 260 180.01"/>
  <polygon fill={g} points="260 189.99 260.05 189.95 260.05 189.94 264.99 185 260 180.01 260 189.99"/>
  <polygon fill={c} points="270 179.99 270.03 179.97 275 175 270 170 270 179.99"/>
  <polygon fill={e} points="275 175 279.99 170 270 170 275 175"/>
  <polygon fill={c} points="250 199.99 254.99 195 250 190.01 250 199.99"/>
  <polygon fill={d} points="250 190.01 254.99 195 259.99 190 250 190 250 190.01"/>
  <polygon fill={e} points="270 160 270 170 275 165 270 160"/>
  <polygon fill={g} points="280 160 270 160 275 165 280 160"/>
  <polygon fill={c} points="270 170 279.99 170 275 165 270 170"/>
  <polygon fill={h} points="275 165 279.99 170 280 169.99 280 160 275 165"/>
  <polygon fill={f} points="260 170 260 180 265 175 260 170"/>
  <polygon fill={c} points="270 170 260 170 265 175 270 170"/>
  <polygon fill={g} points="260 180 269.99 180 265 175 260 180"/>
  <polygon fill={e} points="265 175 269.99 180 270 179.99 270 170 265 175"/>
  <polygon fill={d} points="250 180 250 190 255 185 250 180"/>
  <polygon fill={g} points="260 180 250 180 255 185 260 180"/>
  <polygon fill={c} points="250 190 259.99 190 255 185 250 190"/>
  <polygon fill={f} points="255 185 259.99 190 260 189.99 260 180 255 185"/>
  <polygon fill={h} points="240 190 240 200 245 195 240 190"/>
  <polygon fill={c} points="250 190 240 190 245 195 250 190"/>
  <polygon fill={g} points="240 200 249.99 200 245 195 240 200"/>
  <polygon fill={d} points="245 195 249.99 200 250 199.99 250 190 245 195"/>
  <polygon fill={a} points="59.95 210.05 59.95 210.05 59.94 210.04 59.95 210.05 70 200 40 200 55 215 59.95 210.05"/>
  <polygon fill={b} points="50 220 55 215 40 200 40 230 49.97 220.03 50 220"/>
  <polygon fill={a} points="60.05 229.94 60.05 229.95 60.06 229.96 60.05 229.95 50 239.99 80 239.99 65 224.99 60.05 229.94"/>
  <polygon fill={b} points="70 219.99 65 224.99 80 239.99 80 209.99 70.03 219.97 70 219.99"/>
  <polygon fill={d} points="44.99 225.01 40 230 49.99 230 44.99 225.01"/>
  <polygon fill={c} points="50 230 50 220 49.97 220.03 44.99 225.01 49.99 230 50 230"/>
  <rect fill={c} x="50" y="239.99" width="9.99" height="0.01"/>
  <polygon fill={e} points="65 205 60 210 70 210 65 205"/>
  <polygon fill={f} points="55 215 50 220 59.99 220 55 215"/>
  <rect fill={c} x="59.99" y="239.99" width="20.01" height="0.01"/>
  <polygon fill={g} points="60 220 60 210 59.95 210.05 59.95 210.05 55 215 55 215 59.99 220 60 220"/>
  <polygon fill={c} points="70 200 65 205 70 210 70 200"/>
  <polygon fill={f} points="60 220.01 64.99 225 65 224.99 69.99 220 60 220 60 220.01"/>
  <polygon fill={g} points="60 229.99 60.05 229.95 60.05 229.94 64.99 225 60 220.01 60 229.99"/>
  <polygon fill={c} points="70 219.99 70.03 219.97 75 215 70 210 70 219.99"/>
  <polygon fill={e} points="75 215 79.99 210 70 210 75 215"/>
  <polygon fill={c} points="50 239.99 54.99 235 50 230.01 50 239.99"/>
  <polygon fill={d} points="50 230.01 54.99 235 59.99 230 50 230 50 230.01"/>
  <polygon fill={e} points="70 200 70 210 75 205 70 200"/>
  <polygon fill={g} points="80 200 70 200 75 205 80 200"/>
  <polygon fill={c} points="70 210 79.99 210 75 205 70 210"/>
  <polygon fill={h} points="75 205 79.99 210 80 209.99 80 200 75 205"/>
  <polygon fill={f} points="60 210 60 220 65 215 60 210"/>
  <polygon fill={c} points="70 210 60 210 65 215 70 210"/>
  <polygon fill={g} points="60 220 69.99 220 65 215 60 220"/>
  <polygon fill={e} points="65 215 69.99 220 70 219.99 70 210 65 215"/>
  <polygon fill={d} points="50 220 50 230 55 225 50 220"/>
  <polygon fill={g} points="60 220 50 220 55 225 60 220"/>
  <polygon fill={c} points="50 230 59.99 230 55 225 50 230"/>
  <polygon fill={f} points="55 225 59.99 230 60 229.99 60 220 55 225"/>
  <polygon fill={h} points="40 230 40 240 45 235 40 230"/>
  <polygon fill={c} points="50 230 40 230 45 235 50 230"/>
  <polygon fill={g} points="40 240 49.99 240 45 235 40 240"/>
  <polygon fill={d} points="45 235 49.99 240 50 239.99 50 230 45 235"/>
  <polygon fill={a} points="90.05 220.05 90.05 220.05 90.04 220.06 90.05 220.05 80 210 80 240 95 225 90.05 220.05"/>
  <polygon fill={b} points="100 230 95 225 80 240 110 240 100.03 230.03 100 230"/>
  <polygon fill={a} points="109.94 219.95 109.95 219.95 109.95 219.94 109.95 219.95 119.99 230 119.99 200 104.99 215 109.94 219.95"/>
  <polygon fill={b} points="99.99 210 104.99 215 119.99 200 89.99 200 99.97 209.97 99.99 210"/>
  <polygon fill={d} points="105.01 235.01 110 240 110 230.01 105.01 235.01"/>
  <polygon fill={c} points="110 230 100 230 100.03 230.03 105.01 235.01 110 230.01 110 230"/>
  <rect fill={c} x="119.99" y="220.01" width="0.01" height="9.99"/>
  <polygon fill={e} points="85 215 90 220 90 210 85 215"/>
  <polygon fill={f} points="95 225 100 230 100 220.01 95 225"/>
  <rect fill={c} x="119.99" y="200" width="0.01" height="20.01"/>
  <polygon fill={g} points="100 220 90 220 90.05 220.05 90.05 220.05 95 225 95 225 100 220.01 100 220"/>
  <polygon fill={c} points="80 210 85 215 90 210 80 210"/>
  <polygon fill={f} points="100.01 220 105 215.01 104.99 215 100 210.01 100 220 100.01 220"/>
  <polygon fill={g} points="109.99 220 109.95 219.95 109.94 219.95 105 215.01 100.01 220 109.99 220"/>
  <polygon fill={c} points="99.99 210 99.97 209.97 95 205 90 210 99.99 210"/>
  <polygon fill={e} points="95 205 90 200.01 90 210 95 205"/>
  <polygon fill={c} points="119.99 230 115 225.01 110.01 230 119.99 230"/>
  <polygon fill={d} points="110.01 230 115 225.01 110 220.01 110 230 110.01 230"/>
  <polygon fill={e} points="80 210 90 210 85 205 80 210"/>
  <polygon fill={g} points="80 200 80 210 85 205 80 200"/>
  <polygon fill={c} points="90 210 90 200.01 85 205 90 210"/>
  <polygon fill={h} points="85 205 90 200.01 89.99 200 80 200 85 205"/>
  <polygon fill={f} points="90 220 100 220 95 215 90 220"/>
  <polygon fill={c} points="90 210 90 220 95 215 90 210"/>
  <polygon fill={g} points="100 220 100 210.01 95 215 100 220"/>
  <polygon fill={e} points="95 215 100 210.01 99.99 210 90 210 95 215"/>
  <polygon fill={d} points="100 230 110 230 105 225 100 230"/>
  <polygon fill={g} points="100 220 100 230 105 225 100 220"/>
  <polygon fill={c} points="110 230 110 220.01 105 225 110 230"/>
  <polygon fill={f} points="105 225 110 220.01 109.99 220 100 220 105 225"/>
  <polygon fill={h} points="110 240 120 240 115 235 110 240"/>
  <polygon fill={c} points="110 230 110 240 115 235 110 230"/>
  <polygon fill={g} points="120 240 120 230.01 115 235 120 240"/>
  <polygon fill={d} points="115 235 120 230.01 119.99 230 110 230 115 235"/>
  <polygon fill={a} points="139.95 210.05 139.95 210.05 139.94 210.04 139.95 210.05 150 200 120 200 135 215 139.95 210.05"/>
  <polygon fill={b} points="130 220 135 215 120 200 120 230 129.97 220.03 130 220"/>
  <polygon fill={a} points="140.05 229.94 140.05 229.95 140.06 229.96 140.05 229.95 130 239.99 160 239.99 145 224.99 140.05 229.94"/>
  <polygon fill={b} points="150 219.99 145 224.99 160 239.99 160 209.99 150.03 219.97 150 219.99"/>
  <polygon fill={d} points="124.99 225.01 120 230 129.99 230 124.99 225.01"/>
  <polygon fill={c} points="130 230 130 220 129.97 220.03 124.99 225.01 129.99 230 130 230"/>
  <rect fill={c} x="130" y="239.99" width="9.99" height="0.01"/>
  <polygon fill={e} points="145 205 140 210 150 210 145 205"/>
  <polygon fill={f} points="135 215 130 220 139.99 220 135 215"/>
  <rect fill={c} x="139.99" y="239.99" width="20.01" height="0.01"/>
  <polygon fill={g} points="140 220 140 210 139.95 210.05 139.95 210.05 135 215 135 215 139.99 220 140 220"/>
  <polygon fill={c} points="150 200 145 205 150 210 150 200"/>
  <polygon fill={f} points="140 220.01 144.99 225 145 224.99 149.99 220 140 220 140 220.01"/>
  <polygon fill={g} points="140 229.99 140.05 229.95 140.05 229.94 144.99 225 140 220.01 140 229.99"/>
  <polygon fill={c} points="150 219.99 150.03 219.97 155 215 150 210 150 219.99"/>
  <polygon fill={e} points="155 215 159.99 210 150 210 155 215"/>
  <polygon fill={c} points="130 239.99 134.99 235 130 230.01 130 239.99"/>
  <polygon fill={d} points="130 230.01 134.99 235 139.99 230 130 230 130 230.01"/>
  <polygon fill={e} points="150 200 150 210 155 205 150 200"/>
  <polygon fill={g} points="160 200 150 200 155 205 160 200"/>
  <polygon fill={c} points="150 210 159.99 210 155 205 150 210"/>
  <polygon fill={h} points="155 205 159.99 210 160 209.99 160 200 155 205"/>
  <polygon fill={f} points="140 210 140 220 145 215 140 210"/>
  <polygon fill={c} points="150 210 140 210 145 215 150 210"/>
  <polygon fill={g} points="140 220 149.99 220 145 215 140 220"/>
  <polygon fill={e} points="145 215 149.99 220 150 219.99 150 210 145 215"/>
  <polygon fill={d} points="130 220 130 230 135 225 130 220"/>
  <polygon fill={g} points="140 220 130 220 135 225 140 220"/>
  <polygon fill={c} points="130 230 139.99 230 135 225 130 230"/>
  <polygon fill={f} points="135 225 139.99 230 140 229.99 140 220 135 225"/>
  <polygon fill={h} points="120 230 120 240 125 235 120 230"/>
  <polygon fill={c} points="130 230 120 230 125 235 130 230"/>
  <polygon fill={g} points="120 240 129.99 240 125 235 120 240"/>
  <polygon fill={d} points="125 235 129.99 240 130 239.99 130 230 125 235"/>
  <polygon fill={a} points="170.05 220.05 170.05 220.05 170.04 220.06 170.05 220.05 160 210 160 240 175 225 170.05 220.05"/>
  <polygon fill={b} points="180 230 175 225 160 240 190 240 180.03 230.03 180 230"/>
  <polygon fill={a} points="189.94 219.95 189.95 219.95 189.96 219.94 189.95 219.95 199.99 230 199.99 200 184.99 215 189.94 219.95"/>
  <polygon fill={b} points="179.99 210 184.99 215 199.99 200 169.99 200 179.97 209.97 179.99 210"/>
  <polygon fill={d} points="185.01 235.01 190 240 190 230.01 185.01 235.01"/>
  <polygon fill={c} points="190 230 180 230 180.03 230.03 185.01 235.01 190 230.01 190 230"/>
  <rect fill={c} x="199.99" y="220.01" width="0.01" height="9.99"/>
  <polygon fill={e} points="165 215 170 220 170 210 165 215"/>
  <polygon fill={f} points="175 225 180 230 180 220.01 175 225"/>
  <rect fill={c} x="199.99" y="200" width="0.01" height="20.01"/>
  <polygon fill={g} points="180 220 170 220 170.05 220.05 170.05 220.05 175 225 175 225 180 220.01 180 220"/>
  <polygon fill={c} points="160 210 165 215 170 210 160 210"/>
  <polygon fill={f} points="180.01 220 185 215.01 184.99 215 180 210.01 180 220 180.01 220"/>
  <polygon fill={g} points="189.99 220 189.95 219.95 189.94 219.95 185 215.01 180.01 220 189.99 220"/>
  <polygon fill={c} points="179.99 210 179.97 209.97 175 205 170 210 179.99 210"/>
  <polygon fill={e} points="175 205 170 200.01 170 210 175 205"/>
  <polygon fill={c} points="199.99 230 195 225.01 190.01 230 199.99 230"/>
  <polygon fill={d} points="190.01 230 195 225.01 190 220.01 190 230 190.01 230"/>
  <polygon fill={e} points="160 210 170 210 165 205 160 210"/>
  <polygon fill={g} points="160 200 160 210 165 205 160 200"/>
  <polygon fill={c} points="170 210 170 200.01 165 205 170 210"/>
  <polygon fill={h} points="165 205 170 200.01 169.99 200 160 200 165 205"/>
  <polygon fill={f} points="170 220 180 220 175 215 170 220"/>
  <polygon fill={c} points="170 210 170 220 175 215 170 210"/>
  <polygon fill={g} points="180 220 180 210.01 175 215 180 220"/>
  <polygon fill={e} points="175 215 180 210.01 179.99 210 170 210 175 215"/>
  <polygon fill={d} points="180 230 190 230 185 225 180 230"/>
  <polygon fill={g} points="180 220 180 230 185 225 180 220"/>
  <polygon fill={c} points="190 230 190 220.01 185 225 190 230"/>
  <polygon fill={f} points="185 225 190 220.01 189.99 220 180 220 185 225"/>
  <polygon fill={h} points="190 240 200 240 195 235 190 240"/>
  <polygon fill={c} points="190 230 190 240 195 235 190 230"/>
  <polygon fill={g} points="200 240 200 230.01 195 235 200 240"/>
  <polygon fill={d} points="195 235 200 230.01 199.99 230 190 230 195 235"/>
  <polygon fill={a} points="219.95 210.05 219.95 210.05 219.94 210.04 219.95 210.05 230 200 200 200 215 215 219.95 210.05"/>
  <polygon fill={b} points="210 220 215 215 200 200 200 230 209.97 220.03 210 220"/>
  <polygon fill={a} points="220.05 229.94 220.05 229.95 220.06 229.96 220.05 229.95 210 239.99 240 239.99 225 224.99 220.05 229.94"/>
  <polygon fill={b} points="230 219.99 225 224.99 240 239.99 240 209.99 230.03 219.97 230 219.99"/>
  <polygon fill={d} points="204.99 225.01 200 230 209.99 230 204.99 225.01"/>
  <polygon fill={c} points="210 230 210 220 209.97 220.03 204.99 225.01 209.99 230 210 230"/>
  <rect fill={c} x="210" y="239.99" width="9.99" height="0.01"/>
  <polygon fill={e} points="225 205 220 210 230 210 225 205"/>
  <polygon fill={f} points="215 215 210 220 219.99 220 215 215"/>
  <rect fill={c} x="219.99" y="239.99" width="20.01" height="0.01"/>
  <polygon fill={g} points="220 220 220 210 219.95 210.05 219.95 210.05 215 215 215 215 219.99 220 220 220"/>
  <polygon fill={c} points="230 200 225 205 230 210 230 200"/>
  <polygon fill={f} points="220 220.01 224.99 225 225 224.99 229.99 220 220 220 220 220.01"/>
  <polygon fill={g} points="220 229.99 220.05 229.95 220.05 229.94 224.99 225 220 220.01 220 229.99"/>
  <polygon fill={c} points="230 219.99 230.03 219.97 235 215 230 210 230 219.99"/>
  <polygon fill={e} points="235 215 239.99 210 230 210 235 215"/>
  <polygon fill={c} points="210 239.99 214.99 235 210 230.01 210 239.99"/>
  <polygon fill={d} points="210 230.01 214.99 235 219.99 230 210 230 210 230.01"/>
  <polygon fill={e} points="230 200 230 210 235 205 230 200"/>
  <polygon fill={g} points="240 200 230 200 235 205 240 200"/>
  <polygon fill={c} points="230 210 239.99 210 235 205 230 210"/>
  <polygon fill={h} points="235 205 239.99 210 240 209.99 240 200 235 205"/>
  <polygon fill={f} points="220 210 220 220 225 215 220 210"/>
  <polygon fill={c} points="230 210 220 210 225 215 230 210"/>
  <polygon fill={g} points="220 220 229.99 220 225 215 220 220"/>
  <polygon fill={e} points="225 215 229.99 220 230 219.99 230 210 225 215"/>
  <polygon fill={d} points="210 220 210 230 215 225 210 220"/>
  <polygon fill={g} points="220 220 210 220 215 225 220 220"/>
  <polygon fill={c} points="210 230 219.99 230 215 225 210 230"/>
  <polygon fill={f} points="215 225 219.99 230 220 229.99 220 220 215 225"/>
  <polygon fill={h} points="200 230 200 240 205 235 200 230"/>
  <polygon fill={c} points="210 230 200 230 205 235 210 230"/>
  <polygon fill={g} points="200 240 209.99 240 205 235 200 240"/>
  <polygon fill={d} points="205 235 209.99 240 210 239.99 210 230 205 235"/>
  <polygon fill={a} points="250.05 220.05 250.05 220.05 250.04 220.06 250.05 220.05 240 210 240 240 255 225 250.05 220.05"/>
  <polygon fill={b} points="260 230 255 225 240 240 270 240 260.03 230.03 260 230"/>
  <polygon fill={a} points="269.94 219.95 269.95 219.95 269.95 219.94 269.95 219.95 279.99 230 279.99 200 264.99 215 269.94 219.95"/>
  <polygon fill={b} points="259.99 210 264.99 215 279.99 200 249.99 200 259.97 209.97 259.99 210"/>
  <polygon fill={d} points="265.01 235.01 270 240 270 230.01 265.01 235.01"/>
  <polygon fill={c} points="270 230 260 230 260.03 230.03 265.01 235.01 270 230.01 270 230"/>
  <rect fill={c} x="279.99" y="220.01" width="0.01" height="9.99"/>
  <polygon fill={e} points="245 215 250 220 250 210 245 215"/>
  <polygon fill={f} points="255 225 260 230 260 220.01 255 225"/>
  <rect fill={c} x="279.99" y="200" width="0.01" height="20.01"/>
  <polygon fill={g} points="260 220 250 220 250.05 220.05 250.05 220.05 255 225 255 225 260 220.01 260 220"/>
  <polygon fill={c} points="240 210 245 215 250 210 240 210"/>
  <polygon fill={f} points="260.01 220 265 215.01 264.99 215 260 210.01 260 220 260.01 220"/>
  <polygon fill={g} points="269.99 220 269.95 219.95 269.94 219.95 265 215.01 260.01 220 269.99 220"/>
  <polygon fill={c} points="259.99 210 259.97 209.97 255 205 250 210 259.99 210"/>
  <polygon fill={e} points="255 205 250 200.01 250 210 255 205"/>
  <polygon fill={c} points="279.99 230 275 225.01 270.01 230 279.99 230"/>
  <polygon fill={d} points="270.01 230 275 225.01 270 220.01 270 230 270.01 230"/>
  <polygon fill={e} points="240 210 250 210 245 205 240 210"/>
  <polygon fill={g} points="240 200 240 210 245 205 240 200"/>
  <polygon fill={c} points="250 210 250 200.01 245 205 250 210"/>
  <polygon fill={h} points="245 205 250 200.01 249.99 200 240 200 245 205"/>
  <polygon fill={f} points="250 220 260 220 255 215 250 220"/>
  <polygon fill={c} points="250 210 250 220 255 215 250 210"/>
  <polygon fill={g} points="260 220 260 210.01 255 215 260 220"/>
  <polygon fill={e} points="255 215 260 210.01 259.99 210 250 210 255 215"/>
  <polygon fill={d} points="260 230 270 230 265 225 260 230"/>
  <polygon fill={g} points="260 220 260 230 265 225 260 220"/>
  <polygon fill={c} points="270 230 270 220.01 265 225 270 230"/>
  <polygon fill={f} points="265 225 270 220.01 269.99 220 260 220 265 225"/>
  <polygon fill={h} points="270 240 280 240 275 235 270 240"/>
  <polygon fill={c} points="270 230 270 240 275 235 270 230"/>
  <polygon fill={g} points="280 240 280 230.01 275 235 280 240"/>
  <polygon fill={d} points="275 235 280 230.01 279.99 230 270 230 275 235"/>
  <polygon fill={a} points="50.05 260.05 50.05 260.05 50.04 260.06 50.05 260.05 40 250 40 280 55 265 50.05 260.05"/>
  <polygon fill={b} points="60 270 55 265 40 280 70 280 60.03 270.03 60 270"/>
  <polygon fill={a} points="69.94 259.95 69.95 259.95 69.95 259.94 69.95 259.95 79.99 270 79.99 240 64.99 255 69.94 259.95"/>
  <polygon fill={b} points="59.99 250 64.99 255 79.99 240 49.99 240 59.97 249.97 59.99 250"/>
  <polygon fill={d} points="65.01 275.01 70 280 70 270.01 65.01 275.01"/>
  <polygon fill={c} points="70 270 60 270 60.03 270.03 65.01 275.01 70 270.01 70 270"/>
  <rect fill={c} x="79.99" y="260.01" width="0.01" height="9.99"/>
  <polygon fill={e} points="45 255 50 260 50 250 45 255"/>
  <polygon fill={f} points="55 265 60 270 60 260.01 55 265"/>
  <rect fill={c} x="79.99" y="240" width="0.01" height="20.01"/>
  <polygon fill={g} points="60 260 50 260 50.05 260.05 50.05 260.05 55 265 55 265 60 260.01 60 260"/>
  <polygon fill={c} points="40 250 45 255 50 250 40 250"/>
  <polygon fill={f} points="60.01 260 65 255.01 64.99 255 60 250.01 60 260 60.01 260"/>
  <polygon fill={g} points="69.99 260 69.95 259.95 69.94 259.95 65 255.01 60.01 260 69.99 260"/>
  <polygon fill={c} points="59.99 250 59.97 249.97 55 245 50 250 59.99 250"/>
  <polygon fill={e} points="55 245 50 240.01 50 250 55 245"/>
  <polygon fill={c} points="79.99 270 75 265.01 70.01 270 79.99 270"/>
  <polygon fill={d} points="70.01 270 75 265.01 70 260.01 70 270 70.01 270"/>
  <polygon fill={e} points="40 250 50 250 45 245 40 250"/>
  <polygon fill={g} points="40 240 40 250 45 245 40 240"/>
  <polygon fill={c} points="50 250 50 240.01 45 245 50 250"/>
  <polygon fill={h} points="45 245 50 240.01 49.99 240 40 240 45 245"/>
  <polygon fill={f} points="50 260 60 260 55 255 50 260"/>
  <polygon fill={c} points="50 250 50 260 55 255 50 250"/>
  <polygon fill={g} points="60 260 60 250.01 55 255 60 260"/>
  <polygon fill={e} points="55 255 60 250.01 59.99 250 50 250 55 255"/>
  <polygon fill={d} points="60 270 70 270 65 265 60 270"/>
  <polygon fill={g} points="60 260 60 270 65 265 60 260"/>
  <polygon fill={c} points="70 270 70 260.01 65 265 70 270"/>
  <polygon fill={f} points="65 265 70 260.01 69.99 260 60 260 65 265"/>
  <polygon fill={h} points="70 280 80 280 75 275 70 280"/>
  <polygon fill={c} points="70 270 70 280 75 275 70 270"/>
  <polygon fill={g} points="80 280 80 270.01 75 275 80 280"/>
  <polygon fill={d} points="75 275 80 270.01 79.99 270 70 270 75 275"/>
  <polygon fill={a} points="99.95 250.05 99.95 250.05 99.94 250.04 99.95 250.05 110 240 80 240 95 255 99.95 250.05"/>
  <polygon fill={b} points="90 260 95 255 80 240 80 270 89.97 260.03 90 260"/>
  <polygon fill={a} points="100.05 269.94 100.05 269.95 100.06 269.95 100.05 269.95 90 279.99 120 279.99 105 264.99 100.05 269.94"/>
  <polygon fill={b} points="110 259.99 105 264.99 120 279.99 120 249.99 110.03 259.97 110 259.99"/>
  <polygon fill={d} points="84.99 265.01 80 270 89.99 270 84.99 265.01"/>
  <polygon fill={c} points="90 270 90 260 89.97 260.03 84.99 265.01 89.99 270 90 270"/>
  <rect fill={c} x="90" y="279.99" width="9.99" height="0.01"/>
  <polygon fill={e} points="105 245 100 250 110 250 105 245"/>
  <polygon fill={f} points="95 255 90 260 99.99 260 95 255"/>
  <rect fill={c} x="99.99" y="279.99" width="20.01" height="0.01"/>
  <polygon fill={g} points="100 260 100 250 99.95 250.05 99.95 250.05 95 255 95 255 99.99 260 100 260"/>
  <polygon fill={c} points="110 240 105 245 110 250 110 240"/>
  <polygon fill={f} points="100 260.01 104.99 265 105 264.99 109.99 260 100 260 100 260.01"/>
  <polygon fill={g} points="100 269.99 100.05 269.95 100.05 269.94 104.99 265 100 260.01 100 269.99"/>
  <polygon fill={c} points="110 259.99 110.03 259.97 115 255 110 250 110 259.99"/>
  <polygon fill={e} points="115 255 119.99 250 110 250 115 255"/>
  <polygon fill={c} points="90 279.99 94.99 275 90 270.01 90 279.99"/>
  <polygon fill={d} points="90 270.01 94.99 275 99.99 270 90 270 90 270.01"/>
  <polygon fill={e} points="110 240 110 250 115 245 110 240"/>
  <polygon fill={g} points="120 240 110 240 115 245 120 240"/>
  <polygon fill={c} points="110 250 119.99 250 115 245 110 250"/>
  <polygon fill={h} points="115 245 119.99 250 120 249.99 120 240 115 245"/>
  <polygon fill={f} points="100 250 100 260 105 255 100 250"/>
  <polygon fill={c} points="110 250 100 250 105 255 110 250"/>
  <polygon fill={g} points="100 260 109.99 260 105 255 100 260"/>
  <polygon fill={e} points="105 255 109.99 260 110 259.99 110 250 105 255"/>
  <polygon fill={d} points="90 260 90 270 95 265 90 260"/>
  <polygon fill={g} points="100 260 90 260 95 265 100 260"/>
  <polygon fill={c} points="90 270 99.99 270 95 265 90 270"/>
  <polygon fill={f} points="95 265 99.99 270 100 269.99 100 260 95 265"/>
  <polygon fill={h} points="80 270 80 280 85 275 80 270"/>
  <polygon fill={c} points="90 270 80 270 85 275 90 270"/>
  <polygon fill={g} points="80 280 89.99 280 85 275 80 280"/>
  <polygon fill={d} points="85 275 89.99 280 90 279.99 90 270 85 275"/>
  <polygon fill={a} points="130.05 260.05 130.05 260.05 130.04 260.06 130.05 260.05 120 250 120 280 135 265 130.05 260.05"/>
  <polygon fill={b} points="140 270 135 265 120 280 150 280 140.03 270.03 140 270"/>
  <polygon fill={a} points="149.94 259.95 149.95 259.95 149.96 259.94 149.95 259.95 159.99 270 159.99 240 144.99 255 149.94 259.95"/>
  <polygon fill={b} points="139.99 250 144.99 255 159.99 240 129.99 240 139.97 249.97 139.99 250"/>
  <polygon fill={d} points="145.01 275.01 150 280 150 270.01 145.01 275.01"/>
  <polygon fill={c} points="150 270 140 270 140.03 270.03 145.01 275.01 150 270.01 150 270"/>
  <rect fill={c} x="159.99" y="260.01" width="0.01" height="9.99"/>
  <polygon fill={e} points="125 255 130 260 130 250 125 255"/>
  <polygon fill={f} points="135 265 140 270 140 260.01 135 265"/>
  <rect fill={c} x="159.99" y="240" width="0.01" height="20.01"/>
  <polygon fill={g} points="140 260 130 260 130.05 260.05 130.05 260.05 135 265 135 265 140 260.01 140 260"/>
  <polygon fill={c} points="120 250 125 255 130 250 120 250"/>
  <polygon fill={f} points="140.01 260 145 255.01 144.99 255 140 250.01 140 260 140.01 260"/>
  <polygon fill={g} points="149.99 260 149.95 259.95 149.94 259.95 145 255.01 140.01 260 149.99 260"/>
  <polygon fill={c} points="139.99 250 139.97 249.97 135 245 130 250 139.99 250"/>
  <polygon fill={e} points="135 245 130 240.01 130 250 135 245"/>
  <polygon fill={c} points="159.99 270 155 265.01 150.01 270 159.99 270"/>
  <polygon fill={d} points="150.01 270 155 265.01 150 260.01 150 270 150.01 270"/>
  <polygon fill={e} points="120 250 130 250 125 245 120 250"/>
  <polygon fill={g} points="120 240 120 250 125 245 120 240"/>
  <polygon fill={c} points="130 250 130 240.01 125 245 130 250"/>
  <polygon fill={h} points="125 245 130 240.01 129.99 240 120 240 125 245"/>
  <polygon fill={f} points="130 260 140 260 135 255 130 260"/>
  <polygon fill={c} points="130 250 130 260 135 255 130 250"/>
  <polygon fill={g} points="140 260 140 250.01 135 255 140 260"/>
  <polygon fill={e} points="135 255 140 250.01 139.99 250 130 250 135 255"/>
  <polygon fill={d} points="140 270 150 270 145 265 140 270"/>
  <polygon fill={g} points="140 260 140 270 145 265 140 260"/>
  <polygon fill={c} points="150 270 150 260.01 145 265 150 270"/>
  <polygon fill={f} points="145 265 150 260.01 149.99 260 140 260 145 265"/>
  <polygon fill={h} points="150 280 160 280 155 275 150 280"/>
  <polygon fill={c} points="150 270 150 280 155 275 150 270"/>
  <polygon fill={g} points="160 280 160 270.01 155 275 160 280"/>
  <polygon fill={d} points="155 275 160 270.01 159.99 270 150 270 155 275"/>
  <polygon fill={a} points="179.95 250.05 179.95 250.05 179.94 250.04 179.95 250.05 190 240 160 240 175 255 179.95 250.05"/>
  <polygon fill={b} points="170 260 175 255 160 240 160 270 169.97 260.03 170 260"/>
  <polygon fill={a} points="180.05 269.94 180.05 269.95 180.06 269.95 180.05 269.95 170 279.99 200 279.99 185 264.99 180.05 269.94"/>
  <polygon fill={b} points="190 259.99 185 264.99 200 279.99 200 249.99 190.03 259.97 190 259.99"/>
  <polygon fill={d} points="164.99 265.01 160 270 169.99 270 164.99 265.01"/>
  <polygon fill={c} points="170 270 170 260 169.97 260.03 164.99 265.01 169.99 270 170 270"/>
  <rect fill={c} x="170" y="279.99" width="9.99" height="0.01"/>
  <polygon fill={e} points="185 245 180 250 190 250 185 245"/>
  <polygon fill={f} points="175 255 170 260 179.99 260 175 255"/>
  <rect fill={c} x="179.99" y="279.99" width="20.01" height="0.01"/>
  <polygon fill={g} points="180 260 180 250 179.95 250.05 179.95 250.05 175 255 175 255 179.99 260 180 260"/>
  <polygon fill={c} points="190 240 185 245 190 250 190 240"/>
  <polygon fill={f} points="180 260.01 184.99 265 185 264.99 189.99 260 180 260 180 260.01"/>
  <polygon fill={g} points="180 269.99 180.05 269.95 180.05 269.94 184.99 265 180 260.01 180 269.99"/>
  <polygon fill={c} points="190 259.99 190.03 259.97 195 255 190 250 190 259.99"/>
  <polygon fill={e} points="195 255 199.99 250 190 250 195 255"/>
  <polygon fill={c} points="170 279.99 174.99 275 170 270.01 170 279.99"/>
  <polygon fill={d} points="170 270.01 174.99 275 179.99 270 170 270 170 270.01"/>
  <polygon fill={e} points="190 240 190 250 195 245 190 240"/>
  <polygon fill={g} points="200 240 190 240 195 245 200 240"/>
  <polygon fill={c} points="190 250 199.99 250 195 245 190 250"/>
  <polygon fill={h} points="195 245 199.99 250 200 249.99 200 240 195 245"/>
  <polygon fill={f} points="180 250 180 260 185 255 180 250"/>
  <polygon fill={c} points="190 250 180 250 185 255 190 250"/>
  <polygon fill={g} points="180 260 189.99 260 185 255 180 260"/>
  <polygon fill={e} points="185 255 189.99 260 190 259.99 190 250 185 255"/>
  <polygon fill={d} points="170 260 170 270 175 265 170 260"/>
  <polygon fill={g} points="180 260 170 260 175 265 180 260"/>
  <polygon fill={c} points="170 270 179.99 270 175 265 170 270"/>
  <polygon fill={f} points="175 265 179.99 270 180 269.99 180 260 175 265"/>
  <polygon fill={h} points="160 270 160 280 165 275 160 270"/>
  <polygon fill={c} points="170 270 160 270 165 275 170 270"/>
  <polygon fill={g} points="160 280 169.99 280 165 275 160 280"/>
  <polygon fill={d} points="165 275 169.99 280 170 279.99 170 270 165 275"/>
  <polygon fill={a} points="210.05 260.05 210.05 260.05 210.04 260.06 210.05 260.05 200 250 200 280 215 265 210.05 260.05"/>
  <polygon fill={b} points="220 270 215 265 200 280 230 280 220.03 270.03 220 270"/>
  <polygon fill={a} points="229.94 259.95 229.95 259.95 229.96 259.94 229.95 259.95 239.99 270 239.99 240 224.99 255 229.94 259.95"/>
  <polygon fill={b} points="219.99 250 224.99 255 239.99 240 209.99 240 219.97 249.97 219.99 250"/>
  <polygon fill={d} points="225.01 275.01 230 280 230 270.01 225.01 275.01"/>
  <polygon fill={c} points="230 270 220 270 220.03 270.03 225.01 275.01 230 270.01 230 270"/>
  <rect fill={c} x="239.99" y="260.01" width="0.01" height="9.99"/>
  <polygon fill={e} points="205 255 210 260 210 250 205 255"/>
  <polygon fill={f} points="215 265 220 270 220 260.01 215 265"/>
  <rect fill={c} x="239.99" y="240" width="0.01" height="20.01"/>
  <polygon fill={g} points="220 260 210 260 210.05 260.05 210.05 260.05 215 265 215 265 220 260.01 220 260"/>
  <polygon fill={c} points="200 250 205 255 210 250 200 250"/>
  <polygon fill={f} points="220.01 260 225 255.01 224.99 255 220 250.01 220 260 220.01 260"/>
  <polygon fill={g} points="229.99 260 229.95 259.95 229.94 259.95 225 255.01 220.01 260 229.99 260"/>
  <polygon fill={c} points="219.99 250 219.97 249.97 215 245 210 250 219.99 250"/>
  <polygon fill={e} points="215 245 210 240.01 210 250 215 245"/>
  <polygon fill={c} points="239.99 270 235 265.01 230.01 270 239.99 270"/>
  <polygon fill={d} points="230.01 270 235 265.01 230 260.01 230 270 230.01 270"/>
  <polygon fill={e} points="200 250 210 250 205 245 200 250"/>
  <polygon fill={g} points="200 240 200 250 205 245 200 240"/>
  <polygon fill={c} points="210 250 210 240.01 205 245 210 250"/>
  <polygon fill={h} points="205 245 210 240.01 209.99 240 200 240 205 245"/>
  <polygon fill={f} points="210 260 220 260 215 255 210 260"/>
  <polygon fill={c} points="210 250 210 260 215 255 210 250"/>
  <polygon fill={g} points="220 260 220 250.01 215 255 220 260"/>
  <polygon fill={e} points="215 255 220 250.01 219.99 250 210 250 215 255"/>
  <polygon fill={d} points="220 270 230 270 225 265 220 270"/>
  <polygon fill={g} points="220 260 220 270 225 265 220 260"/>
  <polygon fill={c} points="230 270 230 260.01 225 265 230 270"/>
  <polygon fill={f} points="225 265 230 260.01 229.99 260 220 260 225 265"/>
  <polygon fill={h} points="230 280 240 280 235 275 230 280"/>
  <polygon fill={c} points="230 270 230 280 235 275 230 270"/>
  <polygon fill={g} points="240 280 240 270.01 235 275 240 280"/>
  <polygon fill={d} points="235 275 240 270.01 239.99 270 230 270 235 275"/>
  <polygon fill={a} points="259.95 250.05 259.95 250.05 259.94 250.04 259.95 250.05 270 240 240 240 255 255 259.95 250.05"/>
  <polygon fill={b} points="250 260 255 255 240 240 240 270 249.97 260.03 250 260"/>
  <polygon fill={a} points="260.05 269.94 260.05 269.95 260.06 269.95 260.05 269.95 250 279.99 280 279.99 265 264.99 260.05 269.94"/>
  <polygon fill={b} points="270 259.99 265 264.99 280 279.99 280 249.99 270.03 259.97 270 259.99"/>
  <polygon fill={d} points="244.99 265.01 240 270 249.99 270 244.99 265.01"/>
  <polygon fill={c} points="250 270 250 260 249.97 260.03 244.99 265.01 249.99 270 250 270"/>
  <rect fill={c} x="250" y="279.99" width="9.99" height="0.01"/>
  <polygon fill={e} points="265 245 260 250 270 250 265 245"/>
  <polygon fill={f} points="255 255 250 260 259.99 260 255 255"/>
  <rect fill={c} x="259.99" y="279.99" width="20.01" height="0.01"/>
  <polygon fill={g} points="260 260 260 250 259.95 250.05 259.95 250.05 255 255 255 255 259.99 260 260 260"/>
  <polygon fill={c} points="270 240 265 245 270 250 270 240"/>
  <polygon fill={f} points="260 260.01 264.99 265 265 264.99 269.99 260 260 260 260 260.01"/>
  <polygon fill={g} points="260 269.99 260.05 269.95 260.05 269.94 264.99 265 260 260.01 260 269.99"/>
  <polygon fill={c} points="270 259.99 270.03 259.97 275 255 270 250 270 259.99"/>
  <polygon fill={e} points="275 255 279.99 250 270 250 275 255"/>
  <polygon fill={c} points="250 279.99 254.99 275 250 270.01 250 279.99"/>
  <polygon fill={d} points="250 270.01 254.99 275 259.99 270 250 270 250 270.01"/>
  <polygon fill={e} points="270 240 270 250 275 245 270 240"/>
  <polygon fill={g} points="280 240 270 240 275 245 280 240"/>
  <polygon fill={c} points="270 250 279.99 250 275 245 270 250"/>
  <polygon fill={h} points="275 245 279.99 250 280 249.99 280 240 275 245"/>
  <polygon fill={f} points="260 250 260 260 265 255 260 250"/>
  <polygon fill={c} points="270 250 260 250 265 255 270 250"/>
  <polygon fill={g} points="260 260 269.99 260 265 255 260 260"/>
  <polygon fill={e} points="265 255 269.99 260 270 259.99 270 250 265 255"/>
  <polygon fill={d} points="250 260 250 270 255 265 250 260"/>
  <polygon fill={g} points="260 260 250 260 255 265 260 260"/>
  <polygon fill={c} points="250 270 259.99 270 255 265 250 270"/>
  <polygon fill={f} points="255 265 259.99 270 260 269.99 260 260 255 265"/>
  <polygon fill={h} points="240 270 240 280 245 275 240 270"/>
  <polygon fill={c} points="250 270 240 270 245 275 250 270"/>
  <polygon fill={g} points="240 280 249.99 280 245 275 240 280"/>
  <polygon fill={d} points="245 275 249.99 280 250 279.99 250 270 245 275"/>
  <polygon fill={a} points="59.95 290.05 59.95 290.05 59.94 290.04 59.95 290.05 70 280 40 280 55 295 59.95 290.05"/>
  <polygon fill={b} points="50 300 55 295 40 280 40 310 49.97 300.03 50 300"/>
  <polygon fill={a} points="60.05 309.94 60.05 309.95 60.06 309.95 60.05 309.95 50 319.99 80 319.99 65 304.99 60.05 309.94"/>
  <polygon fill={b} points="70 299.99 65 304.99 80 319.99 80 289.99 70.03 299.97 70 299.99"/>
  <polygon fill={d} points="44.99 305.01 40 310 49.99 310 44.99 305.01"/>
  <polygon fill={c} points="50 310 50 300 49.97 300.03 44.99 305.01 49.99 310 50 310"/>
  <rect fill={c} x="50" y="319.99" width="9.99" height="0.01"/>
  <polygon fill={e} points="65 285 60 290 70 290 65 285"/>
  <polygon fill={f} points="55 295 50 300 59.99 300 55 295"/>
  <rect fill={c} x="59.99" y="319.99" width="20.01" height="0.01"/>
  <polygon fill={g} points="60 300 60 290 59.95 290.05 59.95 290.05 55 295 55 295 59.99 300 60 300"/>
  <polygon fill={c} points="70 280 65 285 70 290 70 280"/>
  <polygon fill={f} points="60 300.01 64.99 305 65 304.99 69.99 300 60 300 60 300.01"/>
  <polygon fill={g} points="60 309.99 60.05 309.95 60.05 309.94 64.99 305 60 300.01 60 309.99"/>
  <polygon fill={c} points="70 299.99 70.03 299.97 75 295 70 290 70 299.99"/>
  <polygon fill={e} points="75 295 79.99 290 70 290 75 295"/>
  <polygon fill={c} points="50 319.99 54.99 315 50 310.01 50 319.99"/>
  <polygon fill={d} points="50 310.01 54.99 315 59.99 310 50 310 50 310.01"/>
  <polygon fill={e} points="70 280 70 290 75 285 70 280"/>
  <polygon fill={g} points="80 280 70 280 75 285 80 280"/>
  <polygon fill={c} points="70 290 79.99 290 75 285 70 290"/>
  <polygon fill={h} points="75 285 79.99 290 80 289.99 80 280 75 285"/>
  <polygon fill={f} points="60 290 60 300 65 295 60 290"/>
  <polygon fill={c} points="70 290 60 290 65 295 70 290"/>
  <polygon fill={g} points="60 300 69.99 300 65 295 60 300"/>
  <polygon fill={e} points="65 295 69.99 300 70 299.99 70 290 65 295"/>
  <polygon fill={d} points="50 300 50 310 55 305 50 300"/>
  <polygon fill={g} points="60 300 50 300 55 305 60 300"/>
  <polygon fill={c} points="50 310 59.99 310 55 305 50 310"/>
  <polygon fill={f} points="55 305 59.99 310 60 309.99 60 300 55 305"/>
  <polygon fill={h} points="40 310 40 320 45 315 40 310"/>
  <polygon fill={c} points="50 310 40 310 45 315 50 310"/>
  <polygon fill={g} points="40 320 49.99 320 45 315 40 320"/>
  <polygon fill={d} points="45 315 49.99 320 50 319.99 50 310 45 315"/>
  <polygon fill={a} points="109.95 299.95 109.95 299.95 109.96 299.94 109.95 299.95 120 310 120 280 105 295 109.95 299.95"/>
  <polygon fill={b} points="100 290 105 295 120 280 90 280 99.97 289.97 100 290"/>
  <polygon fill={a} points="90.06 300.05 90.05 300.05 90.05 300.06 90.05 300.05 80.01 290 80.01 320 95.01 305 90.06 300.05"/>
  <polygon fill={b} points="100.01 310 95.01 305 80.01 320 110.01 320 100.03 310.03 100.01 310"/>
  <polygon fill={d} points="94.99 284.99 90 280 90 289.99 94.99 284.99"/>
  <polygon fill={c} points="90 290 100 290 99.97 289.97 94.99 284.99 90 289.99 90 290"/>
  <rect fill={c} x="80" y="290" width="0.01" height="9.99"/>
  <polygon fill={e} points="115 305 110 300 110 310 115 305"/>
  <polygon fill={f} points="105 295 100 290 100 299.99 105 295"/>
  <rect fill={c} x="80" y="299.99" width="0.01" height="20.01"/>
  <polygon fill={g} points="100 300 110 300 109.95 299.95 109.95 299.95 105 295 105 295 100 299.99 100 300"/>
  <polygon fill={c} points="120 310 115 305 110 310 120 310"/>
  <polygon fill={f} points="99.99 300 95 304.99 95.01 305 100 309.99 100 300 99.99 300"/>
  <polygon fill={g} points="90.01 300 90.05 300.05 90.06 300.05 95 304.99 99.99 300 90.01 300"/>
  <polygon fill={c} points="100.01 310 100.03 310.03 105 315 110 310 100.01 310"/>
  <polygon fill={e} points="105 315 110 319.99 110 310 105 315"/>
  <polygon fill={c} points="80.01 290 85 294.99 89.99 290 80.01 290"/>
  <polygon fill={d} points="89.99 290 85 294.99 90 299.99 90 290 89.99 290"/>
  <polygon fill={e} points="120 310 110 310 115 315 120 310"/>
  <polygon fill={g} points="120 320 120 310 115 315 120 320"/>
  <polygon fill={c} points="110 310 110 319.99 115 315 110 310"/>
  <polygon fill={h} points="115 315 110 319.99 110.01 320 120 320 115 315"/>
  <polygon fill={f} points="110 300 100 300 105 305 110 300"/>
  <polygon fill={c} points="110 310 110 300 105 305 110 310"/>
  <polygon fill={g} points="100 300 100 309.99 105 305 100 300"/>
  <polygon fill={e} points="105 305 100 309.99 100.01 310 110 310 105 305"/>
  <polygon fill={d} points="100 290 90 290 95 295 100 290"/>
  <polygon fill={g} points="100 300 100 290 95 295 100 300"/>
  <polygon fill={c} points="90 290 90 299.99 95 295 90 290"/>
  <polygon fill={f} points="95 295 90 299.99 90.01 300 100 300 95 295"/>
  <polygon fill={h} points="90 280 80 280 85 285 90 280"/>
  <polygon fill={c} points="90 290 90 280 85 285 90 290"/>
  <polygon fill={g} points="80 280 80 289.99 85 285 80 280"/>
  <polygon fill={d} points="85 285 80 289.99 80.01 290 90 290 85 285"/>
  <polygon fill={a} points="139.95 290.05 139.95 290.05 139.94 290.04 139.95 290.05 150 280 120 280 135 295 139.95 290.05"/>
  <polygon fill={b} points="130 300 135 295 120 280 120 310 129.97 300.03 130 300"/>
  <polygon fill={a} points="140.05 309.94 140.05 309.95 140.06 309.95 140.05 309.95 130 319.99 160 319.99 145 304.99 140.05 309.94"/>
  <polygon fill={b} points="150 299.99 145 304.99 160 319.99 160 289.99 150.03 299.97 150 299.99"/>
  <polygon fill={d} points="124.99 305.01 120 310 129.99 310 124.99 305.01"/>
  <polygon fill={c} points="130 310 130 300 129.97 300.03 124.99 305.01 129.99 310 130 310"/>
  <rect fill={c} x="130" y="319.99" width="9.99" height="0.01"/>
  <polygon fill={e} points="145 285 140 290 150 290 145 285"/>
  <polygon fill={f} points="135 295 130 300 139.99 300 135 295"/>
  <rect fill={c} x="139.99" y="319.99" width="20.01" height="0.01"/>
  <polygon fill={g} points="140 300 140 290 139.95 290.05 139.95 290.05 135 295 135 295 139.99 300 140 300"/>
  <polygon fill={c} points="150 280 145 285 150 290 150 280"/>
  <polygon fill={f} points="140 300.01 144.99 305 145 304.99 149.99 300 140 300 140 300.01"/>
  <polygon fill={g} points="140 309.99 140.05 309.95 140.05 309.94 144.99 305 140 300.01 140 309.99"/>
  <polygon fill={c} points="150 299.99 150.03 299.97 155 295 150 290 150 299.99"/>
  <polygon fill={e} points="155 295 159.99 290 150 290 155 295"/>
  <polygon fill={c} points="130 319.99 134.99 315 130 310.01 130 319.99"/>
  <polygon fill={d} points="130 310.01 134.99 315 139.99 310 130 310 130 310.01"/>
  <polygon fill={e} points="150 280 150 290 155 285 150 280"/>
  <polygon fill={g} points="160 280 150 280 155 285 160 280"/>
  <polygon fill={c} points="150 290 159.99 290 155 285 150 290"/>
  <polygon fill={h} points="155 285 159.99 290 160 289.99 160 280 155 285"/>
  <polygon fill={f} points="140 290 140 300 145 295 140 290"/>
  <polygon fill={c} points="150 290 140 290 145 295 150 290"/>
  <polygon fill={g} points="140 300 149.99 300 145 295 140 300"/>
  <polygon fill={e} points="145 295 149.99 300 150 299.99 150 290 145 295"/>
  <polygon fill={d} points="130 300 130 310 135 305 130 300"/>
  <polygon fill={g} points="140 300 130 300 135 305 140 300"/>
  <polygon fill={c} points="130 310 139.99 310 135 305 130 310"/>
  <polygon fill={f} points="135 305 139.99 310 140 309.99 140 300 135 305"/>
  <polygon fill={h} points="120 310 120 320 125 315 120 310"/>
  <polygon fill={c} points="130 310 120 310 125 315 130 310"/>
  <polygon fill={g} points="120 320 129.99 320 125 315 120 320"/>
  <polygon fill={d} points="125 315 129.99 320 130 319.99 130 310 125 315"/>
  <polygon fill={a} points="189.95 299.95 189.95 299.95 189.96 299.94 189.95 299.95 200 310 200 280 185 295 189.95 299.95"/>
  <polygon fill={b} points="180 290 185 295 200 280 170 280 179.97 289.97 180 290"/>
  <polygon fill={a} points="170.06 300.05 170.05 300.05 170.04 300.06 170.05 300.05 160.01 290 160.01 320 175.01 305 170.06 300.05"/>
  <polygon fill={b} points="180.01 310 175.01 305 160.01 320 190.01 320 180.03 310.03 180.01 310"/>
  <polygon fill={d} points="174.99 284.99 170 280 170 289.99 174.99 284.99"/>
  <polygon fill={c} points="170 290 180 290 179.97 289.97 174.99 284.99 170 289.99 170 290"/>
  <rect fill={c} x="160" y="290" width="0.01" height="9.99"/>
  <polygon fill={e} points="195 305 190 300 190 310 195 305"/>
  <polygon fill={f} points="185 295 180 290 180 299.99 185 295"/>
  <rect fill={c} x="160" y="299.99" width="0.01" height="20.01"/>
  <polygon fill={g} points="180 300 190 300 189.95 299.95 189.95 299.95 185 295 185 295 180 299.99 180 300"/>
  <polygon fill={c} points="200 310 195 305 190 310 200 310"/>
  <polygon fill={f} points="179.99 300 175 304.99 175.01 305 180 309.99 180 300 179.99 300"/>
  <polygon fill={g} points="170.01 300 170.05 300.05 170.06 300.05 175 304.99 179.99 300 170.01 300"/>
  <polygon fill={c} points="180.01 310 180.03 310.03 185 315 190 310 180.01 310"/>
  <polygon fill={e} points="185 315 190 319.99 190 310 185 315"/>
  <polygon fill={c} points="160.01 290 165 294.99 169.99 290 160.01 290"/>
  <polygon fill={d} points="169.99 290 165 294.99 170 299.99 170 290 169.99 290"/>
  <polygon fill={e} points="200 310 190 310 195 315 200 310"/>
  <polygon fill={g} points="200 320 200 310 195 315 200 320"/>
  <polygon fill={c} points="190 310 190 319.99 195 315 190 310"/>
  <polygon fill={h} points="195 315 190 319.99 190.01 320 200 320 195 315"/>
  <polygon fill={f} points="190 300 180 300 185 305 190 300"/>
  <polygon fill={c} points="190 310 190 300 185 305 190 310"/>
  <polygon fill={g} points="180 300 180 309.99 185 305 180 300"/>
  <polygon fill={e} points="185 305 180 309.99 180.01 310 190 310 185 305"/>
  <polygon fill={d} points="180 290 170 290 175 295 180 290"/>
  <polygon fill={g} points="180 300 180 290 175 295 180 300"/>
  <polygon fill={c} points="170 290 170 299.99 175 295 170 290"/>
  <polygon fill={f} points="175 295 170 299.99 170.01 300 180 300 175 295"/>
  <polygon fill={h} points="170 280 160 280 165 285 170 280"/>
  <polygon fill={c} points="170 290 170 280 165 285 170 290"/>
  <polygon fill={g} points="160 280 160 289.99 165 285 160 280"/>
  <polygon fill={d} points="165 285 160 289.99 160.01 290 170 290 165 285"/>
  <polygon fill={a} points="219.95 290.05 219.95 290.05 219.94 290.04 219.95 290.05 230 280 200 280 215 295 219.95 290.05"/>
  <polygon fill={b} points="210 300 215 295 200 280 200 310 209.97 300.03 210 300"/>
  <polygon fill={a} points="220.05 309.94 220.05 309.95 220.06 309.95 220.05 309.95 210 319.99 240 319.99 225 304.99 220.05 309.94"/>
  <polygon fill={b} points="230 299.99 225 304.99 240 319.99 240 289.99 230.03 299.97 230 299.99"/>
  <polygon fill={d} points="204.99 305.01 200 310 209.99 310 204.99 305.01"/>
  <polygon fill={c} points="210 310 210 300 209.97 300.03 204.99 305.01 209.99 310 210 310"/>
  <rect fill={c} x="210" y="319.99" width="9.99" height="0.01"/>
  <polygon fill={e} points="225 285 220 290 230 290 225 285"/>
  <polygon fill={f} points="215 295 210 300 219.99 300 215 295"/>
  <rect fill={c} x="219.99" y="319.99" width="20.01" height="0.01"/>
  <polygon fill={g} points="220 300 220 290 219.95 290.05 219.95 290.05 215 295 215 295 219.99 300 220 300"/>
  <polygon fill={c} points="230 280 225 285 230 290 230 280"/>
  <polygon fill={f} points="220 300.01 224.99 305 225 304.99 229.99 300 220 300 220 300.01"/>
  <polygon fill={g} points="220 309.99 220.05 309.95 220.05 309.94 224.99 305 220 300.01 220 309.99"/>
  <polygon fill={c} points="230 299.99 230.03 299.97 235 295 230 290 230 299.99"/>
  <polygon fill={e} points="235 295 239.99 290 230 290 235 295"/>
  <polygon fill={c} points="210 319.99 214.99 315 210 310.01 210 319.99"/>
  <polygon fill={d} points="210 310.01 214.99 315 219.99 310 210 310 210 310.01"/>
  <polygon fill={e} points="230 280 230 290 235 285 230 280"/>
  <polygon fill={g} points="240 280 230 280 235 285 240 280"/>
  <polygon fill={c} points="230 290 239.99 290 235 285 230 290"/>
  <polygon fill={h} points="235 285 239.99 290 240 289.99 240 280 235 285"/>
  <polygon fill={f} points="220 290 220 300 225 295 220 290"/>
  <polygon fill={c} points="230 290 220 290 225 295 230 290"/>
  <polygon fill={g} points="220 300 229.99 300 225 295 220 300"/>
  <polygon fill={e} points="225 295 229.99 300 230 299.99 230 290 225 295"/>
  <polygon fill={d} points="210 300 210 310 215 305 210 300"/>
  <polygon fill={g} points="220 300 210 300 215 305 220 300"/>
  <polygon fill={c} points="210 310 219.99 310 215 305 210 310"/>
  <polygon fill={f} points="215 305 219.99 310 220 309.99 220 300 215 305"/>
  <polygon fill={h} points="200 310 200 320 205 315 200 310"/>
  <polygon fill={c} points="210 310 200 310 205 315 210 310"/>
  <polygon fill={g} points="200 320 209.99 320 205 315 200 320"/>
  <polygon fill={d} points="205 315 209.99 320 210 319.99 210 310 205 315"/>
  <polygon fill={a} points="269.95 299.95 269.95 299.95 269.96 299.94 269.95 299.95 280 310 280 280 265 295 269.95 299.95"/>
  <polygon fill={b} points="260 290 265 295 280 280 250 280 259.97 289.97 260 290"/>
  <polygon fill={a} points="250.06 300.05 250.05 300.05 250.04 300.06 250.05 300.05 240.01 290 240.01 320 255.01 305 250.06 300.05"/>
  <polygon fill={b} points="260.01 310 255.01 305 240.01 320 270.01 320 260.03 310.03 260.01 310"/>
  <polygon fill={d} points="254.99 284.99 250 280 250 289.99 254.99 284.99"/>
  <polygon fill={c} points="250 290 260 290 259.97 289.97 254.99 284.99 250 289.99 250 290"/>
  <rect fill={c} x="240" y="290" width="0.01" height="9.99"/>
  <polygon fill={e} points="275 305 270 300 270 310 275 305"/>
  <polygon fill={f} points="265 295 260 290 260 299.99 265 295"/>
  <rect fill={c} x="240" y="299.99" width="0.01" height="20.01"/>
  <polygon fill={g} points="260 300 270 300 269.95 299.95 269.95 299.95 265 295 265 295 260 299.99 260 300"/>
  <polygon fill={c} points="280 310 275 305 270 310 280 310"/>
  <polygon fill={f} points="259.99 300 255 304.99 255.01 305 260 309.99 260 300 259.99 300"/>
  <polygon fill={g} points="250.01 300 250.05 300.05 250.06 300.05 255 304.99 259.99 300 250.01 300"/>
  <polygon fill={c} points="260.01 310 260.03 310.03 265 315 270 310 260.01 310"/>
  <polygon fill={e} points="265 315 270 319.99 270 310 265 315"/>
  <polygon fill={c} points="240.01 290 245 294.99 249.99 290 240.01 290"/>
  <polygon fill={d} points="249.99 290 245 294.99 250 299.99 250 290 249.99 290"/>
  <polygon fill={e} points="280 310 270 310 275 315 280 310"/>
  <polygon fill={g} points="280 320 280 310 275 315 280 320"/>
  <polygon fill={c} points="270 310 270 319.99 275 315 270 310"/>
  <polygon fill={h} points="275 315 270 319.99 270.01 320 280 320 275 315"/>
  <polygon fill={f} points="270 300 260 300 265 305 270 300"/>
  <polygon fill={c} points="270 310 270 300 265 305 270 310"/>
  <polygon fill={g} points="260 300 260 309.99 265 305 260 300"/>
  <polygon fill={e} points="265 305 260 309.99 260.01 310 270 310 265 305"/>
  <polygon fill={d} points="260 290 250 290 255 295 260 290"/>
  <polygon fill={g} points="260 300 260 290 255 295 260 300"/>
  <polygon fill={c} points="250 290 250 299.99 255 295 250 290"/>
  <polygon fill={f} points="255 295 250 299.99 250.01 300 260 300 255 295"/>
  <polygon fill={h} points="250 280 240 280 245 285 250 280"/>
  <polygon fill={c} points="250 290 250 280 245 285 250 290"/>
  <polygon fill={g} points="240 280 240 289.99 245 285 240 280"/>
  <polygon fill={d} points="245 285 240 289.99 240.01 290 250 290 245 285"/>
  <polygon fill={a} points="50.05 340.05 50.05 340.05 50.04 340.06 50.05 340.05 40 330 40 360 55 345 50.05 340.05"/>
  <polygon fill={b} points="60 350 55 345 40 360 70 360 60.03 350.03 60 350"/>
  <polygon fill={a} points="69.94 339.95 69.95 339.95 69.95 339.94 69.95 339.95 79.99 350 79.99 320 64.99 335 69.94 339.95"/>
  <polygon fill={b} points="59.99 330 64.99 335 79.99 320 49.99 320 59.97 329.97 59.99 330"/>
  <polygon fill={d} points="65.01 355.01 70 360 70 350.01 65.01 355.01"/>
  <polygon fill={c} points="70 350 60 350 60.03 350.03 65.01 355.01 70 350.01 70 350"/>
  <rect fill={c} x="79.99" y="340.01" width="0.01" height="9.99"/>
  <polygon fill={e} points="45 335 50 340 50 330 45 335"/>
  <polygon fill={f} points="55 345 60 350 60 340.01 55 345"/>
  <rect fill={c} x="79.99" y="320" width="0.01" height="20.01"/>
  <polygon fill={g} points="60 340 50 340 50.05 340.05 50.05 340.05 55 345 55 345 60 340.01 60 340"/>
  <polygon fill={c} points="40 330 45 335 50 330 40 330"/>
  <polygon fill={f} points="60.01 340 65 335.01 64.99 335 60 330.01 60 340 60.01 340"/>
  <polygon fill={g} points="69.99 340 69.95 339.95 69.94 339.95 65 335.01 60.01 340 69.99 340"/>
  <polygon fill={c} points="59.99 330 59.97 329.97 55 325 50 330 59.99 330"/>
  <polygon fill={e} points="55 325 50 320.01 50 330 55 325"/>
  <polygon fill={c} points="79.99 350 75 345.01 70.01 350 79.99 350"/>
  <polygon fill={d} points="70.01 350 75 345.01 70 340.01 70 350 70.01 350"/>
  <polygon fill={e} points="40 330 50 330 45 325 40 330"/>
  <polygon fill={g} points="40 320 40 330 45 325 40 320"/>
  <polygon fill={c} points="50 330 50 320.01 45 325 50 330"/>
  <polygon fill={h} points="45 325 50 320.01 49.99 320 40 320 45 325"/>
  <polygon fill={f} points="50 340 60 340 55 335 50 340"/>
  <polygon fill={c} points="50 330 50 340 55 335 50 330"/>
  <polygon fill={g} points="60 340 60 330.01 55 335 60 340"/>
  <polygon fill={e} points="55 335 60 330.01 59.99 330 50 330 55 335"/>
  <polygon fill={d} points="60 350 70 350 65 345 60 350"/>
  <polygon fill={g} points="60 340 60 350 65 345 60 340"/>
  <polygon fill={c} points="70 350 70 340.01 65 345 70 350"/>
  <polygon fill={f} points="65 345 70 340.01 69.99 340 60 340 65 345"/>
  <polygon fill={h} points="70 360 80 360 75 355 70 360"/>
  <polygon fill={c} points="70 350 70 360 75 355 70 350"/>
  <polygon fill={g} points="80 360 80 350.01 75 355 80 360"/>
  <polygon fill={d} points="75 355 80 350.01 79.99 350 70 350 75 355"/>
  <polygon fill={a} points="99.95 330.05 99.95 330.05 99.94 330.04 99.95 330.05 110 320 80 320 95 335 99.95 330.05"/>
  <polygon fill={b} points="90 340 95 335 80 320 80 350 89.97 340.03 90 340"/>
  <polygon fill={a} points="100.05 349.94 100.05 349.95 100.06 349.95 100.05 349.95 90 359.99 120 359.99 105 344.99 100.05 349.94"/>
  <polygon fill={b} points="110 339.99 105 344.99 120 359.99 120 329.99 110.03 339.97 110 339.99"/>
  <polygon fill={d} points="84.99 345.01 80 350 89.99 350 84.99 345.01"/>
  <polygon fill={c} points="90 350 90 340 89.97 340.03 84.99 345.01 89.99 350 90 350"/>
  <rect fill={c} x="90" y="359.99" width="9.99" height="0.01"/>
  <polygon fill={e} points="105 325 100 330 110 330 105 325"/>
  <polygon fill={f} points="95 335 90 340 99.99 340 95 335"/>
  <rect fill={c} x="99.99" y="359.99" width="20.01" height="0.01"/>
  <polygon fill={g} points="100 340 100 330 99.95 330.05 99.95 330.05 95 335 95 335 99.99 340 100 340"/>
  <polygon fill={c} points="110 320 105 325 110 330 110 320"/>
  <polygon fill={f} points="100 340.01 104.99 345 105 344.99 109.99 340 100 340 100 340.01"/>
  <polygon fill={g} points="100 349.99 100.05 349.95 100.05 349.94 104.99 345 100 340.01 100 349.99"/>
  <polygon fill={c} points="110 339.99 110.03 339.97 115 335 110 330 110 339.99"/>
  <polygon fill={e} points="115 335 119.99 330 110 330 115 335"/>
  <polygon fill={c} points="90 359.99 94.99 355 90 350.01 90 359.99"/>
  <polygon fill={d} points="90 350.01 94.99 355 99.99 350 90 350 90 350.01"/>
  <polygon fill={e} points="110 320 110 330 115 325 110 320"/>
  <polygon fill={g} points="120 320 110 320 115 325 120 320"/>
  <polygon fill={c} points="110 330 119.99 330 115 325 110 330"/>
  <polygon fill={h} points="115 325 119.99 330 120 329.99 120 320 115 325"/>
  <polygon fill={f} points="100 330 100 340 105 335 100 330"/>
  <polygon fill={c} points="110 330 100 330 105 335 110 330"/>
  <polygon fill={g} points="100 340 109.99 340 105 335 100 340"/>
  <polygon fill={e} points="105 335 109.99 340 110 339.99 110 330 105 335"/>
  <polygon fill={d} points="90 340 90 350 95 345 90 340"/>
  <polygon fill={g} points="100 340 90 340 95 345 100 340"/>
  <polygon fill={c} points="90 350 99.99 350 95 345 90 350"/>
  <polygon fill={f} points="95 345 99.99 350 100 349.99 100 340 95 345"/>
  <polygon fill={h} points="80 350 80 360 85 355 80 350"/>
  <polygon fill={c} points="90 350 80 350 85 355 90 350"/>
  <polygon fill={g} points="80 360 89.99 360 85 355 80 360"/>
  <polygon fill={d} points="85 355 89.99 360 90 359.99 90 350 85 355"/>
  <polygon fill={a} points="130.05 340.05 130.05 340.05 130.04 340.06 130.05 340.05 120 330 120 360 135 345 130.05 340.05"/>
  <polygon fill={b} points="140 350 135 345 120 360 150 360 140.03 350.03 140 350"/>
  <polygon fill={a} points="149.94 339.95 149.95 339.95 149.96 339.94 149.95 339.95 159.99 350 159.99 320 144.99 335 149.94 339.95"/>
  <polygon fill={b} points="139.99 330 144.99 335 159.99 320 129.99 320 139.97 329.97 139.99 330"/>
  <polygon fill={d} points="145.01 355.01 150 360 150 350.01 145.01 355.01"/>
  <polygon fill={c} points="150 350 140 350 140.03 350.03 145.01 355.01 150 350.01 150 350"/>
  <rect fill={c} x="159.99" y="340.01" width="0.01" height="9.99"/>
  <polygon fill={e} points="125 335 130 340 130 330 125 335"/>
  <polygon fill={f} points="135 345 140 350 140 340.01 135 345"/>
  <rect fill={c} x="159.99" y="320" width="0.01" height="20.01"/>
  <polygon fill={g} points="140 340 130 340 130.05 340.05 130.05 340.05 135 345 135 345 140 340.01 140 340"/>
  <polygon fill={c} points="120 330 125 335 130 330 120 330"/>
  <polygon fill={f} points="140.01 340 145 335.01 144.99 335 140 330.01 140 340 140.01 340"/>
  <polygon fill={g} points="149.99 340 149.95 339.95 149.94 339.95 145 335.01 140.01 340 149.99 340"/>
  <polygon fill={c} points="139.99 330 139.97 329.97 135 325 130 330 139.99 330"/>
  <polygon fill={e} points="135 325 130 320.01 130 330 135 325"/>
  <polygon fill={c} points="159.99 350 155 345.01 150.01 350 159.99 350"/>
  <polygon fill={d} points="150.01 350 155 345.01 150 340.01 150 350 150.01 350"/>
  <polygon fill={e} points="120 330 130 330 125 325 120 330"/>
  <polygon fill={g} points="120 320 120 330 125 325 120 320"/>
  <polygon fill={c} points="130 330 130 320.01 125 325 130 330"/>
  <polygon fill={h} points="125 325 130 320.01 129.99 320 120 320 125 325"/>
  <polygon fill={f} points="130 340 140 340 135 335 130 340"/>
  <polygon fill={c} points="130 330 130 340 135 335 130 330"/>
  <polygon fill={g} points="140 340 140 330.01 135 335 140 340"/>
  <polygon fill={e} points="135 335 140 330.01 139.99 330 130 330 135 335"/>
  <polygon fill={d} points="140 350 150 350 145 345 140 350"/>
  <polygon fill={g} points="140 340 140 350 145 345 140 340"/>
  <polygon fill={c} points="150 350 150 340.01 145 345 150 350"/>
  <polygon fill={f} points="145 345 150 340.01 149.99 340 140 340 145 345"/>
  <polygon fill={h} points="150 360 160 360 155 355 150 360"/>
  <polygon fill={c} points="150 350 150 360 155 355 150 350"/>
  <polygon fill={g} points="160 360 160 350.01 155 355 160 360"/>
  <polygon fill={d} points="155 355 160 350.01 159.99 350 150 350 155 355"/>
  <polygon fill={a} points="179.95 330.05 179.95 330.05 179.94 330.04 179.95 330.05 190 320 160 320 175 335 179.95 330.05"/>
  <polygon fill={b} points="170 340 175 335 160 320 160 350 169.97 340.03 170 340"/>
  <polygon fill={a} points="180.05 349.94 180.05 349.95 180.06 349.95 180.05 349.95 170 359.99 200 359.99 185 344.99 180.05 349.94"/>
  <polygon fill={b} points="190 339.99 185 344.99 200 359.99 200 329.99 190.03 339.97 190 339.99"/>
  <polygon fill={d} points="164.99 345.01 160 350 169.99 350 164.99 345.01"/>
  <polygon fill={c} points="170 350 170 340 169.97 340.03 164.99 345.01 169.99 350 170 350"/>
  <rect fill={c} x="170" y="359.99" width="9.99" height="0.01"/>
  <polygon fill={e} points="185 325 180 330 190 330 185 325"/>
  <polygon fill={f} points="175 335 170 340 179.99 340 175 335"/>
  <rect fill={c} x="179.99" y="359.99" width="20.01" height="0.01"/>
  <polygon fill={g} points="180 340 180 330 179.95 330.05 179.95 330.05 175 335 175 335 179.99 340 180 340"/>
  <polygon fill={c} points="190 320 185 325 190 330 190 320"/>
  <polygon fill={f} points="180 340.01 184.99 345 185 344.99 189.99 340 180 340 180 340.01"/>
  <polygon fill={g} points="180 349.99 180.05 349.95 180.05 349.94 184.99 345 180 340.01 180 349.99"/>
  <polygon fill={c} points="190 339.99 190.03 339.97 195 335 190 330 190 339.99"/>
  <polygon fill={e} points="195 335 199.99 330 190 330 195 335"/>
  <polygon fill={c} points="170 359.99 174.99 355 170 350.01 170 359.99"/>
  <polygon fill={d} points="170 350.01 174.99 355 179.99 350 170 350 170 350.01"/>
  <polygon fill={e} points="190 320 190 330 195 325 190 320"/>
  <polygon fill={g} points="200 320 190 320 195 325 200 320"/>
  <polygon fill={c} points="190 330 199.99 330 195 325 190 330"/>
  <polygon fill={h} points="195 325 199.99 330 200 329.99 200 320 195 325"/>
  <polygon fill={f} points="180 330 180 340 185 335 180 330"/>
  <polygon fill={c} points="190 330 180 330 185 335 190 330"/>
  <polygon fill={g} points="180 340 189.99 340 185 335 180 340"/>
  <polygon fill={e} points="185 335 189.99 340 190 339.99 190 330 185 335"/>
  <polygon fill={d} points="170 340 170 350 175 345 170 340"/>
  <polygon fill={g} points="180 340 170 340 175 345 180 340"/>
  <polygon fill={c} points="170 350 179.99 350 175 345 170 350"/>
  <polygon fill={f} points="175 345 179.99 350 180 349.99 180 340 175 345"/>
  <polygon fill={h} points="160 350 160 360 165 355 160 350"/>
  <polygon fill={c} points="170 350 160 350 165 355 170 350"/>
  <polygon fill={g} points="160 360 169.99 360 165 355 160 360"/>
  <polygon fill={d} points="165 355 169.99 360 170 359.99 170 350 165 355"/>
  <polygon fill={a} points="229.95 339.95 229.95 339.95 229.96 339.94 229.95 339.95 240 350 240 320 225 335 229.95 339.95"/>
  <polygon fill={b} points="220 330 225 335 240 320 210 320 219.97 329.97 220 330"/>
  <polygon fill={a} points="210.06 340.05 210.05 340.05 210.04 340.06 210.05 340.05 200.01 330 200.01 360 215.01 345 210.06 340.05"/>
  <polygon fill={b} points="220.01 350 215.01 345 200.01 360 230.01 360 220.03 350.03 220.01 350"/>
  <polygon fill={d} points="214.99 324.99 210 320 210 329.99 214.99 324.99"/>
  <polygon fill={c} points="210 330 220 330 219.97 329.97 214.99 324.99 210 329.99 210 330"/>
  <rect fill={c} x="200" y="330" width="0.01" height="9.99"/>
  <polygon fill={e} points="235 345 230 340 230 350 235 345"/>
  <polygon fill={f} points="225 335 220 330 220 339.99 225 335"/>
  <rect fill={c} x="200" y="339.99" width="0.01" height="20.01"/>
  <polygon fill={g} points="220 340 230 340 229.95 339.95 229.95 339.95 225 335 225 335 220 339.99 220 340"/>
  <polygon fill={c} points="240 350 235 345 230 350 240 350"/>
  <polygon fill={f} points="219.99 340 215 344.99 215.01 345 220 349.99 220 340 219.99 340"/>
  <polygon fill={g} points="210.01 340 210.05 340.05 210.06 340.05 215 344.99 219.99 340 210.01 340"/>
  <polygon fill={c} points="220.01 350 220.03 350.03 225 355 230 350 220.01 350"/>
  <polygon fill={e} points="225 355 230 359.99 230 350 225 355"/>
  <polygon fill={c} points="200.01 330 205 334.99 209.99 330 200.01 330"/>
  <polygon fill={d} points="209.99 330 205 334.99 210 339.99 210 330 209.99 330"/>
  <polygon fill={e} points="240 350 230 350 235 355 240 350"/>
  <polygon fill={g} points="240 360 240 350 235 355 240 360"/>
  <polygon fill={c} points="230 350 230 359.99 235 355 230 350"/>
  <polygon fill={h} points="235 355 230 359.99 230.01 360 240 360 235 355"/>
  <polygon fill={f} points="230 340 220 340 225 345 230 340"/>
  <polygon fill={c} points="230 350 230 340 225 345 230 350"/>
  <polygon fill={g} points="220 340 220 349.99 225 345 220 340"/>
  <polygon fill={e} points="225 345 220 349.99 220.01 350 230 350 225 345"/>
  <polygon fill={d} points="220 330 210 330 215 335 220 330"/>
  <polygon fill={g} points="220 340 220 330 215 335 220 340"/>
  <polygon fill={c} points="210 330 210 339.99 215 335 210 330"/>
  <polygon fill={f} points="215 335 210 339.99 210.01 340 220 340 215 335"/>
  <polygon fill={h} points="210 320 200 320 205 325 210 320"/>
  <polygon fill={c} points="210 330 210 320 205 325 210 330"/>
  <polygon fill={g} points="200 320 200 329.99 205 325 200 320"/>
  <polygon fill={d} points="205 325 200 329.99 200.01 330 210 330 205 325"/>
  <polygon fill={a} points="259.95 330.05 259.95 330.05 259.94 330.04 259.95 330.05 270 320 240 320 255 335 259.95 330.05"/>
  <polygon fill={b} points="250 340 255 335 240 320 240 350 249.97 340.03 250 340"/>
  <polygon fill={a} points="260.05 349.94 260.05 349.95 260.06 349.95 260.05 349.95 250 359.99 280 359.99 265 344.99 260.05 349.94"/>
  <polygon fill={b} points="270 339.99 265 344.99 280 359.99 280 329.99 270.03 339.97 270 339.99"/>
  <polygon fill={d} points="244.99 345.01 240 350 249.99 350 244.99 345.01"/>
  <polygon fill={c} points="250 350 250 340 249.97 340.03 244.99 345.01 249.99 350 250 350"/>
  <rect fill={c} x="250" y="359.99" width="9.99" height="0.01"/>
  <polygon fill={e} points="265 325 260 330 270 330 265 325"/>
  <polygon fill={f} points="255 335 250 340 259.99 340 255 335"/>
  <rect fill={c} x="259.99" y="359.99" width="20.01" height="0.01"/>
  <polygon fill={g} points="260 340 260 330 259.95 330.05 259.95 330.05 255 335 255 335 259.99 340 260 340"/>
  <polygon fill={c} points="270 320 265 325 270 330 270 320"/>
  <polygon fill={f} points="260 340.01 264.99 345 265 344.99 269.99 340 260 340 260 340.01"/>
  <polygon fill={g} points="260 349.99 260.05 349.95 260.05 349.94 264.99 345 260 340.01 260 349.99"/>
  <polygon fill={c} points="270 339.99 270.03 339.97 275 335 270 330 270 339.99"/>
  <polygon fill={e} points="275 335 279.99 330 270 330 275 335"/>
  <polygon fill={c} points="250 359.99 254.99 355 250 350.01 250 359.99"/>
  <polygon fill={d} points="250 350.01 254.99 355 259.99 350 250 350 250 350.01"/>
  <polygon fill={e} points="270 320 270 330 275 325 270 320"/>
  <polygon fill={g} points="280 320 270 320 275 325 280 320"/>
  <polygon fill={c} points="270 330 279.99 330 275 325 270 330"/>
  <polygon fill={h} points="275 325 279.99 330 280 329.99 280 320 275 325"/>
  <polygon fill={f} points="260 330 260 340 265 335 260 330"/>
  <polygon fill={c} points="270 330 260 330 265 335 270 330"/>
  <polygon fill={g} points="260 340 269.99 340 265 335 260 340"/>
  <polygon fill={e} points="265 335 269.99 340 270 339.99 270 330 265 335"/>
  <polygon fill={d} points="250 340 250 350 255 345 250 340"/>
  <polygon fill={g} points="260 340 250 340 255 345 260 340"/>
  <polygon fill={c} points="250 350 259.99 350 255 345 250 350"/>
  <polygon fill={f} points="255 345 259.99 350 260 349.99 260 340 255 345"/>
  <polygon fill={h} points="240 350 240 360 245 355 240 350"/>
  <polygon fill={c} points="250 350 240 350 245 355 250 350"/>
  <polygon fill={g} points="240 360 249.99 360 245 355 240 360"/>
  <polygon fill={d} points="245 355 249.99 360 250 359.99 250 350 245 355"/>
  <polygon fill={h} points="75 35 70 40 80 40 75 35"/>
  <polygon fill={g} points="80 30 75 35 80 40 80 30"/>
  <polygon fill={h} points="80 30 80 40 84.99 35 80 30"/>
  <polygon fill={g} points="80 40 89.99 40 84.99 35 80 40"/>
  <polygon fill={h} points="155 35 150 40 160 40 155 35"/>
  <polygon fill={g} points="160 30 155 35 160 40 160 30"/>
  <polygon fill={h} points="160 30 160 40 165 35 160 30"/>
  <polygon fill={g} points="160 40 169.99 40 165 35 160 40"/>
  <polygon fill={h} points="235 35 230 40 240 40 235 35"/>
  <polygon fill={g} points="240 30 235 35 240 40 240 30"/>
  <polygon fill={h} points="240 30 240 40 245 35 240 30"/>
  <polygon fill={g} points="240 40 250 40 245 35 240 40"/>
  <polygon fill={g} points="75 365 70 360 80 360 75 365"/>
  <polygon fill={h} points="80 370 75 365 80 360 80 370"/>
  <polygon fill={g} points="80 370 80 360 84.99 365 80 370"/>
  <polygon fill={h} points="80 360 89.99 360 84.99 365 80 360"/>
  <polygon fill={g} points="155 365 150 360 160 360 155 365"/>
  <polygon fill={h} points="160 370 155 365 160 360 160 370"/>
  <polygon fill={g} points="160 370 160 360 165 365 160 370"/>
  <polygon fill={h} points="160 360 169.99 360 165 365 160 360"/>
  <polygon fill={g} points="235 365 230 360 240 360 235 365"/>
  <polygon fill={h} points="240 370 235 365 240 360 240 370"/>
  <polygon fill={g} points="240 370 240 360 245 365 240 370"/>
  <polygon fill={h} points="240 360 250 360 245 365 240 360"/>
  <polygon fill={g} points="35 75 40 70 40 80 35 75"/>
  <polygon fill={h} points="30 80 35 75 40 80 30 80"/>
  <polygon fill={g} points="30 80 40 80 35 85 30 80"/>
  <polygon fill={h} points="40 80 40 89.99 35 85 40 80"/>
  <polygon fill={g} points="35 155 40 150 40 160 35 155"/>
  <polygon fill={h} points="30 160 35 155 40 160 30 160"/>
  <polygon fill={g} points="30 160 40 160 35 165 30 160"/>
  <polygon fill={h} points="40 160 40 170 35 165 40 160"/>
  <polygon fill={g} points="35 235.01 40 230.01 40 240.01 35 235.01"/>
  <polygon fill={h} points="30 240.01 35 235.01 40 240.01 30 240.01"/>
  <polygon fill={g} points="30 240.01 40 240.01 35 245.01 30 240.01"/>
  <polygon fill={h} points="40 240.01 40 250 35 245.01 40 240.01"/>
  <polygon fill={g} points="35 315.01 40 310.01 40 320.01 35 315.01"/>
  <polygon fill={h} points="30 320.01 35 315.01 40 320.01 30 320.01"/>
  <polygon fill={g} points="30 320.01 40 320.01 35 325 30 320.01"/>
  <polygon fill={h} points="40 320.01 40 330 35 325 40 320.01"/>
  <polygon fill={h} points="285 75 280 70 280 80 285 75"/>
  <polygon fill={g} points="290 80 285 75 280 80 290 80"/>
  <polygon fill={h} points="290 80 280 80 285 85 290 80"/>
  <polygon fill={g} points="280 80 280 89.99 285 85 280 80"/>
  <polygon fill={h} points="285 155 280 150 280 160 285 155"/>
  <polygon fill={g} points="290 160 285 155 280 160 290 160"/>
  <polygon fill={h} points="290 160 280 160 285 165 290 160"/>
  <polygon fill={g} points="280 160 280 170 285 165 280 160"/>
  <polygon fill={h} points="285 235.01 280 230.01 280 240.01 285 235.01"/>
  <polygon fill={g} points="290 240.01 285 235.01 280 240.01 290 240.01"/>
  <polygon fill={h} points="290 240.01 280 240.01 285 245.01 290 240.01"/>
  <polygon fill={g} points="280 240.01 280 250 285 245.01 280 240.01"/>
  <polygon fill={h} points="285 315.01 280 310.01 280 320.01 285 315.01"/>
  <polygon fill={g} points="290 320.01 285 315.01 280 320.01 290 320.01"/>
  <polygon fill={h} points="290 320.01 280 320.01 285 325 290 320.01"/>
  <polygon fill={g} points="280 320.01 280 330 285 325 280 320.01"/>
      </svg>
    );
  }
}

export default SparklePlenty;