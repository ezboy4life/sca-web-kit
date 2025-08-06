import styles from './info-header.module.scss';

import TagLabel from '../../ui/tag-label/tag-label';
import Subtitle from '../../ui/subtitle/subtitle';
import Button from '../../ui/button/button';
import Title from '../../ui/title/title';

interface InfoHeaderProps {
  className?: string;

  tagLabel?: string;
  tagLabelClassName?: string;

  title: string;
  titleClassName?: string;

  subtitle?: string;
  subtitleClassName?: string;

  buttonLabel?: string;
  buttonClassName?: string,
  buttonHref?: string,
  buttonInternalHref?: string,
  buttonTarget?: React.HTMLAttributeAnchorTarget,

  gap?: string,
  dark?: boolean;
}

export default function InfoHeader({
  className,

  tagLabel,
  tagLabelClassName,

  title,
  titleClassName,

  subtitle,
  subtitleClassName,

  buttonLabel,
  buttonClassName,
  buttonHref,
  buttonInternalHref,
  buttonTarget,

  gap,
  dark,
}: InfoHeaderProps) {
  return (
    <div
      className={`${styles['info-header']} ${className}`}
      style={{
        gap: gap,
      }}
    >
      {tagLabel &&
        <TagLabel
          label={tagLabel}
          className={tagLabelClassName}
          dark={dark}
        />
      }

      <Title
        className={titleClassName}
        text={title}
        dark={dark}
      />

      {subtitle &&
        <Subtitle
          text={subtitle}
          className={subtitleClassName}
          dark={dark}
        />
      }

      {buttonLabel &&
        <Button
          label={buttonLabel}
          className={buttonClassName}
          href={buttonHref}
          internalHref={buttonInternalHref}
          target={buttonTarget}
        />
      }
    </div>
  )
}
