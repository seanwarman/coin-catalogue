import {
  FETCHING_COINS_LIST,
  UPDATE_COINS_LIST,
  FETCHING_COINS_FAILED,
} from './CoinsList.actions'

export default function coinsListReducer(state = {

  coins: [],
  fetchingCoins: false,
  error: null,
  currency: 'GBP',

}, action) {
  switch (action.type) {
    case FETCHING_COINS_LIST:
      return {
        ...state,
        fetchingCoins: true,
        currency: action.currency,
        error: null,
      }
    case UPDATE_COINS_LIST:
      return {
        ...state,
        fetchingCoins: false,
        coins: formatCoinsData(state.currency, action.coins),
        error: null,
      }
    case FETCHING_COINS_FAILED:
      return {
        ...state,
        fetchingCoins: false,
        error: action.error,
      }
    default:
      return state
  }
}

function formatCoinsData(currency, data) {

  return data.map(d => {
    return {
      id:     d.CoinInfo.Id,
      symbol: d.CoinInfo.Name,
      name:   d.CoinInfo.FullName,
      price:  d.DISPLAY[currency].PRICE,
      change24H: d.DISPLAY[currency].CHANGE24HOUR,
    }
  })

}
