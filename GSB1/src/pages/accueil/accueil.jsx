import React from 'react';
import { useState, state } from 'react';
import { useLocation} from 'react-router-dom';
import Navbar from '../../composant/Navbar';
import { Outlet } from 'react-router-dom';

function Accueil() {
  const location = useLocation();
  const { nom, prenom } = location.state || { nom: 'Inconnu', prenom: 'Inconnu' };
  const [visiteur, setVisiteur] = useState (state? state.user: null);

  return (
    <>
      <Navbar />
      <h1 className="mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Bonjour, {nom} {prenom}
      </h1>
      <Outlet context={ [visiteur, setVisiteur] } />
    </>
  );
}

export default Accueil;
