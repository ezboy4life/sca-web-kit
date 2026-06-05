import styles from './subtitle.module.scss';
import { clsx } from 'clsx';
import { CSSProperties } from 'react';

export default function Subtitle(
  {
    children,
    style,
    className,
    dark,
  }: {
    children: React.ReactNode,
    style?: CSSProperties,
    className?: string,
    dark?: boolean,
  }
) {
  return (
    <p
      style={style}
      className={clsx(
        className,
        styles['subtitle'],
        { [styles['dark']]: dark }
      )}
    >
      {children}
    </p>
  )
}
