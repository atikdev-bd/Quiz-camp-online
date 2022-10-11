import { EyeIcon } from "@heroicons/react/24/solid";
import { click } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const SingleQuiz = ({ quest }) => {
  const {correctAnswer} = quest
 
  const click =(ids)=>{
    if(ids === correctAnswer){
      toast('right ans');
    }else{
      toast('vul')
    }
  //  console.log(correctAnswer)
  //    console.log(ids);
  }
  
  //  console.log(correctAnswer)
  //   console.log(options);
  const toasts = (values) => {
    toast('correct answer '+ values);
    return;
    
    // return console.log(values);;
  };
  return (
    <div className="border rounded font-bold bg-slate-200 my-6 mx-24 text-indigo-800">
      <div className="text-center mt-4 text-2xl">
      <div className="flex justify-end mr-4">

          <EyeIcon onClick={()=> toasts(quest.correctAnswer)} title="See correct answer" className="h-6 w-6 text-slate-800" />
        </div>
        <h1>{quest.question}</h1>
       
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">
        <div
         
          className="border rounded bg-gray-300 overflow-auto h-20 p-2"
        >
          <input onClick={(e)=>{click(e.target.value)}} type="radio" id="" name="fav_language" value={quest.options[0]} />
          <label className="ml-1" for="html">
            {quest.options[0]}
            
          </label>
        </div>
        <div className="border rounded bg-gray-300 overflow-auto h-20 p-2">
          <input onClick={(e)=>{click(e.target.value)}} type="radio" id="" name="fav_language" value={quest.options[1]} />
          <label className="ml-1 mt-2" for="html">
            {quest.options[1]}
          </label>
        </div>
        <div className="border rounded bg-gray-300 overflow-auto h-20 p-2">
          <input onClick={(e)=>{click(e.target.value)}} type="radio" id="" name="fav_language" value={quest.options[2]}/>
          <label className="ml-1" for="html">
            {quest.options[2]}
          </label>
        </div>
        <div className="border rounded bg-gray-300 overflow-auto h-20 p-2">
          <input onClick={(e)=>{click(e.target.value)}} type="radio" id="" name="fav_language" value={quest.options[3]}/>
          <label className="ml-1" for="html">
            {quest.options[3]}
          </label>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default SingleQuiz;
