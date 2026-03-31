import React from 'react';
import Card from './Card';


const PremiumTool = () => {
    return (
       <>
        <div className='flex flex-col justify-center items-center mx-auto my-30 gap-4 w-11/12'>
            <h2 className='text-5xl font-bold'>Premium Digital Tools</h2>
            <p className='text-center'>Choose from our curated collection of premium digital products designed<br></br>to boost your productivity and creativity.</p>
            <div className='flex gap-2 border-2 border-gray-300 rounded-full '>
                <button className='btn bg-linear  rounded-full text-white'>Products</button>
                <button className='px-2'>Cart (2)</button>
            </div>
        </div>
        <Card></Card>
       </>
    );
};

export default PremiumTool;