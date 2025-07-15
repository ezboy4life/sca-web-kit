import styles from './feature-card.module.scss';

import React from 'react';
import { Title, Subtitle, SpanLabel, Button } from '@/components';

interface FeatureCardProps {
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

export default function FeatureCard({
  spanLabel,
  title,
  subtitle,
  buttonLabel,
  className = '',
  titleClassName = '',
  subtitleClassName = '',
  dark = false,
}: FeatureCardProps) {
  return (
    <div className={`${styles['feature-card']} ${className}`}>
      {spanLabel && <SpanLabel label={spanLabel} dark={dark} />}

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
