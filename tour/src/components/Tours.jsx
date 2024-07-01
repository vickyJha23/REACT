import {useState} from "react";
import Tour from "./Tour";
const Tours = ({tours, handleRemoveTour}) => {
    return (
         <section className="h-[100vh]">
              <div className="mt-[10vh] mb-[4rem]">
                  <h1 className="text-center text-[2rem] font-semibold tracking-[2px] capitalize">Our Tours</h1>
                  <div className="w-[6rem] h-[0.25rem] bg-red-400 mx-auto"></div>
              </div>
              <div className="w-[90vw] max-w-[1140px] mx-auto grid grid-cols-3 gap-x-[3rem] gap-y-[2rem] py-[2rem]">
                   {tours.map((tour, index) => {
                        return <Tour key = {tour.id} {...tour} handleRemoveTour = {handleRemoveTour} />
                   })}
              </div>
         </section>
    )
}

export default Tours;