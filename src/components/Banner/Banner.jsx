import React from "react";
import googlePlayImg from "../../assets/google-play.png";
import appStoreImg from "../../assets/app-store.png";
import heroPng from '../../assets/hero.png';

const Banner = () => {
  return (
    <div className="px-5 md:px-20 flex flex-col items-center bg-[#d2d2d2]/20">
      <h1 className="inter-font font-bold text-[40px] md:text-[64px] lg:text-[72px] text-[#001931] text-center text-base/15 md:text-base/20 mt-4 md:mt-20">
        We Build <br />{" "}
        <span className="font-black bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
          Productive
        </span>{" "}
        Apps
      </h1>
      <p className="inter-font text-[#627382] text-[16px] md:text-[20px] text-center px-20 my-4">
        At <span className="font-semibold text-[#632EE3]">HERO.IO</span>, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>
      <div className="flex flex-col md:flex-row items-center gap-5 justify-center mt-2 md:mt-10">
        <button onClick={() => window.open("https://play.google.com/store/apps/", "_blank")}
                className="btn btn-outline border-[#D2D2D2] inter-font text-[#001931] font-semibold text-[20px] p-7">
          <img src={googlePlayImg} alt="googlePlayImg" />
          Google Play
        </button>
        <button onClick={() => window.open("https://www.apple.com/app-store/", "_blank")} 
                className="btn btn-outline border-[#D2D2D2] inter-font text-[#001931] font-semibold text-[20px] p-7">
          <img src={appStoreImg} alt="appStoreImg" />
          App Store
        </button>
      </div>
      <img src={heroPng} alt="heroPng" className="mt-10" />
    </div>
  );
};

export default Banner;
