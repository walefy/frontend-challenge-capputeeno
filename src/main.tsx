import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { HeaderBar } from './components/HeaderBar.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HeaderBar />
    <App />
  </React.StrictMode>,
)
