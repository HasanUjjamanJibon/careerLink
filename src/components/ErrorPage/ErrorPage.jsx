import React from "react";
import { Link, useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const { error, status, statusText } = useRouteError();

  return (
    <div className="bg-gradient-to-r from-purple-300 to-blue-200">
      <div className="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
        <div className="bg-white shadow overflow-hidden sm:rounded-lg pb-8">
          <div className="border-t border-gray-200 text-center pt-8">
            <h1 className="text-9xl font-bold text-purple-400">
              {status || 404}
            </h1>
            <h1 className="text-6xl font-medium py-8">
              {statusText || "Not Found"}
            </h1>
            <p className="text-2xl pb-8 px-12 font-medium">{error?.message}</p>
            <Link
              to="/"
              className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6"
            >
              HOME
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
