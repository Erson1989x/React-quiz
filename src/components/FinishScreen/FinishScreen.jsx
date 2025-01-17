import React from "react";

const FinishScreen = ( { points, maxPossiblePoints, highscore, dispatch } ) => {
  const precentage = Math.round((points / maxPossiblePoints) * 100);

  let emoji;
  if(precentage === 100) emoji = "🥇";
  else if(precentage >= 80) emoji = "🎉";
  else if(precentage >= 50) emoji = "👍";
  else if(precentage >= 0) emoji = "🤨";
  else emoji = "🤯";

  return (
    <>
    <p className="result">
      <span>{emoji}</span>
      You answered <strong> {points} </strong> out of {maxPossiblePoints} (
      {precentage}%) correctly
    </p>
    <p className="highscore"> ( Highscore: {highscore} )</p>
    <button className="btn btn-ui" onClick={() => dispatch({type: "restart"})}>Play again</button>
    </>
  );
};

export default FinishScreen;
