import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/navbbar'
import { Home } from './pages/home'
import { EtiquetaCatalogo } from './components/etiquetacatalogo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <EtiquetaCatalogo />
    </>
  )
}

export default App
