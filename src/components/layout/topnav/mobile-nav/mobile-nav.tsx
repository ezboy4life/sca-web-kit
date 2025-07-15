import styles from './mobile-nav.module.scss';
import * as Dialog from '@radix-ui/react-dialog';
import { CaretDownIcon, ListIcon, UserCircleIcon, XIcon } from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';
import NavAccordion from './nav-accordion/nav-accordion';
import NavAccordionLink from './nav-accordion/nav-accordion-link/nav-accordion-link';
import { Button } from '@/components';

export default function MobileNav() {
  return (
    <div className={styles['mobile-nav']}>
      <Dialog.Root>
        <Dialog.Trigger className={styles['dialog-trigger']} asChild>
          <ListIcon size={32} color='white' cursor={'pointer'} />
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className={styles['dialog-overlay']} >
            <Dialog.Content className={styles['dialog-content']}>

              <div className={styles['dialog-header']}>
                <Dialog.Title>
                  <Image
                    src="/logos/sca/sca-blue.svg"
                    width={50}
                    height={25}
                    alt="Logo do Sistema SCA"
                    className={styles['sca-logo']}
                  />
                </Dialog.Title>
                <Dialog.Close className={styles['dialog-close']} asChild>
                  <XIcon size={32} color='var(--auxiliary-orange)' />
                </Dialog.Close>
              </div>

              <div className={styles['dialog-content-bottom']}>
                <div className={styles['dialog-buttons']}>

                  <NavAccordion title='Recursos'>
                    <NavAccordionLink title='Controle financeiro' href='/recursos' />
                    <NavAccordionLink title='Controle de acesso' href='/recursos' />
                    <NavAccordionLink title='Ficha de treino' href='/recursos' />
                    <NavAccordionLink title='Avaliação física' href='/recursos' />
                    <NavAccordionLink title='Relacionamento com Alunos' href='/recursos' />
                    <NavAccordionLink title='Gerência de turma' href='/recursos' />
                    <NavAccordionLink title='Vitrine de produtos' href='/recursos' />
                  </NavAccordion>

                  <NavAccordion title='Segmentos'>
                    <NavAccordionLink title='Academia' href='TODO' />
                    <NavAccordionLink title='Box Cross' href='TODO' />
                    <NavAccordionLink title='Escola de Natação' href='TODO' />
                    <NavAccordionLink title='Pilates' href='TODO' />
                    <NavAccordionLink title='Studio' href='TODO' />
                  </NavAccordion>

                  <a href='TODO' className={styles['nav-link']}>
                    <p>Planos</p>
                  </a>

                  <a href='TODO' className={styles['nav-link']}>
                    <p>Blog</p>
                  </a>

                  <NavAccordion title='Mais'>
                    <NavAccordionLink title='Quem somos' href='/quem-somos' />
                    <NavAccordionLink title='Cases de sucesso' href='/cases-de-sucesso' />
                    <NavAccordionLink title='Equipamentos' href='/equipamentos' />
                    <NavAccordionLink title='Versão Desktop' href='/desktop' />
                    <NavAccordionLink title='Atendimento' href='/contato' />
                  </NavAccordion>

                </div>

                <div className={styles['account-test-wrapper']}>
                  <a className={styles['account-wrapper']}>
                    <UserCircleIcon size={24} color='var(--primary)' />
                    <p>Acessar conta</p>
                    <CaretDownIcon size={12} color='var(--light500)' />
                  </a>

                  <a href='https://app.sistemasca.com/cadastro' target='_blank'>
                    <Button label='Teste agora' className={styles['test-button']} />
                  </a>
                </div>

              </div>


            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>

    </div>
  )
}
