import clsx from 'clsx';
import styles from './link-button.module.scss';

import Link from 'next/link';

import { CSSProperties, HTMLAttributeAnchorTarget, MouseEventHandler } from 'react';

interface LinkButtonProps {
  href: string,
  style?: CSSProperties,
  target?: HTMLAttributeAnchorTarget,
  children: React.ReactNode,
  disabled?: boolean,
  className?: string,
  ariaLabel?: string,
  onClick?: MouseEventHandler<HTMLAnchorElement>,
}

export default function LinkButton({
  href,
  style,
  target,
  children,
  disabled,
  className,
  ariaLabel,
  onClick,
}: LinkButtonProps) {

  return (
    <Link
      href={href}
      style={style}
      target={target}
      aria-label={ariaLabel}
      onClick={onClick}
      className={clsx(
        className,
        styles['link-button'],
        { [styles['disabled']]: disabled },
      )}
    >
      {children}
    </Link>
  );
}

