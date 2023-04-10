import React from 'react';
import { MapPinIcon,CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const FeatureJob = ({ job }) => {
    // console.log(job);
    const { id, imageLink, jobTitle, companyName, remoteOrOnsite, fulltimeOrPartTime, location, salary } = job
    return (
        <div className='border p-10 my-5 lg:my-0 space-y-2 shadow-sm '>
            <img src={imageLink} className='w-14 ' alt="" />
            <h2 className='font-bold font-2xl'>{jobTitle}</h2>
            <p className='text-gray-500'>{companyName}</p>
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

            <Link to={`/details/${id}`}><button className='btn-primary mt-4'>View Details</button></Link>
        </div>
    );
};

export default FeatureJob;