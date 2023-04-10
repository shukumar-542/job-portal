const JobLoader =async()=>{
    const jobsData = await fetch('featureJob.json');
    const jobs = await jobsData.json();
    return jobs
}

export default JobLoader;