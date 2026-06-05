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
  titleH1?: boolean;

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
  titleH1 = false,

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
        style={titleStyle}
        h1={titleH1}
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
