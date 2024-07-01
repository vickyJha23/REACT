import {useState, useEffect} from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";
const App = () => {
     const [loading , setLoading] = useState(true);
     const [tours, setTours] = useState([]);
     const handleRemoveTour = (id) => {
          setTours(tours.filter(tour => tour.id !== id));
     }
     const fetchTours = async () => {
          try {
            const response = await fetch("/api/react-tours-project"); 
            const tourData = await response.json();
            if(response.ok){
                 setTours(tourData);
                 setLoading(false);
            }
            setLoading(false);
          } catch (error) {
              console.log("Error while fetching that data:", error.message);
          }
     }
     useEffect(() => {
          fetchTours();
     }, []);
     if(loading) {
         return <Loading /> 
     }
     if(tours.length == 0){
      console.log("29 Har Har Mahadev");
        return <div className="w-[100%] h-[100vh] grid place-items-center">
                  <div>
                  <h2 className="mb-[1rem] capitalize text-[2rem] tracking-[2px]">No tours left</h2>
                   <div className= "text-center">
                   <button onClick = {fetchTours} className=" bg-green-500 px-[0.75rem] py-[0.25rem] rounded-[5px] tracking-[2px] capitalize shadow-[#000] shadow-md">
                       refresh
                   </button>
                   </div>
                  </div>
        </div>;
     }
     return (
        <>
           <Tours tours = {tours} handleRemoveTour = {handleRemoveTour} />
        </>
     )
}


export default App;