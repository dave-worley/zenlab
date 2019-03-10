import React from 'react';
import Canvas from '../PaperCanvas';
import { Shape, Point, Color } from 'paper';
import './styles.css';

let animation = (scope) => {
  const { view } = scope;
  let bounds = view.size;
  let randn = () => Math.random();
  let color = () => new Color(randn(), 0, 0);
  let randint = (max, min) => Math.floor(Math.random() * (max - min) + min);
  let circles = [];
  const makecircle = () => {
    let c = new Shape.Circle(view.center, randint(15, 35));
    c.fillColor = color();
    c.blendMode = 'multiply';
    let absvelocity = 10;
    c.velocity = new Point(randint(-absvelocity, absvelocity), randint(-absvelocity, absvelocity));
    return c;
  };
  const addcircle = (circles) => circles.push(makecircle());

  for (let i = 0; i < 1; i++) {
    addcircle(circles);
  }


  view.onFrame = () => {
    circles.forEach((c) => {
      if (c.bounds.right >= bounds.width || c.bounds.left <= 0) {
        c.velocity.x *= -1;
      }
      if (c.bounds.bottom >= bounds.height || c.bounds.top <= 0) {
        c.velocity.y *= -1;
      }
      c.position = c.position.add(c.velocity);
    });
    bounds = view.size;
  };

  const more = setInterval(() => {
    if (circles.length < 20) {
      addcircle(circles);
    } else {
      clearInterval(more);
    }
  }, 1000);

  view.onClick = () => {
    scope.activate();
    addcircle(circles);
  };
};

export default ({
  width,
  height
}) => {
  return (
    <Canvas
      width={ width }
      height={ height }
      script={
        animation
      }/>
  );
};
