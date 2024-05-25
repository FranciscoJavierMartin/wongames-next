import type { Config } from 'tailwindcss';
import wongamesTheme from './wongames-theme';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  presets: [wongamesTheme],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
