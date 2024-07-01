import {useState, useEffect} from "react";
import data from "./data";
import people from "./data";
const App = () => {
     const [peoples, setPeople] = useState(data);
     const [index, setIndex] = useState(0);

     useEffect(() => {
        const lastIndex = people.length - 1;
         if(index > lastIndex){
              setIndex(0);
         }
         if(index < 0){
             setIndex(lastIndex);
         }
     }, [index, peoples])
     useEffect(()=> {
         let slider = setInterval(()=> {
             setIndex((index + 1) % peoples.length);
         }, 5000)
         return () =>{ 
          clearInterval(slider) };
     }, [index])
     return (
        <section className="h-[100vh] grid place-items-center bg-[#f1f5f9]">
            <div className="w-[90vw] relative max-w-[670px] h-[350px] p-[1rem] mx-auto bg-white shadow-[#ccc] shadow-md">
                 {peoples.map((people, peopleIndex) => {
                     const {id, image, name, title, quote} = people;
                      let position = "nextSlide";
                      if(peopleIndex == index){
                          position = "activeSlide";
                      }
                      if(peopleIndex == index - 1 || (index == 0 && peopleIndex == peoples.length - 1)){
                            position = "lastSlide";
                      }
            
                   return <article key={id} className={`w-[100%] h-[100%] absolute top-0 left-0 p-[1rem] ${position}`}>
                         <img src={image} alt={name} className="w-[150px] h-[150px] object-cover rounded-[50%] block mx-auto  border-[3px] border-purple-200 shadow-[#000] shadow-md" />
                         <h2 className="text-center text-purple-400  tracking-[2px] text-[1.5rem] uppercase mt-[0.5rem]">{name}</h2>
                          <h4 className="text-center capitalize tracking-wide mb-[1rem]">{title}</h4>
                          <p className="text-center tracking-[1px] text-blue-300">{quote}</p>  
                   </article>

                 })}
                 <button onClick={() => setIndex(index - 1)} className="absolute top-[50%] left-0 bg-purple-400 px-[0.5rem] py-[0.25rem] rounded-tr-[4px] shadow-[#ccc] shadow rounded-br-[4px] text-white tracking-[2px] capitalize">prev</button>
                 <button onClick = {() => setIndex(index + 1)} className="absolute top-[50%] right-0 bg-purple-400 px-[0.5rem] py-[0.25rem] rounded-tl-[4px] shadow-[#ccc] shadow rounded-bl-[4px] text-white tracking-[2px] capitalize">next</button>
            </div>
        </section>
     )

    }

    export default App;