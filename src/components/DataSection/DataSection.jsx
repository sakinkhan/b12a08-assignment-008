import React from 'react';

const DataSection = () => {
    return (
        <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-20 px-10'>
            <h1 className='inter-font text-3xl md:text-5xl text-white font-bold text-center'>Trusted by Millions, Built for You</h1>
            <div className='flex flex-col md:flex-row justify-center items-center gap-10 md:gap-30 mt-10'>
                <div className='space-y-4'>
                    <p className='inter-font text-[16px] text-white/80 text-center'>Total Downloads</p>
                    <p className='inter-font text-4xl md:text-6xl text-white font-black text-center'>29.6M</p>
                    <p className='inter-font text-[16px] text-white/80 text-center'>21% more than last month</p>
                </div>
                <div className='space-y-4'>
                    <p className='inter-font text-[16px] text-white/80 text-center'>Total Reviews</p>
                    <p className='inter-font text-4xl md:text-6xl text-white font-black text-center'>906K</p>
                    <p className='inter-font text-[16px] text-white/80 text-center'>46% more than last month</p>
                </div>
                <div className='space-y-4'>
                    <p className='inter-font text-[16px] text-white/80 text-center'>Active Apps</p>
                    <p className='inter-font text-4xl md:text-6xl text-white font-black text-center'>132+</p>
                    <p className='inter-font text-[16px] text-white/80 text-center'>31 more will Launch</p>
                </div>
            </div>
        </div>
    );
};

export default DataSection;