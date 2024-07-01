import React from "react";
import Dish from "./components/Dish";
import {useState, useEffect, useMemo} from "react";
import Buttons from "./components/Buttons"
import menus from "./assets/images/Menus";
const App = () => {
  const [filterState, setFilterState] = useState(null);
  const [dishes, setDishes] = useState(menus);
  const categories = useMemo(() => {
      // return ["all", ...new Set(menus.map(menu => menu.category))]
      return menus.reduce((acc, curr) => {
        if(!acc.includes(curr.category)){
             acc.push(curr.category)
        }           
        return acc;
      }, ["all"])
  }, [menus])
const setFilterMenuCategory = (e) => {
     const category = e.currentTarget.dataset.id;
     setFilterState(category);
}
const filterItems = (state) => {
        if(state === "all"){
           return setDishes(menus);
        }
        else{
          return setDishes(menus.filter((dish) => dish.category === state));
        }
      
}
useEffect(() => {
   if(filterState){
       filterItems(filterState);
   }
   
}, [filterState]);
    return(
        <div className="">
          <div className="mt-[10vh] mb-[2rem]">
              <h1 className="text-center text-[2.5rem] capitalize tracking-[3px] font-semibold">Our Menu</h1>
              <div className="w-[7rem] h-[0.25rem] bg-blue-400 mx-auto"></div>
          </div>
          <div className="flex justify-center mb-[4rem] gap-4">
             {categories.map((category, index) => {
                 return <Buttons key = {index} category= {category} handleClick = {(e) => setFilterMenuCategory(e)}/>
             })}                            
          </div>
          <div className="w-[90vw] max-w-[1440px] mx-auto lg:w-[95vw] justify-center grid gap-x-[2rem] gap-y-[2rem] lg:grid-cols-2">
               {dishes.map((menuItem, index) => {
                   return <Dish key = {index} image = {menuItem.image} title = {menuItem.title} price = {menuItem.price} description = {menuItem.description}/>
               })} 
          </div> 
        </div>
    )
}

export default App;