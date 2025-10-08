import React from "react";
import logoImg from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#001931] text-neutral-content p-10">
      <div className="flex justify-between items-center mb-5">
        <div className="flex items-center gap-1">
          <img src={logoImg} alt="logo" className="w-10" />
          <p className="inter-font font-bold text-[16px] bg-white bg-clip-text text-transparent">
            HERO.IO
          </p>
        </div>
        <div>
          <p>Social Links</p>
        </div>
      </div>
      <div className="border-t-2 border-[#E5E7EB]/50 pt-5">
        <p className="text-center">Copyright © 2025 - All right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
