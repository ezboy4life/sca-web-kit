import styles from './nav-accordion-link.module.scss';

export default function(
  {
    title,
    href,
  }: {
    title: string,
    href: string,
  }
) {
  return (
    <a href={href}>
      <div className={styles['nav-accordion-link']}>
        <p>{title}</p>
      </div>
    </a>
  )
}
