import styles from './card.module.scss';
import { ArrowUpRight, IconProps } from '@phosphor-icons/react';
import { IconWithBackground } from '@/components';

export default function Card({
  label,
  icon: Icon,
  iconSize = 22,
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
        <ArrowUpRight weight='bold' size={14} className={styles['card-icon']} />
      </div>
    </div>
  );
}
