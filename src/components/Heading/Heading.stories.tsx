import { Meta, StoryObj } from '@storybook/react';
import Heading from '.';

const meta: Meta<typeof Heading> = {
  title: 'Heading',
  component: Heading,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    children: {
      type: 'string',
    },
  },
};

export default meta;

export const Default: StoryObj<typeof Heading> = {
  args: {
    children: 'Most populars',
  },
};

export const Black: StoryObj<typeof Heading> = {
  args: {
    children: 'Most populars',
    color: 'black',
  },
};

export const LineLeft: StoryObj<typeof Heading> = {
  args: {
    children: 'Most populars',
    color: 'black',
    lineLeft: true,
  },
};

export const LineBottom: StoryObj<typeof Heading> = {
  args: {
    children: 'Most populars',
    color: 'black',
    lineBottom: true,
  },
};
