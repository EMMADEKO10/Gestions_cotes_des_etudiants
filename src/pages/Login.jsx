// RegisterForm.js

import { useContext, useEffect, useState } from 'react';
import axios from 'axios'
import { DataContext } from '../App';
import { Link } from 'react-router-dom';
// import { Redirect } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

// https://capstone-c1-emmadeko10-2.onrender.com/api/auth/register/

 function Login() {
     const { isLoggedIn, setIsLoggedIn } = useContext(DataContext)
     const { dataUser, setDataUser } = useContext(DataContext)
     
    //  const [dt, setDt] = useState(null)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        // console.log("Value : ", value)
        // console.log("name : ", name)
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
                        
            const response = await axios.post('http://localhost:3000/api/auth/login', formData);
            // console.log("quel est la reponse : ",response.data); // Réponse de votre backend
            // Ajoutez ici la logique pour gérer la réponse de votre backend
            // setDt(response.data)
            setDataUser(response.data)
            let utilisateur = response.data
            
            sessionStorage.setItem("utilisateur", JSON.stringify(utilisateur));

            setIsLoggedIn(true)
        } catch (error) {
            console.error('Une erreur s\'est produite lors de l\'inscription. Veuillez réessayer.', error);
        }
        // console.log("quel est la reponse : ", dt); // Réponse de votre backend
        console.log("les données du user : ", dataUser)
        
    };

     if (dataUser) {
         console.log("quel est la reponse : ", dataUser); // Réponse de votre backend
    // console.log(isLoggedIn)
}
     useEffect(() => {
        //  console.log(dataUser)
     }, [dataUser])

     useEffect(() => {
        //  console.log(isLoggedIn)
     }, [isLoggedIn])

     if (isLoggedIn) {
         return <Navigate to="/" />;
     }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex-col gap-14">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Inscription</h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <input type="hidden" name="remember" value="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="name" className="sr-only">
                                Nom
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Nom"
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">
                                Adresse e-mail
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Adresse e-mail"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">
                                Mot de passe
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Mot de passe"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div>
                        {isLoggedIn ? <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        > <Link to = "/"> S inscrire</Link> 
                        </button> : <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        > S inscrire
                        </button>}
                    </div>
                </form>
            </div>
            <Effet />
        </div>
    );
}

export default Login;




function Effet(){
    return(
        <>
            <button
                type="button"
                className="w-full md:w-[18rem] xl:w-[22rem] rounded-lg md:rounded-xl py-2 px-4 md:py-3 
      md:px-6 text-xs md:text-sm duration-200 font-medium hover:-translate-y-0.5 active:translate-y-0
      shadow-blue-100 hover:shadow-blue-300 bg-blue-600 hover:bg-blue-500 dark:bg-blue-600 text-white">
                Sign up
            </button>
            <button
                type="button"
                className="w-full md:w-[18rem] xl:w-[22rem] flex items-center justify-center space-x-2
       rounded-lg md:rounded-xl py-2 px-4 md:py-3 md:px-6 duration-200 hover:-translate-y-0.5
       active:translate-y-0 shadow-blue-100 hover:shadow-blue-300 bg-gray-50 hover:bg-gray-100
       border-2 border-gray-100 dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700
       dark:hover:border-gray-500">
                <span>
                    <svg
                        width="20px"
                        height="20px"
                        viewBox="-3 0 262 262"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid">
                        <path
                            d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                            fill="#4285F4"
                        />
                        <path
                            d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                            fill="#34A853"
                        />
                        <path
                            d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                            fill="#FBBC05"
                        />
                        <path
                            d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                            fill="#EB4335"
                        />
                    </svg>
                </span>
                <span className="text-xs md:text-sm font-medium text-gray-900 dark:text-white">Continue with Google</span>
            </button>

        </>
    )
}