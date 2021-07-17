import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { store } from './store'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { Router } from 'react-router-dom'
import theme from './styles/theme'
import history from './lib/routes/history'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
