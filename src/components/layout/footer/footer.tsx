import styles from './footer.module.scss';

import Image from 'next/image';
import Link from 'next/link';

import Button from '../../ui/button/button';

import FacebookLogo from '@prosistemas/sca-web-kit/assets/logos/social/facebook.svg';
import InstagramLogo from '@prosistemas/sca-web-kit/assets/logos/social/instagram.svg';
import YoutubeLogo from '@prosistemas/sca-web-kit/assets/logos/social/youtube.svg';
import SCALogo from '@prosistemas/sca-web-kit/assets/logos/sca/sca-white.svg';

import {
  EnvelopeIcon,
  PhoneIncomingIcon,
} from '@phosphor-icons/react/dist/ssr';

export default function Footer() {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className={styles['footer']}>
      <div className={styles['top']}>
        <div className={styles['top-row']} >
          <div className={styles['sca']}>
            <Image
              src={SCALogo}
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
                <a href='https://app.sistemasca.com/ajuda/' target='_blank'>Central de Ajuda</a>
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
                <img
                  src={InstagramLogo}
                  alt='Logo do SCA'
                  width={32}
                  height={32}
                  className={styles['icons']}
                />
              </a>

              <a href='https://www.facebook.com/sistemasca' target='_blank'>
                <img
                  src={FacebookLogo}
                  alt='Logo do SCA'
                  width={32}
                  height={32}
                  className={styles['icons']}
                />
              </a>

              <a href='https://www.youtube.com/channel/UCZ8KRjnlnuw7XwJWTtnfliA' target='_blank'>
                <img
                  src={YoutubeLogo}
                  alt='Logo do SCA'
                  width={32}
                  height={32}
                  className={styles['icons']}
                />
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
