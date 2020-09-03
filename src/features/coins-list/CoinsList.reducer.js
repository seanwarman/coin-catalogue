import {
  GET_COINS_LIST,
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
    case GET_COINS_LIST:
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
        coins: formatCoinsData(action),
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

function formatCoinsData({ data, currency }) {
  return data.map(d => {

    const coinInfo = d?.coinInfo || {}
    const display = d?.DISPLAY || {}
    const displayData = display[currency] || {}

    return {
      id:     coinInfo.Id,
      symbol: coinInfo.Name,
      name:   coinInfo.FullName,
      price:  displayData.PRICE,
      change24H: displayData.CHANGE24HOUR,
    }
  })

}

