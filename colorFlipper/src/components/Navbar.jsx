import {Link} from "react-router-dom";
const Navbar = () => {
     return (
           <nav className="bg-white font-Roboto w-[100vw] h-[3rem] shadow-[#000] shadow fixed top-0 left-0">
                <div className="w-[90vw] max-w-[1440px] m-auto h-[100%] flex items-center justify-between">
                    <div>
                         <h1 className="tracking-[2px] text-[1.5rem] font-semibold"><span className="text-[#333]">Coding</span> <span className="text-blue-400">Addict</span></h1>
                    </div>
                    <ul className="flex">
                         <li className="mx-[0.5rem] tracking-[2px]">
                              <Link to="/simple">
                                  Simple
                              </Link>
                         </li>
                         <li className="mx-[0.5rem] tracking-[2px]">
                             <Link to ="/hex">
                                 Hex
                             </Link>
                         </li>
                    </ul>
                </div>
           </nav>

     )
}

export default Navbar;