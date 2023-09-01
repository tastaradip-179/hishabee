import React from 'react'
import { Container, Grid, Row, Col } from 'rsuite'
import '../css/common.css'
import '../css/topproduct.css'
import Product from './Product';

const TopProduct = () => {
  return (
    <>
      <Container className='container topproduct'>
        <Grid>  
            <Row className="show-grid" gutter={30}>  
                <Col xs={24} sm={24} md={12} lg={12}>
                    <h2>Top Products</h2>
                </Col>  
                <Col xs={24} sm={24} md={12} lg={12}>
                    <ul>
                        <li><span></span><a href="">All</a></li>
                        <li><span></span><a href="">Boys Collection</a></li>
                        <li><span></span><a href="">Girl Collection</a></li>
                        <li><span></span><a href="">Shoes Collection</a></li>
                    </ul>
                </Col>       
            </Row>
            <Row className="show-grid productlist" gutter={30}>  
                  <Col xs={12} sm={12} md={6} lg={6}>
                        <Product/>
                  </Col> 
                  <Col xs={12} sm={12} md={6} lg={6}>
                        <Product/>
                  </Col> 
                  <Col xs={12} sm={12} md={6} lg={6}>
                        <Product/>
                  </Col> 
                  <Col xs={12} sm={12} md={6} lg={6}>
                        <Product/>
                  </Col> 
                {/* {products.map((item, index)=>(
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <Product key={index} product={item} name={item.name} img={item.image} brand={item.brand}
                        colors={item.colors} sizes={item.sizes} rating={item.rating} price={item.price}/>
                    </Col> 
                ))}   */}    
            </Row>
        </Grid>
      </Container>
    </>
  )
}

export default TopProduct