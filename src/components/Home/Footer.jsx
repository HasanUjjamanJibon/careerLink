import React from "react";
import facebook from "../../assets/Icons/fb.png";
import twitter from "../../assets/Icons/twitter.png";
import instagram from "../../assets/Icons/insta.png";

const Footer = () => {
  return (
    <div className=" h-fit w-full bg-[#1A1919] ">
      <div className="max-w-7xl mx-auto px-6  text-[#ffffffb3]">
        <div className="grid items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 border-b-2 border-slate-600 py-16  justify-between">
          <div>
            <h5 className="text-white font-bold text-3xl ">CareerLink</h5>
            <p className="my-4 ">
              Builds and designs websites and applications using HTML, CSS, and
              JavaScript for seamless user experience.
            </p>
            <div className="flex gap-4 items-center ">
              <img src={facebook} className="cursor-pointer" alt="" />
              <img src={twitter} className="cursor-pointer" alt="" />
              <img src={instagram} className="cursor-pointer" alt="" />
            </div>
          </div>

          <div>
            <h5 className="text-white font-bold text-xl">Company</h5>
            <h6 className="capitalize cursor-pointer leading-[30px] lg:leading-[45px]">
              about us
            </h6>
            <h6 className="capitalize cursor-pointer leading-[30px] lg:leading-[45px]">
              work
            </h6>
            <h6 className="capitalize cursor-pointer leading-[30px] lg:leading-[45px]">
              latest news
            </h6>
            <h6 className="capitalize cursor-pointer leading-[30px] lg:leading-[45px]">
              careers
            </h6>
          </div>
          <div>
            <h5 className="text-white cursor-pointer leading-[30px] font-bold text-xl">
              Product
            </h5>
            <h6 className="capitalize cursor-pointer leading-[30px] lg:leading-[45px]">
              prototypes
            </h6>
            <h6 className="capitalize cursor-pointer leading-[30px] lg:leading-[45px]">
              plan & pricing
            </h6>
            <h6 className="capitalize cursor-pointer leading-[30px] lg:leading-[45px]">
              customers
            </h6>
            <h6 className="capitalize cursor-pointer leading-[30px] lg:leading-[45px]">
              integrations
            </h6>
          </div>
          <div>
            <h5 className="text-white font-bold text-xl">Support</h5>
            <h6 className="capitalize cursor-pointer leading-[30px] lg:leading-[45px]">
              help desk
            </h6>
            <h6 className="capitalize cursor-pointer  leading-[30px] lg:leading-[45px]">
              sales
            </h6>
            <h6 className="capitalize cursor-pointer  leading-[30px] lg:leading-[45px]">
              become a partner
            </h6>
            <h6 className="capitalize  cursor-pointer leading-[30px] lg:leading-[45px]">
              developers
            </h6>
          </div>
          <div>
            <h5 className="text-white font-bold text-xl">Contact</h5>
            <p className="capitalize   leading-[30px] lg:leading-[45px]">
              524 Broadway , NYC
            </p>
            <span className="capitalize   leading-[30px] lg:leading-[45px]">
              +1 777 - 978 - 5570
            </span>
          </div>
        </div>
        <div className="flex items-center text-center md:text-left flex-wrap justify-center md:justify-between h-fit py-4">
          <span>@2023 CareerLink. All Rights Reserved</span>
          <span>Powered by CareerLink</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
