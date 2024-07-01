import {useState} from "react";
const Tour = ({id, info, image, name, price, isActive, handleRemoveTour}) => {
    const [readMore, setReadMore] = useState(false);
    return (
        <article className="bg-white shadow-[#000] shadow-md relative  w-[100%] h-[auto]  rounded-[5px] overflow-hidden">
            <img src={image} alt={name}  className="w-[100%] h-[20rem] object-cover"/>
            <footer className="py-[1.5rem] px-[2rem]">
                 <div>
                      <h2 className="text-center px-[2rem] py-[1.5rem] text-[1.2rem] tracking-[2px]">{name}</h2>
                       <h4 className="bg-green-400 absolute px-[1rem] py-[0.5rem] top-[0] right-[0] text-white text-[1.2rem] tracking-[2px]">${price}</h4>
                 </div>
                 <p>
                        {readMore ? info: `${info.substring(0, 200)}...`}
                        <button onClick={() => setReadMore(!readMore)} className="capitalize text-green-400 ml-[0.5rem]">
                            {readMore ? " show less" : " read more"}
                        </button>
                </p>
                <button onClick={() => handleRemoveTour(id)} className="w-[100%] border-[1px] border-green-400 py-[0.25rem] capitalize tracking-[2px] rounded-[4px] text-green-400 my-[1.5rem] shadow-[#ccc] shadow hover:shadow-md hover:bg-green-500 hover:text-white duration-300 ease-in">
                    not interested
                </button>
            </footer>
        </article>
    )
}

export default Tour;