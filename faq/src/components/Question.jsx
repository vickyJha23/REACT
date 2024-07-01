import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
const Question = ({question, answer, isActive, onToggle}) => {
      return (
        <div className={`question px-[1rem] py-[1rem] rounded-[5px] shadow-[#ccc] shadow bg-white mb-[1rem]`}>
    <div className="flex justify-between items-center">
      <p className="capitalize tracking-[2px]">{question}</p>
      <button onClick={onToggle}>
        <FontAwesomeIcon
          className="text-yellow-600 text-[1.2rem]"
          icon={isActive ? "square-minus" : "square-plus"}
        />
      </button>
    </div>
    {isActive && (
      <p className="question-answer tracking-[2px] mt-[1rem]">
        {answer}
      </p>
    )}
  </div>
      )
};
export default Question;