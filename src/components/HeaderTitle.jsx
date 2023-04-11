import React from "react";

const HeaderTitle = ({ title, subTitle }) => {
  return (
    <React.Fragment>
      <h2 className="text-[#1A1919] mb-4 font-bold text-center text-5xl">
        {title}
      </h2>
      <p className="text-center text-[#757575] font-medium text-base">
        {subTitle}
      </p>
    </React.Fragment>
  );
};

export default HeaderTitle;
