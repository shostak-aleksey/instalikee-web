import { memo, ReactNode, forwardRef } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Page.module.scss';
import { Colors } from '@/shared/const/colors';

interface PageProps {
  className?: string;
  children?: ReactNode;
  background?: Colors;
  padding?: string;
  ref?: React.Ref<HTMLDivElement>;
}

export const Page = memo(
  forwardRef<HTMLDivElement, PageProps>((props, ref) => {
    const {
      className,
      children,
      background = Colors.Gradient1,
      padding,
    } = props;

    const style = {
      background,
      padding,
    };

    return (
      <div
        style={style}
        ref={ref}
        className={classNames(cls.Page, {}, [className])}
      >
        {children}
      </div>
    );
  }),
);
