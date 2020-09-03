import coinsListReducer from './features/coins-list/CoinsList.reducer'

export default function reducer(state = {}, action) {
  return {
    coinsList: coinsListReducer(state.coinsList, action)
  }
}
