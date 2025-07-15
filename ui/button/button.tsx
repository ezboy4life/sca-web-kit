import styles from './default-button.module.scss';
import { inter } from '@/fonts';

import { IconProps, IconWeight } from '@phosphor-icons/react';

export default function Button({
  label,
  iconColor = 'white',
  iconClassName,
  className = '',
  leadingIconClassName = '',
  leadingIconSize = 16,
  leadingIconWeight = 'regular',
  ariaLabel,
  type,
  round = false,
  icon: Icon,
  leadingIcon: LeadingIcon,
  onClick,
}: {
  label?: string,
  icon?: React.ComponentType<IconProps>,
  iconColor?: string,
  iconClassName?: string,
  className?: string,
  leadingIconClassName?: string,
  leadingIconSize?: number,
  leadingIconWeight?: IconWeight,
  type?: "button" | "submit" | "reset",
  round?: boolean,
  leadingIcon?: React.ComponentType<IconProps>,
  ariaLabel?: string,
  onClick?: () => void,
}) {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      type={type}
      className={`
        ${styles['button']} 
        ${className}
      `}
      style={{
        borderRadius: round ? '50%' : '8px',
      }}
    >
      {LeadingIcon && <LeadingIcon className={leadingIconClassName} size={leadingIconSize} weight={leadingIconWeight} />}

      {Icon ? <Icon className={`${iconClassName} ${styles['icon']}`} size={20} color={iconColor} weight='bold' /> : <p className={inter.className}>{label}</p>}


    </button>
  );
}
