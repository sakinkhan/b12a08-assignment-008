import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../../components/Footer/Footer';
import { ToastContainer} from 'react-toastify';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

const Root = () => {
    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";

    return (
        <div>
            <Navbar></Navbar>
            <div>
                {isLoading ? (
                    <div className='flex justify-center items-center min-h-screen bg-[#d2d2d2]/20'>
                        <LoadingSpinner></LoadingSpinner>
                    </div>
                ) : (
                    <div>
                        <Outlet></Outlet>
                    </div>
                )}
            </div>
            <ToastContainer theme="colored" position="bottom-center"></ToastContainer>
            <Footer></Footer>
        </div>
    );
};

export default Root;