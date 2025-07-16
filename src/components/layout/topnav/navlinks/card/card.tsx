import styles from './card.module.scss';

import IconWithBackground from '../../../../ui/icon-with-background/icon-with-background';

import { ArrowUpRightIcon, IconProps } from '@phosphor-icons/react';

export default function Card({
  label,
  iconSize = 22,
  icon: Icon,
}: {
  label: string;
  icon: React.ComponentType<IconProps> | string,
  iconSize?: number,
}) {
  return (
    <div className={styles.card}>
      <IconWithBackground icon={Icon} iconClassName={styles['icon']} iconSize={iconSize} />
      <div className={styles['label-icon-wrapper']}>
        <p>{label}</p>
        <ArrowUpRightIcon weight='bold' size={14} className={styles['card-icon']} />
      </div>
    </div>
  );
}
