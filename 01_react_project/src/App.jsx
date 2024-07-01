import { useState } from "react"
function App() {
 // use State 
  const [counter, setCounter] = useState(15);
  const increaseValue = () => {
       if(counter >= 20){
          return setCounter(15);
          
       }
        setCounter(counter + 1);
  }
  const decreaseValue = () => {
    if(counter <= 0){
       return  setCounter(0)
      
    }
    setCounter(counter - 1);
  }
  return (
     <>
         <h1>Counter App</h1>
         <h3>Counter value: {counter}</h3>
         <button
           onClick={increaseValue}
         >Increment</button>
        <br />
         <button onClick={decreaseValue}>Decrement</button>
     </>    
  )
}

export default App
