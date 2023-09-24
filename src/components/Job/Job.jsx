import React from "react";

const Job = ({ job }) => {
  const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary, job_description, job_responsibility, educational_requirements,  experiences, contact_information     } = job;
  return (
    <div className="text-left my-5 py-3">
      <div className="card card-compact bordered border-red-950">
        <figure>
          <img className="w-40 h-16"
            src={logo}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title"> {job_title}</h2>
          <p>{job_description}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
