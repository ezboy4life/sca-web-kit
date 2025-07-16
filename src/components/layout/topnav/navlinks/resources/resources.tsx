'use client';

import styles from './resources.module.scss';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import Button from '../../../../ui/button/button';
import ResourcesCard from './resources-card/resources-card';
import DropdownMenuTrigger from '../dropdown-menu-trigger/dropdown-menu-trigger';

import { ArrowRightIcon, ClipboardTextIcon, CoinsIcon, CreditCardIcon, FileTextIcon, MoneyIcon, StackIcon } from '@phosphor-icons/react';

import Link from 'next/link';

const links = [
  { title: 'Controle financeiro' },
  { title: 'Ficha de treino' },
  { title: 'Avaliação física' },
  { title: 'Relacionamento com Alunos' },
  { title: 'Gerência de turmas' },
  { title: 'Vitrine de produtos' },
];

const leftCards = [
  {
    title: 'Pacote de aulas',
    subtitle: 'Crie e controle pacotes de aulas por sessão ou período.',
    icon: ClipboardTextIcon,
  },
  {
    title: 'Contratos personalizados',
    subtitle: 'Crie modelos de contratos e use como precisar.',
    icon: FileTextIcon,
  },
  {
    title: 'Caixas simultâneos',
    subtitle: 'Controle dos caixas de todas unidades em um único lugar.',
    icon: CoinsIcon,
  },
];

const rightCards = [
  {
    title: 'Mensalidades',
    subtitle: 'Deixe que o sistema crie as cobranças por você.',
    icon: MoneyIcon,
  },
  {
    title: 'Controle de estoque',
    subtitle: 'Controle a entrada e saída dos seus produtos de diversas formas.',
    icon: StackIcon,
  },
  {
    title: 'Controle financeiro',
    subtitle: 'O SCA cria e envia as mensalidades automaticamente.',
    icon: CreditCardIcon,
  },
];

export default function Resources({
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
        label="Recursos"
        open={open}
        setOpen={setOpen}
        handleMouseEnter={handleOpen}
      />

      <DropdownMenu.Content
        onMouseLeave={handleMouseExit}
        className={`${styles['dropdown-content']}`}
        sideOffset={44}
      >
        <div className={styles['links']}>
          {links.map((link, index) => {
            return (
              <Link
                key={index}
                href={'/recursos'}
                className={styles['dropdown-item-link']}
              >
                <DropdownMenu.Item
                  key={index}
                  className={styles['dropdown-item']}
                >
                  {link.title}
                  <ArrowRightIcon weight='bold' size={16} className={styles['dropdown-icon']} />
                </DropdownMenu.Item>
              </Link>
            );
          })}
        </div>

        <div className={styles['cards-wrapper']}>
          <div className={styles['cards']}>
            <div className={styles['left-section']}>
              {leftCards.map((card, index) => {
                return (
                  <ResourcesCard
                    key={index}
                    title={card.title}
                    subtitle={card.subtitle}
                    icon={card.icon}
                  />
                );
              })}
            </div>

            <div className={styles['right-section']}>
              {rightCards.map((card, index) => {
                return (
                  <ResourcesCard
                    key={index}
                    title={card.title}
                    subtitle={card.subtitle}
                    icon={card.icon}
                  />
                );
              })}
            </div>
          </div>

          <Link
            href={'/recursos'}
            className={styles['button-wrapper']}
          >
            <Button label="Ver todos" className={styles['button']} />
          </Link>
        </div>
      </DropdownMenu.Content>
    </DropdownMenu.Root >
  );
}
