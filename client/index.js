import React from 'react'
import { render } from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


// Components
import App from './components/App'

document.addEventListener('DOMContentLoaded', () => {
  render(
      <App />,
    document.getElementById('app')
  )
})
