import React from 'react'
import Input from './Input'
import { ThemeProvider } from 'styled-components'
import theme from '../../styles/theme'

export default {
  title: 'components|Input',
  component: Input,
}

export const input = () => {
  return (
    <ThemeProvider theme={theme}>
      <Input label='Пример текста' placeholder='Пример текста'></Input>
    </ThemeProvider>
  )
}
export const errorInput = () => {
  return (
    <ThemeProvider theme={theme}>
      <Input label='Пример текста' placeholder='Пример текста' error={true}></Input>
    </ThemeProvider>
  )
}
