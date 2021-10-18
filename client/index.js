import React from 'react'
import { render } from 'react-dom'

// Components
import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  render(
      <App />,
    document.getElementById('app')
  )
})
