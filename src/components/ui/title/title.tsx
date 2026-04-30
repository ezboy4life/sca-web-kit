import styles from './title.module.scss';
import { montserrat } from '../../../fonts';
import { CSSProperties } from 'react';

export default function Title(
  {
    text,
    style,
    className,
    dark = false,
    h1 = false,
    id,
  }: {
    text: string,
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
      className={`
        ${styles['title']} 
        ${montserrat.className}
        ${dark && styles['dark']}
        ${className} 
      `}
    >
      {text}
    </Tag>
  )
}

