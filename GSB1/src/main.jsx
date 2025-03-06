import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './pages/index.jsx';
import Accueil from './pages/accueil/accueil.jsx';
import Rapport from './pages/accueil/rapport.jsx';
import Medecins from './pages/accueil/medecins.jsx';
import Fichemedecin from './composant/Fichemedecin.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


import { UserProvider } from './context/context.jsx';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: 'accueil', element: <Accueil />,
    children: [
      { path: 'rapport', element: <Rapport /> },
      { path: 'medecins', element: <Medecins />,
        children: [
          { path: ':id', element: <Fichemedecin /> },
        ]},
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider> {/* Envelopper l'application avec UserProvider */}
      <RouterProvider router={router} /> {/* Configuration du routage */}
    </UserProvider>
  </StrictMode>
);
