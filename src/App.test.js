import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow'
import App from './App';
import Layout from './components/Layout'
import Routes from './Routes'

const setup = () => {
  const renderer = createRenderer()
  renderer.render(<App />)
  return renderer.getRenderOutput()
}

const layout = setup()

describe('App', () => {

  it('should render the Layout component', () => {
    expect(layout.type).toBe(Layout)

  })

})

describe('Layout', () => {
  it('should render the Routes component', () => {
    const routes = layout.props.children
    expect(routes.type).toBe(Routes)

  })
})

