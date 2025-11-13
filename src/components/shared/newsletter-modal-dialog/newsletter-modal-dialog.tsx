'use client';

import styles from './newsletter-modal-dialog.module.scss';

import NewsletterModal from '../newsletter-modal/newsletter-modal';

import * as Dialog from '@radix-ui/react-dialog';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'

export default function NewsletterModalDialog(
  {
    modalType,
    iconSrc,
    open,
    setOpenAction,
  }: {
    modalType: 'success' | 'already-registered' | 'error',
    iconSrc: string,
    open: boolean,
    setOpenAction: React.Dispatch<React.SetStateAction<boolean>>,
  }
) {
  return (
    <Dialog.Root open={open}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles['overlay']}>

          <Dialog.Content>
            <VisuallyHidden.Root>
              <Dialog.Title>Tela de confirmação de inscrição na Newsletter do SCA</Dialog.Title>
            </VisuallyHidden.Root>

            <NewsletterModal
              iconSrc={iconSrc}
              type={modalType}
              onCloseButtonClick={() => {
                setOpenAction(false)
              }}
            />

          </Dialog.Content>

        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
