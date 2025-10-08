import React from "react";
import logoImg from "../../assets/logo.png";
import xLogo from "../../assets/xlogo.png";
import inLogo from "../../assets/inlogo.png";
import fbLogo from "../../assets/fblogo.png";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-[#001931] text-white p-10">
      <aside>
        <div className="my-2">
          <Link to={"/"}>
            <div className="flex items-center gap-1">
              <img src={logoImg} alt="logo" className="w-10" />
              <p className="inter-font font-bold text-[16px] bg-white bg-clip-text text-transparent">
                HERO.IO
              </p>
            </div>
          </Link>
        </div>
        <div>
          <div className="flex items-center justify-center md:justify-start gap-2">
            <img src={xLogo} alt="xLogo" />
            <img src={inLogo} alt="inLogo" />
            <img src={fbLogo} alt="fbLogo" />
          </div>
        </div>
        <div className="border-t-2 border-[#E5E7EB]/50 pt-5 mt-2">
          <p className="text-center inter-font text-[16px]">
            Copyright © 2025 - All right reserved
          </p>
        </div>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
    // <footer className="bg-[#001931] text-neutral-content py-7 px-20">
    //   <div className="flex flex-col md:flex-row justify-between items-center mb-5 gap-5 md:gap-10">
    //     <Link to={'/'}>
    //       <div className="flex items-center gap-1">
    //         <img src={logoImg} alt="logo" className="w-10" />
    //         <p className="inter-font font-bold text-[16px] bg-white bg-clip-text text-transparent">
    //           HERO.IO
    //         </p>
    //       </div>
    //     </Link>
    //     <div>
    //       <p className="inter-font font-medium text-[20px]">Social Links</p>
    //       <div className="flex items-center justify-center md:justify-start gap-2">
    //         <img src={xLogo} alt="xLogo" />
    //         <img src={inLogo} alt="inLogo" />
    //         <img src={fbLogo} alt="fbLogo" />
    //       </div>
    //     </div>
    //   </div>
    //   <div className="border-t-2 border-[#E5E7EB]/50 pt-5">
    //     <p className="text-center inter-font text-[16px]">
    //       Copyright © 2025 - All right reserved
    //     </p>
    //   </div>
    // </footer>
  );
};

export default Footer;
