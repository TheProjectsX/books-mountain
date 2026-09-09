/**
 * Design Tokens for Books Mountain (Theme: Literary Precision)
 * Automatically parsed and mapped from DESIGN.md
 */

export interface ColorTokens {
  primary: string;
  primaryContainer: string;
  onPrimary: string;
  secondary: string;
  secondaryContainer: string;
  onSecondary: string;
  tertiary: string;
  tertiaryContainer: string;
  onTertiaryContainer: string;
  accent: string;
  background: string;
  surface: string;
  surfaceContainer: string;
  surfaceContainerLow: string;
  surfaceContainerHigh: string;
  textPrimary: string;
  textSecondary: string;
  border: string;
  borderVariant: string;
  outline: string;
  error: string;
  success: string;
  warning: string;
}

export interface TypographyStyle {
  fontFamily: string;
  fontSize: string;
  fontWeight: string;
  lineHeight: string;
  letterSpacing?: string;
}

export interface TypographyTokens {
  headingFont: string;
  bodyFont: string;
  buttonFont: string;
  labelFont: string;
  h1: TypographyStyle;
  h1Mobile: TypographyStyle;
  h2: TypographyStyle;
  h3: TypographyStyle;
  h4: TypographyStyle;
  h5: TypographyStyle;
  h6: TypographyStyle;
  body: TypographyStyle;
  small: TypographyStyle;
  label: TypographyStyle;
  button: TypographyStyle;
}

export interface RadiusTokens {
  sm: string;
  default: string;
  md: string;
  lg: string;
  xl: string;
  full: string;
}

export interface SpacingTokens {
  base: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  gutter: string;
  marginMobile: string;
  marginDesktop: string;
}

export interface DesignSystemTokens {
  name: string;
  colors: ColorTokens;
  typography: TypographyTokens;
  radius: RadiusTokens;
  spacing: SpacingTokens;
}

export const designTokens: DesignSystemTokens = {
  name: 'Literary Precision',
  colors: {
    primary: '#030220',
    primaryContainer: '#1b1b3a',
    onPrimary: '#ffffff',
    secondary: '#585f6c',
    secondaryContainer: '#dce2f3',
    onSecondary: '#ffffff',
    tertiary: '#140003',
    tertiaryContainer: '#450015',
    onTertiaryContainer: '#ee476f',
    accent: '#ee476f',
    background: '#f9f9fb',
    surface: '#ffffff',
    surfaceContainer: '#edeef0',
    surfaceContainerLow: '#f3f3f5',
    surfaceContainerHigh: '#e8e8ea',
    textPrimary: '#1a1c1d',
    textSecondary: '#585f6c',
    border: '#e2e2e4',
    borderVariant: '#c8c5ce',
    outline: '#78767e',
    error: '#ba1a1a',
    // Inferred clean neutral defaults (not explicitly in DESIGN.md):
    success: '#16a34a',
    warning: '#d97706',
  },
  typography: {
    headingFont: 'Public Sans, -apple-system, BlinkMacSystemFont, sans-serif',
    bodyFont: 'Public Sans, -apple-system, BlinkMacSystemFont, sans-serif',
    buttonFont: 'Space Grotesk, -apple-system, BlinkMacSystemFont, sans-serif',
    labelFont: 'Space Grotesk, -apple-system, BlinkMacSystemFont, sans-serif',
    h1: {
      fontFamily: 'Public Sans',
      fontSize: '48px',
      fontWeight: '700',
      lineHeight: '1.2',
      letterSpacing: '-0.02em',
    },
    h1Mobile: {
      fontFamily: 'Public Sans',
      fontSize: '32px',
      fontWeight: '700',
      lineHeight: '1.2',
      letterSpacing: '-0.01em',
    },
    h2: {
      fontFamily: 'Public Sans',
      fontSize: '32px',
      fontWeight: '600',
      lineHeight: '1.3',
      letterSpacing: '-0.01em',
    },
    h3: {
      fontFamily: 'Public Sans',
      fontSize: '20px',
      fontWeight: '500',
      lineHeight: '1.4',
    },
    h4: {
      fontFamily: 'Public Sans',
      fontSize: '18px',
      fontWeight: '500',
      lineHeight: '1.4',
    },
    h5: {
      fontFamily: 'Public Sans',
      fontSize: '16px',
      fontWeight: '500',
      lineHeight: '1.4',
    },
    h6: {
      fontFamily: 'Public Sans',
      fontSize: '14px',
      fontWeight: '500',
      lineHeight: '1.4',
    },
    body: {
      fontFamily: 'Public Sans',
      fontSize: '16px',
      fontWeight: '400',
      lineHeight: '1.6',
    },
    small: {
      fontFamily: 'Public Sans',
      fontSize: '12px',
      fontWeight: '400',
      lineHeight: '1.4',
    },
    label: {
      fontFamily: 'Space Grotesk',
      fontSize: '12px',
      fontWeight: '500',
      lineHeight: '1',
      letterSpacing: '0.1em',
    },
    button: {
      fontFamily: 'Space Grotesk',
      fontSize: '14px',
      fontWeight: '600',
      lineHeight: '1',
      letterSpacing: '0.05em',
    },
  },
  radius: {
    sm: '0.125rem', // 2px
    default: '0.25rem', // 4px
    md: '0.375rem', // 6px
    lg: '0.5rem', // 8px
    xl: '0.75rem', // 12px
    full: '9999px',
  },
  spacing: {
    base: '8px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '48px',
    gutter: '16px',
    marginMobile: '16px',
    marginDesktop: '32px',
  },
};
