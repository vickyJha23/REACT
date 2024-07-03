import { useEffect, useRef } from "react";

const Alert = ({type, msg, removeAlert, list}) => {
    const divRef = useRef(null);
    useEffect(() => {
        const ref = divRef.current;
        let i = 0;
        let width = ref.offsetWidth;
        const initiateWidthDecrement = () => {
            if( i === 0){
                 i = 1;
                 const timeout = setInterval(handleWidthDecrement, 1000);
                 function handleWidthDecrement() {
                    if(width == 0){
                          clearInterval(timeout);
                          removeAlert();
                          i = 0;
                    }
                    else{
                         width = width - 50;
                         ref.style.width = width + "px";
                    }
                 }
            }
        }
        initiateWidthDecrement();
    }, [list])
    return (<div className="w-[450px] mx-auto h-[3rem] bg-white shadow-[#000] shadow rounded-[5px] fixed top-[1rem] left-[50%] translate-x-[-50%]">
    <p className="text-center capitalize tracking-[2px] mt-[0.5rem]">{msg}</p>
    <div ref = {divRef} className = {`${type === "success" ? "bg-green-400" : "bg-red-400"} absolute w-[100%] h-[0.35rem] bottom-0`}></div>
    </div>)
}

export default Alert;