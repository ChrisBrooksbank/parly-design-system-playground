export const colourPalette = {
  brandBlue: '#0B4884',
  brandTeal: '#007F7B',
  brandPlum: '#5A2A83',
  brandGold: '#FBC93D',
  neutral900: '#1F1F1F',
  neutral700: '#414141',
  neutral500: '#6B6B6B',
  neutral200: '#D7D7D7',
  neutral100: '#F5F5F5',
  success: '#1A7F46',
  warning: '#B4690E',
  danger: '#C12C2C',
  info: '#0B73B5',
};

export const typography = {
  headingFont: `'Source Serif 4', 'Georgia', serif`,
  bodyFont: `'Source Sans 3', 'Helvetica Neue', Arial, sans-serif`,
  baseFontSize: '16px',
  lineHeight: 1.5,
};

export const radii = {
  subtle: '4px',
  pill: '999px',
};

export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
};

export const shadows = {
  card: '0 10px 30px rgba(0, 24, 51, 0.08)',
  focus: `0 0 0 3px rgba(11, 72, 132, 0.45)`,
};

export const transitions = {
  default: '150ms ease-out',
};

export type ColourName = keyof typeof colourPalette;
export type SpacingToken = keyof typeof spacing;
