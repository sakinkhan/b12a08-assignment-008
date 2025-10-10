import React, { useState, useEffect } from "react";
import SingleApp from "../../components/SingleApp/SingleApp";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import SkeletonLoader from "../../components/LoadingSpinner/SkeletonLoader";

const Apps = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchApp, setSearchApp] = useState("");

  useEffect(() => {
    fetch("/appsData.json")
      .then((res) => res.json())
      .then((apps) => setData(apps))
      .finally(() => setLoading(false));
  }, []);

  const handleSearchOnChange = (e) => {
    setSearchApp(e.target.value.trimStart())
  };
  
  const filteredApps = data.filter((app) =>
    app.title.toLowerCase().includes(searchApp.trim().toLowerCase())
  );

  return (
    <div className="py-20 px-5 lg:px-20 bg-[#d2d2d2]/20">
      <h1 className="inter-font font-bold text-[32px] md:text-[48px] text-[#001931] text-center">
        Our All Applications
      </h1>
      <p className="inter-font text-[16px] md:text-[20px] text-[#001931] text-center mb-10">
        Explore All Apps on the Market developed by us. We code for Millions!
      </p>

      <div className="flex flex-col-reverse md:flex-row gap-5 items-center justify-between mb-5">
        <p className="inter-font font-semibold text-[24px] text-[#001931]">
          ({filteredApps.length}) Apps Found
        </p>
        <div>
          <label className="input flex items-center gap-2">
            <svg
              className="h-[1.5em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              placeholder="Search Apps"
              value={searchApp || ""}
              onChange={handleSearchOnChange}
              className="inter-font font-semibold text-[16px] px-2 py-1 border rounded"
            />
          </label>
        </div>
      </div>
      {loading ? (
        <div className="py-20 flex justify-center items-center min-h-screen">
          <LoadingSpinner></LoadingSpinner>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-5">
          {filteredApps.length > 0 ? (
            filteredApps.map((singleAppData) => (
              <SingleApp key={singleAppData.id} singleAppData={singleAppData} />
            ))
          ) : (
            <div className="col-span-full mt-10 flex flex-col gap-6 items-center">
              <p className="inter-font font-extrabold text-5xl text-center text-[#001931]/60">
                No App Found
              </p>
              <button
                onClick={() => setSearchApp("")}
                className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-8 py-6 inter-font font-semibold text-[16px]"
              >
                Show All Apps
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Apps;
