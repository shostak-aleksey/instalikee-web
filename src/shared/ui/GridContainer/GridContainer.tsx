import styled, { css } from 'styled-components';

interface GridContainerProps {
  children: React.ReactNode;
  direction?: 'row' | 'column';
  justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around';
  align?: 'start' | 'center' | 'end' | 'stretch';
  gap?: string;
  padding?: string;
  minmax?: string;
  className?: string;
  margin?: string;
  customColumns?: [number, number, number, number, number];
}

const GridContainerStyled = styled.div<GridContainerProps>`
  display: grid;
  grid-template-rows: ${(props) =>
    props.direction === 'column' ? 'auto' : undefined};
  grid-template-columns: ${(props) =>
    props.direction === 'row' && props.minmax !== undefined
      ? `repeat(auto-fill, minmax(${props.minmax}, 1fr))`
      : undefined};
  justify-items: ${(props) => props.justify};
  align-items: ${(props) => props.align};
  gap: ${(props) => props.gap};
  padding: ${(props) => props.padding};
  margin: ${(props) => props.margin};

  ${(props) =>
    props.customColumns &&
    css`
      @media (min-width: 576px) {
        grid-template-columns: repeat(${props.customColumns[0]}, 1fr);
      }
      @media (min-width: 768px) {
        grid-template-columns: repeat(${props.customColumns[1]}, 1fr);
      }
      @media (min-width: 992px) {
        grid-template-columns: repeat(${props.customColumns[2]}, 1fr);
      }
      @media (min-width: 1200px) {
        grid-template-columns: repeat(${props.customColumns[3]}, 1fr);
      }
      @media (min-width: 1400px) {
        grid-template-columns: repeat(${props.customColumns[4]}, 1fr);
      }
    `}
`;

export const GridContainer = ({
  children,
  direction = 'row',
  justify = 'start',
  align = 'stretch',
  gap = '16px',
  padding = '0',
  minmax = '320px',
  margin,
  className,
  customColumns,
}: GridContainerProps) => {
  return (
    <GridContainerStyled
      className={className}
      direction={direction}
      justify={justify}
      align={align}
      gap={gap}
      padding={padding}
      minmax={minmax}
      margin={margin}
      customColumns={customColumns}
    >
      {children}
    </GridContainerStyled>
  );
};
