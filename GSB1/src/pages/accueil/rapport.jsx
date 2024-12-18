
import { useContext, useState, state } from 'react'
import { useLocation,  } from 'react-router-dom';
import BarNavbar from '../../composant/Navbar';
import Navbar from '../../composant/Navbar';
import { useEffect } from 'react';


function Rapport() {
const location = useLocation();
const [visiteur, setvisiteur] = useState(state? state.user: null); 
//const {user} = useUser();





////////////////////////

function vvisiteur({infovisiteur}) {
  return ( 

<ul> 
  {infovisiteur.map(item => ( 
          <li key={item.id}>{item.champ}</li> 
  ))}

</ul> 
 
  );
}



  return (
    <>
      <h1> Pages des Rapports {visiteur} </h1>
    </>
  )
}

export default Rapport;

