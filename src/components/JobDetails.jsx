import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { CurrencyDollarIcon, BriefcaseIcon, PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'


const JobDetails = () => {

    const { id } = useParams()
    const featureJob = useLoaderData()
    // console.log(featureJob);

    // console.log(featureJob);

    const singleJob = featureJob?.find(job => job.id == id);
    const { location, contactInformation, jobDescription, jobResponsibility, educationalRequirements, experiences, jobTitle, salary } = singleJob
    // console.log(singleJob);

    // const {id} = useParams()
    // const jobs = useLoaderData()
    // const singleJob = jobs.find(job => job.id == id);
    // console.log(singleJob.jobTitle);
    // console.log(jobs);
    const handleApplyNow = (id)=>{
        console.log(id);
    }
    return (
        <div className='my-container  grid grid-cols-3 gap-10'>

            <div className='space-y-6 col-span-2'>
                <p><span className='font-bold '>Job Description :</span>{jobDescription}</p>
                <p><span className='font-bold '>jobResponsibility :</span> {jobResponsibility}</p>
                <p><span className='font-bold block mb-2'>educationalRequirements:</span> {educationalRequirements}</p>
                <p><span className='font-bold block mb-2'>experiences: </span>{experiences}</p>

            </div>
            <div>
                <div className='bg-gray-200 space-y-5 rounded-md p-4 divide-y'>
                    <h1 className='font-bold border  divide-dashed'>Job Details</h1>
                    <div className='space-y-4'>
                        <p className='flex '>
                            <CurrencyDollarIcon className='h-5 w-5 text-gray-500'></CurrencyDollarIcon>
                            <span>Salary : {salary} {`(Per Month)`}</span>
                        </p>
                        <p className='flex'>
                            <BriefcaseIcon className='h-5 w-5 text-gray-500'></BriefcaseIcon>
                            <span>Job Title : {jobTitle}</span>
                        </p>
                    </div>

                    <h1 className='font-bold'>Contact Info</h1>
                    <div className='space-y-2'>
                        <p className='flex '>
                            <PhoneIcon className='w-5 h-5 mr-1'></PhoneIcon>
                            Phone : <span className='ml-1'>{contactInformation.phone}</span></p>
                        <p className='flex'>
                            <EnvelopeIcon className='w-6 h-6 mr-1'></EnvelopeIcon>
                            Email : <span className='ml-1'>{contactInformation.email}</span></p>
                        <p className='flex'>
                            <MapPinIcon className='w-5 h-5 mr-1'></MapPinIcon>
                            Address : <span className='ml-1'>{location}</span></p>
                    </div>
                </div>
                <button onClick={()=>handleApplyNow(id)} className='btn-primary mt-5 w-full'>Apply Now </button>
            </div>
        </div>
    );
};

export default JobDetails;