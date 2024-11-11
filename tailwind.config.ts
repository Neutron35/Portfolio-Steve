import type { Config } from 'tailwindcss';

import animatedPlugin from 'tailwindcss-animated';
import intersectPlugin from 'tailwindcss-intersect';

const config = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      colors: {
        black1: 'rgb(var(--black1))',
        black2: 'rgb(var(--black2))',
        grey1: 'rgba(var(--grey1),0.25)',
        grey2: 'rgba(var(--grey2),0.5)',
        white: 'rgb(var(--white))',
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [animatedPlugin, intersectPlugin],
} satisfies Config;

export default config;
