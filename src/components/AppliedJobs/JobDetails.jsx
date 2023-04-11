import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import shape1 from "../../assets/Icons/shape-1.png";
import shape2 from "../../assets/Icons/shape-2.png";
import currency from "../../assets/Icons/currency.png";
import frame1 from "../../assets/Icons/Frame-1.png";
import phone from "../../assets/Icons/Frame-2.png";
import mail from "../../assets/Icons/Frame-3.png";
import locate from "../../assets/Icons/Frame-4.png";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const JobDetails = () => {
  const jobId = useParams();

  const [job, setJob] = useState([]);
  const {
    id,
    company_logo,
    company_name,
    remote_or_onsite,
    fulltime_or_parttime,
    job_description,
    job_responsibility: responsibility,
    salary,
    job_title,
    location,
    educational_requirements: requirements,
    experiences: exp,
    contact_information: info,
  } = job;

  const loadJob = useLoaderData();

  if (loadJob) localStorage.setItem("job", JSON.stringify(loadJob));

  useEffect(() => {
    const previousJobsdata = JSON.parse(localStorage.getItem("job"));
    const restOfDetails = previousJobsdata?.find((pd) => pd.id == jobId.id);
    // console.log("restOfDetails", restOfDetails);
    setJob(restOfDetails);
  }, []);
  //
  const applyJob = (
    id,
    company_logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    fulltime_or_parttime,
    salary
  ) => {
    const previousData = JSON.parse(localStorage.getItem("jobData"));
    const jobDetails = [];
    const Jobdata = {
      id,
      company_logo,
      job_title,
      company_name,
      remote_or_onsite,
      location,
      fulltime_or_parttime,
      salary,
    };

    if (previousData) {
      const restOfJob = previousData.find((jd) => jd.id == id);

      if (restOfJob) {
        toast.error("Sorry! You Have Already Applied This Job.", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        // toast("Sorry! You Have Already Applied This Job.");
      } else {
        jobDetails.push(...previousData, Jobdata);
        localStorage.setItem("jobData", JSON.stringify(jobDetails));

        toast.success("Thank You! You Successfully Applied this Job", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } else {
      jobDetails.push(Jobdata);
      localStorage.setItem("jobData", JSON.stringify(jobDetails));
      toast.success("Thank You! You Successfully Applied this Job", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <div className="h-fit">
      <div className="text-center relative py-28 h-fit bg-gradient-to-r from-[#7e90f40d] to-[#98ffff0d]">
        <img
          src={shape2}
          className="absolute hidden z-10 lg:block right-0 -top-[75px]"
          alt=""
        />
        <h2 className="text-4xl font-semibold">Job Details</h2>
        <img
          src={shape1}
          className="absolute hidden lg:block left-0 bottom-0"
          alt=""
        />
      </div>
      <div className="px-4 md:px-0 py-16 max-w-7xl h-fit mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4 text-[#757575] my-20">
        <div className="col-span-2 grid gap-1">
          <div>
            <span className="font-bold text-xl text-[#1A1919]">
              Job Description:{" "}
            </span>
            {job_description}
          </div>
          <div>
            <span className="font-bold text-xl text-[#1A1919]">
              Job Responsibility:
            </span>
            {responsibility?.map((list, index) => (
              <li key={index}>{list}</li>
            ))}
          </div>
          <div>
            <span className="font-bold text-xl text-[#1A1919]">
              Educational Requirements:
            </span>
            <p>{requirements}</p>
          </div>
          <div>
            <span className="font-bold text-xl text-[#1A1919]">
              Experiences:
            </span>
            <p>{exp}</p>
          </div>
        </div>
        <div className="col-span-1 ">
          <div className="bg-slate-100 w-full h-full rounded-md p-6">
            <div>
              <h4 className="font-bold text-[#1A1919] border-b-2 pb-4 text-xl">
                Job Details
              </h4>
              <div className="py-4">
                <div className="flex items-center justify-start gap-2">
                  <img src={currency} className="h-5 w-5" alt="" />
                  <span className="text-lg font-semibold text-[#474747]">
                    Salary :{" "}
                  </span>
                  {salary}
                </div>
                <div className="flex items-center justify-start gap-2">
                  <img src={frame1} className="h-5 w-5" alt="" />
                  <span className="text-lg font-semibold text-[#474747]">
                    Job Title :{" "}
                  </span>
                  {job_title}
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-[#1A1919] border-b-2 pb-4 text-xl">
                Contact Information
              </h4>
              <div className="py-4">
                <div className="flex items-center justify-start gap-2">
                  <img src={phone} className="h-5 w-5" alt="" />
                  <span className="text-lg font-semibold text-[#474747]">
                    Phone :{" "}
                  </span>
                  {info?.phone}
                </div>
                <div className="flex items-center justify-start gap-2">
                  <img src={mail} className="h-5 w-5" alt="" />
                  <span className="text-lg font-semibold text-[#474747]">
                    Email :{" "}
                  </span>
                  {info?.email}
                </div>
                <div className="flex items-center justify-start gap-2">
                  <img src={locate} className="h-5 w-5" alt="" />
                  <span className="text-lg font-semibold text-[#474747]">
                    Address :{" "}
                  </span>
                  {location}
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() =>
              applyJob(
                id,
                company_logo,
                job_title,
                company_name,
                remote_or_onsite,
                location,
                fulltime_or_parttime,
                salary
              )
            }
            className="w-full btn border-0 bg-gradient-to-r from-purple-500 to-indigo-500 mt-6"
          >
            Apply Job
          </button>
          <ToastContainer></ToastContainer>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
