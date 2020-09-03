import React from 'react'
import { icons } from './icons.js'

function Icon({
  symbol
}) {
  return (
    icons.find(i => i.symbol === symbol) ?
      <img src={`/icons/${symbol.toLowerCase()}.svg`} alt="crypto-icon" />
      :
      <img src={`/icons/generic.svg`} alt="crypto-icon" />
  )
}

export default Icon
