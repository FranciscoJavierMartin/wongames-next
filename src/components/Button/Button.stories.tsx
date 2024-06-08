import { Meta, StoryObj } from '@storybook/react';
import Button from '.';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    children: {
      type: 'string',
    },
  },
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<typeof Button> = {
  args: {
    children: 'Buy now',
  },
};

export const Small: StoryObj<typeof Button> = {
  args: {
    children: 'Buy now',
    size: 'small',
  },
};

export const Medium: StoryObj<typeof Button> = {
  args: {
    children: 'Buy now',
    size: 'medium',
  },
};

export const Large: StoryObj<typeof Button> = {
  args: {
    children: 'Buy now',
    size: 'large',
  },
};

export const FullWidth: StoryObj<typeof Button> = {
  args: {
    children: 'Buy now',
  },
};
