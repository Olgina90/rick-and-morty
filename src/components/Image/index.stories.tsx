import { Meta, StoryObj } from "@storybook/react/*";
import Image from ".";


const meta: Meta<typeof Image> = {
    title: 'components/Image',
    component: Image
}

export default meta 
type Story = StoryObj<typeof meta>

export const Default: Story = {}