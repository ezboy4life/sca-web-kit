import styles from './footer.module.scss';

import Image from 'next/image';
import Link from 'next/link';

import Button from '../../ui/button/button';
import IconWithBackground from '../../ui/icon-with-background/icon-with-background';

import {
  EnvelopeIcon,
  FacebookLogoIcon,
  InstagramLogoIcon,
  PhoneIncomingIcon,
  YoutubeLogoIcon
} from '@phosphor-icons/react/dist/ssr';

export default function Footer() {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className={styles['footer']}>
      <div className={styles['top']}>
        <div className={styles['top-row']} >
          <div className={styles['sca']}>
            <Image
              src={'/logos/sca/sca-white.svg'}
              alt='Logo do Sistema SCA'
              width={100}
              height={50}
            />
            <p>O SCA é um sistema de gestão e automação feito para revolucionar o seu negócio Fitness.<br /><br />Estamos no mercado desde 2004.</p>
          </div>

          <hr className={styles['mobile-separator']} />

          <div className={styles['etc']}>
            <div className={styles['etc-sca']}>
              <p className={styles['title']}>O SCA</p>
              <p>Funcionalidades</p>
              <p>Cases de sucesso</p>
              <p>Preços</p>
              <Link href='/equipamentos'><p>Equipamentos</p></Link>
            </div>
            <div className={styles['content-transparency-wrapper']}>
              <div className={styles['etc-content']}>
                <p className={styles['title']}>Conteúdo</p>
                <a href='TODO' target='_blank'>Blog</a>
                <a href='TODO' target='_blank'>Central de Ajuda</a>
              </div>
              <div className={styles['etc-transparency']}>
                <p className={styles['title']}>Transparência</p>
                <Link href='/quem-somos'>Sobre nós</Link>
                <Link href='/politica-de-privacidade'>Políticas e Privacidade</Link>
              </div>
            </div>
          </div>

        </div>

        <hr className={styles['separator']} />

        <div className={styles['bottom-row']} >
          <a href='https://app.sistemasca.com/cadastro' target='_blank'>
            <Button label='Teste agora' className={styles['button']} />
          </a>

          <div className={styles['contact']}>
            <div>
              <PhoneIncomingIcon size={24} />
              <p>(35) 3294-1066</p>
            </div>
            <div>
              <EnvelopeIcon size={24} />
              <p>contato@sistemasca.com</p>
            </div>
            <div className={styles['social']}>
              <a href='https://www.instagram.com/sistemasca/' target='_blank'>
                <IconWithBackground icon={InstagramLogoIcon} className={styles['icons']} iconSize={25} />
              </a>
              <a href='https://www.facebook.com/sistemasca' target='_blank'>
                <IconWithBackground icon={FacebookLogoIcon} className={styles['icons']} iconSize={25} weight='fill' />
              </a>
              <a href='https://www.youtube.com/channel/UCZ8KRjnlnuw7XwJWTtnfliA' target='_blank'>
                <IconWithBackground icon={YoutubeLogoIcon} className={styles['icons']} iconSize={25} weight='fill' />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['bottom']}>
        <p>Copyright © 2004 - {currentYear} Sistema SCA | ProSistemas - Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
