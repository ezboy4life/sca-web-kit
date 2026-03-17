'use client';

import styles from './newsletter-strip.module.scss';
import scaGradientLogo from '@prosistemas/sca-web-kit/assets/logos/sca/s-blur.svg';
import newsletterIcon from '@prosistemas/sca-web-kit/assets/icons/newsletter.svg';

import InfoHeader from '../info-header/info-header'; import Button from '../../ui/button/button'; import Image from 'next/image';
import Input from '../../ui/input/input';

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
    onFormSubmit?: React.SubmitEventHandler<HTMLFormElement>;

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

      <form className={styles['input-fields']} onSubmit={onFormSubmit} >
        <Input
          className={styles['input-wrapper']}
          inputClassName={styles['input']}
          id='name'
          placeholder='Insira seu nome'
          onChange={onNameChange}
          required
        />

        <Input
          className={styles['input-wrapper']}
          inputClassName={styles['input']}
          id='email'
          placeholder='Insira seu e-mail'
          onChange={onEmailChange}
          required
        />

        <Button
          className={styles['button']}
          label={buttonLabel ?? "Assinar"}
          loading={buttonLoading}
          disabled={buttonDisabled}
          onClick={onButtonClick}
          type='submit'
        />
      </form>

      <div className={styles['background-logo']}>
        <Image
          className={styles['logo']}
          src={scaGradientLogo}
          fill
          alt=''
        />
      </div>
    </div>
  )
}

