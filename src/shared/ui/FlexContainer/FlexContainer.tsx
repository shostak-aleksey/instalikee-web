import React from 'react';
import cls from './FlexContainer.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface FlexContainerProps {
  children: React.ReactNode;
  className?: string;
  dir?: 'row' | 'column' | 'row-reverse' | 'column-reverse'; // flexDirection
  justify?:
    | 'start'
    | 'center'
    | 'end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'; // justifyContent
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline'; // alignItems
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse'; // flexWrap
  alignContent?:
    | 'start'
    | 'center'
    | 'end'
    | 'stretch'
    | 'space-between'
    | 'space-around';
  grow?: number;
  shrink?: number;
  basis?: string;
  gap?: string;
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  bgColor?: string;
}

export const FlexContainer: React.FC<FlexContainerProps> = ({
  children,
  className,
  dir = 'row',
  justify = 'start',
  align = 'stretch',
  wrap = 'nowrap',
  alignContent = 'start',
  grow = 0,
  shrink = 1,
  basis = 'auto',
  gap = '0',
  width = 'auto',
  height = 'auto',
  margin = '0',
  padding = '0',
  bgColor = 'transparent',
}) => {
  return (
    <div
      className={classNames(cls.FlexContainer, {}, [className])}
      style={{
        display: 'flex',
        flexDirection: dir,
        justifyContent: justify,
        alignItems: align,
        flexWrap: wrap,
        alignContent: alignContent,
        flexGrow: grow,
        flexShrink: shrink,
        flexBasis: basis,
        gap: gap,
        width: width,
        height: height,
        margin: margin,
        padding: padding,
        backgroundColor: bgColor,
      }}
    >
      {children}
    </div>
  );
};
