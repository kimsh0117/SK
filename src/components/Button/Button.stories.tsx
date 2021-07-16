import React from 'react'
import Button from './Button'
import { ThemeProvider } from 'styled-components'
import theme from '../../styles/theme'

export default {
  title: 'components|Button',
  component: Button,
}

export const button = () => {
  return (
    <ThemeProvider theme={theme}>
      <Button>Пример текста</Button>
    </ThemeProvider>
  )
}

export const disabledButton = () => {
  return (
    <ThemeProvider theme={theme}>
      <Button disabled={true} loading={false}>
        Пример текста
      </Button>
    </ThemeProvider>
  )
}

export const loadingButton = () => {
  return (
    <ThemeProvider theme={theme}>
      <Button disabled={false} loading={true}>
        Пример текста
      </Button>
    </ThemeProvider>
  )
}
