import React from "react";
import Banner from "./src/components/Home/Banner";
import CategoryList from "./src/components/Home/CategoryList";
import FeaturedJobs from "./src/components/Home/FeaturedJobs";

const Home = () => {
  return (
    <div className="mx-14 lg:mx-0">
      <Banner></Banner>
      <CategoryList></CategoryList>
      <FeaturedJobs></FeaturedJobs>
    </div>
  );
};

export default Home;
