import React from "react";

const NextButton = ({ dispatch, answer, index, numberQuestions }) => {
  if (answer === null) return null;

  if (index < numberQuestions - 1)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next Question
      </button>
    );

    if (index === numberQuestions - 1)
      return (
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "finish" })}
        >
          Finish
        </button>
      );
};

export default NextButton;
