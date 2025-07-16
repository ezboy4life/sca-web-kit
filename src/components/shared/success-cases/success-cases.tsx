import styles from './success-cases.module.scss';

import SuccessCasesSwiper from './success-cases-swiper/success-cases-swiper';
import FeatureCard from '../feature-card/feature-card';
import Button from '../../ui/button/button';
import Stacks from '../../ui/stacks/stacks';

export default function SuccessCases() {

  return (
    <div className={styles['success-cases']}>
      <Stacks />

      <div className={styles['success-cases-wrapper']}>
        <div className={styles['success-cases-title']}>
          <FeatureCard
            className={styles['title']}
            spanLabel='CASES DE SUCESSO'
            title={'Essas pessoas confiam no nosso trabalho'}
          />

          <Button
            label='Leia outros cases de sucesso'
            className={styles['success-cases-button']}
          />
        </div>

        <SuccessCasesSwiper />
      </div>
    </div>
  )
}
