function Navbar () {
    return (
          <div className="bg-slate-900 h-[2.5rem] shadow-[#000] shadow font-open_sans">
               <div className="w-[90vw] max-w-[1170px] h-[100%] m-auto flex items-center justify-between text-white">
                    <div>
                         <h1 className="tracking-[2px] text-[1.2rem]"><span className="text-white">Coding</span> <span className="text-blue-400">Addict</span></h1>
                    </div>
                    <div>
                         <a href="" className="mx-[0.5rem] tracking-[2px] inline-block">Simple</a>
                         <a href="" className="mx-[0.5rem] tracking-[2px] inline-block">Hex</a>
                    </div>
               </div>
          </div>
    )
}


export default Navbar;