import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <div className="text-center">
        <div className="mt-56 leading-[13rem] relative">
          <p className="text-[11rem] absolute left-[53rem] ">😵</p>
          <h1 className="font-bold text-[13rem] text-gray-600">4 - 4</h1>
          <h2 className="font-bold text-7xl text-gray-600 ">Page Not Found</h2>
        </div>
        <Link
          to="/"
          className="mt-9 inline-block bg-blue-600 text-white text-lg font-semibold px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
        >
          Go Home
        </Link>
      </div>
    </>
  );
};

export default PageNotFound;
