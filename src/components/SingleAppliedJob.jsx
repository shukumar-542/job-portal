import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const SingleAppliedJob = ({ singleJob }) => {
    // console.log(singleJob);
    const { id, imageLink, jobTitle, companyName, fulltimeOrPartTime, remoteOrOnsite, salary, location } = singleJob
    
    
    return (
        <div className=' p-5 flex justify-between items-center border border-gray-200 rounded-md my-5 shadow-md '>
            <div className='flex gap-5 '>
                <div className='bg-gray-200 h-auto w-auto flex items-center'>
                    <img src={imageLink} className='p-4' alt="" />
                </div>
                <div className='space-y-4'>
                    <h1 className='font-bold text-xl'>{jobTitle}</h1>
                    <p>{companyName}</p>
                    <div className='flex gap-2'>
                        <p className='border border-purple-500 px-2 py-1 rounded text-purple-500 font-bold'>{remoteOrOnsite}</p>
                        <p className='border border-purple-500 px-2 py-1 rounded text-purple-500 font-bold'>{fulltimeOrPartTime}</p>
                    </div>

                    <div className='flex  gap-3'>
                <div>
                    <p className='flex'><MapPinIcon className='h-5 w-5 text-gray-500'></MapPinIcon>
                        <span>{location}</span>
                    </p>
                </div>
                <p className='flex'>
                    <CurrencyDollarIcon className='h-5 w-5 text-gray-500'></CurrencyDollarIcon>
                    <span>Salary : {salary}</span>
                </p>
            </div>
                </div>

            </div>
            <div>
                <Link to={`/details/${id}`}><button className='btn-primary'>View Details</button></Link>
            </div>
        </div>
    );
};

export default SingleAppliedJob;