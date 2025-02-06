import { useEffect } from 'react';
import { gsap } from 'gsap';

export const TransitionLayout = () => {
  useEffect(() => {
    const pinkSquare = document.getElementById('pink-square');
    const blackSquare = document.getElementById('black-square');

    if (pinkSquare && blackSquare) {
      gsap.set(pinkSquare, { y: '100%' });
      gsap.set(blackSquare, { x: '-100%', opacity: 1 });
    }
  }, []);

  return (
    <>
      {' '}
      <div
        id="pink-square"
        style={{
          position: 'fixed',
          bottom: '-100%',
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'pink',
          zIndex: 1000,
        }}
      ></div>
      <div
        id="black-square"
        style={{
          position: 'fixed',
          left: '-100%',
          top: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'black',
          zIndex: 1001,
        }}
      ></div>
    </>
  );
};
