import React from 'react';
const LoadingSpinner = () => {
    return (
        <div className='w-full h-full'>
            <p className='inter-font font-extrabold text-3xl md:text-5xl text-center px-20 py-20 md:py-40 text-[#001931]/50'>
                L<span className="loading loading-spinner text-[#9F62F2] loading-lg md:loading-xl"></span>ading<span className="loading loading-dots text-[#9F62F2] loading-lg md:loading-xl mt-4.5"></span></p>
        </div>
    );
};

export default LoadingSpinner;