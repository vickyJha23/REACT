const Buttons = ({category, handleClick}) => {
     return (
         <button data-id = {category} onClick={handleClick} className="border-[2px] border-yellow-600 px-[0.75rem] py-[0.25rem] capitalize tracking-[2px] rounded-[4px] text-yellow-500 shadow-[#ccc] shadow hover:bg-yellow-600 hover:text-white duration-300">{category}</button>
     )
}

export default Buttons;