import type { Meta, StoryObj } from '@storybook/react'
import { Top } from './Top'

const meta = {
  title: 'Pages/Top',
  component: Top,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Top>
export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
