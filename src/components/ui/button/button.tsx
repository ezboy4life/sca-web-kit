import styles from './button.module.scss';
import { inter } from '../../../fonts';
import { IconProps, IconWeight } from '@phosphor-icons/react';

interface ButtonProps {
  label?: string,
  className?: string,

  icon?: React.ComponentType<IconProps>,
  iconSize?: number,
  iconColor?: string,
  iconWeight?: IconWeight,
  iconClassName?: string,

  leadingIcon?: React.ComponentType<IconProps>,
  leadingIconSize?: number,
  leadingIconColor?: string,
  leadingIconWeight?: IconWeight,
  leadingIconClassName?: string,

  trailingIcon?: React.ComponentType<IconProps>,
  trailingIconSize?: number,
  trailingIconColor?: string,
  trailingIconWeight?: IconWeight,
  trailingIconClassName?: string,

  type?: "button" | "submit" | "reset",
  round?: boolean,
  onClick?: () => void,
  ariaLabel?: string,
}

export default function Button({
  label,
  className,

  // Ícone central
  icon: Icon,
  iconSize,
  iconColor,
  iconWeight,
  iconClassName,

  // Ícone da esquerda
  leadingIcon: LeadingIcon,
  leadingIconSize,
  leadingIconColor,
  leadingIconWeight,
  leadingIconClassName,

  // Ícone da direita 
  trailingIcon: TrailingIcon,
  trailingIconSize,
  trailingIconColor,
  trailingIconWeight,
  trailingIconClassName,

  // Etc
  type,
  round = false,
  onClick,
  ariaLabel,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      type={type}
      className={`${styles['button']} ${className}`}
      style={{
        borderRadius: round ? '50%' : '8px',
        padding: round ? '8px' : '16px 42px',
      }}
    >
      {LeadingIcon && (
        // Ícone da esquerda
        <LeadingIcon
          size={leadingIconSize}
          color={leadingIconColor}
          weight={leadingIconWeight}
          className={leadingIconClassName}
        />
      )}

      {Icon ? (
        // Ícone central ou label
        <Icon
          size={iconSize}
          color={iconColor}
          weight={iconWeight}
          className={iconClassName}
        />
      ) : (
        <p className={inter.className}>{label}</p>
      )}

      {TrailingIcon && (
        // Ícone da direita
        <TrailingIcon
          size={trailingIconSize}
          color={trailingIconColor}
          weight={trailingIconWeight}
          className={trailingIconClassName}
        />
      )}
    </button>
  );
}
