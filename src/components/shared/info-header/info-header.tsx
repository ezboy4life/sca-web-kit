import styles from './info-header.module.scss';

import TagLabel from '../../ui/tag-label/tag-label';
import Subtitle from '../../ui/subtitle/subtitle';
import Button from '../../ui/button/button';
import Title from '../../ui/title/title';

interface InfoHeaderProps {
  spanLabel?: string;
  title: string;
  subtitle?: string;
  iconSubtitle?: string;
  buttonLabel?: string;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  dark?: boolean;
}

export default function InfoHeader({
  spanLabel,
  title,
  subtitle,
  buttonLabel,
  className = '',
  titleClassName = '',
  subtitleClassName = '',
  dark = false,
}: InfoHeaderProps) {
  return (
    <div className={`${styles['feature-card']} ${className}`}>
      {spanLabel && <TagLabel label={spanLabel} dark={dark} />}

      <Title className={titleClassName} text={title} dark={dark} />

      {subtitle && (
        <Subtitle text={subtitle} className={subtitleClassName} dark={dark} />
      )}

      {buttonLabel && (
        <Button label={buttonLabel} className={styles['button']} />
      )}
    </div>
  );
}
