import React, { useState } from 'react';
import Card from './Card';
import YourCart from './YourCart';


const PremiumTool = ({ data, cardData, setCardData }) => {
    const [showCart, setShowCart] = React.useState(false);

    return (
       <>
        <div className='flex flex-col justify-center items-center mx-auto my-30 gap-4 w-11/12'>
            <h2 className='text-5xl font-bold'>Premium Digital Tools</h2>
            <p className='text-center'>Choose from our curated collection of premium digital products designed<br></br>to boost your productivity and creativity.</p>
            <div className='flex gap-2 border-2 border-gray-300 rounded-full '>
                <button className={`${showCart?'px-2':'btn bg-linear  rounded-full text-white'}`}  onClick={() => setShowCart(false)}>Products</button>
                <button className={`${showCart?'btn bg-linear  rounded-full text-white':'px-2'}`} onClick={() => setShowCart(true)}>Cart ({cardData.length})</button>
                {/* <button className={`${showCart?'btn bg-linear  rounded-full text-white':'px-2'}`} onClick={() => setShowCart(false)}>Products</button>
                <button className={`${showCart?'px-2':'btn bg-linear  rounded-full text-white'}`} onClick={() => setShowCart(true)}>Cart ({cardData.length})</button> */}
            </div>
        </div>
        {showCart ? <YourCart cardData={cardData} setCardData={setCardData}></YourCart>
         :<Card data={data} cardData={cardData} setCardData={setCardData} ></Card>
         }
       </>
    );
};

export default PremiumTool;