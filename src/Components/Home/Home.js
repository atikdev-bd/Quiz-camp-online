import React from "react";
import { useLoaderData } from "react-router-dom";
import Header from "../Header/Header";
import Quiz from "../Quiz/Quiz";

const Home = () => {
  const quiz = useLoaderData();
  
  return (
    <div className="bg-red-50">
      <Header></Header>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mt-8 mb-36 mx-8">
        {
            quiz.data.map(quiz => <Quiz key={quiz.id} quiz = {quiz}></Quiz>)
        }
      </div>
    </div>
  );
};

export default Home;
