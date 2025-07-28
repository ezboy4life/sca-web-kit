import styles from './title.module.scss';

import { montserrat } from '../../../fonts';

export default function Title(
  {
    text,
    className,
    fontSize,
    fontWeight,
    dark = false,
    id,
  }: {
    text: string,
    className?: string,
    fontSize?: string,
    fontWeight?: string,
    dark?: boolean,
    id?: string,
  }
) {
  return (
    <p
      id={id}
      className={`${styles['title']} ${className} ${montserrat.className}`}
      style={{
        fontSize: fontSize,
        fontWeight: fontWeight,
        color: dark ? `var(--neutral100)` : `var(--neutral700)`,
      }}
    >
      {text}
    </p>
  )
}
