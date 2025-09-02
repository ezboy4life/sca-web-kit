import styles from './newsletter-modal.module.scss';

import { montserrat } from '../../../fonts';

import newsletterErrorIcon from '@prosistemas/sca-web-kit/assets/icons/not-found.svg';
import newsletterSuccessIcon from '@prosistemas/sca-web-kit/assets/icons/newsletter-success.svg';

import Button from '../../ui/button/button';
import { XIcon } from '@phosphor-icons/react/dist/ssr';

export default function NewsletterModal(
  {
    onCloseButtonClick,
    type,
  }: {
    onCloseButtonClick?: () => void,
    type: 'success' | 'already-registered' | 'error',
  }
) {
  return (
    <div className={styles['newsletter-modal']}>
      <Button
        className={styles['close-button']}
        icon={XIcon}
        iconWeight="bold"
        round
        onClick={onCloseButtonClick}
      />

      <img
        src={type === "error" ? newsletterErrorIcon : newsletterSuccessIcon}
        alt="TODO"
        width={150}
        height={150}
        className={styles['icon']}
      />

      {type === 'success' ? (
        <>
          <p className={`${styles['title']} ${montserrat.className}`}>Cadastro realizado com sucesso!</p>
          <p className={styles['subtitle']}>Agora você receberá em primeira mão, os melhores conteúdos sobre gestão de pessoas, despesas e benefícios.</p>
        </>
      ) : type === 'already-registered' ? (
        <>
          <p className={`${styles['title']} ${montserrat.className}`}>Seu e-mail já está cadastrado!</p>
          <p className={styles['subtitle']}>Esse endereço de e-mail já consta no nosso banco de dados. </p>
        </>
      ) : (
        <>
          <p className={`${styles['title']} ${montserrat.className}`}>Um erro ocorreu ao registrar seu e-mail!</p>
          <p className={styles['subtitle']}>Verifique se o seu e-mail foi digitado corretamente e tente novamente por gentileza.</p>
        </>
      )}

    </div>
  )
}
