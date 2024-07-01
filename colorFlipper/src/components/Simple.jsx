import {useState} from "react";
const Simple = ({colors}) => {
     const [color, setColor] = useState("white");
     const [intervalID, setIntervalID] = useState(null)
     const generateRandomNumber = () => {
          return Math.floor(Math.random() * colors.length);
     }
     const handleBackgroundColor = () => {
        const color = colors[generateRandomNumber()];
        console.log("color is", color)
       setColor(color);    
     }
     const initiateBackgroundChanger = () => {
            if(!intervalID){
                 const newIntervalID = setInterval(handleBackgroundColor, 1000);
                 setIntervalID(newIntervalID);
            }
     }
     const stopBackgroundChanger = () => {
           if(intervalID) {
                 clearInterval(intervalID);
                 setIntervalID(null);
           }
     }
     return (
          <div className="min-h-[100vh] grid place-items-center" style={{backgroundColor: color}}>
                <div>
                     <h1 className="bg-[#333] px-[0.5rem] py-[0.25rem] rounded-[5px] uppercase text-white tracking-[2px] shadow-[#000] shadow">background-color: {color}</h1>
                     <div className="mt-[1rem] flex justify-center">
                         <button onClick={initiateBackgroundChanger} className="border-[2px] border-black uppercase px-[0.75rem] py-[0.25rem] tracking-[2px] mx-[0.5rem] rounded-[4px] shadow-[#000] shadow">start</button>
                         <button onClick={stopBackgroundChanger} className="border-[2px] border-black uppercase px-[0.75rem] py-[0.25rem] tracking-[2px] mx-[0.5rem] rounded-[4px] shadow-[#000] shadow">stop</button>
                     </div>
                </div>
          </div>
     )
}

export default Simple;