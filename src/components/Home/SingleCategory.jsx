import React from "react";

const SingleCategory = ({ category }) => {
  const { logo, category_name: name, Jobs_available: jobs } = category;

  return (
    <div className="px-10 shadow-md py-8 rounded-md bg-slate-50 flex justify-center gap-5 items-center  max-w-[480px] w-full md:block">
      <img src={logo} className="bg-slate-100 rounded-md p-4" alt="" />
      <div>
        <h3 className="lg:mt-4 mb-1 font-bold text-[#474747] text-xl">
          {name}
        </h3>
        <span className="font-medium text-base text-[#A3A3A3]">{jobs}</span>
      </div>
    </div>
  );
};

export default SingleCategory;
