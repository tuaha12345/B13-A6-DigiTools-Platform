import React from 'react';
import { FcCheckmark } from "react-icons/fc";
const TransparentPricing = () => {
    return (
        <div className="transparent-pricing bg-base-200 py-16">
            <div className='w-11/12 flex flex-col justify-center  items-center gap-2'>
               <h2 className='text-5xl font-bold'>Transparent Pricing</h2>
               <p className='text-[16px]'>No hidden fees. No surprises. Just clear, upfront pricing.</p>
            </div>
            {/* get started Cards */}
            <div className='w-11/12 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto my-10'>
                            <div className='border-1 border-gray-300 rounded-lg p-6 flex flex-col gap-4 relative'>
                                <div className='top_button flex justify-center items-center absolute top-[-20px] left-35'>
                                    <button className="btn btn-soft btn-warning rounded-full">Warning</button>
                                </div>
                                <h3 className='text-2xl font-bold'>Starter</h3>
                                <p>Perfect for getting started</p>
                                <p><span className='text-2xl font-bold'>$0</span>/mo</p>
                                <ul>
                                    <li className='flex gap-2'><FcCheckmark />
                                        <p className='text-[16px]'>Unlimited AI-generated content</p>
                                    </li>
                                    <li className='flex gap-2'><FcCheckmark />
                                        <p className='text-[16px]'>Unlimited AI-generated content</p>
                                    </li>
                                    <li className='flex gap-2'><FcCheckmark />
                                        <p className='text-[16px]'>Unlimited AI-generated content</p>
                                    </li>
                                </ul>
                                <div className='w-full h-5'></div>
                                <button className='btn bg-linear  rounded-full text-white mt-auto'>Buy Now</button>
                
                            </div>
            </div>
            
        </div>
    );
};

export default TransparentPricing;