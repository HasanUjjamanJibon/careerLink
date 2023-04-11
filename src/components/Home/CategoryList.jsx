import React, { useEffect, useState } from "react";
import HeaderTitle from "../HeaderTitle";
import SingleCategory from "./SingleCategory";

const CategoryList = () => {
  const [catergoryList, setcatergoryList] = useState([]);
  useEffect(() => {
    // const loadCategoryList = async () => {
    fetch("catergorylist.json")
      .then((res) => res.json())
      .then((data) => setcatergoryList(data));
    // };
  }, []);

  return (
    <div className="py-10 my-16 max-w-7xl mx-auto px-6 md:px-0">
      <HeaderTitle
        title="Job Category List"
        subTitle="Technology professionals creating, managing and supporting digital
        systems and infrastructure."
      ></HeaderTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10 justify-items-center">
        {catergoryList?.map((category) => (
          <SingleCategory
            key={category.id}
            category={category}
          ></SingleCategory>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
