
import React, { useState } from "react";

export default function AjouterRapport({ medecin }) {
  const [addRapportSuccess, setaddRapportSuccess] = useState(false);

  function AjouterRapport(e) {
    e.preventDefault();

    console.log("Rapport ajouté pour :", medecin);
    setaddRapportSuccess(true); // Indiquer le succès de l'ajout
  }

  return (
    <div className="grid gap-6 mb-6 mt-4">
      {/* Affichage du médecin sélectionné */}
      <p className="text-gray-700 dark:text-gray-300">
        Rapport : {medecin.nom} {medecin.prenom}
      </p>

      {/* Formulaire pour ajouter un rapport */}
      <form onSubmit={AjouterRapport} className="max-w-md mx-auto">
        <div>
             <label htmlFor="Date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Date Visite </label>
             <input type="date" id="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            
             />
        </div>
        <div>
            <label htmlFor="motif" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Motif</label>
            <input type="text" id="motif" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
             />
        </div>
        <div>
            <label htmlFor="bilan" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Bilan</label>
            <input type="text" id="bilan" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  
        />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-4" >
          Mise à jour
        </button>
      </form>

      {/* Confirmation de succès ou échec */}
      {addRapportSuccess && (
        <p className="text-green-500 mt-2">Ajouté avec succès !</p>
      )}
    </div>
  );
}
