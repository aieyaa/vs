import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import axios from 'axios';
import api from "../api/api.js";

function Fiche({ leMedecin }) {

    const [medecin, setMedecin] = leMedecin;
    const [updateMedecinSuccess, setUpdateMedecinSuccess] = useState()

// Synchroniser les clés 
    // function synchroniserClesValeurs(params) {
    //     const valeursSynchro = {
    //         clesNumeriques: {},
    //         clesNommes: {},
    //     };
    
    //     for (const key in params) {
    //         if (Object.hasOwnProperty.call(params, key)) {
    //             const value = params[key];
                
    //             // Vérifiez si la clé est numérique
    //             if (!isNaN(key)) {
    //                 valeursSynchro.clesNumeriques[key] = value;
    //             } else {
    //                 valeursSynchro.clesNommes[key] = value;
    //             }
    //         }
    //     }
    
    //     // Combine les objets synchronisés en un seul (optionnel)
    //     return { ...valeursSynchro.clesNumeriques, ...valeursSynchro.clesNommes };
    // }




//modifier les informations du médecin 
    function updateMedecin(e) {
        e.preventDefault();
        setUpdateMedecin(medecin);
    }
    
    // params = les données du medecin : lemedecin
    async function setUpdateMedecin(params) {
        console.log("Données update : ", params);


        // synchroniser les clés et les valeurs (indice et le nom) 
        // const tableau = Object.values(params); 
        // console.log('Tableau des valeurs du médecin :', tableau);

        // Synchroniser les valeurs 
        // const valeursSynchro = synchroniserClesValeurs(params);
        // console.log('Valeurs synchronisées du médecin :', valeursSynchro);

        const lienUrl = '/restGSB/majMedecin';
        const headers = 
        { headers: {
                'Content-Type': 'application/json'
            }};

        try {
            const response = await api.put(lienUrl, params, headers 
        );
        // console.log(response);
    
            if (response.status === 200) {
                setUpdateMedecinSuccess(true); 
            } else {
                setUpdateMedecinSuccess(false); 
                console.error('Erreur lors de la mise à jour.');
                
            }
            return response;
            
        } catch (error) {
            console.error('Erreur réseau :', error.response);
            setUpdateMedecinSuccess(false);
        }
    }
    


    return (
        <>

        <div className="grid gap-6 mb-6 mt-4">
         <div>
             <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Nom</label>
             <input type="text" id="nom" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
             value={medecin.nom}
             onChange={(e) => setMedecin({ ...medecin, nom: e.target.value })} />
        </div>
        <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Prénom</label>
            <input type="text" id="prenom" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
             value={medecin.prenom}
             onChange={(e) => setMedecin({ ...medecin, prenom: e.target.value })} />
        </div>
        <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Adresse</label>
            <input type="text" id="adresse" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  
             value={medecin.adresse}
             onChange={(e) => setMedecin({ ...medecin, adresse: e.target.value })}/>
        </div>
        <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Téléphone</label>
            <input type="text" id="tel" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
             value={medecin.tel || ''}
             onChange={(e) => setMedecin({ ...medecin, tel: e.target.value })}/>
        </div>
        <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Commentaire</label>
            <input type="text" id="commentaire" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
             value={medecin.specialitecomplementaire || ''}
             onChange={(e) => setMedecin({ ...medecin, specialitecomplementaire: e.target.value })}/>
        </div>

        <button
    type="button"
    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
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

    const [rapportsMedecin, setRapportsMedecin] = useState([]);


    useEffect(() => {
        async function rapports() {

        }
        rapports();
    }, [idMedecin])

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
     <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700"> 
     <ul className="flex flex-wrap -mb-px"> 
         <li className="me-2"> 
            <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            onClick={() => setAffichage('fiche')} >
                Fiche Médecin</a> 
            </li> 
            <li className="me-2"> 
            <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
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