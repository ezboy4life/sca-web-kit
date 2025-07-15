import Image from 'next/image';
import styles from './support-sticky-button.module.scss';
import { CaretUpIcon } from '@phosphor-icons/react/dist/ssr';

export default function SupportStickyButton() {
  return (
    <div className={styles['support-sticky-button']}>
      <div className={styles['left']}>
        <div className={styles['person-wrapper']}>
          <Image
            src='/people/person_04.webp'
            width={64}
            height={64}
            alt='Imagem de uma pessoa'
            className={styles['person']}
          />
        </div>

        <p className={styles['text']}>Posso ajudar?</p>
      </div>

      <div className={styles['right']}>
        <CaretUpIcon size={16} weight='bold' color='var(--neutral100)' />
      </div>
    </div>
  )
}
