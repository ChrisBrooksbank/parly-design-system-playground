import type { ReactNode } from 'react';
import './Hero.css';

export interface HeroProps {
  kicker?: string;
  title: string;
  description: string;
  actions?: ReactNode;
}

export function Hero({ kicker, title, description, actions }: HeroProps) {
  return (
    <section className="pds-hero">
      <div className="pds-hero__content">
        {kicker ? <p className="pds-hero__kicker">{kicker}</p> : null}
        <h1>{title}</h1>
        <p className="pds-hero__description">{description}</p>
        {actions ? <div className="pds-hero__actions">{actions}</div> : null}
      </div>
    </section>
  );
}
