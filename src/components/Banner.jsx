import React from 'react';

const Banner = () => {
    return (
        <div className='flex mx-auto px-4 py-8 gap-8 items-center container w-11/12 my-[60px]'>
            <div className='flex flex-col gap-6 justify-center align-center'>
                <div className='bg-[#E1E7FF] rounded-4xl self-start px-4 py-1 flex'>
                    <div>

                    </div>
                    <p className='text-linear'>New: AI-Powered Tools Available</p>
                </div>
                <h1 className='font-bold text-[72px]'>Supercharge Your<br></br>Digital Workflow</h1>
                <p>Access premium AI tools, design assets, templates, and productivity<br></br>
                software—all in one place. Start creating faster today.<br></br>Explore Products</p>
                <div className=' flex justify-start gap-4'>
                    <button className='btn bg-linear ml-4 rounded-full text-white'>Explore Products</button>
                    <button className='btn btn-outline btn-primary text-linear px-4 py-2 rounded-full flex'>
                        <img src="/assets/Play.png" alt="Play Icon" className='w-4 h-4 ' />
                        Watch Demo</button>
                </div>
            </div>
            <div>
                <img src="/assets/banner.png" alt="Banner Image" className="w-full h-auto" />
            </div>
        </div>
    );
};

export default Banner;