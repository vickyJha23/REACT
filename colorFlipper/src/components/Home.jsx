import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Simple from "./Simple";
import Hex from "./Hex";
const Home = () => {
    const simpleColors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"];
    const hexColors = [0,1,2,3,4,5,6,7,8,9,"A", "B", "C", "D", "E", "F"];
    return(
         <Router>
            <Navbar />
             <Routes>
                <Route path="/simple" element={<Simple colors = {simpleColors} />}/>                                 
                <Route path="/hex" element = {<Hex colors = {hexColors}/>}/>
                <Route path="/" element = {<Simple colors = {simpleColors}/>}/>
             </Routes>
         </Router>               
    )
}

export default Home;