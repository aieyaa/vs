import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import accueil from './pages/accueil.jsx'
import index from './pages/index.jsx'

const router = createBrowserRouter([ 
  {
    path : '/',
    element:  <index/>  
  }
  
  /*
  ,
  { path : '/accueil',
    element: <accueil/>
 }
    */


])
  

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />   
  </StrictMode>,
)
