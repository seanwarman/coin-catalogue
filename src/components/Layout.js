import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 50px;
  height: 100vh;
`

function Layout({ children }) {
  return (
    <Wrapper>
      <h1>Coin Catalogue</h1>
      {children}
    </Wrapper>
  )
}

export default Layout
