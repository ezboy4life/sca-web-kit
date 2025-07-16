'use client';

import styles from './navtrailing.module.scss';

import Button from '../../../ui/button/button';

import { UserCircleIcon } from '@phosphor-icons/react';

export default function NavTrailing() {
  return (
    <div className={styles['navtrailing']}>

      <a href='https://app.sistemasca.com/login' target='_blank' className={styles['login-wrapper']}>
        <UserCircleIcon size={26} className={`${styles['icon']}`} />
        <p>Acessar conta</p>
      </a>

      <a href='https://app.sistemasca.com/cadastro' target='_blank'>
        <Button label="Teste agora" className={styles['outline-button']} />
      </a>
    </div>
  );
}
