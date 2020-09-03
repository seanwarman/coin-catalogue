export const GET_COINS_LIST   = 'coinsList/GET_COINS_LIST'
export const UPDATE_COINS_LIST     = 'coinsList/UPDATE_COINS_LIST'
export const FETCHING_COINS_FAILED = 'coinsList/FETCHING_COINS_FAILED'
export const SET_CURRENCY = 'coinsList/SET_CURRENCY'

export const getCoinsList = currency => ({
  type: GET_COINS_LIST,
  currency
})

export const updateCoinsList = (data, currency) => ({
  type: UPDATE_COINS_LIST,
  data, currency
})

export const fetchingCoinsFailed = error => ({
  type: FETCHING_COINS_FAILED,
  error
})

export const setCurrency = currency => ({
  type: SET_CURRENCY,
  currency
})
