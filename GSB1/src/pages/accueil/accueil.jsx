import { useContext, useState, state } from 'react'
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../../composant/Navbar';
import BarNavbar from '../../composant/Navbar';
import api from '../../api/api';

function accueil() {
  const location = useLocation();
  // const { nom, prenom } = location.state || { nom: 'Inconnu', prenom: 'Inconnu' };
  
  const { nom, prenom } = location.state || {};


  //const location = useLocation();
  //const login = location.state.login;
  
  return (
    <>
    <Navbar/>
      <h1 className="mb-2 text-sm font-medium text-gray-900 dark:text-white"> Bonjour, {nom} {prenom} </h1>
    <Outlet/>
    </>
  )
}

export default accueil;
