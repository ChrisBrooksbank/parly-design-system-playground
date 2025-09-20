import { useState, type ReactNode } from 'react';
import clsx from 'clsx';
import './Navigation.css';

export interface NavigationLink {
  label: string;
  href: string;
}

export interface NavigationProps {
  title: string;
  links: NavigationLink[];
  cta?: ReactNode;
}

export function Navigation({ title, links, cta }: NavigationProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="pds-nav" data-open={open}>
      <div className="pds-nav__inner">
        <div className="pds-nav__branding">
          <span className="pds-nav__crest" aria-hidden>
            ♚
          </span>
          <span className="pds-nav__title">{title}</span>
        </div>
        <button
          className="pds-nav__toggle"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="pds-nav-menu"
        >
          Menu
        </button>
        <nav id="pds-nav-menu" className={clsx('pds-nav__menu')} aria-label="Primary">
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
          {cta ? <div className="pds-nav__cta">{cta}</div> : null}
        </nav>
      </div>
    </header>
  );
}
