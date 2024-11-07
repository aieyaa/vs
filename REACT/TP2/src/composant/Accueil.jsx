import { useState } from "react"; 
import { Link, useLocation } from "react-router-dom";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from "../pages/App.jsx";
import { useNavigate } from "react-router-dom";



function Accueil() {
const {state} = useLocation(); 
const {nom} = location.state || {nom : 'hulijing'}; 



return (
<>
<Navbar/>
<h1> Get Cool ! {nom} </h1>
</>
); 
}

export default Accueil; 