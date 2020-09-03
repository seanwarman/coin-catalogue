import React from 'react'
import { Typography } from 'antd'
import { icons } from '../../icons'

const { Text } = Typography

function valueMinusOrPlus(text) {
  return parseInt(text.slice(1)) > 0
}

function columns() {
  return [
    {
      title: '',
      dataIndex: 'symbol',
      render: text => (
        icons.find(i => i.symbol === text) ?
          <img src={`/icons/${text.toLowerCase()}.svg`} alt="crypto-icon" />
          :
          <img src={`/icons/generic.svg`} alt="crypto-icon" />
      )
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Symbol',
      dataIndex: 'symbol',
      key: 'symbol',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price'
    },
    {
      title: '24 Hour change',
      dataIndex: 'change24H',
      key: 'change24H',
      render: text => (
        valueMinusOrPlus(text) ?
        <Text type="success">
          {text}
        </Text>
        :
        <Text type="danger">
          {text}
        </Text>
      )
    }
  ]
}

export default columns
