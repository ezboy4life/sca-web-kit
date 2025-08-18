'use client';

import styles from './loading-icon.module.scss';

import { CircleNotchIcon } from '@phosphor-icons/react';

export default function LoadingIcon(
  {
    className,
    color = 'white',
    size = 64,
    spinning = true,
  }: {
    className?: string,
    color?: string,
    size?: number
    spinning?: boolean,
  }) {
  return (
    <CircleNotchIcon
      className={`${styles['loading-icon']} ${className} ${spinning && styles['animated']}`}
      color={color}
      size={size}
      style={{
        minWidth: `${size}px`,
        minHeight: `${size}px`,
      }}
    />
  )
}
