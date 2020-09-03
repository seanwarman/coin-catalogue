import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import {
  Table
} from 'antd'

import columns from './CoinsList.columns'

import { getCoinsList } from './CoinsList.actions'

function CoinsList({
  getCoinsList,
  fetchingCoins,
  coins,
  currency,
  history,
}) {

  useEffect(() => {
    getCoinsList(currency)
    const timeId = setTimeout(() => getCoinsList(currency), 60000)

    return () => clearTimeout(timeId)

  }, [getCoinsList, currency])

  return (
    <Table
      size="small"
      onRow={({ symbol: coinID }) => ({
        onClick: () => history.push(`/coin/${coinID}`)
      })}
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
    getCoinsList
  }
)(CoinsList)
