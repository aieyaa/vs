import { useContext, useState } from 'react'
import { useLocation } from 'react-router-dom';
import Navbar from '../composant/Navbar';

function accueil() {
 
  const location = useLocation();
  const login = location.state.login; 

  return (
    <>
    <Navbar/>
      <h1>Accueil</h1>
    </>
  )
}

export default accueil;
