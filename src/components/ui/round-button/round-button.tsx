import clsx from 'clsx';
import styles from './round-button.module.scss';
import { CSSProperties, MouseEventHandler } from 'react';

interface RoundButtonProps {
  type?: "button" | "submit" | "reset",
  style?: CSSProperties,
  children: React.ReactNode,
  disabled?: boolean,
  className?: string,
  ariaLabel?: string,
  onClick?: MouseEventHandler<HTMLButtonElement>,
}

export default function RoundButton({
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
      className={clsx(
        className,
        styles['round-button'],
        { [styles['disabled']]: disabled }
      )}
    >
      {children}
    </button>
  );
}

