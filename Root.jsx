import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./src/components/Home/Header";
import Footer from "./src/components/Home/Footer";

const Root = () => {
  return (
    <React.Fragment>
      <Header></Header>
    
        <Outlet />
     
      <Footer></Footer>
    </React.Fragment>
  );
};

export default Root;
