import React from 'react';

const JobCategory = ({job}) => {
    // console.log(job);
    const {imageLink,jobCategoryName,availableJobs} = job
    return (
        <div className='bg-gray-100 py-6 px-10 my-5 space-y-2 rounded-md'>
            
            <img src={imageLink} alt="" />
            <h1>{jobCategoryName}</h1>
            <p>{availableJobs}</p>
            
        </div>
    );
};

export default JobCategory;