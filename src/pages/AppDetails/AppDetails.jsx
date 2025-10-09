import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";
import reviewIcon from "../../assets/icon-review.png";
import RatingChart from "../../components/RatingChart/RatingChart";
import { ToastContainer, toast } from "react-toastify";
import {
  addToLocalStorage,
  getInstalledApps,
} from "../../Utils/addToLocalStorage";

const AppDetails = () => {
  const { id } = useParams();
  const appId = parseInt(id);
  const data = useLoaderData();
  const singleAppData = data.find((app) => app.id === appId);
  const {
    image,
    title,
    companyName,
    downloads,
    reviews,
    ratingAvg,
    description,
    size,
  } = singleAppData;

  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    const installedApps = getInstalledApps();
    if (installedApps.includes(appId)) {
      setInstalled(true);
    }
  }, [appId]);

  const handleInstall = (id) => {
    const result = addToLocalStorage(id);

    if (!result.success) {
      toast.info(result.message);
      return;
    }
    setInstalled(true);
    toast.success(`${title} has been successfully installed`);
  };

  return (
    <div className="min-h-screen py-20 px-20">
      {/* App Details */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 border-b-1 border-[#001931]/20 pb-10">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <img
            src={image}
            className="max-w-sm rounded-lg shadow-2xl w-[316px] h-[316px] object-cover"
          />
          <div className="flex flex-col items-center md:items-start justify-center">
            <div className="w-full border-b-1 border-[#001931]/20">
              <h1 className="inter-font font-semibold text-3xl text-[#001931] text-center md:text-left">
                {title}
              </h1>
              <p className="inter-font text-[20px] text-[#627382] mb-5 text-center md:text-left">
                Developed by{" "}
                <span className="font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                  {companyName}
                </span>
              </p>
            </div>
            <div className="mt-5 mb-3 flex items-center justify-start gap-10">
              <div className="flex flex-col items-center md:items-start">
                <img src={downloadIcon} alt="downloadIcon" />
                <p className="inter-font text-[16px] text-[#001931]/80 mt-2">
                  Downloads
                </p>
                <p className="inter-font font-extrabold text-[40px] text-[#001931]">
                  {downloads}M
                </p>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <img src={ratingIcon} alt="ratingIcon" />
                <p className="inter-font text-[16px] text-[#001931]/80 mt-2">
                  Average Ratings
                </p>
                <p className="inter-font font-extrabold text-[40px] text-[#001931]">
                  {ratingAvg}
                </p>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <img src={reviewIcon} alt="reviewIcon" />
                <p className="inter-font text-[16px] text-[#001931]/80 mt-2">
                  Total Reviews
                </p>
                <p className="inter-font font-extrabold text-[40px] text-[#001931]">
                  {reviews / 1000}K
                </p>
              </div>
            </div>
            <button
              onClick={() => handleInstall(appId)}
              className={`${
                installed ? "btn-disabled" : ""
              } btn bg-[#00D390] text-white inter-font font-semibold text-[20px] py-6 px-8 `}
            >
              {!installed ? `Install Now (${size} MB)` : "Installed"}
            </button>
          </div>
        </div>
      </div>
      {/* Rating Chart */}
      <div className="border-b-1 border-[#001931]/20 pb-5">
        <h1 className="inter-font font-semibold text-[24px] text-[#001931] my-5">
          Ratings
        </h1>
        <RatingChart singleAppData={singleAppData}></RatingChart>
      </div>
      {/* Description */}
      <div className="">
        <h1 className="inter-font font-semibold text-[24px] text-[#001931] mt-5">
          Description
        </h1>
        <p className="inter-font text-[20px] text-[#627382] mt-6">
          {description}
        </p>
      </div>
      <ToastContainer theme="dark" position="bottom-center" />
    </div>
  );
};

export default AppDetails;
