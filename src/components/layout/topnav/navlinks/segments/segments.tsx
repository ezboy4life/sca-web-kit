'use client';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import DropdownMenuTrigger from '../dropdown-menu-trigger/dropdown-menu-trigger';
import styles from './segments.module.scss';
import Card from '../card/card';
import { Barbell, Lockers, PersonArmsSpread, PersonSimpleSwim, PersonSimpleTaiChi } from '@phosphor-icons/react';

export default function Segments({
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
        label="Segmentos"
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
          <Card label="Academia" icon={Lockers} />
          <Card label="Studio" icon={PersonArmsSpread} />
          <Card label="Pilates" icon={PersonSimpleTaiChi} />
        </div>

        <div className={styles['right']}>
          <Card label="Natação" icon={PersonSimpleSwim} />
          <Card label="Box Cross" icon={Barbell} />
        </div>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
