import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../../utility/localStorage";

const JobDetails = () => {
  // eslint-disable-next-line no-unused-vars
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);

  const job = jobs.find((job) => job.id === idInt);
  console.log(id, job);

  const notify = () =>
  saveJobApplication(idInt);
    toast.success("Job Added", {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  return (
    <div className="max-w-6xl mx-auto py-4">
      <div className="bg-purple-50 w-full">
        <h1 className="text-center text-3xl font-bold py-16">
          {" "}
          {job.job_title}
        </h1>
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
        <div className="col-span-1 text-center mt-8">
          <button
            onClick={notify}
            className="btn btn-primary text-center text-white"
          >
            Apply Now
          </button>

          <ToastContainer
            position="bottom-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          {}
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
