import { Meta, StoryObj } from '@storybook/react/*'
import Card from '.'
import Image from '../Image'
import Text from '../Text'
import Chip from '../Chip'
import Box from '../Box'

const meta: Meta<typeof Card> = {
  title: 'components/Card',
  component: Card,
  decorators: [
    (Story) => (
      <div style={{ width: 300 }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

//Homework. mettere la story userCard e come argumento il children che voglio(imagine, testo, chip)

export const UserCard: Story = {
  args: {
    children: (
      <Box>
        <Image/>
        <Text></Text>
        <Chip label="chip label"/>
      </Box>
    ),
  },
}
