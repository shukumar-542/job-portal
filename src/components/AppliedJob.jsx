import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredJob } from '../utilities/fakeDb';
import SingleAppliedJob from './SingleAppliedJob';

const AppliedJob = () => {
    const [appliedJob, setAppliedJob]  = useState([])
    const featureJobData = useLoaderData()
    

    useEffect(()=>{
        const savedJob = getStoredJob();
        const newArr = []
        for(const id in savedJob){
            const findJob = featureJobData.find(job => job.id == id)
            if(findJob){
                newArr.push(findJob)
            }
        }
        setAppliedJob(...appliedJob,newArr)
        // console.log(savedJob);
    },[])
    // console.log(appliedJob);
    return (
        <div className='my-container'>
            {
                appliedJob.map(singleJob => <SingleAppliedJob 
                singleJob={singleJob}
                key={singleJob.id}
                ></SingleAppliedJob>)
            }
        </div>
    );
};

export default AppliedJob;