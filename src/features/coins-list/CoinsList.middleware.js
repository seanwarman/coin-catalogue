import axios from 'axios'
import {
  FETCHING_COINS_LIST,
  fetchingCoinsFailed,
  updateCoinsList,
} from './CoinsList.actions'

const config = {

}

const coinsListMiddleware = store => next => action => {

  next(action)

  if(action.type === FETCHING_COINS_LIST) fetchCoinsFromApi(store, next, action)

}

const fetchCoinsFromApi = async (store, next, action) => {

  const { currency } = action

  let result

  try {
    result = await axios.get(`https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=${currency}`, config)
  } catch (error) {
    return next(fetchingCoinsFailed(error))
  }

  if(result.data.Response === 'Error' || !result.data.Data) return next(fetchingCoinsFailed(result.data))

  return next(updateCoinsList(result.data.Data))

}

export default coinsListMiddleware
