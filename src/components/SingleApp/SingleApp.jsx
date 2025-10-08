import React from "react";
import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";
import { Link } from "react-router";

const SingleApp = ({ singleAppData }) => {
  const { title, image, ratingAvg, downloads, id } = singleAppData;
  return (
    <Link to={`/appDetails/${id}`}>
      <div className="card shadow-xl bg-white hover:scale-102 hover:duration-300 flex flex-col cursor-pointer">
        <figure className="px-4 pt-4 flex justify-center items-center">
          <img
            src={image}
            alt="app Image"
            className="rounded-xl w-[316px] h-[316px] object-cover"
          />
        </figure>
        <div className="card-body items-left text-left space-y-3 flex-1">
          <h2 className="card-title inter-font font-medium text-[20px] text-[#001931] -mt-4">
            {title}
          </h2>
          <div className="card-actions flex justify-between mt-auto">
            <div className="flex items-center justify-center gap-1 bg-[#F1F5E8] rounded-[4px] py-1.5 px-2.5">
              <img src={downloadIcon} alt="downloadIcon" className="w-4 mb-1" />
              <p className="inter-font font-medium text-[16px] text-[#00D390]">
                {downloads}M
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 bg-[#FFF0E1] rounded-[4px] py-1.5 px-3">
              <img src={ratingIcon} alt="ratingIcon" className="w-4 mb-1" />
              <p className="inter-font font-medium text-[16px] text-[#FF8811]">
                {ratingAvg}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SingleApp;
