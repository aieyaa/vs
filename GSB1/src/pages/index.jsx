
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './index.css'
import api from '../api/api';
import accueil from './accueil';

export default function App() {

  const navigate = useNavigate();
  const [login, setlogin] = useState("");
  const [password, setpassword] = useState('');
  const [Error, setError] = useState('');
  
  
  
function handleSubmit(event) {
  event.preventDefault();
  navigate('/accueil',{
    state:{
      login : login
    }
  })
  console.log('Vous avez appuyer sur le bouton')
}






if (login =='A')  {
  
} else {
console.log("login rempli")
}

if (password =='A')  {
 
} else {
console.log("mdp rempli")
}
  

  return (
    <>
{/* Formulaire login/mot de passe  */}
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <img src='GSB.png' />
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Identification
              </h1>
              <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Login</label>
                  <input type="text" name="login" id="login" value={login} onChange={(e) => setlogin(e.target.value)}  className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="aieya"  />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <input type="password" name="password" id="password" value={password} onChange={(e) => setpassword(e.target.value)} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                    </div>
                  </div>
                  <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                </div>
                <button type="submit" className="w-full  bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" 
                
                
                onClick= {handleSubmit} >Sign in </button>
                
              
              
                
                
               

                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don't have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}