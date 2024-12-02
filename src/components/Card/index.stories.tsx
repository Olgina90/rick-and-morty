import { Meta, StoryObj } from "@storybook/react/*";
import Card from ".";

const meta: Meta<typeof Card> = {
    title: 'components/Card',
    component: Card,
    decorators: [(Story) => <div style={{width: 300}}><Story /></div>]
}

export default meta 
type Story = StoryObj<typeof meta>

export const Default: Story = {

}