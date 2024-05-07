
import { StudentCoachList2 } from "./cours"
import SideBar from "../components/SideBar"
import Rubrique from "../components/Rubrique"

export default function AllNote() {
  return (
    <>
    
          <nav className="bg-white shadow-md">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="flex justify-between h-16">
                      <div className="flex items-center">
                          {/* Logo ou titre de votre site */}
                          <span className="text-2xl font-bold text-fuchsia-800">School_Eva</span>
                      </div>
                      <div className="hidden sm:flex items-center">
                          {/* Liens de la NavBar */}
                          <a href="#" className="px-3 py-2 text-sm text-green-500 hover:text-green-600">Home</a>
                          <a href="#" className="px-3 py-2 text-sm text-green-500 hover:text-green-600">About Us</a>
                          <a href="#" className="px-3 py-2 text-sm text-green-500 hover:text-green-600">Sign In</a>
                          <a href="#" className="px-3 py-2 text-sm text-green-500 hover:text-green-600">Sign Up</a>
                      </div>
                      <div className="flex sm:hidden items-center">
                          {/* Bouton de menu pour les écrans mobiles */}
                          <button className="text-sm text-green-500 hover:text-green-600">Menu</button>
                      </div>
                  </div>
              </div>
          </nav>

          <div className='flex flex-row gap-2 sm: items-center'>
              <SideBar />
              {/* <RubriqueContext.Provider value={{ isHomeOpen, setIsHomeOpen }} key={uuidv4()}> */}
                  <div className="flex flex-col gap-2 sm:w-[100%] w-full  ">
                      <Rubrique />
                     
                      <StudentCoachList2 />
                  </div>
              {/* </RubriqueContext.Provider> */}
          </div>
          
    </>
  )
}
