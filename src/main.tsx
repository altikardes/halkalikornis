import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'
import { getRouter } from './router'

const rootElement = document.getElementById('app')

if (!rootElement) {
  throw new Error('Root element #app not found')
}

const root = createRoot(rootElement)
const router = getRouter()

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
