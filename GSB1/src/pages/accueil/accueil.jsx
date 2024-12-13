import { useContext, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../../composant/Navbar';

function accueil() {
 
  
  return (
    <>
    <Navbar/>
      <h1>Accueil</h1>
    <Outlet/>
    </>
  )
}

export default accueil;
