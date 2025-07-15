'use client';

import styles from './autoplayer.module.scss';
import { useState, useEffect } from 'react';

import AutoplayerRow from './autoplayer-row/autoplayer-row';
import { CurrencyCircleDollarIcon, HeadsetIcon, UsersFourIcon } from '@phosphor-icons/react';

export default function Autoplayer() {

  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % 3);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles['autoplayer']}>
      <AutoplayerRow
        icon={CurrencyCircleDollarIcon}
        title='Pague apenas uma vez por ano'
        subtitle='Assine o anual com 20% OFF, sai por menos de R$6,00 por dia. R$2.141,00 no total.'
        index={0}
        activeIndex={activeIndex}
      />

      <div className={`${styles['separator']} ${activeIndex == 0 ? styles['separator-on'] : ''}`} />

      <AutoplayerRow
        icon={UsersFourIcon}
        title='Cadastros ilimitados'
        subtitle='Tenha quantos alunos e alunas você quiser, sem pagar nenhuma taxa extra.'
        index={1}
        activeIndex={activeIndex}
      />

      <div className={`${styles['separator']} ${activeIndex == 1 ? styles['separator-on'] : ''}`} />

      <AutoplayerRow
        icon={HeadsetIcon}
        title='Suporte para sempre'
        subtitle='Equipe dedicada que vai te ajudar desde o inicio até o uso mais avançado do sistema.'
        index={2}
        activeIndex={activeIndex}
      />

      <div className={`${styles['separator']} ${activeIndex == 2 ? styles['separator-on'] : ''}`} />
    </div>
  )
}
