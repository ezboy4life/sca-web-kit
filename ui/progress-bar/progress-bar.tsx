import styles from './progress-bar.module.scss';

export default function ProgressBar({
  className,
  progressWidth,
  progressHeight,
}: {
  className?: string,
  progressWidth?: string,
  progressHeight?: string
}) {
  const widthStyle = {
    width: progressWidth ? progressWidth : "0%",
    height: progressHeight ? progressHeight : "8px",
  }

  return (
    <div className={`${styles['progress-bar']} ${className}`}>
      <div className={`${styles['progress']}`} style={widthStyle} />
    </div>
  )
}
