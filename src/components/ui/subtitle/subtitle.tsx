import styles from './subtitle.module.scss';
import { CSSProperties } from 'react';

export default function Subtitle(
  {
    text,
    style,
    className,
    dark = false,
  }: {
    text: string,
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
      {text}
    </p>
  )
}
