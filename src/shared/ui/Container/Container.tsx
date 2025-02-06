import styled from 'styled-components';
import { ReactNode } from 'react';

interface ContainerProps {
  height?: string;
  children: ReactNode;
  className?: string;
  padding?: string;
  margin?: string;
  background?: string;
  flex?: boolean;
  justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around';
  align?: 'start' | 'center' | 'end' | 'stretch';
  gap?: string;
  isNarrow?: boolean; // New boolean prop
  isNarrow2?: boolean; // New boolean prop
}

const ContainerStyled = styled.div<ContainerProps>`
  width: 100%;
  max-width: 100%;
  height: ${(props) => props.height || '100%'};
  padding: ${(props) => props.padding || '0 16px'};
  margin: ${(props) => props.margin || '0 auto'};
  background: ${(props) => props.background || 'transparent'};
  display: ${(props) => (props.flex ? 'flex' : 'block')};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  gap: ${(props) => props.gap};

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 1400px) {
    max-width: ${(props) =>
      props.isNarrow2 ? '760px' : props.isNarrow ? '992px' : '1320px'};
  }
`;

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  padding,
  margin,
  background,
  flex,
  justify,
  align,
  gap,
  height,
  isNarrow, // Include the new prop
  isNarrow2, // Include the new prop
}) => {
  return (
    <ContainerStyled
      className={className}
      padding={padding}
      margin={margin}
      background={background}
      flex={flex}
      justify={justify}
      align={align}
      gap={gap}
      height={height}
      isNarrow={isNarrow} // Pass the new prop
      isNarrow2={isNarrow2} // Pass the new prop
    >
      {children}
    </ContainerStyled>
  );
};
