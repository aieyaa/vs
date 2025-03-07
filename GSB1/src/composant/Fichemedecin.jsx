import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import axios from 'axios';

function Fiche({ leMedecin }) {

    const [medecin, setMedecin] = leMedecin;
    const [updateMedecinSuccess, setUpdateMedecinSuccess] = useState()


//modifier les informations du médecin 
//marche pas 

    function updateMedecin(e) {
        e.preventDefault();
        setUpdateMedecin(medecin);
    }
    
    async function setUpdateMedecin(params) {
        try {
            const response = await axios.put('/majMedecin', params, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            if (response.status === 200) {
                setUpdateMedecinSuccess(true); // Confirme la réussite
            } else {
                setUpdateMedecinSuccess(false); // Échec
                console.error('Erreur lors de la mise à jour.');
            }
        } catch (error) {
            console.error('Erreur réseau :', error);
            setUpdateMedecinSuccess(false);
        }
    }
    

    

    return (
        <>

        <div class="grid gap-6 mb-6 mt-4">
         <div>
             <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Nom</label>
             <input type="text" id="nom" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
             value={medecin.nom}
             onChange={(e) => setMedecin({ ...medecin, nom: e.target.value })} />
        </div>
        <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Prénom</label>
            <input type="text" id="prenom" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
             value={medecin.prenom}
             onChange={(e) => setMedecin({ ...medecin, prenom: e.target.value })} />
        </div>
        <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Adresse</label>
            <input type="text" id="adresse" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  
             value={medecin.adresse}
             onChange={(e) => setMedecin({ ...medecin, adresse: e.target.value })}/>
        </div>
        <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Téléphone</label>
            <input type="text" id="tel" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
             value={medecin.tel}
             onChange={(e) => setMedecin({ ...medecin, tel: e.target.value })}/>
        </div>
        <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Commentaire</label>
            <input type="text" id="commentaire" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
             value={medecin.specialitecomplementaire}
             onChange={(e) => setMedecin({ ...medecin, specialitecomplementaire: e.target.value })}/>
        </div>

        <button
    type="button"
    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    onClick={updateMedecin} > 
    Mise à jour </button>

{/* Barre d'erreur */}
            {updateMedecinSuccess && <p className="text-green-500">Mise à jour réussie !</p>}
            {!updateMedecinSuccess && updateMedecinSuccess !== undefined && <p className="text-red-500">Échec de la mise à jour.</p>}


        </div> 


        </>
    );
}

// Fiche rapports 
function Rappports({idMedecin}) {

    return (
        <h1> Fiche Rapports </h1>
    ) 
    
}





export default function Fichemedecin() {
    const [medecin, setMedecin] = useOutletContext();
    const [affichage, setAffichage] = useState('fiche')

    return (
        <>
        <div className="flex justify-center items-center ">
     <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700"> 
     <ul class="flex flex-wrap -mb-px"> 
         <li className="me-2"> 
            <a href="#" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            onClick={() => setAffichage('fiche')} >
                Fiche Médecin</a> 
            </li> 
            <li class="me-2"> 
            <a href="#" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            onClick={() => setAffichage('rapports')}>
                Rapport Médecin</a> 
            </li> 
    </ul> 

{
    affichage == 'fiche' ? 
    <Fiche leMedecin={[medecin, setMedecin]} />
    : 
    <Rappports idMedecin={medecin.id}/>
}


    </div>
</div>
        </>
    )
}