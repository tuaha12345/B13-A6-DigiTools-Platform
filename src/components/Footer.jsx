import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className='bg-[#101727] py-10'>
       <div className='footer-header container mx-auto py-10 text-center text-white w-11/12 grid grid-cols-6 gap-4 border-b border-gray-500'>

         <div className='text-start col-span-2'>
            <h4 className='text-[26px] font-semibold '>DigiTools</h4>
            <p>
                Premium digital tools for creators,<br></br> professionals, and businesses. Work smarter<br></br> with our suite of powerful tools.
            </p>
         </div>
         <div>
            <h3 className='text-[20px] font-semibold text-start'>Product</h3>
            <ul className='text-start'>
                <li className='py-2'>Features</li>
                <li className='py-2'>Pricing</li>
                <li className='py-2'>Templates</li>
                <li className='py-2'>Integrations</li>
            </ul>
         </div>
         <div>
            <h3 className='text-[20px] font-semibold text-start'>Company</h3>
            <ul className='text-start'>
                <li className='py-2'>Abouts</li>
                <li className='py-2'>Blog</li>
                <li className='py-2'>Careers</li>
                <li className='py-2'>Press</li>
            </ul>
         </div>
         <div>
            <h3 className='text-[20px] font-semibold text-start'>Resources</h3>
            <ul className='text-start'>
                <li className='py-2'>Documentation</li>
                <li className='py-2'>Help Center</li>
                <li className='py-2'>Community</li>
                <li className='py-2'>Contact</li>
            </ul>
         </div>
                  <div>
            <h3 className='text-[20px] font-semibold text-start'>Social Links</h3>
            <div className='flex my-3'>
                <div className='p-2 bg-white rounded-full text-[#101727] mr-5'>
                   <FaSquareInstagram  />
                </div>
                 <div className='p-2 bg-white rounded-full text-[#101727] mr-5'>
                   <FaFacebookSquare />
                </div>
                <div className='p-2 bg-white rounded-full text-[#101727] mr-5'>
                   <FaXTwitter />
                </div>
                

            </div>

         </div>

       </div>
       <div className='footer-footer container mx-auto py-10 text-center text-white w-11/12 flex justify-between'>
         <p>© 2026 Digitools. All rights reserved</p>
         <div className="flex gap-4">
            <p>Privacy Policy </p>
            <p>Terms of Service </p>
            <p>Cookies </p>
         </div>
       </div>
    </div>
  )
}
