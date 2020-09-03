export const FETCHING_COINS_LIST   = 'coinsList/FETCHING_COINS_LIST'
export const UPDATE_COINS_LIST     = 'coinsList/UPDATE_COINS_LIST'
export const FETCHING_COINS_FAILED = 'coinsList/FETCHING_COINS_FAILED'

export const fetchCoinsList = currency => ({
  type: FETCHING_COINS_LIST,
  currency
})

export const updateCoinsList = coins => ({
  type: UPDATE_COINS_LIST,
  coins
})

export const fetchingCoinsFailed = error => ({
  type: FETCHING_COINS_FAILED,
  error
})
