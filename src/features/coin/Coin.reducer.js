import {
  GET_COIN,
  FETCH_COIN_FAILED,
  UPDATE_COIN,
} from './Coin.actions'

export default function coinReducer(state = {

  coin: {},
  fetchingCoin: false,
  error: null,

}, action) {

  switch(action.type) {
    case UPDATE_COIN:
      return {
        ...state,
        fetchingCoin: false,
        error: null,
        coin: formatCoinData(action)
      }
    case FETCH_COIN_FAILED:
      return {
        ...state,
        fetchingCoin: false,
        error: action.error
      }
    case GET_COIN:
      return {
        ...state,
        currency: action.currency,
        fetchingCoin: true,
        error: null,
      }
    default:
      return state
  }
  
}

function formatCoinData({ data, coinID, currency }) {

  const coinData = data?.DISPLAY?.COIN || {}
  const coin = coinData[currency] || {}

  return {
    volumne24H: coin.VOLUME24HOUR,
    supply: coin.SUPPLY,
    marketCap: coin.MKTCAP,
    lowDay: coin.LOWDAY,
    highDay: coin.HIGHDAY
  }

}
