import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const CoinsList = lazy(() => import('./features/coins-list/CoinsList'))
const Coin      = lazy(() => import('./features/coin/Coin'))

const Routes = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>

        <Route exact path="/" component={CoinsList} />
        <Route path="/:coinID" component={Coin} />

      </Switch>
    </Suspense>
  </Router>
)

export default Routes
