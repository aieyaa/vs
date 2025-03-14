import React, { useState, useEffect } from 'react';
import { useUser } from '../../context/context';

function Rapport() {
  // const { datavisiteur } = ();
  const { user , datavisiteur } = useUser();

  return (
    <>
      <h1>Page des Rapports</h1>

      <p>Nom : {user.nom}</p>
      <p>Prénom : {user.prenom}</p>

    

    </>
  );
}

export default Rapport;


