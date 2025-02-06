import React from 'react';

interface EnneagramSVGProps {
  width?: number;
  height?: number;
}

const EnneagramSVG: React.FC<EnneagramSVGProps> = ({
  width = 300,
  height = 300,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 300 300"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <circle
        cx="150"
        cy="150"
        r="140"
        stroke="black"
        strokeWidth="2"
        fill="none"
      />
      <g stroke="black" strokeWidth="2">
        <line x1="150" y1="10" x2="150" y2="290" />
        <line x1="10" y1="150" x2="290" y2="150" />
        <line x1="150" y1="10" x2="290" y2="150" />
        <line x1="290" y1="150" x2="150" y2="290" />
        <line x1="150" y1="290" x2="10" y2="150" />
        <line x1="10" y1="150" x2="150" y2="10" />
        <line x1="150" y1="10" x2="10" y2="150" />
        <line x1="290" y1="150" x2="150" y2="10" />
        <line x1="150" y1="290" x2="290" y2="150" />
        <line x1="10" y1="150" x2="150" y2="290" />
      </g>
      <g fill="black">
        <circle cx="150" cy="10" r="5" />
        <circle cx="290" cy="150" r="5" />
        <circle cx="150" cy="290" r="5" />
        <circle cx="10" cy="150" r="5" />
      </g>
    </svg>
  );
};

export default EnneagramSVG;
