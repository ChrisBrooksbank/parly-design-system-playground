import type { Meta, StoryObj } from '@storybook/react-vite';
import { Tag } from '../design-system';

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  args: {
    children: 'House of Commons',
  },
  argTypes: {
    tone: {
      options: ['neutral', 'info', 'success', 'warning', 'danger'],
      control: 'inline-radio',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tag>;

export const Playground: Story = {};

export const WithIcon: Story = {
  args: {
    tone: 'info',
    icon: 'ℹ️',
    children: 'Guidance update',
  },
};
