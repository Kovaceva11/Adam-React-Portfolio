import React from 'react';
import "../App.css";
import HorizontalScroll from "react-scroll-horizontal";

export default function TechStack() {
  const child = { width: `30em`, height: `100%` };
  return (
    <div>
      <HorizontalScroll>
        <div style={child}>
          <h1>Hello 1</h1>
        </div>
        <div style={child}>
          <h1>Hello 2</h1>
        </div>

        <div style={child}>
          <h1>Hello 3</h1>
        </div>
      </HorizontalScroll>
    </div>
  );
}
