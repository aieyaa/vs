import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './composant/Navbar.jsx'
import Accueil from './composant/Accueil.jsx'

const router = createBrowserRouter([ 
  {
    path : '/',
    element:  <App/>  
  },
  { path : '/Accueil',
    element: <Accueil/>
 }
])
  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />    {/* Configuration du routage pour accéder aux pages */}
  </StrictMode>,
)
