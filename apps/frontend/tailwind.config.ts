import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae3fd',
          300: '#7ccffd',
          400: '#38bafb',
          500: '#014FBB',
          600: '#0047a3',
          700: '#003d83',
          800: '#00356b',
          900: '#002d57',
        },
        'success': '#10b981',
        'danger': '#ef4444',
        'warning': '#f59e0b',
        'neutral': '#6b7280',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
