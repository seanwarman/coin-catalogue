import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { createRenderer } from 'react-test-renderer/shallow'
import Routes from './Routes'

const setup = () => {
  const renderer = createRenderer()
  renderer.render(<Routes />)
  return renderer.getRenderOutput()
}

describe('Routes', () => {
  const output = setup()

  it('should render as the react-router BrowserRouter component', () => {
    expect(output.type).toBe(BrowserRouter)

  })

  describe('Suspense Routes child', () => {
    const suspense = output.props.children

    it('should render the Suspense component from React', () => {
      expect(suspense.type).toBe(Suspense)

    })

    it('should have a "fallback" prop with a div element', () => {
      const div = suspense.props.fallback
      expect(div.type).toBe('div')

    })

    describe('Switch component', () => {
      const switchComp = suspense.props.children
      const routes = switchComp.props.children

      it('should render as the Switch component from react-router-dom', () => {
        expect(switchComp.type).toBe(Switch)

      })

      it('should contain two routes', () => {
        expect(routes.length).toBe(2)

      })

      it('\'s children should be Route components', () => {
        routes.forEach(child => {
          expect(child.type).toBe(Route)

        })

      })
    })
  })
})
