import styles from './three-dots.module.scss';

export default function ThreeDots({ className }: { className?: string }) {
	return (
		<div className={`${styles['dots']} ${className}`}>
			<div className={styles['dot1']} />
			<div className={styles['dot2']} />
			<div className={styles['dot3']} />
		</div>
	)
}


