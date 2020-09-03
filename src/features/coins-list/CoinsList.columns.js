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
      key: 'name',
      sorter: (a,b) => {
        const textA = a.name.toUpperCase()
        const textB = b.name.toUpperCase()

        if(textA < textB) return -1
        if(textA > textB) return 1
        return 0
      }
    },
    {
      title: 'Symbol',
      dataIndex: 'symbol',
      key: 'symbol',
      sorter: (a,b) => {
        const textA = a.name.toUpperCase()
        const textB = b.name.toUpperCase()

        if(textA < textB) return -1
        if(textA > textB) return 1
        return 0
      }
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      sorter: (a,b) => {
        const priceA = parseFloat(a.price.slice(a.price.indexOf(' ')))
        const priceB = parseFloat(b.price.slice(b.price.indexOf(' ')))
        return priceA - priceB
      }
    },
    {
      title: '24 Hour change',
      dataIndex: 'change24H',
      key: 'change24H',
      sorter: (a,b) => {
        const changeA = parseFloat(a.change24H.slice(a.change24H.indexOf(' ')))
        const changeB = parseFloat(b.change24H.slice(b.change24H.indexOf(' ')))
        return changeA - changeB
      },
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
