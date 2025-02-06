// ArrowRotation.tsx
import { useRef, useState, useCallback } from 'react';
import { FaCaretDown } from 'react-icons/fa';
import { styled } from 'styled-components';

interface ArrowRotationProps {
  className?: string;
  onToggle: () => void;
}

const StyledDiv = styled.div`
  cursor: pointer;
  color: white;
`;

export const ArrowRotation = ({ className, onToggle }: ArrowRotationProps) => {
  const arrowContainerRef = useRef<HTMLDivElement>(null);
  const [, setArrowRotation] = useState(0);

  const onArrowClick = useCallback(() => {
    setArrowRotation((prevRotation) => {
      const newRotation = prevRotation + 180;
      if (arrowContainerRef.current) {
        gsap.to(arrowContainerRef.current, {
          rotation: newRotation,
          duration: 0.5,
          ease: 'power2.inOut',
        });
      }
      onToggle();
      return newRotation;
    });
  }, [onToggle]);

  return (
    <StyledDiv
      className={className}
      ref={arrowContainerRef}
      onClick={onArrowClick}
    >
      <FaCaretDown size={30} />
    </StyledDiv>
  );
};
