import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

// Páginas
import Home from './Pages/Home'
import Sobre from './Pages/Sobre'
import Jogadores from './Pages/JogadoresGol'
import PartidasContinente from './Pages/PartidasContinente'
import Goleadores from './Pages/GoleadoresGolMedia'
import CampoNeutro from './Pages/CampoNeutro'
import Selecoes from './Pages/SelecoesGolsMedia'

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
  },
  {
    path: "/partidas-por-continente",
    element: <PartidasContinente/>
  },
  {
    path: "/goleadores",
    element: <Goleadores/>
  },
  {
    path: "/campo-neutro",
    element: <CampoNeutro/>
  },
  {
    path: "/selecoes",
    element: <Selecoes/>
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
