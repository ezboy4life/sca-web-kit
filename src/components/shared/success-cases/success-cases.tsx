import styles from './success-cases.module.scss';

import SuccessCasesSwiper from './success-cases-swiper/success-cases-swiper';
import InfoHeader from '../info-header/info-header';
import Button from '../../ui/button/button';
import Stacks from '../../ui/stacks/stacks';

export default function SuccessCases(
  {
    buttonHref,
    buttonInternalHref,
    buttonTarget,
  }: {
    buttonHref?: string,
    buttonInternalHref?: string,
    buttonTarget?: React.HTMLAttributeAnchorTarget,
  }
) {

  return (
    <div className={styles['success-cases']}>
      <Stacks />

      <div className={styles['success-cases-wrapper']}>
        <div className={styles['success-cases-title']}>
          <InfoHeader
            className={styles['title']}
            tagLabel='CASES DE SUCESSO'
            title={'Essas pessoas confiam no nosso trabalho'}
          />

          <Button
            label='Leia outros cases de sucesso'
            className={styles['success-cases-button']}
            href={buttonHref}
            internalHref={buttonInternalHref}
            target={buttonTarget}
          />
        </div>

        <SuccessCasesSwiper />
      </div>
    </div>
  )
}
