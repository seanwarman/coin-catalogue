import { createStore, applyMiddleware, compose } from 'redux'
import coinsListMiddleware from './features/coins-list/CoinsList.middleware'

import reducer from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(
    coinsListMiddleware
  )
))

export default store
