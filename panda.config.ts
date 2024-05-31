import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          primary: { value: '#F231A5' },
          secondary: { value: '#3CD3C1' },
          mainBg: { value: '#06092B' },
          white: { value: '#FAFAFA' },
          black: { value: '#030517' },
          lightGray: { value: '#EAEAEA' },
          gray: { value: '#8F8F8F' },
          darkGray: { value: '#2E2F42' },
        },
        fontSizes: {
          xsmall: { value: '1.2rem' },
          small: { value: '1.4rem' },
          medium: { value: '1.6rem' },
          large: { value: '1.8rem' },
          xlarge: { value: '2.0rem' },
          xxlarge: { value: '2.8rem' },
        },
        fontWeights: {
          light: { value: '300' },
          normal: { value: '400' },
          bold: { value: '600' },
        },
        spacing: {
          xxsmall: { value: '0.8rem' },
          xsmall: { value: '1.6rem' },
          small: { value: '2.4rem' },
          medium: { value: '3.2rem' },
          large: { value: '4.0rem' },
          xlarge: { value: '4.8rem' },
          xxlarge: { value: '5.6rem' },
        },
        zIndex: {
          base: { value: '10' },
          menu: { value: '20' },
          overlay: { value: '30' },
          modal: { value: '40' },
          alwaysOnTop: { value: '50' },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
});
