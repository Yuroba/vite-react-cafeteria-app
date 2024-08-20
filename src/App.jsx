import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/navbbar'
import { Home } from './pages/HomePage'
import { EtiquetaCatalogo } from './components/etiquetacatalogo'
import { Cafeteria } from './pages/CafeteriaPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([{
  path: "/",
  element:<Home />
},{
  path: "/Cafeteria",
  element: <Cafeteria />
}])

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
