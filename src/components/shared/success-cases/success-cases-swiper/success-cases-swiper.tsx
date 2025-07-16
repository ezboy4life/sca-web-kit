'use client';

import styles from './success-cases-swiper.module.scss';
import { useState } from 'react';

import SuccessCaseCard from './success-case-card/success-case-card';
import Button from '../../../ui/button/button';

import { CaretRightIcon } from '@phosphor-icons/react';

import Image from 'next/image';

export default function SuccessCasesSwiper(
  {
    dark = false,
  }: {
    dark?: boolean,
  }
) {
  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex(prev => (prev + 1) % 3);
  }
  return (
    <div className={styles['success-cases-swiper']}>
      <div className={styles['success-cases-left']} >
        <SuccessCaseCard
          review='Dahora demais'
          customerPictureSrc='https://t2.tudocdn.net/125246?w=1920'
          customerName='Luigi Erucci'
          customerGymName='Academia Power Guido'
          location='Alterosa, MG'
          dateSince='Desde 2003'
          className={`${index == 0 ? styles['show'] : styles['hide']} `}
          dark={dark}
        />

        <SuccessCaseCard
          review='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ullamcorper maximus ipsum, vitae congue sem imperdiet vitae. Praesent pellentesque imperdiet erat in efficitur.'
          customerPictureSrc='https://media.tenor.com/77Wibhy_QxcAAAAe/xirtual-thinking-hideo-kojima.png'
          customerName='Hideo Kojima'
          customerGymName='KOJIMA PRODUCTIONS'
          location='Tokyo, JP'
          dateSince='Desde 2016'
          className={`${index == 1 ? styles['show'] : styles['hide']} `}
          dark={dark}
        />

        <SuccessCaseCard
          review='Suspendisse eget commodo orci, et mattis libero. Aenean nec ligula fermentum, hendrerit odio eget, convallis tortor. Nam posuere, libero ac ultricies porttitor, purus arcu lobortis sapien, sit amet consectetur massa enim a augue.'
          customerPictureSrc='https://desktop.sistemasca.com/img/clientes/zxfwm66zrh.jpg'
          customerName='Cliente Teste'
          customerGymName='Academia Teste'
          location='Teste, TST'
          dateSince='Desde 191 b.C'
          className={`${index == 2 ? styles['show'] : styles['hide']} `}
          dark={dark}
        />

        <Button
          icon={CaretRightIcon}
          onClick={handleClick}
          className={styles['success-case-button']}
          ariaLabel='Botão para ver o próximo case de sucesso'
          round
        />
      </div>

      <div className={styles['success-cases-right']}>
        <Image
          src={'/gym/stock-gym.webp'}
          alt='Foto de uma academia'
          width={690}
          height={280}
          className={`${styles['success-case-picture']} ${index == 0 ? styles['show'] : styles['hide']}`}
        />


        <Image
          src={'/gym/stock-gym-02.webp'}
          alt='Foto de uma academia'
          width={690}
          height={280}
          className={`${styles['success-case-picture']} ${index == 1 ? styles['show'] : styles['hide']}`}
        />


        <Image
          src={'/gym/stock-gym-03.webp'}
          alt='Foto de uma academia'
          width={690}
          height={280}
          className={`${styles['success-case-picture']} ${index == 2 ? styles['show'] : styles['hide']}`}
        />

      </div>
    </div>
  )
}
