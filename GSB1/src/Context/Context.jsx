import React, { createContext, useState } from 'react';

export const Context = createContext();

export const Provider = ({ children }) => {
  const [visiteur, setVisiteur] = useState({ nom: 'Inconnu', prenom: 'Inconnu' });

  async function getVisiteur(lelogin, lemdp) {
    try {
      const response = await api.get('/connexion', {
        params: {
          login: lelogin,
          mdp: lemdp
        }
      });
      setVisiteur(response.data);
      return response.data;
    } catch (err) {
      console.error('Erreur API', err);
    }
  }

  async function Medecin(lenom) {
    try {
      setversion(true); 
      const response = await api.get('http://172.16.61.61/restGSB/medecins?nom=v', { // prend le param nom= il commence par v
        params: { nom: lenom }, });
      return response.data || []; 
    } finally {}
  }

  return (
    <Context.Provider value={{ visiteur, setVisiteur, getVisiteur }}>
      {children}
    </Context.Provider>
  );
};
