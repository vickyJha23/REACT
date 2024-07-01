import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useRef} from "react";
const App = () => {
     const linkDivRef = useRef(null);
     const linkUlRef = useRef(null);
     const checkLinkHeight = (linkHeight, ulHeight) => {
          if(linkHeight === 0){
                linkDivRef.current.style.height = `${ulHeight}px`;
          }
          else{
               linkDivRef.current.style.height = 0;
          }
     }
     const handleNavLinks = () => {
          let linkHeight, ulHeight;
          if(!linkDivRef.current && !linkUlRef.current){
                return alert("linkDivRef and linkUlRef are missing");
          }
          linkHeight = linkDivRef.current.getBoundingClientRect().height;
          ulHeight = linkUlRef.current.getBoundingClientRect().height;
          checkLinkHeight(linkHeight, ulHeight);
     }
    return (
             <nav className="w-[100%] shadow-[#000] shadow font-roboto overflow-hidden ease-linear duration-300 md:h-[3rem]">
                  <div className="px-[2rem] h-[100%] md:px-[0] md:flex md:items-center md:justify-between md:w-[90vw] md:max-w-[1440px] md:mx-auto md:h-[100%]">
                       <div className="flex py-[0.5rem] justify-between items-center w-[100%] h-[100%] md:py-[0] md:w-[auto]">
                             <h1 className="tracking-[2px] text-[1.2rem] font-semibold text-nowrap"><span className="text-[red]">Coding</span> <span className="text-blue-400">Addict</span></h1>
                             <button onClick={handleNavLinks} className="md:hidden text-[1.5rem] align-middle cursor-pointer outline-none border-0">
                                <FontAwesomeIcon icon={["fa", "bars"]}></FontAwesomeIcon>
                             </button>
                       </div>
                       <div ref={linkDivRef} className="h-[0] md:!h-[auto]">
                       <ul ref={linkUlRef} className="md:flex">
                           <li><a href="#" className="py-[0.5rem] inline-block capitalize text-[1.2rem] tracking-[2px] text-[#888] mx-[0.5rem]">Home</a></li>
                           <li><a href="#" className="py-[0.5rem] inline-block capitalize text-[1.2rem] tracking-[2px] text-[#888] mx-[0.5rem]">About</a></li>
                           <li><a href="#" className="py-[0.5rem] inline-block capitalize text-[1.2rem] tracking-[2px] text-[#888] mx-[0.5rem]">Service</a></li>
                           <li><a href="#" className="py-[0.5rem] inline-block capitalize text-[1.2rem] tracking-[2px] text-[#888] mx-[0.5rem]">Contact</a></li>
                       </ul>
                       </div>
                       <div className="hidden md:flex">
                          <FontAwesomeIcon className="inline-block mx-[0.5rem] text-[1.2rem]" icon={["fab", "facebook"]} />
                          <FontAwesomeIcon className="inline-block mx-[0.5rem] text-[1.2rem]" icon={["fab", "whatsapp"]} />
                          <FontAwesomeIcon className="inline-block mx-[0.5rem] text-[1.2rem]" icon={["fab", "instagram"]} />
                          <FontAwesomeIcon className="inline-block mx-[0.5rem] text-[1.2rem]" icon={["fab", "snapchat"]} />
                       </div>
                  </div>
             </nav>
          )
}

export default App;