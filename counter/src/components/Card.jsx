import { useState, useRef } from "react";
function Card () {
    const [counter, setCounter] = useState(0);
    const p = useRef(null);
    const increment = () => {
    //     setCounter(counter + 1); // this is asynchronous operation...
    // // this state uses a current state of the variable not the updated state ...
    //     if(counter >= 0){
    //         console.log("Hey there");
    //         p.current.style.color = "green";
    // this is wrong approach since setCounter is async in nature..
    //     }
       setCounter(prevCounter => {
            const newCounter = prevCounter + 1;
            if(newCounter > 0){
                p.current.style.color = "green";
            }
            else{
                 p.current.style.color = "black";
            }
            return newCounter;
       })
    }
    const reset = () => {
         setCounter(0);
         p.current.style.color = "#000";
    }
    const decrement = () => {
         setCounter(prevCounter => {
              const newCounter = prevCounter - 1;
              console.log(newCounter);
              if(newCounter < 0){
                  p.current.style.color = "red";
              }
              else{
                 p.current.style.color = "black";
              }
              return newCounter;
         })
    }
     return (
       <div className="w-[100vw] h-[calc(100vh-5rem)] grid place-items-center">
            <div className="w-[90vw] max-w-[670px] bg-#fff rounded-md p-[1rem] shadow-[#ccc] shadow">
                 <h1 className="text-center text-[2.5rem] tracking-[2px] font-semibold mb-[1.5rem]">Counter</h1>
                 <p ref = {p} className="text-center text-[4rem] mb-[1.5rem]">{counter}</p>    
                 <div className="flex justify-center gap-8">
                      <button onClick = {increment} className="uppercase tracking-[3px] border-[2px] border-blue-600 px-[0.5rem] py-[0.25rem] rounded-[5px] shadow-[#333] shadow">increment</button>
                      <button onClick = {reset} className="uppercase tracking-[3px] border-[2px] border-black px-[0.5rem] py-[0.25rem] rounded-[5px] shadow-[#333] shadow">reset</button>
                      <button onClick = {decrement} className="uppercase tracking-[3px] border-[2px] border-black px-[0.5rem] py-[0.25rem] rounded-[5px] shadow-[#333] shadow">decrement</button>
                 </div>
            </div>
       </div>
     )   
}


export default Card;