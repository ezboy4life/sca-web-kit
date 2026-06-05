import styles from './icon-background.module.scss';
import { clsx } from 'clsx';

export default function IconBackground({
  children,
  className,
  round,
  dark,
}: {
  children: React.ReactNode,
  className?: string,
  round?: boolean,
  dark?: boolean,
}) {
  return (
    <div
      className={clsx(
        className,
        styles['background'],
        {
          [styles['dark']]: dark,
          [styles['round']]: round,
        }
      )}
    >
      {children}
    </div>
  )
}
