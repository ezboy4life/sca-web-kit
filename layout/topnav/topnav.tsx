import styles from './topnav.module.scss';

import Link from 'next/link';
import Image from 'next/image';
import NavLinks from './navlinks/navlinks';
import MobileNav from './mobile-nav/mobile-nav'; /* Renderizado apenas na versão mobile (<= 768px) */
import NavTrailing from './navtrailing/navtrailing';

export default function TopNav() {
  return (
    <header className={styles.navbar}>
      <Link href="/">
        <Image
          src="/logos/sca/sca-white.svg"
          width={100}
          height={50}
          alt="Logo do Sistema SCA"
          className={styles['sca-logo']}
        />
      </Link>

      <NavLinks />

      <NavTrailing />

      <MobileNav />
    </header>
  );
}
