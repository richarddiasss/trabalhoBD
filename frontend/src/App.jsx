import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeaderHome from './components/HeaderHome'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <HeaderHome/>
    </>
  )
}

export default App
