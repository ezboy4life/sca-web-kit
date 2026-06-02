import styles from './link-button.module.scss';

import Link from 'next/link';

import { CSSProperties, MouseEventHandler } from 'react';

interface LinkButtonProps {
  href: string,
  style?: CSSProperties,
  children: React.ReactNode,
  disabled?: boolean,
  className?: string,
  ariaLabel?: string,
  onClick?: () => MouseEventHandler<HTMLButtonElement>,
}

export default function LinkButton({
  href,
  style,
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
      aria-label={ariaLabel}
      className={`${styles['link-button']} ${disabled && styles['disabled']} ${className}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
