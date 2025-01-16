import React from "react";
import Options from "./Options";

const Question = ({ questions, dispatch, answer, points }) => {
  return (
    <div>
      <h4>{questions.question}</h4>
      <Options points={points} dispatch={dispatch} answer={answer} questions={questions} />
    </div>
  );
};

export default Question;
