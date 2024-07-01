import { useEffect, useState } from "react";
import rgbToHex from "./utils";
const Singlecolor = ({rgb, weight, index}) => {
    const[alert, setAlert] = useState(false);
    const bcg = rgb.join(" ");
    const hexColor = rgbToHex(...rgb);
    useEffect(() => {
         const timeout = setInterval(()=> {
            setAlert(false);
         }, 3000)
         return () => {
               clearInterval(timeout);
         }
    }, [alert]);
    return (
       <div onClick={() => {
            setAlert(true);
            navigator.clipboard.writeText(hexColor);
       }} className= {`h-[150px] p-[0.5rem] ${index > 10 && "text-white"}`} style={{backgroundColor:`rgb(${bcg})`}}>
          <p className="">{weight} %</p>
          <p className="">{hexColor}</p>
          {alert && (<p className="uppercase mt-[1rem]">copy to the clipoard !</p>)}
       </div>
   )
}


export default Singlecolor;