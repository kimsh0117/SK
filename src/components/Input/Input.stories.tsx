import { ComponentStory, ComponentMeta } from '@storybook/react'
import Input from './Input'

export default {
  title: 'components|Input',
  component: Input,
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = args => <Input {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'Пример текста',
  placeholder: 'Пример текста',
}
export const Error = Template.bind({})
Error.args = {
  label: 'Пример текста',
  placeholder: 'Пример текста',
  error: true,
}
