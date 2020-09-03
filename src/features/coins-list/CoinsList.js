import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
  Table
} from 'antd'

import columns from './CoinsList.columns'

import { fetchCoinsList } from './CoinsList.actions'

function CoinsList({
  fetchCoinsList,
  fetchingCoins,
  coins,
  currency,
}) {

  useEffect(() => {
    fetchCoinsList(currency)
    const timeId = setTimeout(() => fetchCoinsList(currency), 60000)

    return () => clearTimeout(timeId)

  }, [fetchCoinsList, currency])

  return (
    <Table
      size="small"
      rowKey="id"
      loading={fetchingCoins}
      dataSource={coins}
      columns={columns()}
    >
    </Table>
  )
}

export default connect(
  ({ coinsList }) => ({
    fetchingCoins: coinsList.fetchingCoins,
    coins: coinsList.coins,
    currency: coinsList.currency,
  }),
  {
    fetchCoinsList
  }
)(CoinsList)
