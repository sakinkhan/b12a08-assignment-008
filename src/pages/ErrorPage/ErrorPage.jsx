import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import errorImg from "../../assets/error-404.png";
import { Link, useNavigate } from "react-router";

const ErrorPage = () => {
    const navigate = useNavigate();
  return (
    <div>
        <Navbar></Navbar>
    <div className="bg-[#d2d2d2]/20 flex flex-col justify-center items-center py-20">
        <img src={errorImg} alt="" />
        <h1 className="inter-font font-semibold text-[48px] text-[#001931] mt-6">Oops, page not found!</h1>
        <p className="inter-font text-[20px] text-[#627382] mb-5">The page you are looking for is not available.</p>
        <button onClick={()=> navigate(-1)} className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-8 py-6 inter-font font-semibold text-[16px]">
            Go Back!
        </button>
    </div>
      <Footer></Footer>
    </div>
  );
};

export default ErrorPage;
