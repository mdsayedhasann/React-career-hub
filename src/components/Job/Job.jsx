/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { CiLocationOn } from "react-icons/Ci";
import { AiOutlineDollar } from "react-icons/Ai";


const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    contact_information,
  } = job;
  return (
    <div className="text-left my-5 py-3 ">
      <div className="card card-compact bordered border-red-950">
       
        <div className="card-body">

        <div className="flex flex-row">
        <figure className="">
          <img className="w-24 h-10" src={logo} alt={company_name} title={company_name} />
        </figure>
        </div>
          
          <h2 className="card-title">{job_title}</h2>
          <h3 className="text-xl">{company_name}</h3>
          <div className="flex">
            <button className="py-2 px-3 border border-[#9873FF] mr-2 text-[#9873FF] ">
              {" "}
              {remote_or_onsite}{" "}
            </button>
            <button className="py-2 px-3 border border-[#9873FF] mr-2 text-[#9873FF] ">
              {" "}
              {job_type}{" "}
            </button>
          </div>

          <div className="flex justify-around">
            <p className="text-xl py-2 px-3 text-[#757575] mr-2 flex items-center">
                <CiLocationOn className="mr-3 -ml-4"></CiLocationOn> {location}
            </p>
            <p className="text-xl py-2 px-3 text-[#757575] flex items-center">
             <AiOutlineDollar className="mr-3"></AiOutlineDollar> {salary}
            </p>
          </div>

          <div className="card-actions">
            <button className="btn btn-primary bg-[#9873FF] text-white">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
