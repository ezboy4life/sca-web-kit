import styles from './icon-with-background.module.scss';

import Image from 'next/image';
import { IconProps, IconWeight } from '@phosphor-icons/react';

export default function IconWithBackground({
  icon: Icon,
  className = '',
  iconClassName = '',
  iconSize,
  iconColor,
  alt = '',
  weight = 'regular',
  round = false,
  dark = false,
  size = 32,
}: {
  icon: React.ComponentType<IconProps> | string,
  className?: string,
  iconClassName?: string,
  iconSize?: number,
  iconColor?: string,
  alt?: string,
  weight?: IconWeight,
  round?: boolean,
  dark?: boolean,
  size?: number,
}) {
  if (typeof Icon === 'string') {
    return (
      <div
        className={`
          ${styles['background']} 
          ${className} 
          ${round ? styles['round'] : ''}
          ${dark ? styles['dark'] : ''}
        `}
      >
        <Image
          src={Icon}
          className={iconClassName}
          width={iconSize}
          height={iconSize}
          color={iconColor}
          alt={alt}
        />
      </div>
    )
  }

  return (
    <div
      className={`
        ${styles['background']} 
        ${className} 
        ${round ? styles['round'] : ''}
        ${dark ? styles['dark'] : ''}
      `}

      style={{
        width: size ? `${size}px` : '32px',
        height: size ? `${size}px` : '32px',
      }}
    >
      <Icon className={iconClassName} size={iconSize} weight={weight} color={iconColor} />
    </div>
  );
}
