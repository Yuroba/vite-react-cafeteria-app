import { useState } from 'react'
import './App.css'
import { Navbar } from './components/navbbar'
import { Home } from './pages/HomePage'
import { EtiquetaCatalogo } from './components/etiquetacatalogo'
import { Cafeteria } from './pages/CafeteriaPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Contacto } from './pages/ContactoPage'
import { ScrollToTop } from './components/ScrollTop'
import { Sedes } from './pages/SedesPage'
import { LoginPage } from './pages/LoginPage'

const router = createBrowserRouter([{
  path: "/",
  element:<Home />
},{
  path: "/Cafeteria",
  element: <Cafeteria />
},{
  path: "/Contacto",
  element: <Contacto />
},{
  path: "/Sedes",
  element: <Sedes />
},{
  path: "/Login",
  element: <LoginPage />
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
