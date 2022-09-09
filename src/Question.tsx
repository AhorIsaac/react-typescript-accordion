import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { QuestionProps } from "./App.types";

const Question = ({ title, info }: QuestionProps) => {
  const [showInfo, setShowInfo] = useState<boolean>(false);

  return (
    <>
      <article className="question">
        <header>
          <h4>{title}</h4>
          <button
            type="button"
            className="btn"
            onClick={() => setShowInfo(!showInfo)}
          >
            {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </header>
        <p>{showInfo && info}</p>
      </article>
    </>
  );
};

export default Question;
