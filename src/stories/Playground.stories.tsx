import type { Meta, StoryObj } from '@storybook/react-vite';
import App from '../App';
import '../index.css';

const meta: Meta<typeof App> = {
  title: 'Pages/Playground',
  component: App,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

type Story = StoryObj<typeof App>;

export const FullExperience: Story = {};
