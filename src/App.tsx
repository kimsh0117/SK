import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { routes } from './lib/routes'

const App: React.FC = () => (
  <>
    <Switch>
      {routes.map(({ path, page, exact }, i) => (
        <Route exact={exact} path={path} component={page} key={i} />
      ))}
    </Switch>
  </>
)

export default App
