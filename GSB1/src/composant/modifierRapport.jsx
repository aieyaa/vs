{/*
import React, { useState } from "react";
import api from "../api/api";

// si il y a un rapport qui correspond a la date il continue sinon il affiche un message d'erreur


export default function ModifierRapport({ visiteur }) {
  
const [date, setDate] = useState();
const [listeVisible, setListeVisible] = useState(false);
const [listeRapports, setListeRapports] = useState([]);
const [rapport, setRapport] = useState({});
const [majRapportSuccees, setMajRapportSuccess] = useState();



  // Rechercher un rapport spécifique
  
  async function rechercherRapport(date) {
    try {
        // Simuler une requête API pour chercher le rapport
        // const response = await api.get(`http://172.16.61.61/restGSB/rapport?date=${date}`);
        const response = await api.get(`http://172.16.61.61/restGSB/rapport?date=${date}`);
        if (response.ok) {
            const data = await response.json();
            return data; // Retourne le rapport si trouvé
        }
    } catch (error) {
        console.error("Erreur lors de la recherche du rapport :", error);
    }
    return null; // Aucun rapport trouvé
}


  // Modifier un rapport existant
  async function modifierRapport(e) {
    e.preventDefault(); // Empêche le rechargement de la page

   
  }

  // Rendu du composant
  return (
    <>
<h1>modif rapport</h1>
    </>
  );
}
*/}

import React, { useState } from "react";
import api from "../api/api.js";

export default function ModifierRapport({ visiteur }) {
  const [date, setDate] = useState("");
  const [listeVisible, setListeVisible] = useState(false);
  const [rapport, setRapport] = useState(null);
  const [majRapportSuccess, setMajRapportSuccess] = useState(false);

  // Rechercher un rapport spécifique
  async function rechercherRapport(date) {
    try {
      const response = await api.get(
        `http://172.16.61.61/restGSB/rapport?date=${date}`
      );
    // const response = await api.get(
    //     `http://172.16.61.61/restGSB/rapports_a_date`
    //   );
      if (response.ok) {
        const data = await response.json();
        setRapport(data);
        setListeVisible(true);
      } else {
        console.error("Aucun rapport trouvé pour cette date.");
        setListeVisible(false);
        alert("Aucun rapport trouvé pour cette date.");
      }
    } catch (error) {
      console.error("Erreur lors de la recherche du rapport :", error);
      alert("Une erreur s'est produite lors de la recherche du rapport.");
    }
  }

  // Modifier un rapport existant
  async function modifierRapport(e) {
    e.preventDefault();
    try {
      const response = await api.put(
        `http://172.16.61.61/restGSB/rapport/${rapport.id}`,
        rapport
      );
      if (response.ok) {
        alert("Le rapport a été modifié avec succès !");
        setMajRapportSuccess(true);
      } else {
        console.error("Impossible de modifier le rapport.");
        alert("Une erreur est survenue lors de la modification du rapport.");
      }
    } catch (error) {
      console.error("Erreur lors de la modification du rapport :", error);
      alert("Une erreur s'est produite.");
    }
  }

  return (
    <>
      <h1>Modifier un Rapport</h1>
      <form onSubmit={modifierRapport}>
        <label>
          Date du rapport :
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
        <button type="button" onClick={() => rechercherRapport(date)}>
          Rechercher
        </button>
        {listeVisible && rapport && (
          <div>
            <h2>Rapport trouvé :</h2>
            <textarea
              value={rapport.contenu}
              onChange={(e) =>
                setRapport({ ...rapport, contenu: e.target.value })
              }
            />
            <button type="submit">Modifier</button>
          </div>
        )}
        {majRapportSuccess && (
          <p style={{ color: "green" }}>Rapport mis à jour avec succès !</p>
        )}
      </form>
    </>
  );
}
