import React, { useState, useEffect } from 'react';
import { useUser } from '../../context/context';

function Rapport() {
  // const { datavisiteur } = ();
  const { user , datavisiteur } = useUser();

  return (
    <>
      <h1>Page des Rapports</h1>

      <p>ID : {user.id}</p>
      <p>Nom : {user.nom}</p>
      <p>Prénom : {user.prenom}</p>
      <p>Adresse : {user.adresse}</p>
      <p>Code Postale : {user.cp}</p>
      <p>Ville : {user.ville}</p>

    

    </>
  );
}

export default Rapport;


