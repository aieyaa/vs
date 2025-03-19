import React, { useState, useEffect } from 'react';
import { useUser } from '../../context/context';
import api from '../../api/api.js';
import { Outlet, useNavigate } from 'react-router-dom';
// import { AjouterRapport } from '../../composant/ajouterRapport.jsx';
import AjouterRapport from '../../composant/ajouterRapport.jsx';


// function Ajouter() {

//   return (
//     <>
//       <h1>Ajouter un Rapport</h1>

    

//     </>
//   );
// }


function Ajouter() {
  const [listeVisible, setlisteVisible] = useState(false); // boolean
  const [nomMedecin, setnomMedecin] = useState("");
  const [listeMedecin, setlisteMedecin] = useState([]);
  const [medecin, setMedecin] = useState(null); // Stocke le médecin sélectionné

  // Appelle l'API
  async function Medecin(lenom) {
    try {
      const response = await api.get("http://172.16.61.61/restGSB/medecins", {
        params: { nom: lenom },
      });
      return response.data || [];
    } catch (error) {
      console.error("Erreur lors de la recherche des médecins :", error);
      return [];
    }
  }

  async function charger(event) {
    const saisie = event.target.value;
    setnomMedecin(saisie);
    if (saisie) {
      const results = await Medecin(saisie);
      setlisteMedecin(results); // Affichage des données par rapport à la saisie
      setlisteVisible(true);
    } else {
      setlisteVisible(false);
      setlisteMedecin([]); // Réinitialiser la liste
    }
  }

  // Sélectionner un médecin
  function selectMedecin(lemedecin) {
    console.log("Médecin sélectionné :", lemedecin);
    setMedecin(lemedecin); // Définit le médecin sélectionné
    setlisteVisible(false);
  }

  return (
    <>
      {!medecin ? (
        // Afficher la barre de recherche
        <form className="max-w-md mx-auto">
          <label
            htmlFor="search"
            className="mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Rechercher un médecin
          </label>
          <div className="relative">
            <input
              onChange={charger}
              type="text"
              id="search"
              value={nomMedecin}
              className="block w-full p-4 border border-gray-300 rounded-lg bg-gray-50"
              placeholder="Dr Tran Isabelle"
            />
          </div>
        </form>
      ) : (
        // Afficher le composant AjouterRapport avec le médecin sélectionné
        <AjouterRapport medecin={medecin} />
      )}

      {listeVisible && (
        <ul className="max-w-md mx-auto mt-4 bg-white rounded-lg shadow-lg">
          {listeMedecin.map((medecin) => (
            <li
              key={medecin.id}
              onClick={() => selectMedecin(medecin)}
              className="p-4 border-b last:border-none cursor-pointer hover:bg-gray-100"
            >
              {medecin.nom} {medecin.prenom}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}




//

function Modifier() {

  return (
    <>
    <h1> Modifier un Rapport </h1>
    </>
  )
}
 

export default function Rapport() {
  // const [medecin, setMedecin] = useOutletContext();
  const [affichage, setAffichage] = useState('Ajouter')

  return (
      <>
      <div className="flex justify-center items-center ">
   <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700"> 
   <ul className="flex flex-wrap -mb-px"> 
       <li className="me-2"> 
          <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
          onClick={() => setAffichage('Ajouter')} >
              Ajouter un rapport </a> 
          </li> 
          <li className="me-2"> 
          <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
          onClick={() => setAffichage('Modifier')}>
              Modifier un rapport </a> 
          </li> 
  </ul> 

  {/* {affichage === 'Ajouter' ? <Ajouter /> : <Modifier />} */}
  {affichage === 'Ajouter' ? (
          <Ajouter setAffichage={setAffichage} /> // Passer setAffichage comme prop
        ) : (
          <Modifier />
        )}
  </div>
</div>
      </>
  )
}


