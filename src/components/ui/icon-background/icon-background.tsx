import styles from './icon-with-background.module.scss';

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
      className={`
          ${styles['background']} 
          ${className} 
          ${round ? styles['round'] : ''}
          ${dark ? styles['dark'] : ''}
        `}
    >
      {children}
    </div>
  )
}
