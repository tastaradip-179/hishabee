import React from 'react'
import { Container } from 'rsuite'
import '../css/common.css'
import '../css/banner.css'

const Banner = () => {
  return (
    <>
      <div className='bannerImg' style={{backgroundImage: `url("images/banner-bg.png")`}}>
        <Container className='container'>
          <div className='bannerText'>
            <h2>Free shipping worldwide on all baskets over $200</h2>
            <a href="">Go to Shop</a>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Banner