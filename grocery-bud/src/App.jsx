import {useState, useEffect} from "react";
import Alert from "./Alert";
import List from "./List"
// access local storage
const getLocalStorage = () => {
   let list = localStorage.getItem("list");
   if(list){
     return (list = JSON.parse(localStorage.getItem("list")));
    }
    return [];
}

const App = () => {
    const [name, setName] = useState("");
   const [list, setList] = useState(getLocalStorage());
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
      setAlert({show: true, msg: "empty list", type:"danger"});
      setList([]);
   }
   const editItem = (id) => {
      const specificItem = list.find((item) => item.id === id);
      setIsEditing(true);
      setEditID(id);
      setName(specificItem.title);
   }
   const deleteItem = (id) => {
     setAlert({show:true, msg:"item deleted", type:"danger"})
     setList(list.filter((item) => {return item.id !== id}));
   }
   useEffect(() => {
       localStorage.setItem("list", JSON.stringify(list));
   }, [list])
   return (
      <div className="h-[100vh] bg-[#f1f5f9]">
        {alert.show && (<Alert {...alert} removeAlert = {removeAlert} list = {list}/>)}
          <div className="w-[90vw] max-w-[450px] mx-auto bg-white shadow-[#000] shadow h-[auto] mt-[10vh] p-[2rem] rounded-[4px]">
                <h1 className="text-center text-[1.5rem] capitalize tracking-[2px] mb-[1.5rem]">Grocery bud</h1>
                <div className="mb-[1rem]">
                    <form className="flex flex-wrap" onSubmit={handleSubmit}>
                         <input onChange={(e) => {
                             setName(e.target.value);
                         }} value={name} type="text" placeholder="Enter item" className="w-[70%] text-[0.87rem] border-[1px] px-[0.5rem]  border-[#ccc] bg-[#f1f5f9] rounded-tl-[5px] rounded-bl-[5px]"/>
                         <button className="w-[30%] px-[0.75rem] rounded-tr-[5px] rounded-br-[5px] py-[0.25rem] bg-[#00b4d8] text-white tracking-[1px] text-[0.875rem] shadow-[#ccc] shadow">
                          {isEditing ? "Submit" : "Add item"}
                         </button>
                    </form>
                </div>
                {list.length > 0 && (
                   <div>
                      <List list = {list} editItem = {editItem} deleteItem = {deleteItem}/>
                      <button onClick={clearItems} className="block mx-auto capitalize tracking-[2px] mt-[1rem] text-red-500 hover:text-red-200 duration-300 ease-linear">clear items</button>
                   </div>
                )}
          </div>
      </div>
   )
}

export default App;