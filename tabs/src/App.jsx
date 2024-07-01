import {useState, useEffect} from "react";
const App = () => {
  const [status, setStatus] = useState(null);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [index, setIndex] = useState(0);
  const fetchData = async () => {
       setStatus("loading");
      try {
          const response = await fetch("/api/react-tabs-project");
          const data = await response.json();
          if(!response.ok){
               throw new Error(data.message);
          }
          console.log("Har Har Mahadev");
          setData(data);
          setStatus("succeeded");
      } catch (error) {
           setError(error.message);
          setStatus("failed");
      }
  }
  useEffect(() => {
    fetchData();
  }, []);
  if(status === "loading"){
     return (
         <section className="w-[100%] h-[100vh] grid place-items-center bg-[#f1f5f9]">
             <div className="w-[6rem] h-[6rem] border-[5px] border-t-white rounded-[50%] animate-spin"></div>
         </section>
     )
   }
   if(status === "failed"){
        return (
          <section className="w-[100%] h-[100vh] grid place-items-center bg-[#f1f5f9]">
          <div className="">{error}</div>
          </section>
        )
   }
  if(data.length == 0){
      return null;
  }
  const {company, dates, duties, title} = data[index];
   return(
       <section className="h-[100vh] overflow-hidden">
           <div className="mb-[4rem] mt-[10vh]">
                <h2 className="text-[2rem] tracking-[3px] font-bold text-center mb-[0.5rem]">Experience</h2>
                <div className="w-[6rem] h-[0.25rem] bg-yellow-500 mx-auto"></div>
           </div>
           <div className="w-[90vw] max-w-[1140px] mx-auto">
                <div className="flex flex-row justify-center mb-[4rem] flex-wrap">
                    {data.map((item, ind) => (<button  onClick = {() => setIndex(ind)} key = {item.id} className={`mx-[0.5rem] border-[2px] px-[0.5rem] py-[0.25rem] tracking-[2px] rounded-[4px] ${index == ind ? "bg-green-400": ""}`}>{item.company}</button>))}
                </div>
                <article>
                   <h3 className="font-semibold">{title}</h3>
                   <h4 className="uppercase px-[0.75rem] py-[0.375rem] bg-gray-900  text-gray-500 inline-block rounded-[4px]">{company}</h4>
                   <p className="tracking-[2px]">{dates}</p>
                   {duties.map((duty, index) => {
                       return(
                          <div key={index}>
                               <p>{duty}</p>
                          </div>                       )
                   })}
                </article>
                <button className="btn">
                     more info
                </button>
           </div>
       </section>
   )
}

export default App;