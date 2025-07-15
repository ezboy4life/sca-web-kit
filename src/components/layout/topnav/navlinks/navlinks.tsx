'use client';

import styles from '../topnav.module.scss';
import { useState } from 'react';

import Link from 'next/link';
import More from './more/more';
import Segments from './segments/segments';
import Resources from './resources/resources';

export default function NavLinks() {
  const [openResources, setOpenResources] = useState(false);
  const [openSegments, setOpenSegments] = useState(false);
  const [openMore, setOpenMore] = useState(false);

  function handleOpenResources() {
    setOpenResources(true);
    setOpenSegments(false);
    setOpenMore(false);
  }

  function handleOpenSegments() {
    setOpenResources(false);
    setOpenSegments(true);
    setOpenMore(false);
  }

  function handleOpenMore() {
    setOpenResources(false);
    setOpenSegments(false);
    setOpenMore(true);
  }

  return (
    <div className={styles.navlinks}>
      <Resources
        open={openResources}
        setOpen={setOpenResources}
        handleOpen={handleOpenResources}
      />

      <Segments
        open={openSegments}
        setOpen={setOpenSegments}
        handleOpen={handleOpenSegments}
      />

      <Link href="/" className={styles['plans-link']}>
        <p>Planos</p>
      </Link>

      <Link href="/" className={styles['blog-link']}>
        <p>Blog</p>
      </Link>

      <More open={openMore} setOpen={setOpenMore} handleOpen={handleOpenMore} />
    </div>
  );
}
