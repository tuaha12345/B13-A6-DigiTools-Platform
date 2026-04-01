import { Suspense, useState } from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import RatingBanner from './components/RatingBanner'
import PremiumTool from './components/PremiumTool'
import GetStarted from './components/GetStarted'
import TransparentPricing from './components/TransparentPricing'
import Footer from './components/Footer'
import { ToastContainer } from "react-toastify";

import './App.css'

function App() {

  const [cardData, setCardData] = useState([]);
 const fetchData = async () => {
    const res=await fetch('/assets/data.json');
    const data=await res.json();
    // console.log(data);
    return data;
 }

 const data = fetchData();

  return (
    <>
      <Navbar cardData={cardData} />
      <Banner />
      <RatingBanner />
      <Suspense fallback={<div>Loading...</div>}>
        <PremiumTool data={data} cardData={cardData} setCardData={setCardData} />
      </Suspense>
      <GetStarted />
      {/* <TransparentPricing />
      <Footer />
      <ToastContainer /> */}
    </>
  )
}

export default App
