import type { Config } from 'tailwindcss';

export default {
  theme: {
    borderRadius: {
      DEFAULT: '0.4rem',
    },
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
    spacing: {
      xxsmall: '0.8rem',
      xsmall: '1.6rem',
      small: '2.4rem',
      medium: '3.2rem',
      large: '4.0rem',
      xlarge: '4.8rem',
      xxlarge: '5.6rem',
    },
    fontSize: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
    },
    fontWeight: {
      light: '300',
      normal: '400',
      bold: '600',
    },
    zIndex: {
      base: '10',
      menu: '20',
      overlay: '30',
      modal: '40',
      alwaysOnTop: '50',
    },
  },
} satisfies Partial<Config>;
