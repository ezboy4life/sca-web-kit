import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import styles from './dropdown-menu-trigger.module.scss';
import { inter } from '@/fonts';
import { CaretDown } from '@phosphor-icons/react';

export default function DropdownMenuTrigger({
  label,
  open,
  setOpen,
  handleMouseEnter = () => {
    setOpen(true);
  },
}: {
  label: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleMouseEnter?: () => void;
}) {
  return (
    <DropdownMenu.Trigger
      onMouseEnter={handleMouseEnter}
      className={`
        ${styles['dropdown-trigger']}
        ${open ? styles['dropdown-trigger-open'] : ''}
      `}
    >
      <p className={inter.className}>{label}</p>

      <CaretDown
        color='var(--light500)'
        size={16}
        className={`${styles['dropdown-trigger-icon']} ${open ? styles['dropdown-trigger-icon-open'] : ''}`}
      />

    </DropdownMenu.Trigger>
  );
}
