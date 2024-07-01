import React from "react";
import Question from "./components/Question";
import { useState } from "react" 
const App = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    const questions = [
        {
             question: "What is the capital of France?",
              answer: "The capital of France is Paris, a major European city and a global center for art, fashion, gastronomy, and culture. It is known for its café culture and landmarks like the Eiffel Tower, the Notre-Dame Cathedral, and the Louvre Museum."
        },
        {
             question: "Who wrote 'To Kill a Mockingbird'?",
             answer: "The novel 'To Kill a Mockingbird' was written by Harper Lee. Published in 1960, it became a classic of modern American literature. The novel addresses serious issues like racial inequality and moral growth, and it is widely studied in schools for its themes and lessons."
        },
        {
            question: "What is the chemical symbol for water?",
            answer: "The chemical symbol for water is H2O. This indicates that each molecule of water consists of two hydrogen atoms covalently bonded to one oxygen atom. Water is essential for all known forms of life and plays a critical role in various biological and environmental processes."
        }
    ]   
    const handleToggle = (index) => {
        // if we have one parameter then we can skip the parenthesis
         setActiveIndex((prevIndex) => {
            return prevIndex !== index ? index : null;
         })
    }
    return (
        <div className="w-[100vw] h-[100vh] bg-[#f1f1f9] grid place-items-center">
        <div className="w-[90vw] max-w-[670px]">
             <div className="mb-[2rem]">
                   <h1 className="text-yellow-600 font-greate-vibes text-[2.5rem] tracking-[2px] text-center">General Question</h1>
             </div>
             <div className="questions">
                     {questions.map((question, index) => {
                        console.log("Har Har Mahadev");
                       return   <Question 
                           key = {index}
                           question = {question.question}
                           answer= {question.answer}
                           isActive={activeIndex == index}
                           onToggle = {() => handleToggle(index)}
                        />
                    })}
             </div>
            </div>
        </div>
    
    )
}


export default App;