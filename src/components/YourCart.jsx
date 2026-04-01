import React from 'react'
import { IoCartOutline } from "react-icons/io5";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

export default function YourCart({cardData, setCardData}) {
    console.log("your card data",cardData);
    const removeCartItem = (id) => {
        const newCardData = cardData.filter((item) => item.id !== id);
        setCardData(newCardData);
        toast.error("Item removed from cart ❌");
    }
    const proccedToCheckout = () => {
        // Implement checkout logic here
        setCardData([]);
        toast.success("Proceeding to checkout ");
    }
  return (
    <div className='flex flex-col justify-center items-start mx-auto my-30 gap-4 w-11/12 border-1 border-gray-300 rounded-lg p-7'>
      <div className=' p-6 flex flex-col gap-4  w-full'>
         <h3 className='text-2xl font-bold'>Your Cart</h3>
         {cardData.length === 0 ?  <p className='text-center p-9 w-full'> Your cart is empty.</p> : (
            cardData.map((x,index)=>{
                return (
         <div key={index} className='w-full bg-base-200 flex flex-col md:flex-row justify-center md:justify-between items-center p-4 rounded-lg '>
            <div className=' flex flex-col md:flex-row justify-center items-center gap-4'>
                 <div className='top_img border border-gray-300 rounded-full p-3 self-start'>
                    <img src={x.icon} alt='Operation Image' />
                  </div>
                  <div>
                    <h3 className='text-xl font-semibold'>{x.name}</h3>
                    <p>${x.price}</p>
                  </div>
            </div>
            <div>
                <button className='text-red-600 btn bg-none' onClick={()=>removeCartItem(x.id)}>Remove</button>
            </div>
         </div>)
            })

         )}
         <div className='flex justify-between'>
            <p >Total: </p>
            <p className='text-2xl font-bold'>${cardData.reduce((total, item) => total + item.price, 0)}</p>
         </div>

    </div>
    {cardData.length > 0 && <button className='btn bg-linear  rounded-full text-white mt-auto flex w-full' onClick={()=>proccedToCheckout()}>Proceed to Checkout</button>}
    {/* <button className='btn bg-linear  rounded-full text-white mt-auto flex w-full'>Buy Now</button> */}
    </div>
  )
}
