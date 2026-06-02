import styles from './subtitle.module.scss';
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
      className={`
        ${styles['subtitle']}
        ${dark && styles['dark']}
        ${className}
      `}
    >
      {children}
    </p>
  )
}
