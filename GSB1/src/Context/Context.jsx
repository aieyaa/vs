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

  return (
    <Context.Provider value={{ visiteur, setVisiteur, getVisiteur }}>
      {children}
    </Context.Provider>
  );
};
