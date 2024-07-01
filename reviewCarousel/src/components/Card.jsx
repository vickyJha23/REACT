import React from 'react';
import { useEffect, useState, useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../assets/fontAwesome"
const Card = ({review}) => {
   const [index, setIndex] = useState(0);
    if(review.length === 0){
        return null;
    }
   const {name, image, description, designation} = review[index];
   const checkNumber = (number) => {
        if(number > review.length - 1){
             return 0;
         }
         if(number < 0){
              return review.length - 1;
         }
         return number;
   }  
   const handleIndexIncrement = () => {
         setIndex(prevIndex => {
              const newIndex = prevIndex + 1;
              return checkNumber(newIndex);
         })
   }
   const handleIndexDecrement = () =>  {
        setIndex(prevIndex => {
             const newIndex = prevIndex - 1;
             return checkNumber(newIndex);
        })
   }
    return (
          <div className="min-h-[100vh] font-roboto overflow-hidden">
              <div className="mt-[10vh] mb-[2rem]">
                   <h1 className="text-center uppercase text-[2.5rem] tracking-[2px] text-primaryColor-1">reviews</h1>
                   <div className="w-[7rem] h-[0.25rem] m-auto bg-yellow-600"></div>
              </div>
              <div className="w-[90vw] max-w-[670px] bg-white h-[auto] shadow-[#ccc] shadow m-auto rounded-[5px] px-[2rem] py-[1.5rem]">
                   <div className="relative w-[150px] h-[150px] mx-auto rounded-[50%] mb-[1rem] before:content-[''] before:absolute before:w-[100%] before:h-[100%] before:bg-blue-400 before:rounded-[50%] before:top-[-0.25rem] before:right-[-0.5rem] after:content-['\f10e'] after:absolute after:w-[50px] after:h-[50px] after:bg-blue-200 after:rounded-[50%] after:top-0 after:left-0 after:translate-y-[10%] after:grid after:place-items-center after:text-white after:font-awesome">
                          <img className ="relative w-[100%] h-[100%] object-cover rounded-[50%]" src={image} alt="" />
                   </div>
                   <div>
                         <h3 className="text-center mb-[0.5rem] tracking-[2px] text-primaryColor-1 text-[1.2rem]">{name}</h3>
                         <h3 className='text-center mb-[1rem] tracking-[2px] uppercase text-blue-600'>{designation}</h3>
                         <p  className='text-justify'>{description}</p>     
                        <div className="text-center mt-[1.5rem]">
                             <button onClick={handleIndexDecrement} className="bg-black text-white cursor-pointer mx-[1rem] px-[0.5rem] py-[0.25rem] rounded-[4px] text-[1.2rem]">
                             <FontAwesomeIcon icon="chevron-left" />
                             </button>
                             <button onClick={handleIndexIncrement} className="bg-black text-white cursor-pointer mx-[1rem] px-[0.5rem] py-[0.25rem] rounded-[4px] text-[1.2rem]">
                                <FontAwesomeIcon icon = "chevron-right"/>
                             </button>
                        </div>
                   </div>
              </div>
          </div>
    )
}
export default Card;