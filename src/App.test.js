import React from 'react';
import { createRenderer } from 'react-test-renderer/shallow'
import App from './App';
import Routes from './Routes'

const setup = () => {
  const renderer = createRenderer()
  renderer.render(<App />)
  return renderer.getRenderOutput()
}

describe('App', () => {
  const output = setup()

  it('should render the Routes component', () => {
    const routes = output.props.children
    expect(routes.type).toBe(Routes)

  })

  it('should have an id of "app"', () => {
    expect(output.props.id).toBe('app')

  })

})

