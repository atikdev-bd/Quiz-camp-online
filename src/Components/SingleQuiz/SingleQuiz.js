import React from "react";

const SingleQuiz = ({ quest }) => {
  console.log(quest);
  const { options } = quest;
  console.log(options);
  return (
    <div>
      <h1>{quest.question}</h1>
      <div>
        <div>{quest.options[0]}</div>
        <div>{quest.options[1]}</div>
        <div>{quest.options[2]}</div>
        <div>{quest.options[3]}</div>
      </div>
    </div>
  );
};

export default SingleQuiz;
