import styles from './button.module.scss';
import { CSSProperties, MouseEventHandler } from 'react';

interface ButtonProps {
  type?: "button" | "submit" | "reset",
  style?: CSSProperties,
  children: React.ReactNode,
  disabled?: boolean,
  className?: string,
  ariaLabel?: string,
  onClick?: () => MouseEventHandler<HTMLButtonElement>,
}

export default function Button({
  type,
  style,
  children,
  disabled,
  className,
  ariaLabel,
  onClick,
}: ButtonProps) {

  return (
    <button
      onClick={onClick}
      type={type}
      style={style}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`${styles['button']} ${disabled && styles['disabled']} ${className}`}
    >
      {children}
    </button>
  );
}
