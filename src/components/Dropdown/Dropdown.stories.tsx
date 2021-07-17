import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Dropdown from './DropdownBtn'
import Menu from './Menu'
import MenuItem from './MenuItem'
import cities from '../../lib/api/cities.json'

export default {
  title: 'components|Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>

const Template: ComponentStory<typeof Dropdown> = args => {
  const [isListOpen, OpenList] = useState(false)
  const toggleDropdown = (): void => {
    OpenList(!isListOpen)
  }
  const [selected, setItem] = useState<string | null>(null)
  const selectItem = (item: string): void => {
    setItem(item)
    OpenList(!isListOpen)
  }
  return (
    <>
      <Dropdown
        {...args}
        isListOpen={isListOpen}
        onClick={toggleDropdown}
        selected={selected}
      ></Dropdown>
      {isListOpen && (
        <Menu>
          {cities.map((item, index) => (
            <MenuItem key={index} onClick={() => selectItem(item.name)}>
              {item.name}
            </MenuItem>
          ))}
        </Menu>
      )}
    </>
  )
}

export const Primary = Template.bind({})
Primary.args = {
  label: 'От куда узнали про нас?',
}

export const ErrorDropdown = Template.bind({})
ErrorDropdown.args = {
  label: 'От куда узнали про нас?',
  error: true,
}
