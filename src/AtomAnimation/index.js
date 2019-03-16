import React from 'react';
import Canvas from '../PaperCanvas';
import { Shape, Point, Color, Group } from 'paper';
import './styles.css';

let animation = (scope) => {
  const { view } = scope;
  let color = () => new Color(1, 1, 1);
  let randint = (max, min) => Math.floor(Math.random() * (max - min) + min);
  let nucleusParticles = [];
  const makenucleon = () => {
    let c = new Shape.Circle(view.center, randint(15, 25));
    c.fillColor = color();
    return c;
  };
  const addnucleon = (circles) => circles.push(makenucleon());

  for (let i = 0; i < 15; i++) {
    addnucleon(nucleusParticles);
  }

  // valence
  let atomicCenter = view.center;
  let valenceWidth = 145;
  let valenceCircle = new Shape.Circle(atomicCenter, valenceWidth);
  valenceCircle.strokeColor = new Color(1, 1, 1);
  let electronSize = 12;
  let outerCircle = new Shape.Circle(atomicCenter, valenceWidth + electronSize);
  let electron = new Shape.Circle(new Point(atomicCenter.x + valenceWidth, atomicCenter.y), electronSize);
  electron.fillColor = new Color(1, 1, 1);
  let v = new Group([valenceCircle, electron, outerCircle]);
  let x = v.clone();
  x.scale(1.25);


  let max = 40;
  let rotation = 1;
  view.onFrame = () => {
    nucleusParticles.forEach((c) => {
      const newx = atomicCenter.x + randint(-(max), max);
      const newy = atomicCenter.y + randint(-(max), max);
      c.position = new Point(newx, newy);
      c.opacity = Math.random();
    });
    v.rotate(rotation);
    x.rotate(-rotation);

    v.position = atomicCenter;
    x.position = atomicCenter;
  };

  view.on('mousemove', (evt) => {
    atomicCenter = evt.point;
  });

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
