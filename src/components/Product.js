import React from 'react'
import {Link} from 'react-router-dom'
import { Panel } from 'rsuite'
import { BsStarFill, BsStarHalf, BsStar, BsHandbag } from 'react-icons/bs'
import '../css/common.css'
import '../css/product.css'

const Product = () => {
  return (
    <>
    <Panel style={{ display: 'inline-block', width: "100%" }}>
            <img src="images/top-product7.png" width="100%"/>
            <div className='panel-sub-heading'>
                <div className='rating'>
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarFill />
                  <BsStarHalf />
                  <BsStar />
                </div>
                <div className='brand'>
                    <p>Zara</p>
                </div>
            </div>
            <h6 className='panel-heading'>
                <Link to="">
                Quilted gilet with hood
                </Link>
            </h6>
            <div className='attributes'>
                <div className='colors'>
                  <span className='active' style={{background: "#622060"}} ></span>
                  <span className='active' style={{background: "#1473A9"}} ></span>
                  <span className='active' style={{background: "#FBDADA"}} ></span>
                  <span className='active' style={{background: "#519D04"}} ></span>
                </div>
                <div className='sizes'>
                  <span className='active'>M</span>
                  <span className='active'>S</span>
                  <span className='active'>XS</span>
                </div>
            </div>
            <div className='cart-price'>
                <span className='cart'><BsHandbag /></span>
                <span className='price'>145</span>
            </div>
           
        </Panel>
    </>
  )
}

export default Product