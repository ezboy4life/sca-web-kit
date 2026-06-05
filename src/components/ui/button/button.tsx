import styles from './button.module.scss';
import { inter } from '../../../fonts';
import { CSSProperties, MouseEventHandler } from 'react';
import clsx from 'clsx';

interface ButtonProps {
  type?: "button" | "submit" | "reset",
  style?: CSSProperties,
  children: React.ReactNode,
  disabled?: boolean,
  className?: string,
  ariaLabel?: string,
  onClick?: MouseEventHandler<HTMLButtonElement>,
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
      className={clsx(
        className,
        inter.className,
        styles['button'],
        { [styles['disabled']]: disabled },
      )}
    >
      {children}
    </button>
  );
}

