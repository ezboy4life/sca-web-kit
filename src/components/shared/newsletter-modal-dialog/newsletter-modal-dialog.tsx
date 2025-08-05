import styles from './newsletter-modal-dialog.module.scss';
import * as Dialog from '@radix-ui/react-dialog';

import NewsletterModal from '../newsletter-modal/newsletter-modal';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

export default function NewsletterModalDialog(
  {
    modalType,
    open,
    setOpenAction,
  }: {
    modalType: 'success' | 'already-registered' | 'error',
    open: boolean,
    setOpenAction: React.Dispatch<React.SetStateAction<boolean>>,
  }
) {
  return (
    <Dialog.Root open={open}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles['overlay']}>

          <Dialog.Content>
            <VisuallyHidden>
              <Dialog.Title>Tela de confirmação de inscrição na Newsletter do SCA</Dialog.Title>
            </VisuallyHidden>

            <NewsletterModal
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
