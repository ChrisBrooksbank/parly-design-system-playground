import type { ReactNode } from 'react';
import clsx from 'clsx';
import './Tag.css';

export type TagTone = 'neutral' | 'info' | 'success' | 'warning' | 'danger';

export interface TagProps {
  children: ReactNode;
  tone?: TagTone;
  icon?: ReactNode;
}

export function Tag({ children, tone = 'neutral', icon }: TagProps) {
  return (
    <span className={clsx('pds-tag', `pds-tag--${tone}`)}>
      {icon ? <span className="pds-tag__icon" aria-hidden>{icon}</span> : null}
      <span>{children}</span>
    </span>
  );
}
