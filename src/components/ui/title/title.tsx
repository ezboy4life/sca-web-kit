import styles from './title.module.scss';

import { montserrat } from '../../../fonts';

export default function Title(
  {
    text,
    className,
    fontSize,
    fontWeight,
    dark = false,
    h1 = false,
    id,
  }: {
    text: string,
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
      className={`${styles['title']} ${className} ${montserrat.className}`}
      style={{
        fontSize: fontSize,
        fontWeight: fontWeight,
        color: dark ? `var(--neutral100)` : `var(--neutral700)`,
      }}
    >
      {text}
    </Tag>
  )
}
