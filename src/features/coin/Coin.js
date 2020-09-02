import React from 'react'
import { connect } from 'react-redux'

function Coin() {
  return (
    <div id="coin">COIN!</div>
  )
}

export default connect()(Coin)
