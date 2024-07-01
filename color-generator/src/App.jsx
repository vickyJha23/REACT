import {useState} from "react";
import Values from "values.js";
import Singlecolor from "./Singlecolor";
const App = () => {
   const [list, setList] = useState(new Values("red").all(10));
   const [error, setError] = useState(null);
   const [color, setColor] = useState("");
   console.log(" in app Har Har Mahadev");
 const  handleSubmit = (e) => {
      e.preventDefault();
       try {
         const colors = new Values(color).all(10);
         if(colors.length === 0){
              return;
         }
         setList(colors);
       } catch (error) {
          console.log("Error at handle submit event: ", error.message);
          setError(error.message);
       }
   }
   return (
        <section className="bg-red-50 pb-[1rem]">
              <div className="mb-[4rem]">
                    <h1 className="text-center text-[2rem] pt-[4rem] tracking-[2px] capitalize mb-[0.5rem]">Color generator</h1>
                    <div className="w-[8rem] h-[0.25rem] mx-auto bg-yellow-500"></div>
              </div>
              <form className="w-[670px] mx-auto flex flex-wrap" onSubmit={handleSubmit}>
                   <input onChange = { (e) => {
                        setColor(e.target.value);
                   }}type="text" placeholder="#f1f5f9"  className="w-[80%] py-[0.5rem] px-[1rem] rounded-tl-[4px] rounded-bl-[4px] tracking-[2px]"/>
                   <button type="submit" className="bg-purple-400 w-[20%] capitalize tracking-[2px] text-white text-[1.2rem] rounded-tr-[4px] rounded-br-[4px]">submit</button>
              </form>
              <div className="w-[90vw] max-w-[1140px] mx-auto mt-[5vh] grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-4">
                    {list.map((color, index) => {
                          return <Singlecolor key={index} {...color} index = {index}/>
                    })}
              </div>
        </section>
   )
}


export default App;      