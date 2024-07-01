
const Dish = ({image, title, price, description}) => {
   return (
        <div className="grid max-w-[25rem] md:max-w-[100%] md:grid-cols-[225px,1fr] justify-center md:gap-x-[1.25rem] grid-x-[1rem] gap-y-[2rem]">
             <div className="w-[100%]">
                  <img className="w-[100%] object-cover h-[200px] md:h-[175px] lg:h-[150px] border-yellow-600 border-[4px] rounded-[4px] drop-shadow" src={image} alt="" />
             </div>
             <div>
                  <header className="flex justify-between border-dotted border-b-[0.5px] border-blue-400">
                       <h3 className="mb-[0.25rem] font-bold tracking-[2px] text-[#333] text-nowrap">{title}</h3>
                       <h3 className="mb-[0.25rem] tracking-[2px] text-yellow-600 font-semibold text-nowrap">{price}₹</h3>  
                  </header>   
                  <p className="mt-[0.75rem] text-blue-300 text-justify">{description}</p>
             </div>
        </div>
   )
}

export default Dish;