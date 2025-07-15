'use client';

import styles from './more.module.scss';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import Link from 'next/link';
import Card from '../card/card';
import DropdownMenuTrigger from '../dropdown-menu-trigger/dropdown-menu-trigger';

import {
  BarbellIcon,
  ChatCircleIcon,
  PhoneIncomingIcon,
  QuestionIcon,
  SmileyIcon,
} from '@phosphor-icons/react';

export default function More({
  open,
  setOpen,
  handleOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleOpen: () => void;
}) {
  const handleMouseExit = () => {
    setOpen(false);
  };
  return (
    <DropdownMenu.Root open={open} onOpenChange={setOpen} modal={false}>
      <DropdownMenuTrigger
        label="Mais"
        open={open}
        setOpen={setOpen}
        handleMouseEnter={handleOpen}
      />

      <DropdownMenu.Content
        onMouseLeave={handleMouseExit}
        className={styles['dropdown-content']}
        sideOffset={44}
      >
        <div className={styles['left']}>
          <Link href='/quem-somos'>
            <Card label="Quem somos" icon="/logos/sca/sca-s-outlined.svg" iconSize={24} />
          </Link>

          <Link href='/cases-de-sucesso'>
            <Card label="Cases de sucesso" icon={SmileyIcon} />
          </Link>

          <Link href='/equipamentos'>
            <Card label="Equipamentos" icon={BarbellIcon} />
          </Link>
        </div>

        <div className={styles['right']}>

          <Link href='/contato'>
            <Card label="Atendimento" icon={PhoneIncomingIcon} />
          </Link>

          <a href='https://app.sistemasca.com/ajuda/' target='_blank'>
            <Card label="Central de ajuda" icon={QuestionIcon} />
          </a>


          <Link href='/desktop'>
            <Card label="Versão Desktop" icon={ChatCircleIcon} />
          </Link>
        </div>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
