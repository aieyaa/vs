import { useContext, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../../composant/Navbar';
import BarNavbar from '../../composant/Navbar';

function accueil() {
 
  //const location = useLocation();
  //const login = location.state.login;
  
  return (
    <>
    <Navbar/>
      <h1> Bonjour,  </h1>
    <Outlet/>
    </>
  )
}

export default accueil;
