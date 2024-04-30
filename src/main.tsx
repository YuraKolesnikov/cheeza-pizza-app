import * as React from 'react'
import * as ReactDOM from 'react-dom/client'

import App from './app.tsx'

import './vars.pcss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
