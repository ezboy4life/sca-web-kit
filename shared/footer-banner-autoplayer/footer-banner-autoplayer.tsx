import styles from './footer-banner-autoplayer.module.scss';
import { montserrat } from '@/fonts';

import Image from 'next/image';
import Autoplayer from '../autoplayer/autoplayer';
import FeatureCard from '../feature-card/feature-card';

import { Button } from '@/components';

export default function FooterBannerAutoplayer(
  {
    className = ''
  }: {
    className?: string
  }
) {
  return (
    <div className={`${styles['footer-banner-autoplayer']} ${className}`}>
      <div className={styles['left']}>
        <FeatureCard
          spanLabel='SISTEMA COMPLETO'
          title={'Plano ideal para o seu negócio'}
          className={styles['feature-card']}
          dark
        />

        <p className={`${styles['monthly-fee']} ${montserrat.className}`}>
          R$<span className={`${styles['price']}`}>178,00</span>/mês
        </p>
        <p>Menos de R$6,00 por dia ou em até 6x sem juros no anual com <b>20% de desconto</b>!</p>

        <a href='https://app.sistemasca.com/cadastro' target='_blank' style={{ marginTop: `12px` }}>
          <Button label='Teste agora' className={styles['button']} />
        </a>
      </div>

      <div className={styles['middle']}>
        <Image
          src={'/gym/stock-gym-blurred.webp'}
          alt='Foto borrada de uma academia.'
          className={styles['image']}
          fill
        />

        <Image
          src={'/people/person_15.webp'}
          alt='Imagem de uma pessoa segurando um celular.'
          width={400}
          height={400}
          className={styles['person']}
        />
      </div>

      <div className={styles['right']}>
        <Autoplayer />
      </div>
    </div>
  )
}
