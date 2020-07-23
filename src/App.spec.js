import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('App Comonent render without error.', () => {
    render(<App />)
  })
  it('Failed.', () => {
    expect(true).toBe(false)
  })
})
