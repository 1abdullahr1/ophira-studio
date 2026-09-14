/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      white: '#ffffff',
      text: '#050315',
      background: '#fbfbfe',
      secondary: '#dedcff',
      accent: '#433bff',
      primary: {
        50: '#fbfbfe',   // --background (#fbfbfe)
        100: '#dedcff',  // --secondary (#dedcff)
        200: '#c5c2ff',  // dark-mode readable text
        300: '#9b94ff',
        400: '#433bff',  // --accent (#433bff)
        500: '#3830eb',
        600: '#2f27ce',  // --primary (#2f27ce)
        700: '#241da8',  // hover CTA
        800: '#1b1682',
        900: '#130f5c',
        950: '#050315',  // --text (#050315)
      },
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
