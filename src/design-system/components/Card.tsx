import type { ReactNode } from 'react';
import './Card.css';

export interface CardProps {
  title: string;
  description: string;
  href?: string;
  eyebrow?: string;
  footer?: ReactNode;
  children?: ReactNode;
}

export function Card({ title, description, href, eyebrow, footer, children }: CardProps) {
  const content = (
    <article className="pds-card">
      {eyebrow ? <p className="pds-card__eyebrow">{eyebrow}</p> : null}
      <h3 className="pds-card__title">{title}</h3>
      <p className="pds-card__description">{description}</p>
      {children ? <div className="pds-card__content">{children}</div> : null}
      {footer ? <footer className="pds-card__footer">{footer}</footer> : null}
    </article>
  );

  if (href) {
    return (
      <a className="pds-card__link-wrapper" href={href}>
        {content}
      </a>
    );
  }

  return content;
}
