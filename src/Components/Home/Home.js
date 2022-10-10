import React from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import Quiz from "../Quiz/Quiz";

const Home = () => {
  const quiz = useLoaderData();
  console.log(quiz.data)
  
  return (
    <div>
      <Header></Header>
      <div className="grid grid-cols-4 gap-6 mt-8 mx-4">
        {
            quiz.data.map(quiz => <Quiz key={quiz.id} quiz = {quiz}></Quiz>)
        }
      </div>
    </div>
  );
};

export default Home;
