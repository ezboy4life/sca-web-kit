import styles from './pulse-effect.module.scss';

export default function PulseEffect() {
  return (
    <div className={styles["pulse-effect"]}>
      <div className={styles["pulse-ring"]}></div>
      <div className={styles["pulse-ring"]}></div>
      <div className={styles["pulse-ring"]}></div>
      <div className={styles["pulse-ring"]}></div>
      <div className={styles["pulse-ring"]}></div>
      <div className={styles["pulse-ring"]}></div>
    </div>
  )
}
