import React from 'react';
import { FcCheckmark } from "react-icons/fc";
const GetStarted = () => {
    return (
        <div className="get-started bg-base-200 py-16">
            <div className='w-11/12 flex flex-col justify-center  items-center gap-2'>
               <h2 className='text-5xl font-bold'>Get Started in 3 Steps</h2>
               <p className='text-[16px]'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            {/* get started Cards */}
            <div className='getStartedCards flex gap-8 mt-12  justify-center items-center'>
                <div className='border-1 border-gray-300 rounded-lg p-6 flex flex-col gap-4 bg-white max-w-sm'>
                    <div className='top_button flex justify-end'>
                        <button className="btn bg-linear text-white rounded-full w-10 h-10">01</button>
                    </div>
                  <div className='flex justify-center'>
                    <div className=' bg-[#F2E9FE] rounded-full p-5 text-center w-20 h-20'>
                        <img src='/assets/user.png' alt='Operation Image' className='' />
                    </div>
                  </div>
                    <h3 className='text-2xl font-bold text-center'>Create Account</h3>
                    <p className='text-center'>Sign up for free in seconds. No credit card required to get started.</p>
                    <div className='w-full h-5'></div>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;