import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleQuiz from "../SingleQuiz/SingleQuiz";

const QuizDetails = () => {
  const details = useLoaderData();
  const {questions} = details.data
  
  return (
    <div className="text-center text-orange-400">
      <h1 className="text-6xl font-semibold">Quiz of {details.data.name}</h1>
      <div>
        {
          questions.map(quest => <SingleQuiz key={quest.id} quest ={quest}></SingleQuiz>)
        }
      </div>
    </div>
  );
};

export default QuizDetails;
