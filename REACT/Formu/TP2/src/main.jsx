import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/Home.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
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
