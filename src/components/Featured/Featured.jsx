import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';

const Featured = () => {
    const [jobs, setJobs] = useState([])
    useEffect(() => {
        fetch('/public/jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    } , [])
    return (
        <div className='text-center'>
            <h1 className='text-5xl  my-8'>Featured Jobs {jobs.length} </h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            
            <div className='grid grid-cols-2 text-left '>
            {
                jobs.map(job => <Job key={job.id} job={job}></Job>)
            }
            </div>
        </div>
    );
};

export default Featured;