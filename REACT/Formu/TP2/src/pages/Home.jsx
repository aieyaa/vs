import { useState } from 'react'
import './App.css'
import { useNavigate } from 'react-router-dom';
import { state } from 'react';
import Accueil from '../composant/Accueil';



function Home() {

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log("Données envoyées:", { nom, prenom, classe }); 
    navigate('/Accueil', {
      state: { nom, prenom, classe } 
    });
  };




const navigate = useNavigate(); 
const [nom, setnom] = useState(""); 
const [prenom, setprenom] = useState(""); 
const [classe, setclasse] = useState(""); 

console.log({nom, prenom, classe})

return(
<>

<h1> hElo </h1>

<form onSubmit={handleSubmit}> 
  <label>Nom</label>
  <input type='text' placeholder='Nom' value={ nom } onChange={e => setnom(e.target.value)}/>
  <label>Prenom</label>
  <input type='text' placeholder='Prenom' value={ prenom } onChange={e => setprenom(e.target.value)}/>
  <label>Classe</label>
  <input type='text' placeholder='Classe' value={ classe } onChange={e => setclasse(e.target.value)}/>
</form>


<button type="submit" onClick={()=>navigate('/Accueil')}>
  
  
   Aller </button>

   
</>



); 
}
export default Home;

