import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './styles.css'
import DefaultErrorBoundary from './DefaultErrorBoundary'

ReactDOM.render(
  <DefaultErrorBoundary>
    <App />
  </DefaultErrorBoundary>,
  document.getElementById('app')
)
