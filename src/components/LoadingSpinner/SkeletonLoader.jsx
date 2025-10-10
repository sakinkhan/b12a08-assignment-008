import React from "react";

const SkeletonLoader = ({count = 8}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="flex w-full flex-col gap-4 p-4 rounded-2xl shadow-md">
          <div className="skeleton h-[330px] w-full rounded-xl"></div>
          <div className="skeleton h-8 w-40 rounded-xl"></div>
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
