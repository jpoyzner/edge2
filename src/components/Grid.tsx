import React from 'react';
import './Grid.scss';

export default function() {
  return (
    <>
      <div className="grid-container">
        <div className="grid-item">1</div>
        <div className="grid-item">2</div>
        <div className="grid-item">3</div>
        <div className="grid-item">4</div>
        <div className="grid-item">5</div>
        <div className="grid-item">6</div>
        <div className="grid-item">7</div>
        <div className="grid-item">8</div>
        <div className="grid-item">9</div>
      </div>
      <div>SHRINK SCREEN HORIZONTALLY AND SEE WHAT HAPPENS!</div>
      <div className="grid-two">
        <div className="box box1"></div>
        <div className="box box2"></div>
        <div className="box box3"></div>
        <div className="box box4"></div>
      </div>
    </>
  );
}