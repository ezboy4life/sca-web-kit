import styles from './info-header.module.scss';

import TagLabel from '../../ui/tag-label/tag-label';
import Title from '../../ui/title/title';
import Subtitle from '../../ui/subtitle/subtitle';
import Button from '../../ui/button/button';

import { IconProps, IconWeight } from '@phosphor-icons/react';
import { CSSProperties, HTMLAttributeAnchorTarget } from 'react';

interface InfoHeaderProps {
  className?: string;

  tagLabel?: string;
  tagLabelClassName?: string;
  tagLabelStyle?: CSSProperties,
  tagLabelHref?: string,
  tagLabelTarget?: HTMLAttributeAnchorTarget,

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
  titleStyle?: CSSProperties,
  titleH1?: boolean;

  subtitle?: string;
  subtitleClassName?: string;
  subtitleStyle?: CSSProperties,

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
  tagLabelStyle,
  tagLabelHref,
  tagLabelTarget,

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
  titleStyle,
  titleH1 = false,

  subtitle,
  subtitleClassName,
  subtitleStyle,

  buttonLabel,
  buttonClassName,
  buttonHref,
  buttonInternalHref,
  buttonTarget,

  dark,
}: InfoHeaderProps) {
  return (
    <div className={`${styles['info-header']} ${className}`}>
      {tagLabel &&
        <TagLabel
          className={`${tagLabelClassName} ${styles['tag-label']}`}
          style={tagLabelStyle}
          label={tagLabel}
          dark={dark}
          href={tagLabelHref}
          target={tagLabelTarget}

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
        style={titleStyle}
        h1={titleH1}
        text={title}
        dark={dark}
      />

      {subtitle &&
        <Subtitle
          className={`${subtitleClassName} ${styles['subtitle']}`}
          style={subtitleStyle}
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
