import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

import Home from './Pages/Home'
import Sobre from './Pages/Sobre'
import Jogadores from './Pages/Jogadores'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/sobre",
    element: <Sobre />
  },
  {
    path: "/jogadores",
    element: <Jogadores />
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
