import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {
  Col,
  Row as AntRow,
  Select as AntSelect,
} from 'antd'
import styled from 'styled-components'
import {
  setCurrency
} from './CoinsList.actions'

const Row = styled(AntRow)`
  margin-bottom: 32px;
`

const Select = styled(AntSelect)`
  width: 250px;
`

const TimeStamp = styled.div`
  text-align: right;
`

const { Option } = Select

function CoinSelect({
  timeStamp,
  currency,
  setCurrency,
  history
}) {
  return (
    <Row>
      <Col span={12}>
        <Select
          defaultValue={currency}
          onChange={currency => {
            setCurrency(currency)
            history.push(`/${currency}`)
          }}
        >
          <Option value="GBP">GBP</Option>
          <Option value="USD">USD</Option>
          <Option value="EUR">EUR</Option>
          <Option value="INR">INR</Option>
          <Option value="AUD">AUD</Option>
          <Option value="CAD">CAD</Option>
          <Option value="SGD">SGD</Option>
          <Option value="CHF">CHF</Option>
          <Option value="MYR">MYR</Option>
          <Option value="JPY">JPY</Option>
          <Option value="CNY">CNY</Option>
        </Select>
      </Col>

      <Col span={12}>
        <TimeStamp>
          {timeStamp}
        </TimeStamp>
      </Col>
    </Row>

  )
}

export default connect(
  ({ coinsList }) => ({
    currency: coinsList.currency,
    timeStamp: coinsList.timeStamp
  }),
  {
    setCurrency
  }
)(withRouter(CoinSelect))
