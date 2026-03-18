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
      className={`
        ${styles['subtitle']}
        ${dark && styles['dark']}
        ${className}
      `}
    >
      {text}
    </p>
  )
}
