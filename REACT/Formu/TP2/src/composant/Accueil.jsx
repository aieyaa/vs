import { useState } from "react"; 
import { useLocation } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from "../pages/Home.jsx";
import { useNavigate } from "react-router-dom";
import Home from "../pages/Home.jsx";


function Accueil() {
const location = useLocation(); 
const {nom, prenom, classe} = location.state || {nom : "", prenom: "", classe: ""};


console.log("Données reçues dans Accueil:", { nom, prenom, classe });

return (
<>
<h1> Bravo {prenom} </h1>
<h2> Vous êtes {nom} {prenom}, étudiant(e) en classe de {classe} </h2>
</>
); 
}

export default Accueil; 