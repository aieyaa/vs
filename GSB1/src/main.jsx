import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './pages/index.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([ 
  {
    path : '/',
    element:  <App/>  
  },
  { path : '/accueil',
    element: <accueil/>
 }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />    {/* Configuration du routage pour accéder aux pages */}
  </StrictMode>,
)
