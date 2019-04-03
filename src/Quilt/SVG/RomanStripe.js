import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class RomanStripe extends PureComponent {
  render() {
    const { activeColors } = this.props;
    const {
      a, b, c, d, e, f, g, h, i, j, k, l,
    } = activeColors;
    return (
      <svg
        fill="#000"
        viewBox="0 0 700 900"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect fill={a} width="700" height="900" />
        <polygon fill={b} points="100 120 180 200 200 200 100 100 100 120" />
        <polygon fill={a} points="200 200 200 100 100 100 200 200" />
        <polygon fill={c} points="100 140 160 200 180 200 100 120 100 140" />
        <polygon fill={d} points="100 160 140 200 160 200 100 140 100 160" />
        <polygon fill={e} points="100 180 120 200 140 200 100 160 100 180" />
        <polygon fill={f} points="100 200 120 200 100 180 100 200" />
        <polygon fill={e} points="400 120 480 200 500 200 400 100 400 120" />
        <polygon fill={a} points="500 200 500 100 400 100 500 200" />
        <polygon fill={g} points="400 140 460 200 480 200 400 120 400 140" />
        <polygon fill={b} points="400 160 440 200 460 200 400 140 400 160" />
        <polygon fill={h} points="400 180 420 200 440 200 400 160 400 180" />
        <polygon fill={i} points="400 200 420 200 400 180 400 200" />
        <polygon fill={d} points="300 120 380 200 400 200 300 100 300 120" />
        <polygon fill={a} points="400 200 400 100 300 100 400 200" />
        <polygon fill={i} points="300 140 360 200 380 200 300 120 300 140" />
        <polygon fill={j} points="300 160 340 200 360 200 300 140 300 160" />
        <polygon fill={k} points="300 180 320 200 340 200 300 160 300 180" />
        <polygon fill={l} points="300 200 320 200 300 180 300 200" />
        <polygon fill={j} points="200 120 280 200 300 200 200 100 200 120" />
        <polygon fill={a} points="300 200 300 100 200 100 300 200" />
        <polygon fill={e} points="200 140 260 200 280 200 200 120 200 140" />
        <polygon fill={f} points="200 160 240 200 260 200 200 140 200 160" />
        <polygon fill={d} points="200 180 220 200 240 200 200 160 200 180" />
        <polygon fill={g} points="200 200 220 200 200 180 200 200" />
        <polygon fill={h} points="500 120 580 200 600 200 500 100 500 120" />
        <polygon fill={a} points="600 200 600 100 500 100 600 200" />
        <polygon fill={f} points="500 140 560 200 580 200 500 120 500 140" />
        <polygon fill={g} points="500 160 540 200 560 200 500 140 500 160" />
        <polygon fill={e} points="500 180 520 200 540 200 500 160 500 180" />
        <polygon fill={d} points="500 200 520 200 500 180 500 200" />
        <polygon fill={l} points="100 220 180 300 200 300 100 200 100 220" />
        <polygon fill={a} points="200 300 200 200 100 200 200 300" />
        <polygon fill={k} points="100 240 160 300 180 300 100 220 100 240" />
        <polygon fill={j} points="100 260 140 300 160 300 100 240 100 260" />
        <polygon fill={i} points="100 280 120 300 140 300 100 260 100 280" />
        <polygon fill={d} points="100 300 120 300 100 280 100 300" />
        <polygon fill={g} points="400 220 480 300 500 300 400 200 400 220" />
        <polygon fill={a} points="500 300 500 200 400 200 500 300" />
        <polygon fill={d} points="400 240 460 300 480 300 400 220 400 240" />
        <polygon fill={f} points="400 260 440 300 460 300 400 240 400 260" />
        <polygon fill={e} points="400 280 420 300 440 300 400 260 400 280" />
        <polygon fill={j} points="400 300 420 300 400 280 400 300" />
        <polygon fill={c} points="300 220 380 300 400 300 300 200 300 220" />
        <polygon fill={a} points="400 300 400 200 300 200 400 300" />
        <polygon fill={h} points="300 240 360 300 380 300 300 220 300 240" />
        <polygon fill={l} points="300 260 340 300 360 300 300 240 300 260" />
        <polygon fill={b} points="300 280 320 300 340 300 300 260 300 280" />
        <polygon fill={f} points="300 300 320 300 300 280 300 300" />
        <polygon fill={i} points="200 220 280 300 300 300 200 200 200 220" />
        <polygon fill={a} points="300 300 300 200 200 200 300 300" />
        <polygon fill={h} points="200 240 260 300 280 300 200 220 200 240" />
        <polygon fill={b} points="200 260 240 300 260 300 200 240 200 260" />
        <polygon fill={g} points="200 280 220 300 240 300 200 260 200 280" />
        <polygon fill={e} points="200 300 220 300 200 280 200 300" />
        <polygon fill={b} points="500 220 580 300 600 300 500 200 500 220" />
        <polygon fill={a} points="600 300 600 200 500 200 600 300" />
        <polygon fill={c} points="500 240 560 300 580 300 500 220 500 240" />
        <polygon fill={d} points="500 260 540 300 560 300 500 240 500 260" />
        <polygon fill={e} points="500 280 520 300 540 300 500 260 500 280" />
        <polygon fill={f} points="500 300 520 300 500 280 500 300" />
        <polygon fill={f} points="100 320 180 400 200 400 100 300 100 320" />
        <polygon fill={a} points="200 400 200 300 100 300 200 400" />
        <polygon fill={b} points="100 340 160 400 180 400 100 320 100 340" />
        <polygon fill={l} points="100 360 140 400 160 400 100 340 100 360" />
        <polygon fill={h} points="100 380 120 400 140 400 100 360 100 380" />
        <polygon fill={c} points="100 400 120 400 100 380 100 400" />
        <polygon fill={l} points="400 320 480 400 500 400 400 300 400 320" />
        <polygon fill={a} points="500 400 500 300 400 300 500 400" />
        <polygon fill={i} points="400 340 460 400 480 400 400 320 400 340" />
        <polygon fill={c} points="400 360 440 400 460 400 400 340 400 360" />
        <polygon fill={h} points="400 380 420 400 440 400 400 360 400 380" />
        <polygon fill={k} points="400 400 420 400 400 380 400 400" />
        <polygon fill={d} points="300 320 380 400 400 400 300 300 300 320" />
        <polygon fill={a} points="400 400 400 300 300 300 400 400" />
        <polygon fill={e} points="300 340 360 400 380 400 300 320 300 340" />
        <polygon fill={g} points="300 360 340 400 360 400 300 340 300 360" />
        <polygon fill={f} points="300 380 320 400 340 400 300 360 300 380" />
        <polygon fill={h} points="300 400 320 400 300 380 300 400" />
        <polygon fill={f} points="200 320 280 400 300 400 200 300 200 320" />
        <polygon fill={a} points="300 400 300 300 200 300 300 400" />
        <polygon fill={e} points="200 340 260 400 280 400 200 320 200 340" />
        <polygon fill={d} points="200 360 240 400 260 400 200 340 200 360" />
        <polygon fill={c} points="200 380 220 400 240 400 200 360 200 380" />
        <polygon fill={b} points="200 400 220 400 200 380 200 400" />
        <polygon fill={l} points="500 320 580 400 600 400 500 300 500 320" />
        <polygon fill={a} points="600 400 600 300 500 300 600 400" />
        <polygon fill={k} points="500 340 560 400 580 400 500 320 500 340" />
        <polygon fill={j} points="500 360 540 400 560 400 500 340 500 360" />
        <polygon fill={i} points="500 380 520 400 540 400 500 360 500 380" />
        <polygon fill={d} points="500 400 520 400 500 380 500 400" />
        <polygon fill={j} points="100 420 180 500 200 500 100 400 100 420" />
        <polygon fill={a} points="200 500 200 400 100 400 200 500" />
        <polygon fill={e} points="100 440 160 500 180 500 100 420 100 440" />
        <polygon fill={f} points="100 460 140 500 160 500 100 440 100 460" />
        <polygon fill={d} points="100 480 120 500 140 500 100 460 100 480" />
        <polygon fill={g} points="100 500 120 500 100 480 100 500" />
        <polygon fill={c} points="400 420 480 500 500 500 400 400 400 420" />
        <polygon fill={a} points="500 500 500 400 400 400 500 500" />
        <polygon fill={h} points="400 440 460 500 480 500 400 420 400 440" />
        <polygon fill={l} points="400 460 440 500 460 500 400 440 400 460" />
        <polygon fill={b} points="400 480 420 500 440 500 400 460 400 480" />
        <polygon fill={f} points="400 500 420 500 400 480 400 500" />
        <polygon fill={e} points="300 420 380 500 400 500 300 400 300 420" />
        <polygon fill={a} points="400 500 400 400 300 400 400 500" />
        <polygon fill={g} points="300 440 360 500 380 500 300 420 300 440" />
        <polygon fill={b} points="300 460 340 500 360 500 300 440 300 460" />
        <polygon fill={h} points="300 480 320 500 340 500 300 460 300 480" />
        <polygon fill={i} points="300 500 320 500 300 480 300 500" />
        <polygon fill={k} points="200 420 280 500 300 500 200 400 200 420" />
        <polygon fill={a} points="300 500 300 400 200 400 300 500" />
        <polygon fill={h} points="200 440 260 500 280 500 200 420 200 440" />
        <polygon fill={c} points="200 460 240 500 260 500 200 440 200 460" />
        <polygon fill={i} points="200 480 220 500 240 500 200 460 200 480" />
        <polygon fill={l} points="200 500 220 500 200 480 200 500" />
        <polygon fill={f} points="500 420 580 500 600 500 500 400 500 420" />
        <polygon fill={a} points="600 500 600 400 500 400 600 500" />
        <polygon fill={b} points="500 440 560 500 580 500 500 420 500 440" />
        <polygon fill={l} points="500 460 540 500 560 500 500 440 500 460" />
        <polygon fill={h} points="500 480 520 500 540 500 500 460 500 480" />
        <polygon fill={c} points="500 500 520 500 500 480 500 500" />
        <polygon fill={h} points="100 520 180 600 200 600 100 500 100 520" />
        <polygon fill={a} points="200 600 200 500 100 500 200 600" />
        <polygon fill={f} points="100 540 160 600 180 600 100 520 100 540" />
        <polygon fill={g} points="100 560 140 600 160 600 100 540 100 560" />
        <polygon fill={e} points="100 580 120 600 140 600 100 560 100 580" />
        <polygon fill={d} points="100 600 120 600 100 580 100 600" />
        <polygon fill={b} points="400 520 480 600 500 600 400 500 400 520" />
        <polygon fill={a} points="500 600 500 500 400 500 500 600" />
        <polygon fill={c} points="400 540 460 600 480 600 400 520 400 540" />
        <polygon fill={d} points="400 560 440 600 460 600 400 540 400 560" />
        <polygon fill={e} points="400 580 420 600 440 600 400 560 400 580" />
        <polygon fill={f} points="400 600 420 600 400 580 400 600" />
        <polygon fill={j} points="300 520 380 600 400 600 300 500 300 520" />
        <polygon fill={a} points="400 600 400 500 300 500 400 600" />
        <polygon fill={e} points="300 540 360 600 380 600 300 520 300 540" />
        <polygon fill={f} points="300 560 340 600 360 600 300 540 300 560" />
        <polygon fill={d} points="300 580 320 600 340 600 300 560 300 580" />
        <polygon fill={g} points="300 600 320 600 300 580 300 600" />
        <polygon fill={c} points="200 520 280 600 300 600 200 500 200 520" />
        <polygon fill={a} points="300 600 300 500 200 500 300 600" />
        <polygon fill={h} points="200 540 260 600 280 600 200 520 200 540" />
        <polygon fill={l} points="200 560 240 600 260 600 200 540 200 560" />
        <polygon fill={b} points="200 580 220 600 240 600 200 560 200 580" />
        <polygon fill={f} points="200 600 220 600 200 580 200 600" />
        <polygon fill={i} points="500 520 580 600 600 600 500 500 500 520" />
        <polygon fill={a} points="600 600 600 500 500 500 600 600" />
        <polygon fill={h} points="500 540 560 600 580 600 500 520 500 540" />
        <polygon fill={b} points="500 560 540 600 560 600 500 540 500 560" />
        <polygon fill={g} points="500 580 520 600 540 600 500 560 500 580" />
        <polygon fill={e} points="500 600 520 600 500 580 500 600" />
        <polygon fill={k} points="100 620 180 700 200 700 100 600 100 620" />
        <polygon fill={a} points="200 700 200 600 100 600 200 700" />
        <polygon fill={h} points="100 640 160 700 180 700 100 620 100 640" />
        <polygon fill={c} points="100 660 140 700 160 700 100 640 100 660" />
        <polygon fill={i} points="100 680 120 700 140 700 100 660 100 680" />
        <polygon fill={l} points="100 700 120 700 100 680 100 700" />
        <polygon fill={h} points="400 620 480 700 500 700 400 600 400 620" />
        <polygon fill={a} points="500 700 500 600 400 600 500 700" />
        <polygon fill={f} points="400 640 460 700 480 700 400 620 400 640" />
        <polygon fill={g} points="400 660 440 700 460 700 400 640 400 660" />
        <polygon fill={e} points="400 680 420 700 440 700 400 660 400 680" />
        <polygon fill={d} points="400 700 420 700 400 680 400 700" />
        <polygon fill={l} points="300 620 380 700 400 700 300 600 300 620" />
        <polygon fill={a} points="400 700 400 600 300 600 400 700" />
        <polygon fill={i} points="300 640 360 700 380 700 300 620 300 640" />
        <polygon fill={c} points="300 660 340 700 360 700 300 640 300 660" />
        <polygon fill={h} points="300 680 320 700 340 700 300 660 300 680" />
        <polygon fill={k} points="300 700 320 700 300 680 300 700" />
        <polygon fill={l} points="200 620 280 700 300 700 200 600 200 620" />
        <polygon fill={a} points="300 700 300 600 200 600 300 700" />
        <polygon fill={k} points="200 640 260 700 280 700 200 620 200 640" />
        <polygon fill={j} points="200 660 240 700 260 700 200 640 200 660" />
        <polygon fill={i} points="200 680 220 700 240 700 200 660 200 680" />
        <polygon fill={d} points="200 700 220 700 200 680 200 700" />
        <polygon fill={g} points="500 620 580 700 600 700 500 600 500 620" />
        <polygon fill={a} points="600 700 600 600 500 600 600 700" />
        <polygon fill={d} points="500 640 560 700 580 700 500 620 500 640" />
        <polygon fill={f} points="500 660 540 700 560 700 500 640 500 660" />
        <polygon fill={e} points="500 680 520 700 540 700 500 660 500 680" />
        <polygon fill={j} points="500 700 520 700 500 680 500 700" />
        <polygon fill={e} points="100 720 180 800 200 800 100 700 100 720" />
        <polygon fill={a} points="200 800 200 700 100 700 200 800" />
        <polygon fill={g} points="100 740 160 800 180 800 100 720 100 740" />
        <polygon fill={b} points="100 760 140 800 160 800 100 740 100 760" />
        <polygon fill={h} points="100 780 120 800 140 800 100 760 100 780" />
        <polygon fill={i} points="100 800 120 800 100 780 100 800" />
        <polygon fill={d} points="400 720 480 800 500 800 400 700 400 720" />
        <polygon fill={a} points="500 800 500 700 400 700 500 800" />
        <polygon fill={i} points="400 740 460 800 480 800 400 720 400 740" />
        <polygon fill={j} points="400 760 440 800 460 800 400 740 400 760" />
        <polygon fill={k} points="400 780 420 800 440 800 400 760 400 780" />
        <polygon fill={l} points="400 800 420 800 400 780 400 800" />
        <polygon fill={f} points="300 720 380 800 400 800 300 700 300 720" />
        <polygon fill={a} points="400 800 400 700 300 700 400 800" />
        <polygon fill={e} points="300 740 360 800 380 800 300 720 300 740" />
        <polygon fill={d} points="300 760 340 800 360 800 300 740 300 760" />
        <polygon fill={c} points="300 780 320 800 340 800 300 760 300 780" />
        <polygon fill={b} points="300 800 320 800 300 780 300 800" />
        <polygon fill={d} points="200 720 280 800 300 800 200 700 200 720" />
        <polygon fill={a} points="300 800 300 700 200 700 300 800" />
        <polygon fill={e} points="200 740 260 800 280 800 200 720 200 740" />
        <polygon fill={g} points="200 760 240 800 260 800 200 740 200 760" />
        <polygon fill={f} points="200 780 220 800 240 800 200 760 200 780" />
        <polygon fill={h} points="200 800 220 800 200 780 200 800" />
        <polygon fill={k} points="500 720 580 800 600 800 500 700 500 720" />
        <polygon fill={a} points="600 800 600 700 500 700 600 800" />
        <polygon fill={h} points="500 740 560 800 580 800 500 720 500 740" />
        <polygon fill={c} points="500 760 540 800 560 800 500 740 500 760" />
        <polygon fill={i} points="500 780 520 800 540 800 500 760 500 780" />
        <polygon fill={l} points="500 800 520 800 500 780 500 800" />
      </svg>
    );
  }
}

export default RomanStripe;
