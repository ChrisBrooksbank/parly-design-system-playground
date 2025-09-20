import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../design-system';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    controls: { expanded: true },
  },
  args: {
    children: 'Primary action',
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary', 'ghost'],
      control: 'inline-radio',
    },
    size: {
      options: ['default', 'small'],
      control: 'inline-radio',
    },
    iconPosition: {
      options: ['start', 'end'],
      control: 'inline-radio',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Playground: Story = {};

export const WithIcon: Story = {
  args: {
    icon: '⬇',
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};
