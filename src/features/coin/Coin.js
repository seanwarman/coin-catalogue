import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
  getCoin
} from './Coin.actions'

function Coin({
  match,
  getCoin
}) {

  const { coinID } = match.params

  useEffect(() => {

    if(coinID) getCoin(coinID)
    
  }, [getCoin, coinID])

  return (
    <div id="coin">COIN!</div>
  )
}

export default connect(
  ({ coinsList }) => ({
    currency: coinsList.currency
  }),
  {
    getCoin
  }
)(Coin)
