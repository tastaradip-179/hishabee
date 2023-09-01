import React from 'react'
import { Container, Grid, Row, Col } from 'rsuite'
import '../css/common.css'
import '../css/feature.css'
import Product from './Product'

const Feature = () => {
  return (
    <>
    <Container className='container feature'>
        <Grid>  
            <Row className="show-grid">  
                <Col xs={24} sm={24} md={12} lg={12}>
                    <h2>Featured Collections</h2>
                </Col>        
            </Row>
            <Row className="show-grid productlist" gutter={30}> 
                    <Col xs={24} sm={12} md={8} lg={8}>
                                <div className='featureCat' style={{backgroundImage: `url("images/feature-women.png")`}}>
                                    <div className='featureCatText'>
                                        <h3>Woman 2020 Summer Collection</h3>
                                        <a href="">Shop Now</a>
                                    </div>
                                </div>
                    </Col> 
                    <Col xs={24} sm={12} md={8} lg={8}>
                        <Product/>
                    </Col>
                    <Col xs={24} sm={12} md={8} lg={8}>
                                <div className='featureCat' style={{backgroundImage: `url("images/feature-men.png")`}}>
                                    <div className='featureCatText'>
                                        <h3>Men 2020 Summer Collection</h3>
                                        <a href="">Shop Now</a>
                                    </div>
                                </div>
                    </Col>       
            </Row>
        </Grid>
    </Container>
    </>
  )
}

export default Feature