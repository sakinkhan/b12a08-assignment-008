import React from "react";
import notFoundImg from "../../assets/App-Error.png";
import { useNavigate } from "react-router";

const AppNotFound = () => {
  const navigate = useNavigate();
  return (
      <div className="bg-[#d2d2d2]/20 flex flex-col justify-center gap-4 items-center py-20 px-15">
        <img src={notFoundImg} alt="App Error" />
        <p className="inter-font font-semibold text-[48px] text-[#001931] mt-5">
          OPPS!! APP NOT FOUND
        </p>
        <p className="inter-font text-[20px] text-[#627382] -mt-4">
          The App you are requesting is not found on our system. please try
          another apps
        </p>
        <button
          onClick={() => navigate(-1)}
          className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-8 py-6 inter-font font-semibold text-[16px]"
        >
          Go Back!
        </button>
      </div>
  );
};

export default AppNotFound;
