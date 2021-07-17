import { ComponentStory, ComponentMeta } from '@storybook/react'
import Button from './Button'

export default {
  title: 'components|Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args}>Пример текста</Button>

export const Primary = Template.bind({})

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
  loading: false,
}

export const Loading = Template.bind({})
Loading.args = {
  disabled: false,
  loading: true,
}
