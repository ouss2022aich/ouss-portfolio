import { useState } from "react"

export default function Navbar (){

      const [activeSection , setActiveSection] = useState( 0 )
      

      return (
           <nav className="navbar p-5 bg-black text-white flex justify-between">
             <h1 className="font-['lobster']">
               OUSS
             </h1>
             <ul className="flex gap-4 font-normal">
              
                <a href="#projects" onClick={ () => setActiveSection(1)} className={`relative before:absolute before:px-4  before:rounded before:py-0.5 before:transition-all duration-200 before:hover:bg-violet-800 before:top-6 before:left-3 ${ ( activeSection == 1 ? " before:bg-orange-300 " : "" ) }` }><li> Projects </li></a>
                <a href="#contact" onClick={ () => setActiveSection(2)} className={`relative before:absolute before:px-4  before:rounded before:py-0.5 before:transition-all duration-200 before:hover:bg-violet-800 before:top-6 before:left-3 ${ ( activeSection == 2 ? "before:bg-orange-300" : "" ) }` }><li> Contact </li></a>
                <a href="#hire" onClick={ () => setActiveSection(3)}><li className={`relative before:absolute before:px-4  before:rounded before:py-0.5 before:transition-all duration-200 before:hover:bg-violet-800 before:top-6 before:left-3 ${ ( activeSection == 3 ? "before:bg-orange-300" : "" ) }` }> Hire Me </li></a>
             </ul>
             <div className="">

             </div>
           </nav>
      )
     
}