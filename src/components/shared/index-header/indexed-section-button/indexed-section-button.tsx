import styles from './indexed-section-button.module.scss';

export default function IndexedSectionButton(
  {
    activeSectionId,
    indexedSection,
    onClick,
  }: {
    activeSectionId: string,
    indexedSection: IndexedSection,
    onClick: () => void,
  }
) {
  return (
    <button
      className={styles['button-wrapper']}
      onClick={onClick}
    >
      <a
        href={`#${indexedSection.id}`}
        className={`
        ${styles['section-button']} 
        ${activeSectionId == indexedSection.id ? styles['active'] : ''}
      `}
      >
        <span>{indexedSection.label}</span>
        <div className={styles['highlight']} />
      </a>
    </button>
  )
}
