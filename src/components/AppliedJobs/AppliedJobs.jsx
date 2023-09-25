import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredJobApplication } from '../../utility/localStorage';

const AppliedJobs = () => {
    const jobs = useLoaderData()

    const [appliedjob, setAppliedjobs] = useState([])

    useEffect(() => {
        const storedJobIds = getStoredJobApplication()
        if(jobs.length > 0){

            // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))
            const jobApplied = [];
            for(const id of storedJobIds){
                const job = jobs.find(job => job.id === id)
                if(job){
                    jobApplied.push(job)
                }
            }
            // console.log(jobs, storedJobIds, jobsApplied);
            setAppliedjobs(jobApplied)
        }
    },[])

    return (
        <div>
            <h1>I am Applied Jobs {appliedjob.length}</h1>
        </div>
    );
};

export default AppliedJobs;