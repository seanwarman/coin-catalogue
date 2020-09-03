import React, { useEffect, Fragment as Frag } from 'react'
import { connect } from 'react-redux'
import {
  Table,
} from 'antd'

import CoinSelect from './CoinSelect'

import columns from './CoinsList.columns'

import { getCoinsList, setCurrency } from './CoinsList.actions'

function CoinsList({
  getCoinsList,
  fetchingCoins,
  coins,
  currency,
  history,
  match,
  setCurrency,
}) {

  const routeCurrency = match.params.currency || null

  useEffect(() => {

    getCoinsList(routeCurrency || currency)

    const timeId = setInterval(() => {
      getCoinsList(routeCurrency || currency)
    }, 60000)

    return () => clearInterval(timeId)

  }, [getCoinsList, currency, routeCurrency])

  return (
    <Frag>

      <CoinSelect />

      <Table
        size="small"
        onRow={({ symbol: coinID, name }) => ({
          onClick: () => history.push(`/coin/${name}/${coinID}/${currency}`)
        })}
        rowKey="id"
        loading={coins === null}
        dataSource={coins}
        columns={columns()}
      >
      </Table>
    </Frag>
  )
}

export default connect(
  ({ coinsList }) => ({
    fetchingCoins: coinsList.fetchingCoins,
    coins: coinsList.coins,
    currency: coinsList.currency,
  }),
  {
    getCoinsList,
    setCurrency
  }
)(CoinsList)
