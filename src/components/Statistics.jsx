import React from 'react';
import {  Tooltip,  AreaChart, XAxis, YAxis, Area } from 'recharts';


const Statistics = () => {
    
const data = [
    { name: 'Assignment-1', value: 60 },
    { name: 'Assignment-2', value: 60 },
    { name: 'Assignment-3', value: 60 },
    { name: 'Assignment-4', value: 60 },
    { name: 'Assignment-5', value: 60 },
    { name: 'Assignment-6', value: 60 },
    { name: 'Assignment-7', value: 60 },
    { name: 'Assignment-8', value: 60 },
  ];
    return (
        <div className='flex justify-center mt-10'>
           <AreaChart
            width={600}
            height={400}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,}}
           >
            <XAxis dataKey='name'></XAxis>
            <YAxis/>
            <Tooltip></Tooltip>
            <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />

           </AreaChart>
        </div>
    );
};

export default Statistics;