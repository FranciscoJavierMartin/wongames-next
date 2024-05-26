import { Meta, StoryObj } from '@storybook/react';
import Logo, { type LogoProps } from '.';

const meta: Meta<typeof Logo> = {
  title: 'Logo',
  component: Logo,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const Default: StoryObj<typeof Logo> = {};
