import React from "react";
import personImg from "../../assets/person.png";

const Banner = () => {
  return (
    <div className=" w-full px-6 lg:p-0 h-fit lg:h-screen bg-gradient-to-r from-[#7e90f40d] to-[#98ffff0d]">
      <div className="lg:h-[calc(100vh-40px)] w-full flex justify-center items-center">
        <div className="max-w-7xl mx-auto grid grid-cols-1  lg:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col justify-center gap-6 items-start ">
            <h1 className="text-5xl lg:text-6xl leading-tight	 max-w-md text-[#1A1919] font-bold">
              One step
              <span className="block">Closer to your</span>
              <span className="text-[#7E90FE] block"> Dream Job</span>
            </h1>
            <p className="text-[#757575] font-medium text-lg">
              Discover countless job prospects equipped with comprehensive
              details, shaping your future to your liking. Take charge of your
              destiny, and uncover the perfect opportunity for you. Streamline
              your entire job application process with our innovative tools,
              from initiation to conclusion.
            </p>
            <a className="btn capitalize bg-gradient-to-r from-indigo-400 via-indigo-500 to-indigo-500 border-0">
              Get Started
            </a>
          </div>
          <img src={personImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
