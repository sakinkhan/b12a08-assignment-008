import React, { Suspense } from "react";
import TrendingApp from "../TrendingApp/TrendingApp";
import { useNavigate } from "react-router";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const TrendingApps = ({ data }) => {
  const sortedData = [...data].sort((a, b) => b.downloads - a.downloads);
  const appsToShow = sortedData.slice(0, 8);
  const navigate = useNavigate();
  const handleShowAll = () => {
    navigate("/apps");
  }
  
  return (
    <div className="py-20 flex flex-col justify-center items-center px-10 lg:px-20 bg-[#d2d2d2]/20">
      <h1 className="inter-font font-bold text-[32px] md:text-[48px] text-[#001931] text-center">
        Trending Apps
      </h1>
      <p className="inter-font text-[16px] md:text-[20px] text-[#001931] text-center mb-10">
        Explore All Trending Apps on the Market developed by us
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <Suspense fallback={<LoadingSpinner></LoadingSpinner>}>
          {appsToShow.map((appData) => (
            <TrendingApp key={appData.id} appData={appData}></TrendingApp>
          ))}
        </Suspense>
      </div>
      <button onClick={handleShowAll} className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-8 py-6 inter-font font-semibold text-[16px] mt-10">
        Show All
      </button>
    </div>
  );
};

export default TrendingApps;
