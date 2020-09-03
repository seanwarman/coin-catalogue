import { createStore, applyMiddleware, compose } from 'redux'
import fetchMiddleware from './middleware/fetchMiddleware'

import reducer from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(
    fetchMiddleware
  )
))

export default store
