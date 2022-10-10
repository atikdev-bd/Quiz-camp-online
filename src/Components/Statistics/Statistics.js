import React from "react";
import { useLoaderData } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis,  Tooltip, Legend, } from 'recharts';

const Statistics = () => {
  const data = useLoaderData();
  const details = data.data
  
  return (
    <div className="flex justify-center mt-12 mr-12 ">
      <LineChart width={500} height={300} data={details}>
      <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey='total' stroke="#82ca9d" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip></Tooltip>
      </LineChart>
    </div>
  );
};

export default Statistics;
