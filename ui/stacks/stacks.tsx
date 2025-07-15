import styles from './stacks.module.scss';

export default function Stacks() {
  return (
    <div className={styles['stack']}>
      <div className={styles['inner-stack']} />
      <div className={styles['mid-stack']} />
      <div className={styles['outer-stack']} />
    </div>
  )
}
