'use client';

import styles from './index-header.module.scss';
import { useEffect, useState } from 'react';
import IndexedSectionButton from './indexed-section-button/indexed-section-button';

type IndexHeaderProps = {
  sections: IndexedSection[];
}

export default function IndexHeader({ sections }: IndexHeaderProps) {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      let closestSectionId = '';
      let minDistance = Number.POSITIVE_INFINITY;

      sections.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top;
          if (top >= 0 && top < minDistance) {
            minDistance = top;
            closestSectionId = id;
          }
        }
      });

      if (closestSectionId) setActiveSection(closestSectionId);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections]);

  return (
    <header className={styles['index-header']}>
      {sections.map(({ id, label }) => (
        <IndexedSectionButton
          key={id}
          activeSectionId={activeSection}
          onClick={() => setActiveSection(id)}
          indexedSection={{
            id: id,
            label: label,
          }}
        />
      ))}
    </header>
  )
}

