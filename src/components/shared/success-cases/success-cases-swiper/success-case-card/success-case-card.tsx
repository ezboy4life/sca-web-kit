import styles from './success-case-card.module.scss';
import { QuotesIcon, CalendarDotsIcon, MapPinIcon } from '@phosphor-icons/react/dist/ssr';
import * as Avatar from '@radix-ui/react-avatar';

export default function SuccessCaseCard({
  review,
  customerPictureSrc,
  customerName,
  customerGymName,
  location,
  dateSince,
  className,
  dark = false,
}: {
  review: string,
  customerPictureSrc: string,
  customerName: string,
  customerGymName: string,
  location: string,
  dateSince: string,
  className?: string,
  dark?: boolean,
}) {

  return (
    <div
      className={`${styles['success-case-card']} ${className}`}
      style={{
        background: dark ? 'white' : '',
      }}
    >
      <QuotesIcon size={32} weight='fill' color='var(--light200)' />

      <div className={styles['review-wrapper']}>
        <p className={styles['review']}>{review}</p>
      </div>

      <div className={styles['success-card-bottom-wrapper']}>
        <div className={`${styles['success-card-bottom']}`}>
          <div className={styles['customer']}>
            <div className={styles['customer-left']}>

              <div className={styles['outer-circle']}>
                <div className={styles['inner-circle']}>
                  <Avatar.Root>
                    <Avatar.Image
                      className={styles['customer-picture']}
                      src={customerPictureSrc}
                      alt='Foto de um dos clientes do Sistema SCA'
                      width={45}
                      height={45}
                    />
                  </Avatar.Root>
                </div>
              </div>

              <div className={styles['name-gym-wrapper']}>
                <p className={styles['customer-name']}>{customerName}</p>
                <p className={styles['customer-gym-name']}>{customerGymName}</p>
              </div>

            </div>

            <div className={styles['customer-right']}>
              <div className={styles['customer-info-details']}>
                <div className={styles['customer-location']}>
                  <MapPinIcon size={18} color='var(--auxiliary-orange)' />
                  <p>{location}</p>
                </div>

                <div className={styles['customer-since']}>
                  <CalendarDotsIcon size={18} color='var(--auxiliary-orange)' />
                  <p>{dateSince}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}
