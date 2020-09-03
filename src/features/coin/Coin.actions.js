export const GET_COIN = 'coin/GET_COIN'
export const FETCH_COIN_FAILED = 'coin/FETCH_COIN_FAILED'
export const UPDATE_COIN = 'coin/UPDATE_COIN'

export const getCoin = (coinID, currency) => ({
  type: GET_COIN,
  coinID, currency
})

export const fetchCoinFailed = (error, message) => ({
  type: FETCH_COIN_FAILED,
  error, message
})

export const updateCoin = (data, coinID, name, currency) => ({
  type: UPDATE_COIN,
  data, coinID, name, currency
})
