import type { Meta, StoryObj } from '@storybook/react'
import Chip from '.'

const meta: Meta<typeof Chip> = {
  title: 'components/Chip',
  component: Chip,
  args: {
    label: 'davide',
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'olga',
  },
}

export const Extra: Story = {}
