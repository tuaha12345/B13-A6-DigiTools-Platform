import { useState } from 'react'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import RatingBanner from './components/RatingBanner'
import PremiumTool from './components/PremiumTool'
import GetStarted from './components/GetStarted'

import './App.css'

function App() {


  return (
    <>
      <Navbar />
      <Banner />
      <RatingBanner />
      <PremiumTool />
      <GetStarted />
    </>
  )
}

export default App
