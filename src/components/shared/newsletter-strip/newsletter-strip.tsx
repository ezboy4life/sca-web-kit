import styles from './newsletter-strip.module.scss';
import { inter } from '../../../fonts';

import scaGradientLogo from 'sca-web-kit/assets/logos/sca/sca-s-gradient.svg';

import InfoHeader from '../info-header/info-header';
import Button from '../../ui/button/button';

import { EnvelopeIcon } from '@phosphor-icons/react/dist/ssr';

export default function NewsletterStrip(
  {
    buttonLabel,
    onButtonClick,
    onFormSubmit,
  }: {
    buttonLabel?: string,
    onButtonClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onFormSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  }
) {
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

      <form className={styles['right']} onSubmit={onFormSubmit}>
        <input
          className={`${styles['email']} ${inter.className}`}
          id="email"
          type="email"
          name="email"
          placeholder="Insira seu e-mail"
          required
        />

        <Button
          className={styles['button']}
          onClick={onButtonClick}
          label={buttonLabel ?? "Assinar"}
          type='submit'
        />

        <div className={styles['blue-hue']} />

        <img
          src={scaGradientLogo}
          alt='Logo do SCA'
          width={243}
          height={318}
          className={styles['background-logo']}
        />
      </form>
    </div>
  )
}
