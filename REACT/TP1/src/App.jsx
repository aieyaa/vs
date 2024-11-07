import { useState } from 'react'
import './App.css'




function ListePhrases({phrases}) {
  return ( 

<ul> 
  {phrases.map(item => ( 
          <li key={item.id}>{item.champ}</li> 
  ))}

</ul> 
 
  );
}


function App() {
/* Deux variables useState*/
var nom = "poiu"
const [champ, setchamp] = useState(""); 
const [liste, setliste] = useState([]); 

let nextId = 0 ; 



return (
  <>
  <div>
    <h1> Hello World {nom} ! </h1>

<form className='Champ'> 
  <input type='text' placeholder='Phrase' name="input" className='input' value={champ}
  onChange={e => setchamp(e.target.value)}
   />

  
</form>




<div className='Bouton'> 
<button className='bouton' onClick= {() => {
  setliste([...liste,
    { id: nextId++, champ: champ }
  ]);
  setchamp(""); 


  
}} 

> Ajouter</button> </div>
</div>


<ListePhrases phrases={liste} />










</>
); 
}




export default App;
