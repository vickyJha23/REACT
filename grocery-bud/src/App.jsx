import {useState, useEffect} from "react";
import Alert from "./Alert";
// access local storage
const getLocalStorage = () => {
   const list = localStorage.getItem("list");
   if(list){
       return (list = JSON.parse(list));
   }
   else{
       return [];
   }
}

const App = () => {
   const [list, setList] = useState(getLocalStorage());
   const [name, setName] = useState("");
   const [isEditing, setIsEditing] = useState(false);
   const [alert, setAlert] = useState({show:false, msg: "", type:""});
   const [editID, setEditID] = useState(null);
   const handleSubmit = (e) => {
        e.preventDefault();
        if(!name){
            setAlert({show: true, msg: "please enter value", type:"danger"})
        }
        else if(name && isEditing){
            setList(list.map((item) => {
              if(item.id === editID){
                  return {...item , title: name}
              }
              return item;
            }))
            setName(" ");
            setEditID(null);
            setIsEditing(false);
            setAlert({show:true, msg: "value changed", type: "success"})
        }
        else {
            setAlert({show:true, msg: "new item added", type: "success"})
            const newItem = {id:new Date().getTime().toString(), title: name};
            setList([...list, newItem]);
            setName("");
        }
   }
   const removeAlert = () => {
        setAlert({show:false, msg: "", type: ""})
   }
   const clearItems = () => {
      setAlert({show: true, msg: "empty list", type:"danger"})
   }
   return (
      <div className="h-[100vh] bg-[#f1f5f9]">
        {alert.show && (<Alert {...alert} removeAlert = {removeAlert} list = {list}/>)}
          <div className="w-[90vw] max-w-[450px] mx-auto bg-white shadow-[#000] shadow h-[200px] mt-[10vh] p-[2rem] rounded-[4px]">
                <h1 className="text-center text-[1.5rem] capitalize tracking-[2px] mb-[1.5rem]">Grocery bud</h1>
                <div>
                    <form className="flex flex-wrap" onSubmit={handleSubmit}>
                         <input onChange={(e) => {
                             setName(e.target.value);
                         }} type="text" placeholder="Enter item" className="w-[70%] text-[0.87rem] border-[1px] px-[0.5rem]  border-[#ccc] bg-[#f1f5f9] rounded-tl-[5px] rounded-bl-[5px]"/>
                         <button className="w-[30%] px-[0.75rem] rounded-tr-[5px] rounded-br-[5px] py-[0.25rem] bg-[#00b4d8] text-white tracking-[1px] text-[0.875rem] shadow-[#ccc] shadow">
                          {isEditing ? "Submit" : "Add item"}
                         </button>
                    </form>
                </div>
                {list.length > 0 && (
                   <div>
                      <List list = {list}/>
                      <button onClick={clearItems}>clear items</button>
                 </div>
                )}
          </div>
      </div>
   )
}

export default App;