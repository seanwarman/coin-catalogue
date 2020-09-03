import {
  SET_CURRENCY,
  GET_COINS_LIST,
  UPDATE_COINS_LIST,
  FETCHING_COINS_FAILED,
} from './CoinsList.actions'

export default function coinsListReducer(state = {

  coins: null,
  fetchingCoins: false,
  error: null,
  currency: 'GBP',

}, action) {
  switch (action.type) {
    case SET_CURRENCY:
      return {
        ...state,
        currency: action.currency
      }
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

  const coinsList = data.map(d => {

    const coinInfo = d?.CoinInfo || {}
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

  return coinsList

}

