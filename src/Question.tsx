import React, { useState, FC, ReactElement } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { QuestionProps } from "./App.types";

const Question: FC<QuestionProps> = ({
  title,
  info,
}: QuestionProps): ReactElement => {
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
