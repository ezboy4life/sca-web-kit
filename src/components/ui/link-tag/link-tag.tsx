import styles from './link-tag.module.scss';

import { clsx } from 'clsx';
import { montserrat } from '../../../fonts';

import Link from 'next/link';
import { Url } from 'next/dist/shared/lib/router/router';
import { CSSProperties, HTMLAttributeAnchorTarget } from 'react';

interface TagProps {
  children: React.ReactNode,
  className?: string,
  style?: CSSProperties,
  dark?: boolean,
  href: Url,
  target?: HTMLAttributeAnchorTarget,
}

export default function LinkTag({
  children,
  className,
  style,
  dark,
  href,
  target,
}: TagProps) {
  return (
    <Link
      href={href}
      target={target}
      style={style}
      className={clsx(
        className,
        styles['link-tag'],
        montserrat.className,
        { [styles['dark']]: dark },
      )}
    >
      {children}
    </Link>
  )
}

