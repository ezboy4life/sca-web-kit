import styles from './title.module.scss';

import { clsx } from 'clsx';
import { montserrat } from '../../../fonts';

import { CSSProperties } from 'react';

export default function Title(
  {
    children,
    style,
    className,
    heading = 'h2',
    id,
    dark,
  }: {
    children: React.ReactNode,
    style?: CSSProperties,
    className?: string,
    fontSize?: string,
    fontWeight?: string,
    dark?: boolean,
    heading?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
    id?: string,
  }
) {
  const Tag = heading;

  return (
    <Tag
      id={id}
      style={style}
      className={clsx(
        className,
        styles['title'],
        montserrat.className,
        { [styles['dark']]: dark }
      )}
    >
      {children}
    </Tag>
  )
}

