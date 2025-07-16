import styles from './resources-card.module.scss';

import IconWithBackground from '../../../../../ui/icon-with-background/icon-with-background';

import { IconProps } from '@phosphor-icons/react';


export default function ResourcesCard({
  title,
  subtitle,
  icon: Icon,
}: {
  title: string;
  subtitle: string;
  icon: React.ComponentType<IconProps>;
}) {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <IconWithBackground icon={Icon} iconClassName={styles['icon']} iconSize={22} />
        <p>{title}</p>
      </div>
      <div className={styles.bottom}>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}
