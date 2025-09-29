import styles from './info-header.module.scss';

import TagLabel from '../../ui/tag-label/tag-label';
import Title from '../../ui/title/title';
import Subtitle from '../../ui/subtitle/subtitle';
import Button from '../../ui/button/button';
import { IconProps, IconWeight } from '@phosphor-icons/react';

interface InfoHeaderProps {
  className?: string;

  tagLabel?: string;
  tagLabelClassName?: string;
  tagLabelLeadingIcon?: React.ComponentType<IconProps>,
  tagLabelLeadingIconSize?: number,
  tagLabelLeadingIconColor?: string,
  tagLabelLeadingIconWeight?: IconWeight,
  tagLabelLeadingIconClassName?: string,

  tagLabelTrailingIcon?: React.ComponentType<IconProps>,
  tagLabelTrailingIconSize?: number,
  tagLabelTrailingIconColor?: string,
  tagLabelTrailingIconWeight?: IconWeight,
  tagLabelTrailingIconClassName?: string,

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
  tagLabelLeadingIcon,
  tagLabelLeadingIconSize,
  tagLabelLeadingIconColor,
  tagLabelLeadingIconWeight,
  tagLabelLeadingIconClassName,
  tagLabelTrailingIcon,
  tagLabelTrailingIconSize,
  tagLabelTrailingIconColor,
  tagLabelTrailingIconWeight,
  tagLabelTrailingIconClassName,

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
          className={`${tagLabelClassName} ${styles['tag-label']}`}
          label={tagLabel}
          dark={dark}

          leadingIcon={tagLabelLeadingIcon}
          leadingIconSize={tagLabelLeadingIconSize}
          leadingIconColor={tagLabelLeadingIconColor}
          leadingIconWeight={tagLabelLeadingIconWeight}
          leadingIconClassName={tagLabelLeadingIconClassName}

          trailingIcon={tagLabelTrailingIcon}
          trailingIconSize={tagLabelTrailingIconSize}
          trailingIconColor={tagLabelTrailingIconColor}
          trailingIconWeight={tagLabelTrailingIconWeight}
          trailingIconClassName={tagLabelTrailingIconClassName}
        />
      }

      <Title
        className={`${titleClassName} ${styles['title']}`}
        text={title}
        dark={dark}
      />

      {subtitle &&
        <Subtitle
          className={`${subtitleClassName} ${styles['subtitle']}`}
          text={subtitle}
          dark={dark}
        />
      }

      {buttonLabel &&
        <Button
          className={`${buttonClassName} ${styles['button']}`}
          label={buttonLabel}
          href={buttonHref}
          internalHref={buttonInternalHref}
          target={buttonTarget}
        />
      }
    </div>
  )
}
