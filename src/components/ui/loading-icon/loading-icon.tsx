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
      className={`${styles['loading-icon']} ${className}`}
      color={color}
      size={size}
      style={{
        animation: spinning ? 'spin 1s linear infinite' : '',
        minWidth: `${size}px`,
        minHeight: `${size}px`,
      }}
    />
  )
}
