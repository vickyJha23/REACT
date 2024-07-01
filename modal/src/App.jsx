import React from "react";
import {useRef} from "react";
const App = () => {
  const modalRef = useRef(null);
  const handleModalShow = () => {
       if(!modalRef.current){
           return;
       }
       modalRef.current.classList.replace("makeInVisible", "makeVisible");
  }
  const closeModal = () => {
      if(!modalRef.current){
           return;
      }
      modalRef.current.classList.replace("makeVisible", "makeInVisible");
  }
   return (
       <div className="w-[100%] h-[100%] grid place-items-center bg-[url('https://v.greattibettour.com/photos/2022/07/mount-kailash-15-46379.webp')] bg-cover bg-no-repeat bg-center">
            <div className="w-[90vw] grid place-items-center max-w-[450px] bg-[#fff] h-[25vh] shadow-[#000] shadow rounded-[5px]">
                  <div>
                      <h1 className="text-center text-[2.5rem] text-black tracking-[3px] font-bold mb-[1rem]">Modal Project</h1>
                     <div className="text-center">
                      <button onClick={handleModalShow} className="bg-[#0492c2] text-white px-[0.75rem] py-[0.25rem] uppercase tracking-[2px] rounded-[4px] shadow-[#ccc] shadow">open modal</button>
                      </div>
                  </div>
            </div>
          <div ref={modalRef} className="w-[100%] h-[100%] fixed top-0 left-0 bg-blue-shade grid place-items-center makeInVisible">
               <div className="w-[90vw] max-w-[450px] bg-white mx-auto h-[20vh] relative grid place-items-center">
                    <button onClick={closeModal} className="absolute top-[0.5rem] right-[0.5rem] bg-black text-white w-[1.5rem] h-[1.5rem] rounded-[50%] shadow-[#000] shadow cursor-pointer hover:bg-red-500 duration-300 ease-linear">
                      X
                    </button>
                    <h1 className="text-[2rem] tracking-[2px] uppercase font-semibold">Modal Content</h1>
               </div>
          </div>
       </div>
   )  
}

export default App;