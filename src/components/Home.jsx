import React, { useEffect, useState } from 'react';
import img from '../assets/P3OLGJ1 copy 1.png'
import JobCategory from './JobCategory';
import FeatureJob from './FeatureJob';

const Home = () => {

    const [jobCategory, setJobCategory] = useState([]);
    const [featureJob, setFeatureJob] = useState([])

    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch('jobCategory.json')
            .then(res => res.json())
            .then(data => setJobCategory(data))
    }, [])

    useEffect(() => {
        fetch('featureJob.json')
            .then(res => res.json())
            .then(data => setFeatureJob(data))
    }, [])
    // console.log(featureJob.length);
    return (
        <div className=''>
          <div className='bg-gray-100'>
          <div className='flex flex-col px-10  lg:flex-row my-container lg:justify-between space-y-5 items-center mb-10 bg-gray-100'>
                <div className='space-y-4 text-center lg:text-left'>
                    <h1 className='font-extrabold text-5xl lg:w-1/2'>One Step Closer To Your <span className='text-purple-600'>Dream Job</span></h1>
                    <p className='text-gray-500'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='btn-primary'>Get Started </button>
                </div>
                <div>
                    <img src={img} alt="" />
                </div>
            </div>
          </div>

            {/* job Category List */}

            <div className='text-center pt-7 space-y-2 my-container '>
                <h1 className='font-bold text-4xl'>Job Category List</h1>
                <p className='text-gray-500'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='lg:flex justify-between my-container my-10 px-10'>
                {
                    jobCategory.map(job => <JobCategory
                        job={job}
                        key={job.id}
                    ></JobCategory>)
                }
            </div>

            {/* Feature jobs */}

            <div className='text-center pt-7 space-y-2'>
                <h1 className='font-bold text-4xl'>Featured Jobs</h1>
                <p className='text-gray-500'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className='lg:grid grid-cols-2 gap-5 justify-between my-10 my-container'>
                {
                    featureJob.slice(0, showAll ? 6 : 4).map(job => <FeatureJob
                        job={job}
                        key={job.id}
                    ></FeatureJob>)
                }
            </div>
            <div className='flex justify-center items-center pb-5'>
                {!showAll && <span onClick={() => setShowAll(true)}><button className='btn-primary '>See All Job</button></span>}

            </div>

        </div>
    );
};

export default Home;