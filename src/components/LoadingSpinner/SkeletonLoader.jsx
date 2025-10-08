import React from "react";

const SkeletonLoader = ({count = 8}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-20 py-20">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex w-full flex-col gap-4">
          <div className="skeleton h-[300px] w-full"></div>
          <div className="skeleton h-8 w-40"></div>
          <div className="flex justify-between">
            <div className="skeleton h-6 w-15"></div>
            <div className="skeleton h-6 w-15"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
