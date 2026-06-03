import styles from './tag.module.scss';
import { montserrat } from '../../../fonts';

import Link from 'next/link';
import { CSSProperties, HTMLAttributeAnchorTarget } from 'react';

interface TagProps {
  children: React.ReactNode,
  className?: string,
  style?: CSSProperties,
  dark?: boolean,
  href?: string,
  target?: HTMLAttributeAnchorTarget,
}

export default function Tag({
  children,
  className,
  style,
  dark,
  href,
  target,
}: TagProps) {

  if (href)
    return (
      <Link
        href={href}
        target={target}
        style={style}
        className={`
          ${styles['tag']}
          ${styles['link']}
          ${montserrat.className}
          ${className}
          ${dark && styles['dark']}
        `}
      >
        {children}
      </Link>
    )

  return (
    <div
      style={style}
      className={`
        ${styles['tag']}
        ${montserrat.className}
        ${className}
        ${dark && styles['dark']}
      `}
    >
      {children}
    </div>
  )
}
