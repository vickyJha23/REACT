import {useState} from "react";
import data from "./assets/data";
import List from "./components/List";
const App = () => {
const [people, setPeople] = useState(data);
     return (
         <>
            <List people={people} onClick = { () => setPeople([])}/>
         </>     
    )
}

export default App;