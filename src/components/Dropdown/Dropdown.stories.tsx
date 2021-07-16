import React from 'react'
import Dropdown from './Dropdown'
import { ThemeProvider } from 'styled-components'
import theme from '../../styles/theme'

export default {
  title: 'components|Dropdown',
  component: Dropdown,
}

export const select = () => {
  const list = ['Пример текста1', 'Пример текста2', 'Пример текста3', 'Пример текста4']
  return (
    <ThemeProvider theme={theme}>
      <Dropdown label='От куда узнали про нас?' list={list}></Dropdown>
    </ThemeProvider>
  )
}

export const selectError = () => {
  const list = ['Пример текста1', 'Пример текста2', 'Пример текста3', 'Пример текста4']
  return (
    <ThemeProvider theme={theme}>
      <Dropdown label='От куда узнали про нас?' list={list} error={true}></Dropdown>
    </ThemeProvider>
  )
}
