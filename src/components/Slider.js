import React from 'react'
import { Carousel, Container } from 'rsuite';
import '../css/common.css'
import '../css/slider.css'

const Slider = () => {
  return (
    <>
        <Carousel className="custom-slider">
            <div className='sliderItem'>
                <div className='sliderImg' style={{backgroundImage: `url("images/slider2.jpg")`}}>
                <Container className='container'>
                    <div className='sliderText'>
                    <h5>Bestsellers</h5>
                    <h1>Modern Stylist Fashionable Women's</h1>
                    <a href="">Go to Shop</a>
                    </div>
                </Container>
                </div>
            </div>
            <div className='sliderItem'>
                <div className='sliderImg' style={{backgroundImage: `url("images/slider1.jpg")`}}>
                <Container className='container'>
                    <div className='sliderText'>
                    <h5>Stock Is Limited</h5>
                    <h1>End of Season Clearance Sale upto 30%</h1>
                    <a href="">Go to Shop</a>
                    </div>
                </Container>
                </div>
            </div>
            <div className='sliderItem'>
                <div className='sliderImg' style={{backgroundImage: `url("images/slider3.jpg")`}}>
                <Container className='container'>
                    <div className='sliderText'>
                    <h5>Explore New</h5>
                    <h1>Worldwide on all baskets over $200</h1>
                    <a href="">Go to Shop</a>
                    </div>
                </Container>
                </div>
            </div>
        </Carousel>
    </>
  )
}

export default Slider