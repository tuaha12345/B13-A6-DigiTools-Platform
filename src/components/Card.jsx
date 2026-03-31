import React from 'react';
import { FcCheckmark } from "react-icons/fc";
const Card = () => {
    return (
        <div className='w-11/12 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto my-10'>
            <div className='border-1 border-gray-300 rounded-lg p-6 flex flex-col gap-4'>
                <div className='top_button flex justify-end'>
                    <button className="btn btn-soft btn-warning rounded-full">Warning</button>
                </div>
                <div className='top_img border border-gray-300 rounded-full p-2 self-start'>
                    <img src='/assets/products/operation.png' alt='Operation Image' />
                </div>
                <h3 className='text-2xl font-bold'>AI Writing Pro</h3>
                <p>Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.</p>
                <p><span className='text-2xl font-bold'>$29</span>/mo</p>
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
                <button className='btn bg-linear  rounded-full text-white mt-auto'>Buy Now</button>

            </div>
            <div className='border-1 border-gray-300 rounded-lg p-6 flex flex-col gap-4'>
                <div className='top_button flex justify-end'>
                    <button className="btn btn-soft btn-warning rounded-full">Warning</button>
                </div>
                <div className='top_img border border-gray-300 rounded-full p-2 self-start'>
                    <img src='/assets/products/operation.png' alt='Operation Image' />
                </div>
                <h3 className='text-2xl font-bold'>AI Writing Pro</h3>
                <p>Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.</p>
                <p><span className='text-2xl font-bold'>$29</span>/mo</p>
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
                <button className='btn bg-linear  rounded-full text-white mt-auto'>Buy Now</button>

            </div>
            <div className='border border-gray-300 rounded-lg p-6 flex flex-col gap-4'>
                <div className='top_button flex justify-end'>
                    <button className="btn btn-soft btn-warning rounded-full">Warning</button>
                </div>
                <div className='top_img border border-gray-300 rounded-full p-2 self-start'>
                    <img src='/assets/products/operation.png' alt='Operation Image' />
                </div>
                <h3 className='text-2xl font-bold'>AI Writing Pro</h3>
                <p>Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.</p>
                <p><span className='text-2xl font-bold'>$29</span>/mo</p>
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
                <button className='btn bg-linear  rounded-full text-white mt-auto'>Buy Now</button>

            </div>
        </div>
    );
};

export default Card;