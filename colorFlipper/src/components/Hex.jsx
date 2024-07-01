import {useState} from "react";
const Hex = ({colors}) => {
    const [color, setColor] = useState("#FFFFFF");
    const [intervalID, setIntervalID] = useState(null);
   const generateHexColor = () => {
        let hexColor = "#";
        for(let i = 1; i <= 6; i++){
             hexColor = hexColor + colors[generateRandomNumber()];
        }
        setColor(hexColor);
   }
   function generateRandomNumber () {
        return Math.floor(Math.random() * colors.length);
   }
   function initiateHexColorChanger ()  {
       if(!intervalID){
          const newIntervalID = setInterval(generateHexColor, 1000);
          setIntervalID(newIntervalID);
       }
   }
   function stopHexColorChanger () {
       if(intervalID){
           clearInterval(intervalID);
           setIntervalID(null);
       }      
   }
    return (
        <div className="min-h-[100vh] grid place-items-center w-[100%]" style={{backgroundColor: color}}>
              <div>
                    <h1 className="uppercase tracking-[2px] bg-[#333] text-white px-[0.75rem] py-[0.5rem] rounded-[5px] shadow-[#000] shadow">background-color: {color}</h1>
                    <div className="mt-[1.5rem] flex justify-center">
                    <button onClick = {initiateHexColorChanger} className="uppercase cursor-pointer bg-white rounded-[5px] shadow-[#000] shadow tracking-[2px] px-[0.75rem] py-[0.25rem] mx-[0.5rem]" style={{borderColor: color, borderWidth: "5px", borderStyle: "solid"}}> start</button>
                    <button onClick = {stopHexColorChanger} className="uppercase cursor-pointer bg-white rounded-[5px] shadow-[#000] shadow tracking-[2px] px-[0.75rem] py-[0.25rem] mx-[0.5rem]" style={{borderColor: color, borderWidth: "5px", borderStyle: "solid"}}>stop</button>
                    </div>
              </div>
        </div>
    )
}

export default Hex;