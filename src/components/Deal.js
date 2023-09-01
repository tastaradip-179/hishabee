import React from 'react'
import { Container, Grid, Row, Col } from 'rsuite';
import '../css/common.css'
import '../css/deal.css'

const Deal = () => {
  return (
    <>
        <Container className='container'>
            <Grid>  
                <Row className="show-grid" gutter={30}>    
                    <Col xs={24} sm={24} md={12} lg={12}>
                        <div className='dealBox' style={{backgroundImage: `url("images/deal1.png")`}}>
                            <div className='dealText'>
                                <h6>Flash Deal</h6>
                                <h3>Sale Up To 30% Off Clothes</h3>
                                <a href="">Shop Now</a>
                            </div>
                        </div>
                    </Col>  
                    <Col xs={24} sm={24} md={12} lg={12}>
                        <div className='dealBox' style={{backgroundImage: `url("images/deal2.png")`}}>
                            <div className='dealText'>
                                <h6>Big Deal</h6>
                                <h3>Accessories Sale 20%</h3>
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

export default Deal