import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {useRef} from "react"
const App = () => {
    const asideRef = useRef(null);
    const handleSideBar = () => {
        if(!asideRef.current){
             return;
        }
        if(asideRef.current.classList.contains("w-[0px]")){
             return asideRef.current.classList.replace("w-[0px]", "w-[300px]");
        }       
        asideRef.current.classList.replace("w-[300px]", "w-[0px]");
    }
    const closeSideBar = () => {
         if(!asideRef.current){
            return;
         }
         if(!asideRef.current.classList.contains("w-[0px]")){
               asideRef.current.classList.replace("w-[300px]", "w-[0px]");
         }
    }
   return (
        <div className="w-[100%] h-[100vh] grid grid-cols-[auto,1fr] dark:bg-slate-950">
             <aside ref={asideRef} className="w-[0px] ease-linear duration-300 bg-[#f1f1f1] shadow-[#000] shadow py-[1rem] grid grid-rows-[auto,1fr,auto] h-[100%] overflow-hidden">
                     <div className="flex justify-between items-center mb-[1.5rem] px-[1rem]">
                         <h1 className="tracking-[2px] text-[1.2rem] text-nowrap"><span className="text-red-400">Coding</span> <span className="text-blue-400">Addict</span></h1>
                         <button onClick ={closeSideBar} className="text-red-400 text-[1.2rem]">
                             <FontAwesomeIcon icon={["fa", "times"]} />
                         </button>
                     </div>
                     <ul>
                          <li><a href="#" className="my-[0.5rem] px-[1rem] inline-block text-[1.2rem] tracking-[2px] text-[#818181] hover:text-[#000] duration-300 ease-linear">Home</a></li>
                          <li><a href="#" className="my-[0.5rem] px-[1rem] inline-block text-[1.2rem] tracking-[2px] text-[#818181] hover:text-[#000] duration-300 ease-linear">About</a></li>
                          <li><a href="#" className="my-[0.5rem] px-[1rem] inline-block text-[1.2rem] tracking-[2px] text-[#818181] hover:text-[#000] duration-300 ease-linear">Services</a></li>
                          <li><a href="#" className="my-[0.5rem] px-[1rem] inline-block text-[1.2rem] tracking-[2px] text-[#818181] hover:text-[#000] duration-300 ease-linear">Contact</a></li>
                     </ul>
                     <div className="justify-self-center mb-[1.5rem]">
                        <FontAwesomeIcon className="mx-[0.5rem] text-[1.2rem] duration-300 ease-linear text-[#819191] hover:text-[#000] cursor-pointer" icon={["fab", "google"]} />
                        <FontAwesomeIcon className="mx-[0.5rem] text-[1.2rem] duration-300 ease-linear text-[#819191] hover:text-[#000] cursor-pointer" icon={["fab", "facebook"]} />
                        <FontAwesomeIcon className="mx-[0.5rem] text-[1.2rem] duration-300 ease-linear text-[#819191] hover:text-[#000] cursor-pointer" icon={["fab", "whatsapp"]} />
                        <FontAwesomeIcon className="mx-[0.5rem] text-[1.2rem] duration-300 ease-linear text-[#819191] hover:text-[#000] cursor-pointer" icon={["fab", "snapchat"]} />
                     </div>
             </aside>
             <div className="h-[100%]">
                  <button onClick={handleSideBar}>
                  <FontAwesomeIcon icon={["fas", "bars"]} className="fixed right-[1rem] top-[1rem] text-[2rem] animate-jump text-blue-400 cursor-pointer"></FontAwesomeIcon>
                  </button>
             </div>
        </div>
   )
}
export default App;