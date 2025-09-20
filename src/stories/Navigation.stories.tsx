import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, Navigation } from '../design-system';

const meta: Meta<typeof Navigation> = {
  title: 'Components/Navigation',
  component: Navigation,
  args: {
    title: 'Parliament service',
    links: [
      { label: 'Members', href: '#' },
      { label: 'Committees', href: '#' },
      { label: 'Bills & legislation', href: '#' },
      { label: 'Get involved', href: '#' },
    ],
    cta: <Button size="small">Sign in</Button>,
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof Navigation>;

export const Playground: Story = {};

export const WithoutCta: Story = {
  args: {
    cta: undefined,
  },
};
