import styles from './newsletter-strip.module.scss';
import { inter } from '../../../fonts';

import InfoHeader from '../info-header/info-header';
import Button from '../../ui/button/button';

import Image from 'next/image';
import { EnvelopeIcon } from '@phosphor-icons/react/dist/ssr';

export default function NewsletterStrip() {
  return (
    <div className={styles['newsletter-strip']}>
      <div className={styles['left']}>
        <EnvelopeIcon
          color='white'
          weight='light'
          size={48}
          className={styles['icon']}
        />

        <InfoHeader
          title='Os melhores conteúdos de tecnologia e fitness'
          subtitle='Assine e receba novidades toda semana em sua caixa de entrada.'
          className={styles['feature-card']}
          titleClassName={styles['feature-card-title']}
          dark
        />
      </div>

      <div className={styles['right']}>
        <input
          className={`${styles['email']} ${inter.className}`}
          id="email"
          type="email"
          name="email"
          placeholder="Insira seu e-mail"
          required
        />

        <Button label='Assinar' className={styles['button']} />

        <div className={styles['blue-hue']} />

        <Image
          src={'/logos/sca/sca-s-gradient.svg'}
          alt='Logo do SCA'
          width={243}
          height={318}
          className={styles['background-logo']}
        />
      </div>
    </div>
  )
}
