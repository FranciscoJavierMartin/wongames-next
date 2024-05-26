import { Meta, StoryObj } from '@storybook/react';
import Logo from '.';

const meta: Meta<typeof Logo> = {
  title: 'Logo',
  component: Logo,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const Default: StoryObj<typeof Logo> = {};

export const Black: StoryObj<typeof Logo> = {
  args: {
    color: 'black',
  },
};

export const White: StoryObj<typeof Logo> = {
  args: {
    color: 'white',
  },
};

export const Normal: StoryObj<typeof Logo> = {
  args: {
    color: 'black',
    size: 'normal',
  },
};

export const Large: StoryObj<typeof Logo> = {
  args: {
    color: 'black',
    size: 'large',
  },
};

export const ShowOnMobile: StoryObj<typeof Logo> = {
  args: {
    color: 'black',
    hideOnMobile: false,
  },
};

export const HideOnMobile: StoryObj<typeof Logo> = {
  args: {
    color: 'black',
    hideOnMobile: true,
  },
};
