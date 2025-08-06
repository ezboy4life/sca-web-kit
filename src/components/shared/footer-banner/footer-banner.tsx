import styles from './footer-banner.module.scss';
import { montserrat } from '../../../fonts';

import Image from 'next/image';
import InfoHeader from '../info-header/info-header';

import { BrowsersIcon, CreditCardIcon, TimerIcon } from '@phosphor-icons/react/dist/ssr';

export default function FooterBanner() {
  return (
    <div className={styles['footer-banner']}>
      <InfoHeader
        tagLabel='ILIMITADO'
        title={'Não importa quantos alunos e alunas você vai ter, o preço não muda.'}
        buttonLabel='Conheça agora!'
        buttonHref='https://app.sistemasca.com/cadastro'
        buttonTarget='_blank'
        className={styles['footer-banner-info-header']}
        dark
      />

      <div className={styles['image-person-wrapper']}>
        <Image
          src='/gym/stock-gym-blurred.webp'
          alt='Foto borrada de uma academia'
          className={styles['image']}
          fill
        />

        <Image
          src={'/people/person_03.webp'}
          alt='Foto de uma pessoa'
          className={styles['person']}
          width={420}
          height={420}
        />
      </div>

      <div className={styles['bullet-list-wrapper']}>
        <p className={`${styles['title']} ${montserrat.className}`}>Teste grátis o SCA!</p>
        <div className={styles['bullet-list']}>
          <div className={styles['list-item']}>
            <CreditCardIcon size={40} color='var(--neutral000)' weight='thin' />
            <p className={styles['text']}>Você não precisa adicionar cartão de crédito.</p>
          </div>

          <div className={styles['separator']} />

          <div className={styles['list-item']}>
            <BrowsersIcon size={40} color='var(--neutral000)' weight='thin' />
            <p className={styles['text']}>Tenha acesso a todas das funcionalidades.</p>
          </div>

          <div className={styles['separator']} />

          <div className={styles['list-item']}>
            <TimerIcon size={40} color='var(--neutral000)' weight='thin' />
            <p className={styles['text']}>Cadastre-se em segundos.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
