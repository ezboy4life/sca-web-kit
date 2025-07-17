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
  const darkStyle = !dark ? {} : {
    border: '1px solid var(--dark900)',
    background: 'var(--dark800)',
    color: 'white',
  }

  return (
    <div
      style={darkStyle}
      className={`
        ${montserrat.className}
        ${className} 
        ${styles['span']}
      `}
    >
      {label}
    </div>
  )
}
