import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import styled from 'styled-components';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

interface CustomLinkProps {
  to: string;
  children?: React.ReactNode;
  className?: string;
  animationType?: 'default' | 'pinkSquareUp';
}

const StyledLink = styled.a<{ isAnimating: boolean }>`
  cursor: ${({ isAnimating }) => (isAnimating ? 'default' : 'pointer')};
  pointer-events: ${({ isAnimating }) => (isAnimating ? 'none' : 'auto')};
`;

const CustomLink: React.FC<CustomLinkProps> = ({
  to,
  children,
  className,
  animationType = 'default',
}) => {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNavigation = (path: string) => {
    if (isAnimating) return;
    setIsAnimating(true);

    const pinkSquare = document.getElementById('pink-square');
    const blackSquare = document.getElementById('black-square');

    const completeNavigation = () => {
      navigate(path);
      gsap.to(window, {
        duration: 0,
        scrollTo: { y: -1 },
        onComplete: () => {
          gsap.to([blackSquare, pinkSquare], {
            delay: 0.3,
            duration: 0.7,
            opacity: 0,
            ease: 'power2.inOut',
            onComplete: () => {
              gsap.set(pinkSquare, {
                y: '0%',
                opacity: 1,
                display: 'block',
              });
              gsap.set(blackSquare, {
                x: '0%',
                opacity: 1,
                display: 'block',
              });
              setIsAnimating(false);
            },
          });
        },
      });
    };

    if (pinkSquare && blackSquare) {
      if (animationType === 'default') {
        gsap.to(pinkSquare, {
          duration: 1,
          y: '-100%',
          ease: 'power2.inOut',
          onComplete: () => {
            gsap.to(blackSquare, {
              duration: 1,
              x: '100%',
              ease: 'power2.inOut',
              onComplete: completeNavigation,
            });
          },
        });
      } else if (animationType === 'pinkSquareUp') {
        gsap.to(pinkSquare, {
          duration: 1,
          y: '-100%',
          ease: 'power2.inOut',
          onComplete: () => {
            navigate(path);
            gsap.to(window, {
              scrollTo: { y: 0 },
              ease: 'power1.inOut',
              onComplete: () => {
                gsap.to(pinkSquare, {
                  delay: 0.3,
                  duration: 1,
                  y: '-200%',
                  ease: 'power2.inOut',
                  onComplete: () => {
                    gsap.set(pinkSquare, {
                      y: '0%',
                      opacity: 1,
                      display: 'block',
                    });
                    setIsAnimating(false);
                  },
                });
              },
            });
          },
        });
      }
    }
  };

  return (
    <StyledLink
      isAnimating={isAnimating}
      className={className}
      onClick={() => handleNavigation(to)}
    >
      {children}
    </StyledLink>
  );
};

export default CustomLink;
