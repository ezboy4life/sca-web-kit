import styles from './button.module.scss';
import { inter } from '../../../fonts';

import { IconProps, IconWeight } from '@phosphor-icons/react';
import { PulseLoader } from 'react-spinners';

interface ButtonProps {
  label?: string,
  className?: string,

  loading?: boolean,
  loadingSize?: number,
  loadingColor?: string,
  loadingClassName?: string,

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
  disabled?: boolean,
}

export default function Button({
  label,
  className,

  // Carregando (overwrite no ícone/label central caso true)
  loading = false,
  loadingSize = 5,
  loadingColor = 'white',
  loadingClassName,

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
  disabled = false,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`${styles['button']} ${className}`}
      style={{
        borderRadius: round ? '50%' : '8px',
        padding: round ? '8px' : '16px 42px',
        cursor: disabled ? 'not-allowed' : 'pointer',
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

      {loading ?
        <PulseLoader
          size={loadingSize}
          color={loadingColor}
          className={loadingClassName}
        />
        : Icon ? (
          // Ícone central ou label
          <Icon
            size={iconSize}
            color={iconColor}
            weight={iconWeight}
            className={iconClassName}
          />
        ) : (
          <p className={inter.className}>{label}</p>
        )
      }

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
