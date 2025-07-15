import styles from './decal.module.scss';

export default function Decal({
  className,
  opacity,
  width,
  color,
}: {
  className?: string
  opacity?: string
  width?: string
  color?: string,
}) {
  return (
    <div
      className={`${styles['decal']} ${className}`}
      style={{
        opacity: opacity ? opacity : '1',
        width: width ? width : '50px',
        background: color ? color : '',
      }}
    />
  )
}
