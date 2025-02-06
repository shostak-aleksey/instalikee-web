import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Colors } from '@/shared/const/colors';
import { Justify, Align, Gap, Direction } from '@/shared/const/flex';
import { screenSize } from '@/shared/const/screenSize';

gsap.registerPlugin(ScrollTrigger);

interface SectionProps {
  className?: string;
  children?: React.ReactNode;
  width?: screenSize;
  height?: string;
  padding?: string;
  margin?: string;
  background?: Colors;
  backgroundImage?: string;
  flex?: boolean;
  gap?: Gap;
  justify?: Justify;
  align?: Align;
  direction?: Direction;
  column?: boolean;
  fixed?: boolean;
  ref?: React.Ref<HTMLDivElement>;
}

const StyledSection = styled.section<SectionProps>`
  display: ${(props) => (props.flex ? 'flex' : 'block')};
  justify-content: ${(props) => props.justify};
  gap: ${(props) => props.gap};
  align-items: ${(props) => props.align};
  flex-direction: ${(props) => (props.direction ? props.direction : 'row')};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};
  width: ${(props) => (props.width !== undefined ? `${props.width}` : '100vw')};
  height: ${(props) =>
    props.height !== undefined ? `${props.height}` : '100vh'};
  background-image: ${(props) =>
    props.backgroundImage ? `url(${props.backgroundImage})` : 'none'};
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: ${(props) =>
    props.fixed !== undefined ? `fixed` : undefined};
  background: ${(props) => props.background};
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
`;

export const Section: React.FC<SectionProps> = (props) => {
  const sectionRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.to(sectionRef.current, {
        backgroundPositionY: '100%', // Adjust this value for the desired  effect
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 2,
        },
      });
    }
  }, []);

  return <StyledSection ref={sectionRef} {...props} />;
};
