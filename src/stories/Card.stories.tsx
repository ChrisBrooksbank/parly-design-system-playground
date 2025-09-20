import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, Card } from '../design-system';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  args: {
    title: 'Committee call for evidence',
    description:
      'Use cards to group related actions and make calls to action scan-friendly. Keep copy concise and outcome focused.',
    footer: <Button variant="ghost">Open guidance</Button>,
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Playground: Story = {};

export const LinkCard: Story = {
  args: {
    href: '#',
  },
};

export const WithExtraContent: Story = {
  args: {
    children: <p style={{ margin: 0 }}>Add supporting content such as deadlines, contacts or related documents.</p>,
  },
};
