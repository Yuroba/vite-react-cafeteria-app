import { useState } from 'react'
import './App.css'
import { Home } from './pages/HomePage'
import { EtiquetaCatalogo } from './components/etiquetacatalogo'
import { Cafeteria } from './pages/CafeteriaPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Contacto } from './pages/ContactoPage'
import { ScrollToTop } from './components/ScrollTop'
import { Sedes } from './pages/SedesPage'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'
import { CheckoutPage } from './pages/CheckoutPage'

const router = createBrowserRouter([{
  path: "/",
  element:<Home />
},{
  path: "/Cafeteria",
  element: <Cafeteria />,
},{
  path: "Checkout",
  element: <CheckoutPage />
},{
  path: "/Contacto",
  element: <Contacto />
},{
  path: "/Sedes",
  element: <Sedes />
},{
  path: "/Login",
  element: <LoginPage />
}, {
  path: "/Register",
  element: <RegisterPage />
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
