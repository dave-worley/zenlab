import React from 'react';
import Canvas from '../PaperCanvas';
import { Shape, Point, Color, Size } from 'paper';
import './styles.css';

let animation = (scope) => {
  const { view } = scope;
  let bounds = view.size;
  let randn = () => Math.random();
  let color = () => new Color(randn(), 0, 0);
  let randint = (max, min) => Math.floor(Math.random() * (max - min) + min);
  let squares = [];
  const makesquares = (i) => {
    let c = new Shape.Rectangle(new Point(i * bounds.height, 0), new Size(bounds.height, bounds.height));
    c.fillColor = color();
    c.blendMode = 'multiply';
    return c;
  };

  for (let i = 0; i < view.bounds.width/bounds.height; i++) {
    squares.push(makesquares(i))
  }


  view.onFrame = () => {
    squares.forEach((square) => {
      square.fillColor = color();
    });
    bounds = view.size;
  };

};

export default ({
  width,
  height
}) => {
  return (
    <div className="squares">
    <Canvas
      width={ width }
      height={ height }
      script={
        animation
      }/>
    </div>
  );
};
