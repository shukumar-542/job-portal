import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredJob } from '../utilities/fakeDb';
import SingleAppliedJob from './SingleAppliedJob';

const AppliedJob = () => {
    const [appliedJob, setAppliedJob] = useState([])
    const [remoteJob, setRemoteJob] = useState([]);
    const featureJobData = useLoaderData()

    useEffect(() => {
        const savedJob = getStoredJob();
        const newArr = []
        for (const id in savedJob) {
            const findJob = featureJobData.find(job => job.id == id)
            if (findJob) {
                newArr.push(findJob)
            }
        }
        setAppliedJob(newArr)
        // console.log(savedJob);
    }, [])
    // console.log(remoteJob);
    const handleRemoteJob = () => {
        const remoteJob = appliedJob.filter(job => job.remoteOrOnsite == "Remote");
        setRemoteJob(remoteJob);
    }

    const handleOnSiteJob = () => {
        const onSiteJob = appliedJob.filter(job => job.remoteOrOnsite == "Onsite");
        setRemoteJob(onSiteJob)
    }

    return (
        <div className='my-container'>
            <div className='text-end space-x-4'>
                <button onClick={() => handleRemoteJob()} className='btn-primary'>Remote Jobs</button>
                <button onClick={() => handleOnSiteJob()} className='btn-primary'> On Site Jobs</button>
            </div>
            {
                appliedJob.map(singleJob => <SingleAppliedJob
                    singleJob={singleJob}
                    key={singleJob.id}
                ></SingleAppliedJob>)
            }
            {
                remoteJob.map(singleJob => <SingleAppliedJob
                    singleJob={singleJob}
                    key={singleJob.id}
                ></SingleAppliedJob>)
            }


        </div>
    );
};

export default AppliedJob;