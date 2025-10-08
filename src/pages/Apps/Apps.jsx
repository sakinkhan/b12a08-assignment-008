import React, { Suspense } from "react";
import SingleApp from "../../components/SingleApp/SingleApp";
import { useLoaderData } from "react-router";

const Apps = () => {
    const data = useLoaderData();
  return (
    <div className="py-20 px-5 lg:px-20 bg-[#d2d2d2]/20">
      <h1 className="inter-font font-bold text-[32px] md:text-[48px] text-[#001931] text-center">
        Our All Applications
      </h1>
      <p className="inter-font text-[16px] md:text-[20px] text-[#001931] text-center mb-10">
        Explore All Apps on the Market developed by us. We code for Millions!
      </p>
      <div className="flex items-center justify-between">
        <p className="inter-font font-semibold text-[24px] text-[#001931]">
            ({data.length}) Apps Found 
        </p>
        <div>
          <label className="input">
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
            <input type="search" required placeholder="Search Apps" className="inter-font font-semibold text-[16px]" />
          </label>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-5">
        <Suspense fallback={<span>Loading...</span>}>
            {
                data.map(singleAppData=> <SingleApp key={singleAppData.id} singleAppData={singleAppData}></SingleApp>)
            }
        </Suspense>
      </div>
    </div>
  );
};

export default Apps;
