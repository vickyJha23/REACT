const List = ({people, onClick}) => {
    return(
         <div className="h-[100vh] w-[100%] grid place-items-center bg-pink-200">
             <div className="w-[90vw] max-w-[670px] h-[auto] bg-white rounded-[4px] shadow-[#000] shadow p-[2rem]">
                   <h1 className="text-center uppercase tracking-[2px] text-[1.5rem] font-semibold mb-[0.5rem]">BirthDay Remainder</h1>
                   <h2 className="text-[1.5rem] mb-[2rem] tracking-[2px] text-center">{people.length} Birthdays Today</h2>
                   <div className="mb-[1.2rem]">
                         {people.map((ppl) => {
                              return <div key = {ppl.id} className="flex items-center gap-4 mb-[1.5rem]">
                                   <img src = {ppl.image} className="w-[80px] h-[80px] rounded-[50%] object-cover"></img>
                                   <div>
                                        <h2 className="font-bold tracking-[3px] text-[1.5rem]">{ppl.name}</h2>
                                        <p>{ppl.age} years old</p>
                                   </div>
                              </div>
                         })}
                    </div> 
                    <button onClick={onClick} className="w-[100%] bg-pink-500 capitalize py-[0.5rem] text-white rounded-[4px] cursor-pointer tracking-[2px]"> clear All</button>
             </div>
         </div>
    )
}

export default List;