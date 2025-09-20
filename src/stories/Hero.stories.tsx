import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, Hero } from '../design-system';

const meta: Meta<typeof Hero> = {
  title: 'Components/Hero',
  component: Hero,
  args: {
    kicker: 'Experiment',
    title: 'Shape Parliament experiences',
    description:
      'Pair hero layouts with clear actions to direct members and the public to the most up to date information.',
    actions: (
      <>
        <Button>Primary action</Button>
        <Button variant="tertiary">Secondary</Button>
      </>
    ),
  },
};

export default meta;

type Story = StoryObj<typeof Hero>;

export const Playground: Story = {};

export const WithoutActions: Story = {
  args: {
    actions: null,
  },
};
