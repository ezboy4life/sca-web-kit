import styles from './tag-label.module.scss';
import { montserrat } from '../../../fonts';
import { IconProps, IconWeight } from '@phosphor-icons/react';

interface TagLabelProps {
  label: string,
  className?: string,
  dark?: boolean,

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
}

export default function TagLabel({
  label,
  className,
  dark,

  leadingIcon: LeadingIcon,
  leadingIconSize,
  leadingIconColor,
  leadingIconWeight,
  leadingIconClassName,

  trailingIcon: TrailingIcon,
  trailingIconSize,
  trailingIconColor,
  trailingIconWeight,
  trailingIconClassName,
}: TagLabelProps) {
  const darkStyle = !dark ? {} : {
    border: '1px solid var(--dark900)',
    background: 'var(--dark800)',
    color: 'white',
  }

  return (
    <div
      style={darkStyle}
      className={`${styles['span']} ${montserrat.className} ${className}`}
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

      {label}

      {TrailingIcon && (
        // Ícone da direita
        <TrailingIcon
          size={trailingIconSize}
          color={trailingIconColor}
          weight={trailingIconWeight}
          className={trailingIconClassName}
        />
      )}
    </div>
  )
}
