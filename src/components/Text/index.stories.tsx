import { Meta, StoryObj } from "@storybook/react/*";
import Text from ".";

const meta: Meta<typeof Text> = {
    title: 'components/Text',
    component: Text
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}