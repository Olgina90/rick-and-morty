import type { Meta, StoryObj } from '@storybook/react'
import RnMCard from '.'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof RnMCard> = {
  title: 'RnM/Card',
  component: RnMCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    status: { control: 'select', options: ['Alive', 'Dead', 'unknown'] },
  },
  args: {
    name: 'Morty Smith',
    status: 'Alive',
    race: 'Human',
    firstSeenIn: 'Earth',
    lastLocation: 'Earth',
    avatarSrc: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
  },
}

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {},
}

export const StatusAlive: Story = {
  args: {
    status: 'Alive',
    race: 'Alien'
  },
}

export const StatusDead: Story = {
  args: {
    status: 'Dead',
  },
}

export const StatusUnknown: Story = {
  args: {
    status: 'unknown',
  },
}
