'use client';

import styles from './phone.module.scss';
import { useEffect, useState } from 'react';

import Image from 'next/image';
import { ArrowLeftIcon, TimerIcon, PersonIcon, MagnifyingGlassPlusIcon } from '@phosphor-icons/react';

export default function Phone({
  className,
  phoneClassName,
  buttonsClassName,
  cameraClassName,
}: {
  className?: string,
  phoneClassName?: string,
  buttonsClassName?: string,
  cameraClassName?: string,
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`${styles['phone-wrapper']} ${className}`}>
      <div className={styles['buttons-left']}>
        <div className={`${styles['action']} ${buttonsClassName}`} />
        <div className={`${styles['volume']} ${buttonsClassName}`} />
        <div className={`${styles['volume']} ${buttonsClassName}`} />
      </div>
      <div className={`${styles['phone']} ${phoneClassName}`}>
        <div className={styles['screen']}>
          <div className={styles['screen-shine']}>
            <div className={styles['system-topbar']}>
              <Image
                src={'/phone/system-bar.svg'}
                width={172}
                height={7}
                alt='Image dos ícones de um celular'
                className={styles['status']}
              />
              <div className={`${styles['camera']} ${cameraClassName}`}>
                <div className={styles['sound']} />
                <div className={styles['aperture']} />
              </div>
            </div>
            <div className={styles['app-topbar']}>
              <div className={styles['left']}>
                <ArrowLeftIcon weight='bold' color='var(--neutral100)' className={styles['icon']} />
                <p>Execução</p>
              </div>
              <div className={styles['right']}>
                <TimerIcon weight='bold' color='var(--neutral100)' className={styles['icon']} />
                <p>00:27:12</p>
              </div>
            </div>
            <div className={styles['app-background']}>
              <p className={styles['exercise']}>Rosca Direta</p>
              <div className={styles['gif-wrapper']}>
                <div className={styles['series']}>
                  <div className={`${activeIndex == 0 ? styles['green-ball'] : styles['series-ball']}`}><p>1</p></div>
                  <div className={styles['series-line']} />
                  <div className={`${activeIndex == 1 ? styles['green-ball'] : styles['series-ball']}`}><p>2</p></div>
                  <div className={styles['series-line']} />
                  <div className={`${activeIndex == 2 ? styles['green-ball'] : styles['series-ball']}`}><p>3</p></div>
                </div>
                <Image
                  src={'/animated/rosca-direta.webp'}
                  alt={'Animação do exercício Rosca Direta'}
                  width={130}
                  height={130}
                  unoptimized
                />
              </div>
              <div className={styles['series-rest-wrapper']}>
                <p>Séries: <b>3</b></p>
                <p>Descanso: <b>45s</b></p>
              </div>
              <div className={styles['progress-bar']}>
                <div className={styles['progress']} />
              </div>

              <div className={styles['rest-weight-wrapper']}>
                <div className={styles['rest']}>
                  <p className={styles['title']}>12 reps</p>
                  <p>Repetições ou tempo</p>
                </div>
                <div className={styles['separator']} />
                <div className={styles['weight']}>
                  <p className={styles['title']}>15kg</p>
                  <p>Carga ou velocidade</p>
                </div>
              </div>

              <div className={styles['exercise-buttons']}>
                <div className={styles['muscles']}>
                  <PersonIcon weight='bold' color='var(--primary)' />
                  <p>Músculos</p>
                </div>
                <div className={styles['amplify']}>
                  <MagnifyingGlassPlusIcon weight='bold' color='var(--primary)' />
                  <p>Ampliar</p>
                </div>
              </div>
            </div>

            <div className={styles['home-indicator']} />
          </div>
        </div>
      </div>
      <div className={styles['buttons-right']}>
        <div className={`${styles['action']} ${buttonsClassName}`} />
      </div>
    </div>
  )
}
