import React, { Suspense, useEffect, useState } from "react";
import TrendingApp from "../TrendingApp/TrendingApp";
import { useNavigate } from "react-router";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import SkeletonLoader from "../LoadingSpinner/SkeletonLoader";

const TrendingApps = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const sortedData = [...data].sort((a, b) => b.ratingAvg - a.ratingAvg);
  const appsToShow = sortedData.slice(0, 8);
  const navigate = useNavigate();
  const handleShowAll = () => {
    navigate("/apps");
  };

  useEffect(() => {
    fetch("/appsData.json")
      .then((res) => res.json())
      .then((apps) => setData(apps))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="py-20 flex flex-col justify-center items-center px-10 lg:px-20 bg-[#d2d2d2]/20">
      <h1 className="inter-font font-bold text-[32px] md:text-[48px] text-[#001931] text-center">
        Trending Apps
      </h1>
      <p className="inter-font text-[16px] md:text-[20px] text-[#001931] text-center mb-10">
        Discover what everyone's loving right now. <br />{" "}
        <span className="font-semibold text-[#632EE3]">
          Sorted by Top Ratings — straight from our best work!
        </span>
      </p>
      {loading ? (
        <div className="w-full">
          <SkeletonLoader count='8'></SkeletonLoader>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {appsToShow.map((appData) => (
            <TrendingApp key={appData.id} appData={appData} />
          ))}
        </div>
      )}
      <button
        onClick={handleShowAll}
        className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-8 py-6 inter-font font-semibold text-[16px] mt-10"
      >
        Show All
      </button>
    </div>
  );
};

export default TrendingApps;
