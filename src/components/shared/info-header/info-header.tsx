import styles from './info-header.module.scss';

import TagLabel from '../../ui/tag-label/tag-label';
import Subtitle from '../../ui/subtitle/subtitle';
import Button from '../../ui/button/button';
import Title from '../../ui/title/title';

interface InfoHeaderProps {
  tagLabel?: string;
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
  tagLabel,
  title,
  subtitle,
  buttonLabel,
  className = '',
  titleClassName = '',
  subtitleClassName = '',
  dark = false,
}: InfoHeaderProps) {
  return (
    <div className={`${styles['info-header']} ${className}`}>
      {tagLabel && <TagLabel label={tagLabel} dark={dark} />}

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
