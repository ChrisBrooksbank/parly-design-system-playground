import type { ReactNode } from 'react';
import clsx from 'clsx';
import './Notice.css';

export type NoticeTone = 'info' | 'success' | 'warning' | 'danger';

export interface NoticeProps {
  title: string;
  tone?: NoticeTone;
  children: ReactNode;
  action?: ReactNode;
}

export function Notice({ title, tone = 'info', children, action }: NoticeProps) {
  return (
    <section className={clsx('pds-notice', `pds-notice--${tone}`)} role="status" aria-live="polite">
      <div className="pds-notice__content">
        <h3>{title}</h3>
        <div className="pds-notice__body">{children}</div>
      </div>
      {action ? <div className="pds-notice__action">{action}</div> : null}
    </section>
  );
}
