import React from "react";

const InstallationSkeleton = ({ count = 4 }) => {
  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="bg-white rounded-xl flex flex-col md:flex-row justify-between items-center shadow-lg mt-5 mx-18 md:mx-0 p-4 gap-4"
        >
            <div className="left flex flex-col md:flex-row items-center gap-2">
                {/* image skeleton */}
                <div className="skeleton h-22 w-22 p-3 rounded-xl"></div>
                <div className="flex flex-col items-center md:items-start px-1 gap-3">
                    {/* title */}
                    <div className="skeleton h-8 w-35 rounded-xl"></div>
                    <div className="flex items-center flex-wrap justify-center gap-4 px-1">
                        <div className="skeleton h-6 w-12"></div>
                        <div className="skeleton h-6 w-12"></div>
                        <div className="skeleton h-6 w-12"></div>
                    </div>
                </div>
            </div>
          <div className="right">
            <div className="skeleton h-12 w-27 mr-1"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InstallationSkeleton;
