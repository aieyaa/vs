{/*}
import { useContext, useState, state, createContext, Children } from 'react'
import { useLocation } from 'react-router-dom';
import BarNavbar from '../../composant/Navbar';
import Navbar from '../../composant/Navbar';
import { useEffect } from 'react';



export const Context = createContext()
export const Provider = ({Children}) => {
  const [visiteur, setVisiteur] = useState(state ? state.user : null); 


return ( 
  //Context.Provider value={{}}
  {Children}
)
}




function Rapport() {
const location = useLocation(state);
// const {nom, prnom} = location.state
//const {user} = useUser();

  return (
    <>
      <h1> Pages des Rapports  </h1>
        
    </>
  )
}

export default Rapport;
*/}


import React, { createContext, useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const Context = createContext();

export const Provider = ({ children }) => {
  const [visiteur, setVisiteur] = useState(null);

  return (
    <Context.Provider value={{ visiteur, setVisiteur }}>
      {children}
    </Context.Provider>
  );
};

function Rapport() {
  
  return (
    <>
      <h1>Page des Rapports</h1>
      
    </>
  );
}

export default Rapport;
