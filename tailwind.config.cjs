/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      white: '#ffffff',
      primary: {
        50: '#f5f7fa',   // Platinum (light mode background)
        100: '#e5eef9',
        200: '#cfe0f7',
        300: '#9bc2ff',
        400: '#4ea5ff',  // Cool Horizon (dark mode accent)
        500: '#288eff',
        600: '#207bff',  // Azure Blue (primary brand CTA / accent)
        700: '#1162db',
        800: '#0f4eb3',
        900: '#124388',
        950: '#091629',  // Deep dark mode navy canvas / dark text
      },
      'azure-blue': '#207bff',
      'cool-horizon': '#4ea5ff',
      'platinum': '#f5f7fa',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    fontSize: {
      xs: ['0.75rem', '1rem'],
      sm: ['0.875rem', '1.25rem'],
      base: ['1rem', '1.75rem'],
      lg: ['1.125rem', '2rem'],
      xl: ['1.25rem', '2.125rem'],
      '2xl': ['1.5rem', '2rem'],
      '3xl': ['1.875rem', '2.375rem'],
      '4xl': ['2.25rem', '2.75rem'],
      '5xl': ['3rem', '3.5rem'],
      '6xl': ['3.75rem', '4.25rem'],
    },
  },
};
