import {
  GET_COIN,
  FETCH_COIN_FAILED,
  UPDATE_COIN,
} from './Coin.actions'

export default function coinReducer(state = {

  data: null,
  fetchingCoin: false,
  error: null,
  errorMessage: '',

}, action) {

  switch(action.type) {
    case UPDATE_COIN:
      return {
        ...state,
        fetchingCoin: false,
        error: null,
        data: formatCoinData(action),
      }
    case FETCH_COIN_FAILED:
      return {
        ...state,
        fetchingCoin: false,
        error: action.error,
        errorMessage: action.message
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

  const display = data?.DISPLAY || {}
  const coinData = display[coinID] || {}
  const coin = coinData[currency] || {}

  const formatted = {
    symbol: coinID,
    toSymbol: currency,
    volumne24H: coin.VOLUME24HOUR,
    supply: coin.SUPPLY,
    marketCap: coin.MKTCAP,
    lowDay: coin.LOWDAY,
    highDay: coin.HIGHDAY
  }

  return formatted

}
