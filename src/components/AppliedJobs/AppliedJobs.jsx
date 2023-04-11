import React, { useEffect, useState } from "react";
import shape1 from "../../assets/Icons/shape-1.png";
import shape2 from "../../assets/Icons/shape-2.png";
import SingleAppliedJobs from "./SingleAppliedJobs";

const AppliedJobs = () => {
  let [jobs, setJobs] = useState([]);

  useEffect(() => {
    let previousJobData = JSON.parse(localStorage.getItem("jobData"));
    setJobs(previousJobData);
  }, []);

  const handleChange = (e) => {
    let targetedValue = e.target.value;
    let previousJobData = JSON.parse(localStorage.getItem("jobData"));
    
    if (targetedValue == "Remote" || targetedValue == "Onsite") {
      const selectedItem = previousJobData.filter(
        (job) =>
          job.remote_or_onsite == targetedValue ||
          job.fulltime_or_parttime == targetedValue
      );
      setJobs(selectedItem);
    } else {
      setJobs(previousJobData);
    }
  };
  return (
    <div className="min-h-[450px]">
      <div>
        <div className="text-center relative py-28 mb-5 bg-gradient-to-r from-[#7e90f40d] to-[#98ffff0d]">
          <img
            src={shape2}
            className="absolute hidden z-10 lg:block right-0 -top-[75px]"
            alt=""
          />
          <h2 className="text-4xl font-semibold">Applied Jobs</h2>
          <img
            src={shape1}
            className="absolute hidden lg:block left-0 bottom-0"
            alt=""
          />
        </div>
        <div className="px-4 md:px-0 my-12 max-w-7xl mx-auto ">
          {/* filter section */}
          <div className="text-right my-6 flex justify-between items-center">
            <span className="text-lg font-semibold text-[#575757]">
              Total Applied Jobs : {jobs?.length || 0}
            </span>
            <select
              // value={value}
              onChange={handleChange}
              className="select focus:outline-0 bg-slate-50 max-w-[150px] shadow-sm"
            >
              <option value="">All</option>
              <option value="Onsite">Onsite</option>
              <option value="Remote">Remote</option>
            </select>
          </div>
          {/* applied jobs data */}
          <div className="w-full  grid grid-cols-1 gap-6  ">
            {jobs?.map((job) => (
              <SingleAppliedJobs key={job.id} job={job}></SingleAppliedJobs>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
