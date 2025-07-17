import styles from './tag-label.module.scss';

import { montserrat } from '../../../fonts';

export default function TagLabel({
  label,
  className = '',
  dark = false,
}: {
  label: string,
  className?: string,
  dark?: boolean,
}) {
  const spanDarkStyle = !dark ? {} : {
    border: '1px solid var(--dark900)',
    background: 'var(--dark800)',
    color: 'white',
  }

  return (
    <span
      style={spanDarkStyle}
      className={`
        ${montserrat.className}
        ${className} 
        ${styles['span']}
      `}
    >
      {label}
    </span>
  )
}
