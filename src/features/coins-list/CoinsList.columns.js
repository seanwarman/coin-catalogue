import React from 'react'
import { Typography } from 'antd'
import Icon from '../../components/Icon'

const { Text } = Typography

function valueMinusOrPlus(text) {
  const spaceIndex = text.indexOf(' ')

  return parseFloat(text.slice(spaceIndex)) < 0
}

function columns() {
  return [
    {
      title: '',
      dataIndex: 'symbol',
      render: text => (
        <Icon symbol={text} />
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
        <Text type="danger">
          {text}
        </Text>
        :
        <Text type="success">
          {text}
        </Text>
      )
    }
  ]
}

export default columns
