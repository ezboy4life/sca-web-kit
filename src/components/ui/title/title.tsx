import styles from './title.module.scss';

import { clsx } from 'clsx';
import { montserrat } from '../../../fonts';

import { CSSProperties } from 'react';

export default function Title(
  {
    h1,
    id,
    style,
    className,
    dark,
    children,
  }: {
    children: React.ReactNode,
    style?: CSSProperties,
    className?: string,
    fontSize?: string,
    fontWeight?: string,
    dark?: boolean,
    h1?: boolean,
    id?: string,
  }
) {
  const Tag = h1 ? 'h1' : 'h2';

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

