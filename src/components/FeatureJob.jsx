import React from 'react';
import { MapPinIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const FeatureJob = ({job}) => {
    // console.log(job);
    const  {id,imageLink,jobTitle,companyName,remoteOrOnsite,fulltimeOrPartTime,location,salary  } = job
    return (
        <div className='border p-10 space-y-2 '>
            <img src={imageLink} className='w-14 ' alt="" />
            <h2>{jobTitle}</h2>
            <p>{companyName}</p>
            <div className='flex gap-2  '>
                <p className='border border-purple-500 px-2 py-1 rounded text-purple-500 font-bold'>{remoteOrOnsite}</p>
                <p className='border border-purple-500 px-2 py-1 rounded text-purple-500 font-bold'>{fulltimeOrPartTime}</p>
            </div>

            <Link to={`/details/${id}`}><button className='btn-primary'>View Details</button></Link>
        </div>
    );
};

export default FeatureJob;