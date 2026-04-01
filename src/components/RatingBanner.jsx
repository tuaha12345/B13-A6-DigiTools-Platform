import React from 'react';

const RatingBanner = () => {
    return (
        <div className='bg-linear flex flex-col md:flex-row justify-center items-center gap-8 py-12 mt-12'>
            
            <div className='border-b-1 md:border-r-1 md:border-b-0 border-white py-5 px-20'>
                <h2 className='text-3xl font-bold text-white text-[40px] '>50K+</h2>
                <p className='text-white text-xl'>Active Users</p>
            </div>
            <div className='border-b-1 md:border-r-1 md:border-b-0 border-white  text-center py-5 px-20'>
                <h2 className='text-3xl font-bold text-white text-[40px]'>200+</h2>
                <p className='text-white text-xl'>Premium Tools</p>
            </div>
            <div className='border-b-1 md:border-r-1 md:border-b-0 border-white text-center py-5 px-20'>
                <h2 className='text-3xl font-bold text-white text-[40px]'>4.9</h2>
                <p className='text-white text-xl'>Rating</p>
            </div>
            
        </div>
    );
};

export default RatingBanner;