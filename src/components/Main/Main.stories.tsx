import { Meta, StoryObj } from '@storybook/react';
import Main from '.';

export const Default: StoryObj<typeof Main> = {};

const meta: Meta<typeof Main> = {
  title: 'Main',
  component: Main,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
