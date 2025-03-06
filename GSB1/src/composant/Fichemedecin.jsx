import { useContext, useState, state } from 'react'
import { Outlet, useLocation } from 'react-router-dom';
import Medecins from '../pages/accueil/medecins';
// import { context } from '../context/context';

function Fichemedecin({lemedecin}) {

  const [medecin, setMedecin] = lemedecin;


  return (
    <>
    
      <h1> Get Cool, {medecin.nom}  </h1>
      
    </>
  )
}

export default Fichemedecin;
