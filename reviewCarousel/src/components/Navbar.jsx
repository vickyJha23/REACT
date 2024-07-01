const Navbar = () => {
    return(
        <nav className="w-[100vw] bg-white shadow-[#ccc] shadow h-[3rem] font-roboto">
             <div className="w-[90vw] max-w-[1440px] h-[100%] m-auto flex items-center">
                 <div className="flex justify-center w-[100%]">
                    <h1 className="tracking-[2px] text-[1.5rem] font-semibold"><span className="text-[#333]">Coding</span> <span className="text-primaryColor-1">Addict</span></h1>
                 </div>
             </div>
        </nav>
    )
}

export default Navbar;