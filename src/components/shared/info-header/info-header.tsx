import styles from './info-header.module.scss';

import Tag from '../../ui/tag/tag';
import Title from '../../ui/title/title';
import Subtitle from '../../ui/subtitle/subtitle';

import { CSSProperties, HTMLAttributeAnchorTarget } from 'react';
import { clsx } from 'clsx';

interface InfoHeaderProps {
  className?: string;

  tag?: React.ReactNode;
  tagClassName?: string;
  tagStyle?: CSSProperties,
  tagHref?: string,
  tagTarget?: HTMLAttributeAnchorTarget,

  title: React.ReactNode;
  titleClassName?: string;
  titleStyle?: CSSProperties,
  titleHeading?: 'h1' | 'h2' |'h3' |'h4' |'h5' |'h6';

  subtitle?: React.ReactNode;
  subtitleClassName?: string;
  subtitleStyle?: CSSProperties,

  dark?: boolean;
}

export default function InfoHeader({
  className,

  tag,
  tagClassName,
  tagStyle,
  tagHref,
  tagTarget,

  title,
  titleClassName,
  titleStyle,
  titleHeading = 'h2',

  subtitle,
  subtitleClassName,
  subtitleStyle,

  dark,
}: InfoHeaderProps) {
  return (
    <div className={clsx(
      className,
      styles['info-header'],
    )}>
      {tag &&
        <Tag
          className={clsx(
            tagClassName,
            styles['tag-label'],
          )}
          style={tagStyle}
          dark={dark}
          href={tagHref}
          target={tagTarget}
        >
          {tag}
        </Tag>
      }

      <Title
        className={clsx(
          titleClassName,
          styles['title'],
        )}
        heading={titleHeading}
        style={titleStyle}
        dark={dark}
      >
        {title}
      </Title>

      {subtitle &&
        <Subtitle
          className={clsx(
            subtitleClassName,
            styles['subtitle'],
          )}
          style={subtitleStyle}
          dark={dark}
        >
          {subtitle}
        </Subtitle>
      }
    </div>
  )
}
