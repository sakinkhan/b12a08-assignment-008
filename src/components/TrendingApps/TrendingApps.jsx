import React, { Suspense } from "react";
import TrendingApp from "../TrendingApp/TrendingApp";

const TrendingApps = ({data}) => {
  return (
    <div className="py-20 flex flex-col justify-center items-center px-10 lg:px-20 bg-[#d2d2d2]/20">
      <h1 className="inter-font font-bold text-[32px] md:text-[48px] text-[#001931] text-center">
        Trending Apps
      </h1>
      <p className="inter-font text-[16px] md:text-[20px] text-[#001931] text-center mb-10">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <Suspense fallback={<span>LOADING.....</span>}>
            {
                data.map(appData=> <TrendingApp key={appData.id} appData={appData}></TrendingApp>)
            }
        </Suspense>
        
      </div>
      <button
        className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-8 py-6 inter-font font-semibold text-[16px] mt-10"
      >
        Show All
      </button>
    </div>
  );
};

export default TrendingApps;
