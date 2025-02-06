import styled from 'styled-components';
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';

export type FlexJustify = 'start' | 'center' | 'end' | 'between' | 'around';
export type FlexAlign = 'start' | 'center' | 'end' | 'between' | 'around';
export type FlexDirection = 'row' | 'column' | 'rowReverse' | 'columnReverse';
export type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';
export type FlexGap =
  | '4'
  | '8'
  | '12'
  | '16'
  | '20'
  | '24'
  | '28'
  | '32'
  | '64'
  | '128';

type DivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

interface ResponsiveProps {
  justify?: FlexJustify;
  align?: FlexAlign;
  direction?: FlexDirection;
  wrap?: FlexWrap;
  gap?: FlexGap;
  max?: boolean;
  grow?: number;
  shrink?: number;
  basis?: string;
}

export interface FlexProps extends DivProps {
  className?: string;
  children: ReactNode;
  justify?: FlexJustify;
  align?: FlexAlign;
  direction: FlexDirection;
  wrap?: FlexWrap;
  gap?: FlexGap;
  max?: boolean;
  grow?: number;
  shrink?: number;
  basis?: string;
  xs?: ResponsiveProps;
  sm?: ResponsiveProps;
  md?: ResponsiveProps;
  lg?: ResponsiveProps;
  xl?: ResponsiveProps;
}

const FlexContainer = styled.div<FlexProps>`
  display: flex;
  justify-content: ${({ justify }) =>
    justify === 'around'
      ? 'space-around'
      : justify === 'between'
        ? 'space-between'
        : justify};
  align-items: ${({ align }) =>
    align === 'around'
      ? 'space-around'
      : align === 'between'
        ? 'space-between'
        : align};
  flex-direction: ${({ direction }) => direction};
  flex-wrap: ${({ wrap }) => wrap};
  ${({ gap }) => gap && `gap: ${gap}px;`}
  ${({ max }) => max && `max-width: 100%;`}
  ${({ grow }) => grow !== undefined && `flex-grow: ${grow};`}
  ${({ shrink }) => shrink !== undefined && `flex-shrink: ${shrink};`}
  ${({ basis }) => basis && `flex-basis: ${basis};`}

  @media (max-width: 576px) {
    ${({ xs }) =>
      xs &&
      `
      justify-content: ${xs.justify};
      align-items: ${xs.align};
      flex-direction: ${xs.direction};
      flex-wrap: ${xs.wrap};
      ${xs.gap && `gap: ${xs.gap}px;`}
      ${xs.max && `max-width: 100%;`}
      ${xs.grow !== undefined && `flex-grow: ${xs.grow};`}
      ${xs.shrink !== undefined && `flex-shrink: ${xs.shrink};`}
      ${xs.basis && `flex-basis: ${xs.basis};`}
    `}
  }

  @media (min-width: 577px) and (max-width: 768px) {
    ${({ sm }) =>
      sm &&
      `
      justify-content: ${sm.justify};
      align-items: ${sm.align};
      flex-direction: ${sm.direction};
      flex-wrap: ${sm.wrap};
      ${sm.gap && `gap: ${sm.gap}px;`}
      ${sm.max && `max-width: 100%;`}
      ${sm.grow !== undefined && `flex-grow: ${sm.grow};`}
      ${sm.shrink !== undefined && `flex-shrink: ${sm.shrink};`}
      ${sm.basis && `flex-basis: ${sm.basis};`}
    `}
  }

  @media (min-width: 769px) and (max-width: 992px) {
    ${({ md }) =>
      md &&
      `
      justify-content: ${md.justify};
      align-items: ${md.align};
      flex-direction: ${md.direction};
      flex-wrap: ${md.wrap};
      ${md.gap && `gap: ${md.gap}px;`}
      ${md.max && `max-width: 100%;`}
      ${md.grow !== undefined && `flex-grow: ${md.grow};`}
      ${md.shrink !== undefined && `flex-shrink: ${md.shrink};`}
      ${md.basis && `flex-basis: ${md.basis};`}
    `}
  }

  @media (min-width: 993px) and (max-width: 1200px) {
    ${({ lg }) =>
      lg &&
      `
      justify-content: ${lg.justify};
      align-items: ${lg.align};
      flex-direction: ${lg.direction};
      flex-wrap: ${lg.wrap};
      ${lg.gap && `gap: ${lg.gap}px;`}
      ${lg.max && `max-width: 100%;`}
      ${lg.grow !== undefined && `flex-grow: ${lg.grow};`}
      ${lg.shrink !== undefined && `flex-shrink: ${lg.shrink};`}
      ${lg.basis && `flex-basis: ${lg.basis};`}
    `}
  }

  @media (min-width: 1201px) {
    ${({ xl }) =>
      xl &&
      `
      justify-content: ${xl.justify};
      align-items: ${xl.align};
      flex-direction: ${xl.direction};
      flex-wrap: ${xl.wrap};
      ${xl.gap && `gap: ${xl.gap}px;`}
      ${xl.max && `max-width: 100%;`}
      ${xl.grow !== undefined && `flex-grow: ${xl.grow};`}
      ${xl.shrink !== undefined && `flex-shrink: ${xl.shrink};`}
      ${xl.basis && `flex-basis: ${xl.basis};`}
    `}
  }
`;

export const Flex = (props: FlexProps) => {
  const {
    className,
    children,
    justify = 'start',
    align = 'center',
    direction = 'row',
    wrap = 'nowrap',
    gap,
    max,
    grow,
    shrink,
    basis,
    xs,
    sm,
    md,
    lg,
    xl,
    ...otherProps
  } = props;
  const mods: Mods = { max };

  return (
    <FlexContainer
      className={classNames('', mods, [className])}
      justify={justify}
      align={align}
      direction={direction}
      wrap={wrap}
      gap={gap}
      max={max}
      grow={grow}
      shrink={shrink}
      basis={basis}
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
      {...otherProps}
    >
      {children}
    </FlexContainer>
  );
};
