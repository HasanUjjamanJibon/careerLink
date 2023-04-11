import React from "react";
import locationIcon from "../../assets/Icons/LocationIcon.png";
import currencyIcon from "../../assets/Icons/currency.png";
import { Link } from "react-router-dom";

const SingleFeaturedJob = ({ job }) => {
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
    <div className="w-full flex items-start flex-col gap-2 border-2 p-6 rounded-md">
      <img
        src={company_logo}
        className="lg:w-52 lg:h-24 w-full h-40 "
        alt=""
      />
      <h3 className="font-bold text-[#474747] text-2xl">{job_title}</h3>
      <h4 className="font-semibold text-[#757575] text-xl">{company_name}</h4>
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
          <span className="font-semibold text-[#757575] text-xl">
            {location}
          </span>
        </div>
        <div className="flex gap-1">
          <img src={currencyIcon} className="h-6 w-6" alt="" />
          <span className="font-semibold text-[#757575] text-xl">{salary}</span>
        </div>
      </div>
      <Link
        to={`/job/${id}`}
        className="btn w-fit capitalize bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-500 border-0"
      >
        View Details
      </Link>
    </div>
  );
};

export default SingleFeaturedJob;
