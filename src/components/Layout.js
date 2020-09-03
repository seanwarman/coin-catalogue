import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 50px;
  height: 100vh;
`

const Image = styled.div`
  background-image: url(/brand.png);
  width: 100%;
  height: 190px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: -70px -20px;
`

function Layout({ children }) {
  return (
    <Wrapper>

      <Image />

      {children}
    </Wrapper>
  )
}

export default Layout
