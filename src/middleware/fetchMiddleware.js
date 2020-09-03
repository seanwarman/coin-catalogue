import axios from 'axios'
import {
  GET_COINS_LIST,
  fetchingCoinsFailed,
  updateCoinsList,
} from '../features/coins-list/CoinsList.actions'

import {
  GET_COIN,
  updateCoin,
  fetchCoinFailed
} from '../features/coin/Coin.actions'

const config = {

}

const coinsListMiddleware = store => next => action => {

  next(action)

  if(action.type === GET_COINS_LIST) fetchCoinsFromApi(store, next, action)
  if(action.type === GET_COIN) fetchCoinFromApi(store, next, action)

}

async function fetchCoinsFromApi(store, next, action) {

  const { currency } = action

  let result

  try {
    result = await axios.get(`https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=${currency}`, config)
  } catch (error) {
    return next(fetchingCoinsFailed(error, error.message))
  }

  if(result.data.Response === 'Error' || !result.data.Data) return next(fetchingCoinsFailed(result, result.data.Message))

  return next(updateCoinsList(result.data.Data, currency))

}

async function fetchCoinFromApi(store, next, action) {

  const { name } = store.getState().coinsList
  const { coinID, currency } = action

  let result

  try {
    result = await axios.get(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${coinID}&tsyms=${currency}`, config)
  } catch (error) {
    console.log('There was an error getting the coin data: ', error)
    return next(fetchCoinFailed(error, error.message))
  }

  if(result.data.Response === 'Error') {
    console.log('There was an error getting the coin data: ', result.data)
    return next(fetchCoinFailed(result, result.data.Message))
  }
  
  return next(updateCoin(result.data, coinID, name, currency))


}

export default coinsListMiddleware
