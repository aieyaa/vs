import React, {Component, useState} from 'react'


export default function MyForm() {


    const [ nom, setsonnom] = useState (''); 
    const [ prenom, setsonprenom] = useState (''); 
    const [ classe, setclasse] = useState (''); 


    return (
      <>
        <label>
          Nom : <input value={nom} onChange={e => setsonnom(e.target.value)}/>
        </label>

        <hr />

        <label>
          Prénom : <input value={prenom} onChange={e => setsonprenom(e.target.value)}/>
        </label> 

        <hr />

        <label>
          Classe : <input value={classe} onChange={e => setclasse(e.target.value)}/>
        </label>

<br> 

</br>
        <button onClick={(


    nom !=='' && <p> Bienvenue {nom} {prenom}, étudiant en classe de {classe} </p>

)}> VALIDER </button>

      </>
    );



  }