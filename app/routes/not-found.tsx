import React from "react";
import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">404 Not Found</h1>
      <Link to="/" className="ml-2 text-blue-500 hover:underline">
        Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
