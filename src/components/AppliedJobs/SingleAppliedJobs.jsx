import React from "react";
import { Link } from "react-router-dom";
import locationIcon from "../../assets/Icons/LocationIcon.png";
import currencyIcon from "../../assets/Icons/currency.png";

const SingleAppliedJobs = ({ job }) => {
  const {
    id,
    company_logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    fulltime_or_parttime,
    salary,
  } = job;
  return (
    <div className="border-2 md:p-4 h-fit rounded-lg w-full flex-wrap md:flex-nowrap flex gap-6 justify-center md:justify-start  items-center">
      <div className="w-full h-60 md:w-64 md:h-40 bg-slate-100 rounded-md md:p-4">
        <img src={company_logo} className="object-fill h-full w-full" alt="" />
      </div>
      <div className="  md:flex flex-wrap  justify-between items-center p-4 md:p-0 w-full">
        <div className="flex mb-6 md:mb-0  flex-wrap flex-col gap-3">
          <h3 className="font-bold text-2xl">{job_title}</h3>
          <h3>{company_name}</h3>
          <div className="flex gap-6">
            <span className="px-4 py-1 rounded-md text-[#6a7eff] border-2 border-[#8393ff]">
              {remote_or_onsite}
            </span>
            <span className="px-4 py-1 rounded-md text-[#6a7eff] border-2 border-[#8393ff]">
              {fulltime_or_parttime}
            </span>
          </div>
          <div className="lg:flex gap-5">
            <div className="flex gap-1">
              <img src={locationIcon} className="h-6 w-6" alt="" />
              <span className="font-semibold text-[#757575] text-base">
                {location}
              </span>
            </div>
            <div className="flex gap-1">
              <img src={currencyIcon} className="h-6 w-6" alt="" />
              <span className="font-semibold text-[#757575] text-base">
                {salary}
              </span>
            </div>
          </div>
        </div>
        <Link
          to={`/job/${id}`}
          className="btn w-fit  capitalize bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-500 border-0"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default SingleAppliedJobs;
