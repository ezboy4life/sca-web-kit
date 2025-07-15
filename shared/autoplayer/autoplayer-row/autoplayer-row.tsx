import { IconProps } from '@phosphor-icons/react';
import styles from './autoplayer-row.module.scss';

export default function AutoplayerRow(
  {
    icon: Icon,
    title,
    subtitle,
    index,
    activeIndex,
  }: {
    icon: React.ComponentType<IconProps>,
    title: string,
    subtitle: string,
    index: number,
    activeIndex: number,
  }) {
  return (
    <div className={styles['autoplayer-row']}>
      <div
        className={`
          ${styles['autoplayer-title']} 
          ${activeIndex == index ? styles['autoplayer-title-on'] : ''}
        `}
      >
        <Icon size={32} weight='light' />
        <p>{title}</p>
      </div>

      <p
        className={`
          ${styles['autoplayer-subtitle']} 
          ${activeIndex == index ? styles['autoplayer-subtitle-on'] : ''}
        `}>
        {subtitle}
      </p>
    </div>
  )
}
