import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'heading-1': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'heading-2': ['2rem', { lineHeight: '1.3', fontWeight: '700' }],
        'heading-3': ['1.75rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body-large': ['1.125rem', { lineHeight: '1.6' }],
        'body-normal': ['1rem', { lineHeight: '1.5' }],
      },
      colors: {
        'navy-blue': '#1e2761',
      },
    },
  },
  plugins: [],
};

export default config;
