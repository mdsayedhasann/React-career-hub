import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  // eslint-disable-next-line no-unused-vars
  const jobs = useLoaderData();
  const { id, job_title, job_description, job_responsibility } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  console.log(id, job);
  return (
    <div className="max-w-6xl mx-auto py-4">
      <div className="bg-purple-50 w-full">
        <h1 className="text-center text-3xl font-bold py-16">Job Details</h1>
      </div>
      <div className="grid md:grid-cols-4">
        <div className="col-span-3">
          <div className="py-3">
            <ul>
              <li>
                <p>
                  <span className="font-bold">Job Description:</span>{" "}
                  {job.job_description}{" "}
                </p>
              </li>
              <li className="py-5">
                <p>
                  <span className="font-bold">Job Responsibility: </span>{" "}
                  {job.job_responsibility}
                </p>
              </li>
              <li className="py-5">
                <span className="font-bold">Education Requirement: </span>{" "}
                <p>{job.educational_requirements}</p>
              </li>
              <li className="py-5">
                <span className="font-bold">Experiences: </span>{" "}
                <p>{job.experiences}</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-1"></div>
      </div>
    </div>
  );
};

export default JobDetails;
