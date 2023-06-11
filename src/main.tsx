import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { HeaderBar } from './components/HeaderBar.tsx'
import { QueryClientProvider } from 'react-query'
import { queryClient } from './services/queryClient.ts'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={ queryClient }>
        <HeaderBar />
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
