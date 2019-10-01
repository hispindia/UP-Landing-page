import React from 'react';
import { render } from 'react-dom';
import { scaleLinear } from 'd3-scale';
import InnerBar from '../components/InnerBar.js';

const margin = {
  top: 45,
  right: 0,
  bottom: 70,
  left: 0,
};

const barHeight = 37;
const svgHeight = 140;

class ProgressBar extends React.Component {
  render() {
    const parentWidth = 500;
    const { data, total } = this.props;

    const width = parentWidth - margin.left - margin.right;
    const height = svgHeight - margin.top - margin.bottom;

    const xScale = scaleLinear()
      .domain([0, total])
      .range([0, width]);

    return (
      <div>
        <svg
          width={width + margin.left + margin.right}
          height={svgHeight}
        >
          <g transform={`translate(${margin.left}, ${margin.top})`}>
            <g className="budget-bar-group">
              <rect x="0" y="0" width={width} height={barHeight} rx="4" ry="4" opacity="0.2" />
              <text x={width} y="0" dy="-10" dx="-27"></text>
              <text x={width} y="0" dy="-30" dx="-55"></text>
            </g>
            <InnerBar
              {...{
                xScale,
                barHeight,
                data,
              }}
            />
          </g>
        </svg>
      </div>
    );
  }
}



export default ProgressBar;
