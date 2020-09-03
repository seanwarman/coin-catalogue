import coinReducer from './features/coin/Coin.reducer'
import coinsListReducer from './features/coins-list/CoinsList.reducer'

export default function reducer(state = {}, action) {
  return {
    currency: null,
    coin: coinReducer(state.coin, action),
    coinsList: coinsListReducer(state.coinsList, action)
  }
}
