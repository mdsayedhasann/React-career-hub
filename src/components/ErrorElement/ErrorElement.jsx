/* eslint-disable react/jsx-no-undef */
import React from "react";
import { Link } from "react-router-dom";

const ErrorElement = () => {
  return (
    <div>
      <h1 className="text-5xl text-red-500">404</h1>
      <h2 className="text-3xl text-slate-900 mb-5">Sorry, Page Not Found</h2>
     <Link className="bg-red-400 p-3 my-10" to={'/'}>
     Go Back To Home
     </Link>
    </div>
  );
};

export default ErrorElement;
