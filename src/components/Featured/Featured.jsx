import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';

const Featured = () => {
    const [jobs, setJobs] = useState([])
    const [datalength, setDatalength] = useState(4)
    useEffect(() => {
        fetch('/public/jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    } , [])
    return (
        <div className='text-center'>
            <h1 className='text-5xl  my-8'>Featured Jobs</h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            
            <div className='grid grid-cols-2 text-left '>
            {
                jobs.slice(0, datalength).map(job => <Job key={job.id} job={job}></Job>)
            }
            </div>
            <div className={datalength === jobs.length && `hidden`}>
                <button onClick={() => setDatalength(jobs.length)} className={`btn btn-primary bg-[#7E90FE] my-5 text-white `}>Show More</button>
            </div>
        </div>
    );
};

export default Featured;