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
  onClick?: () => MouseEventHandler<HTMLButtonElement>,
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
      className={`${styles['link-button']} ${disabled && styles['disabled']} ${className}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
