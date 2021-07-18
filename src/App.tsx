import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

import { routes } from './lib/routes'

const App: React.FC = () => (
  <>
    <Helmet>
      <title>SK Design - интернет магазин современной дизайнерской</title>
    </Helmet>
    <Switch>
      {routes.map(({ path, page, exact }, i) => (
        <Route exact={exact} path={path} component={page} key={i} />
      ))}
    </Switch>
  </>
)

export default App
