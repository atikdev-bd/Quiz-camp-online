import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleQuiz from "../SingleQuiz/SingleQuiz";

const QuizDetails = () => {
  const details = useLoaderData();
  console.log(details)
//   console.log(details.data.questions);
  const {questions} = details.data
  return (
    <div>
      <h1>Quiz of {details.data.name}</h1>
      <div>
        {
          questions.map(quest => <SingleQuiz key={quest.id} quest ={quest}></SingleQuiz>)
        }
      </div>
    </div>
  );
};

export default QuizDetails;
