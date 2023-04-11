import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "../Root";

import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import Blogs from "./components/Blogs/Blogs";
import Home from "../Home";
import JobDetails from "./components/AppliedJobs/JobDetails";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Statisctics from "./components/Statistics/Statisctics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "statistics",
        element: <Statisctics></Statisctics>,
      },
      {
        path: "jobs",
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "job/:id",
        element: <JobDetails></JobDetails>,
        loader: () => fetch("./data.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
