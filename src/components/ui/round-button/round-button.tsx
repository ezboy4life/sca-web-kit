import styles from './round-button.module.scss';
import { CSSProperties } from 'react';

interface RoundButtonProps {
  type?: "button" | "submit" | "reset",
  style?: CSSProperties,
  children: React.ReactNode,
  disabled?: boolean,
  className?: string,
  ariaLabel?: string,
  onClick?: () => void,
}

export default function Button({
  type,
  style,
  children,
  disabled,
  className,
  ariaLabel,
  onClick,
}: RoundButtonProps) {

  return (
    <button
      onClick={onClick}
      type={type}
      style={style}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`${styles['round-button']} ${disabled && styles['disabled']} ${className}`}
    >
      {children}
    </button>
  );
}
