import type { ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';
import './Button.css';

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'ghost';
export type ButtonSize = 'default' | 'small';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  iconPosition?: 'start' | 'end';
  loading?: boolean;
}

export function Button({
  children,
  className,
  variant = 'primary',
  size = 'default',
  icon,
  iconPosition = 'start',
  loading = false,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'pds-button',
        `pds-button--${variant}`,
        `pds-button--${size}`,
        {
          'pds-button--icon-only': icon && !children,
          'pds-button--loading': loading,
        },
        className,
      )}
      disabled={disabled || loading}
      {...props}
    >
      {icon && iconPosition === 'start' ? <span className="pds-button__icon">{icon}</span> : null}
      {children ? <span className="pds-button__label">{children}</span> : null}
      {icon && iconPosition === 'end' ? <span className="pds-button__icon">{icon}</span> : null}
      {loading ? <span className="pds-button__spinner" aria-hidden /> : null}
    </button>
  );
}
