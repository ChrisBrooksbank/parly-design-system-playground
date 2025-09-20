import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, Notice } from '../design-system';

const meta: Meta<typeof Notice> = {
  title: 'Components/Notice',
  component: Notice,
  args: {
    title: 'House business notice',
    tone: 'info',
    children:
      'Keep members informed about schedule changes, petitions or committee updates. Use tone to communicate urgency and actions for next steps.',
    action: <Button size="small">View detail</Button>,
  },
  argTypes: {
    tone: {
      options: ['info', 'success', 'warning', 'danger'],
      control: 'inline-radio',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Notice>;

export const Playground: Story = {};

export const Warning: Story = {
  args: {
    tone: 'warning',
    title: 'Service interruption',
  },
};
