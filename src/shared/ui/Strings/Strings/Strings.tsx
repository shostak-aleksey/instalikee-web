// import React, { useRef, useEffect } from 'react';

// export const StringCanvas: React.FC = () => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const context = canvas?.getContext('2d');
//     let animationFrameId: number;

//     const draw = () => {
//       if (context) {
//         context.clearRect(0, 0, canvas.width, canvas.height);
//         context.beginPath();
//         context.moveTo(0, 50);
//         for (let x = 0; x <= 100; x += 1) {
//           const y = 50 + Math.sin(x / 10 + Date.now() / 100) * 10;
//           context.lineTo(x, y);
//         }
//         context.stroke();
//       }
//       animationFrameId = requestAnimationFrame(draw);
//     };

//     draw();
//     return () => cancelAnimationFrame(animationFrameId);
//   }, []);

//   return <canvas ref={canvasRef} width="100" height="100" />;
// };
