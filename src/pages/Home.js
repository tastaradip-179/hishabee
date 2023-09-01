import React from 'react'
import Banner from '../components/Banner'
import Deal from '../components/Deal'
import Feature from '../components/Feature'
import Slider from '../components/Slider'
import TopProduct from '../components/TopProduct'
import Foot from '../components/Foot'
import Navigationbar from '../components/Navigationbar'

const Home = () => {
  return (
    <>
      <Navigationbar/>
      <Slider/>
      <Deal/>
      <TopProduct/>
      <Banner/>
      <Feature/>
      <Foot/>
    </>
  )
}

export default Home