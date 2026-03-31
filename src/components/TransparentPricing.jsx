import React from 'react';
import { FcCheckmark } from "react-icons/fc";
import { IoCheckmarkSharp } from "react-icons/io5";
const TransparentPricing = () => {
    return (
        <div className="transparent-pricing bg-base-200 py-16">
            <div className='w-11/12 flex flex-col justify-center  items-center gap-2'>
               <h2 className='text-5xl font-bold'>Simple, Transparent Pricing</h2>
               <p className='text-[16px] my-2'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            {/* get started Cards */}
            <div className='w-11/12 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto my-10'>
                            <div className='border-1 border-gray-300 rounded-lg p-6 flex flex-col gap-4 relative'>
                                <h3 className='text-2xl font-bold'>Starter</h3>
                                <p>Perfect for getting started</p>
                                <p><span className='text-4xl font-bold'>$0</span>/Month</p>
                                <ul>
                                    <li className='flex gap-2 items-center'><FcCheckmark />
                                        <p className='text-[16px]'>Access to 10 free tools</p>
                                    </li>
                                    <li className='flex gap-2 items-center'><FcCheckmark />
                                        <p className='text-[16px]'>Basic templates</p>
                                    </li>
                                    <li className='flex gap-2 items-center'><FcCheckmark />
                                        <p className='text-[16px]'>Community support</p>
                                    </li>
                                    <li className='flex gap-2 items-center'><FcCheckmark />
                                        <p className='text-[16px]'>1 project per month</p>
                                    </li>
                                </ul>
                                <div className='w-full h-5'></div>
                                <button className='btn bg-linear  rounded-full text-white mt-auto'>Get Started Free</button>
                
                            </div>

                             <div className='border-1 border-gray-300 rounded-lg p-6 flex flex-col gap-4 relative bg-linear text-white'>
                                <div className='top_button flex justify-center items-center absolute top-[-20px] left-35'>
                                    <button className="btn btn-soft btn-warning rounded-full">Most Popular</button>
                                </div>
                                <h3 className='text-2xl font-bold'>Pro</h3>
                                <p>Best for professionals</p>
                                <p><span className='text-4xl font-bold'>$29</span>/Month</p>
                                <ul>
                                    <li className='flex gap-2 items-center text-white'><IoCheckmarkSharp />
                                        <p className='text-[16px]'>Access to all premium tools</p>
                                    </li>
                                    <li className='flex gap-2 items-center text-white'><IoCheckmarkSharp />
                                        <p className='text-[16px]'>Unlimited templates</p>
                                    </li>
                                    <li className='flex gap-2 items-center text-white'><IoCheckmarkSharp />
                                        <p className='text-[16px]'>Priority support</p>
                                    </li>
                                    <li className='flex gap-2 items-center text-white'><IoCheckmarkSharp />
                                        <p className='text-[16px]'>Unlimited projects</p>
                                    </li>
                                    <li className='flex gap-2 items-center text-white'><IoCheckmarkSharp />
                                        <p className='text-[16px]'>Cloud sync</p>
                                    </li>
                                    <li className='flex gap-2 items-center text-white'><IoCheckmarkSharp />
                                        <p className='text-[16px]'>Advanced analytics</p>
                                    </li>
                                </ul>
                                <div className='w-full h-5'></div>
                                <button className='btn rounded-full mt-auto bg-white  text-[#8A1AF9]'>Start Pro Trial</button>
                
                            </div>


                             <div className='border-1 border-gray-300 rounded-lg p-6 flex flex-col gap-4 relative'>
                                <h3 className='text-2xl font-bold'>Enterprise</h3>
                                <p>For teams and businesses</p>
                                <p><span className='text-4xl font-bold'>$99</span>/Month</p>
                                <ul>
                                    <li className='flex gap-2 items-center'><FcCheckmark />
                                        <p className='text-[16px]'>Everything in Pro</p>
                                    </li>
                                    <li className='flex gap-2 items-center'><FcCheckmark />
                                        <p className='text-[16px]'>Team collaboration</p>
                                    </li>
                                    <li className='flex gap-2 items-center'><FcCheckmark />
                                        <p className='text-[16px]'>Custom integrations</p>
                                    </li>
                                    <li className='flex gap-2 items-center'><FcCheckmark />
                                        <p className='text-[16px]'>Dedicated support</p>
                                    </li>
                                    <li className='flex gap-2 items-center'><FcCheckmark />
                                        <p className='text-[16px]'>SLA guarantee</p>
                                    </li>
                                     <li className='flex gap-2 items-center'><FcCheckmark />
                                        <p className='text-[16px]'>Custom branding</p>
                                    </li>
                                </ul>
                                <div className='w-full h-5'></div>
                                <button className='btn bg-linear  rounded-full text-white mt-auto'>Contact Sales</button>
                
                            </div>
            </div>
            
        </div>
    );
};

export default TransparentPricing;