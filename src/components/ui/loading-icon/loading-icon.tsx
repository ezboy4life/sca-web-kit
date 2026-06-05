'use client';

import { clsx } from 'clsx';
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
      color={color}
      size={size}
      style={{
        minWidth: `${size}px`,
        minHeight: `${size}px`,
      }}
      className={clsx(
        styles['loading-icon'],
        className,
        { [styles['animated']]: spinning }
      )}
    />
  )
}
