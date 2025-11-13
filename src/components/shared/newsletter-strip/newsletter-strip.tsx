import styles from './newsletter-strip.module.scss';

import scaGradientLogo from '@prosistemas/sca-web-kit/assets/logos/sca/sca-s-gradient.svg';
import newsletterIcon from '@prosistemas/sca-web-kit/assets/icons/newsletter.svg';

import InfoHeader from '../info-header/info-header';
import Button from '../../ui/button/button';
import Image from 'next/image';

export default function NewsletterStrip(
  {
    buttonLabel,
    onButtonClick,
    onFormSubmit,

    buttonLoading = false,
    buttonDisabled = false,

    emailValue,
    onEmailChange,

    nameValue,
    onNameChange,
  }: {
    buttonLabel?: string,
    onButtonClick?: () => void;
    onFormSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;

    buttonLoading?: boolean;
    buttonDisabled?: boolean;

    emailValue?: string,
    onEmailChange?: React.ChangeEventHandler<HTMLInputElement>,

    nameValue?: string,
    onNameChange?: React.ChangeEventHandler<HTMLInputElement>,
  }
) {
  return (
    <div className={styles['newsletter-strip']}>
      <Image
        className={styles['icon']}
        src={newsletterIcon}
        width={46}
        height={46}
        alt=''
      />

      <InfoHeader
        className={styles['info-header']}
        titleClassName={styles['title']}
        subtitleClassName={styles['subtitle']}
        title='Os melhores conteúdos de tecnologia e fitness'
        subtitle='Assine e receba novidades toda semana em sua caixa de entrada.'
        dark
      />

      <form className={styles['input-wrapper']} onSubmit={onFormSubmit} >
        <input
          className={`${styles['name']} `}
          id="name"
          type="text"
          name="text"
          placeholder="Insira seu nome"
          value={nameValue}
          onChange={onNameChange}
          required
        />

        <input
          className={`${styles['email']}`}
          id="email"
          type="email"
          name="email"
          placeholder="Insira seu e-mail"
          value={emailValue}
          onChange={onEmailChange}
          required
        />

        <Button
          className={styles['button']}
          label={buttonLabel ?? "Assinar"}
          onClick={onButtonClick}
          loading={buttonLoading}
          disabled={buttonDisabled}
          type='submit'
        />

        <div className={styles['blue-hue']} />
      </form>

      <div className={styles['background-logo']}>
        <Image
          className={styles['logo']}
          src={scaGradientLogo}
          width={335.5}
          height={439.05}
          alt=''
        />

        <div className={styles['hue']} />
      </div>
    </div>
  )
}
