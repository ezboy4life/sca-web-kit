import styles from './subtitle.module.scss';

export default function Subtitle(
  {
    text,
    className,
    dark = false,
  }: {
    text: string,
    className?: string,
    dark?: boolean,
  }
) {
  return (
    <p
      className={`${styles['subtitle']} ${className}`}
      style={{
        color: dark ? 'var(--neutral100)' : 'var(--neutral600)',
      }}
    >
      {text}
    </p>
  )
}
