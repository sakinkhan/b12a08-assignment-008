import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';
import SkeletonLoader from '../../components/LoadingSpinner/SkeletonLoader';
import { ToastContainer} from 'react-toastify';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <ToastContainer theme="dark" position="bottom-center"></ToastContainer>
            <Footer></Footer>
        </div>
    );
};

export default Root;