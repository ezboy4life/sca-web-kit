import styles from './tag-label.module.scss';
import { montserrat } from '../../../fonts';

import Link from 'next/link';
import { IconProps, IconWeight } from '@phosphor-icons/react';
import { CSSProperties, HTMLAttributeAnchorTarget } from 'react';

interface TagLabelProps {
  label: string,
  className?: string,
  style?: CSSProperties,
  dark?: boolean,

  href?: string,
  target?: HTMLAttributeAnchorTarget,

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
  style,
  dark,

  href,
  target,

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
  const content = (
    <>
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
    </>
  )

  if (href)
    return (
      <Link
        href={href}
        target={target}
        style={style}
        className={`
          ${styles['tag-label']}
          ${styles['link']}
          ${montserrat.className}
          ${className}
          ${dark && styles['dark']}
        `}
      >
        {content}
      </Link>
    )

  return (
    <div
      className={`
        ${styles['tag-label']}
        ${montserrat.className}
        ${className}
        ${dark && styles['dark']}
      `}
      style={style}
    >
      {content}
    </div>
  )
}
