/**
 * Design Tokens
 * Central source of truth for design values used across the portfolio
 */

export const tokens = {
  colors: {
    // Background colors
    bg: {
      primary: '#ffffff',
      secondary: '#f8f9fa',
      card: '#f5f5f0',
      nav: '#3d5a6c',
      footer: '#3d5a6c',
    },
    // Text colors
    text: {
      primary: '#2d3748',
      secondary: '#4a5568',
      muted: '#718096',
      light: '#ffffff',
    },
    // Accent colors
    accent: {
      burgundy: '#8b2942',
      teal: '#3d5a6c',
      tealLight: '#5a7a8a',
    },
    // Border colors
    border: {
      default: '#e2e8f0',
      card: '#d4d4c8',
    },
    // Tag colors
    tag: {
      bg: '#ffffff',
      border: '#cbd5e0',
      text: '#4a5568',
    },
  },
  // Spacing tokens
  spacing: {
    xs: '0.25rem',    // 4px
    sm: '0.5rem',     // 8px
    md: '1rem',       // 16px
    lg: '1.5rem',     // 24px
    xl: '2rem',       // 32px
    '2xl': '2.5rem',  // 40px
    '3xl': '3rem',    // 48px
    '4xl': '4rem',    // 64px
    '5xl': '5rem',    // 80px
  },
  // Typography tokens
  typography: {
    fontFamily: {
      primary: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
      mono: "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
    },
    fontSize: {
      xs: '0.75rem',   // 12px
      sm: '0.875rem',  // 14px
      base: '1rem',    // 16px
      lg: '1.125rem',  // 18px
      xl: '1.25rem',   // 20px
      '2xl': '1.5rem', // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem',  // 36px
      '5xl': '3rem',     // 48px
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
  // Border radius tokens
  borderRadius: {
    sm: '0.25rem',   // 4px
    md: '0.375rem',  // 6px
    lg: '0.5rem',    // 8px
    xl: '0.75rem',   // 12px
    full: '9999px',
  },
  // Shadow tokens
  shadow: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
  },
  // Breakpoints (for reference, used with Tailwind)
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
} as const;

// Helper type for token paths
export type TokenPath = 
  | `colors.${keyof typeof tokens.colors}.${string}`
  | `spacing.${keyof typeof tokens.spacing}`
  | `typography.${keyof typeof tokens.typography}.${string}`
  | `borderRadius.${keyof typeof tokens.borderRadius}`
  | `shadow.${keyof typeof tokens.shadow}`;

// Helper function to get token value (for future use)
export const getToken = (path: TokenPath): string => {
  const parts = path.split('.');
  let value: any = tokens;
  for (const part of parts) {
    value = value[part];
    if (value === undefined) {
      throw new Error(`Token path "${path}" not found`);
    }
  }
  return value;
};
