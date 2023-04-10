import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = () => {
    const {id} = useParams()
    

    const featureJob = useLoaderData()
    console.log(featureJob);
   
    // console.log(featureJob);
   
    const singleJob = featureJob?.find(job => job.id == id) ;
    console.log(singleJob);
    const {jobDescription,jobResponsibility,educationalRequirements,experiences,jobTitle,salary } = singleJob
    
    // const {id} = useParams()
    // const jobs = useLoaderData()
    // const singleJob = jobs.find(job => job.id == id);
    // console.log(singleJob.jobTitle);
    // console.log(jobs);
    return (
        <div className='my-container  grid grid-cols-2 gap-10'>
            
            <div className='space-y-6'>
                <p>Job Description :{jobDescription}</p>
                <p>jobResponsibility : {jobResponsibility}</p>
                <p>educationalRequirements: {educationalRequirements}</p>
                <p>experiences:{experiences}</p>

            </div>
            <div>
                <h1>Job Details</h1>
                <div>
                    <p>salary : {salary}</p>
                    <p>job title :{jobTitle} </p>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;