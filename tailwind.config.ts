import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: '#F231A5',
      secondary: '#3CD3C1',
      mainBg: '#06092B',
      white: '#FAFAFA',
      black: '#030517',
      lightGray: '#EAEAEA',
      gray: '#8F8F8F',
      darkGray: '#2E2F42',
    },
    extend: {
      spacing: {
        xxsmall: '0.8rem',
        xsmall: '1.6rem',
        small: '2.4rem',
        medium: '3.2rem',
        large: '4.0rem',
        xlarge: '4.8rem',
        xxlarge: '5.6rem',
      },
    },
  },
  plugins: [],
};
export default config;
