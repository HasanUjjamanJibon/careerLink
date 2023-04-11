import React, { useEffect, useState } from "react";
import SingleFeaturedJob from "./SingleFeaturedJob";
import HeaderTitle from "../HeaderTitle";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);

  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("./data.json")
      .then((r) => r.json())
      .then((data) => {
        if (showAll) setJobs(data.slice(0, data.length));
        else setJobs(data.slice(0, 4));
      });
  }, [showAll]);

  return (
    <div className="max-w-7xl mx-auto my-10 px-6 lg:px-0">
      <HeaderTitle
        title="Featured Jobs"
        subTitle="Designing and developing web applications for clients and companies."
      ></HeaderTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 mb-6 ">
        {jobs?.map((job) => (
          <SingleFeaturedJob key={job.id} job={job}></SingleFeaturedJob>
        ))}
      </div>
      <div className="text-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="btn capitalize inline-block  bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-500 border-0"
        >
          {showAll ? "Show Less" : "Show All"}
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
