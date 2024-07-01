import { useEffect } from "react";

const Alert = ({type, msg, removeAlert, list}) => {
    useEffect(() => {
         const timeout = setInterval(() => {
              removeAlert();
         }, 3000)

        return () => {
              clearInterval(timeout);
        }
    }, [list])

    return (<p className={`${type === "success" ? "bg-[#d4edda] text-[#155724]" : "bg-[#f8d7da] text-[#721c24]"} alert`}>{msg}</p>)
}

export default Alert;