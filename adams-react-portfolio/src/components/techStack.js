import React from 'react';
import ColorCard from './ColorCard';
import ScrollBox from './ScrollBox';
import COLORS from '../mocks/data.json';


export default function TechStack() {
  return (
    <div>
    <h1 className="ak-xlarge ak-center ak-padding-64 ak-card">Technology Stack</h1>
    <div className="ak-xlarge ak-center ak-padding-64 ak-card">
    <ScrollBox>
    {COLORS.map(({ color, id }) => (
      <ColorCard color={color} key={id} />
    ))}
    </ScrollBox>
    </div>
    </div>
  )
}
