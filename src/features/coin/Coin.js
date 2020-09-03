import React, { useEffect, Fragment as Frag } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  ArrowLeftOutlined,
  LoadingOutlined
} from '@ant-design/icons'
import {
  Statistic,
  Row as AntRow,
  Col as AntCol
} from 'antd'
import Icon from '../../components/Icon'

import styled from 'styled-components'

import {
  getCoin
} from './Coin.actions'

const Col = styled(AntCol)`

  margin-bottom: 32px;

`
const Row = styled(AntRow)`
  margin-top: 32px;
`

const Link = styled(RouterLink)`
  font-size: 2rem;
`

function Coin({
  match,
  data,
  getCoin,
  errorMessage
}) {

  const { coinID, currency } = match.params

  useEffect(() => {

    if(coinID) getCoin(coinID, currency)
    
  }, [getCoin, coinID, currency])

  return (
    data ?
    <Frag>

      <br />

      <Icon symbol={coinID} />

      <Row gutter={16} id="coin">

        <Col span={8}>
          <Statistic
            title="24 Hour Volume"
            value={data.volume24H}
          />
        </Col>

        <Col span={8}>
          <Statistic
            title="Total Supply"
            value={data.supply}
          />
        </Col>

        <Col span={8}>
          <Statistic
            title="Market Cap"
            value={data.marketCap}
          />
        </Col>

        <Col span={8}>
          <Statistic
            title="Lowest of the Day"
            value={data.lowDay}
          />
        </Col>

        <Col span={8}>
          <Statistic
            title="highest of the Day"
            value={data.highDay}
          />
        </Col>


      </Row>
      <Row>
        <Link to="/">
          <ArrowLeftOutlined />
        </Link>
      </Row>
    </Frag>
    :
    errorMessage.length > 0 ?
    <div>{errorMessage}</div>
    :
    <LoadingOutlined />
  )
}

export default connect(
  ({ coin }) => ({
    data: coin.data,
    errorMessage: coin.errorMessage
  }),
  {
    getCoin
  }
)(Coin)
