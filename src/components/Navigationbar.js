import React, { useEffect, useState, useContext } from 'react'
import { Container, Navbar, Nav, Grid, Row, Col, Dropdown, Drawer, List, Button, Message } from 'rsuite';
import { BiUserCircle, BiVector } from 'react-icons/bi';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { BsFillTrashFill  } from 'react-icons/bs';
import '../css/common.css'
import '../css/navbar.css'
import {Link, useNavigate} from 'react-router-dom'
import {Store} from '../Store'


const Navigationbar = () => {

  const {cartstate, cartdispatch} = useContext(Store);
  const {cart} = cartstate;
  const navigate = useNavigate();
  const [openWithHeader, setOpenWithHeader] = useState(false);

  let handleQuantity = (item, quantity) => {
    cartdispatch({type:'CART_ADD_PRODUCT', payload: {...item, quantity}})
  }
  let handleDeleteCartItem = (item) => {
    cartdispatch({type:'CART_REMOVE_PRODUCT', payload: item})
  }
  let handleClearCart = () => {
    cartdispatch({type:'CART_CLEAR'})
  }


  return (
    <>
      <Container className='container'>
        <Grid>  
            <Row className="show-grid">                  
                <Navbar className='navbar'>
                    <Col xs={24} sm={24} md={4} lg={4}>
                        <Navbar.Brand href="/">
                            <img src="images/logo.jpg" alt='Hishabee' width="100px"/>
                        </Navbar.Brand>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12} mdPush={2}>
                        <Nav className='nav-item-links'>
                            <Nav.Item>
                                <Link to="/">Home</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link to="/shop">
                                    Shop
                                </Link> 
                            </Nav.Item>
                            <Nav.Item>
                                <Link to="/cart">
                                    Cart
                                </Link> 
                            </Nav.Item>
                            <Nav.Item>
                                <Link to="/signup">
                                    Signup
                                </Link> 
                            </Nav.Item>
                            <Nav.Item>
                                <Link to="/signin">
                                    Signin
                                </Link> 
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col xs={24} sm={24} md={8} lg={8}>
                        <Nav className="navicons" pullRight>
                            <Nav.Item><BiUserCircle/></Nav.Item>
                            <Nav.Item><AiOutlineHeart/></Nav.Item>
                            <Nav.Item><BiVector/></Nav.Item>
                            <Nav.Item>
                                    <div className='cart' onClick={() => setOpenWithHeader(true)}>
                                        <AiOutlineShoppingCart/>
                                        <span className='round'>{cart.cartItems.length}</span>
                                    </div>
                                </Nav.Item>

                                <Drawer open={openWithHeader} onClose={() => setOpenWithHeader(false)}>
                                    <Drawer.Header>
                                    <Drawer.Title>Cart Items</Drawer.Title>
                                    </Drawer.Header>
                                    <Drawer.Body className='cart-drawer'>
                                        <List size="md">
                                            {cart.cartItems.length > 0
                                            ?
                                                cart.cartItems.map((item, index) => (
                                                <List.Item key={index}>
                                                    <Row>
                                                        <Col lg={3} md={3} className="position-relative">
                                                            <img src={item.image} width="50"/>
                                                        </Col>
                                                        <Col lg={4} md={4} className="position-relative">
                                                            <h6 className='vertical-center'>{item.name}</h6>
                                                        </Col>
                                                        <Col lg={3} md={3} className="position-relative">
                                                            <h6 className='vertical-center'>${item.price}</h6>
                                                        </Col>
                                                        <Col lg={3} md={3} className="position-relative">
                                                            <span style={{background: `${item.color}`}} className='vertical-center'></span>
                                                        </Col>
                                                        <Col lg={3} md={3} className="position-relative">
                                                            <h6 className='vertical-center'>{item.size}</h6>
                                                        </Col>
                                                        <Col lg={6} md={6}>
                                                                <Button onClick={()=>handleQuantity(item, item.quantity+1)} style={{display:"inline-block", marginTop:"-4px"}} color="cyan" appearance="primary">+</Button>
                                                                <h6 style={{display:"inline-block", margin: "14px 5px 0 5px"}}>{item.quantity}</h6>
                                                                <Button onClick={()=>handleQuantity(item, item.quantity > 1 ? item.quantity-1 : item.quantity)} style={{display:"inline-block", marginTop:"-4px"}} color="cyan" appearance="primary">-</Button>
                                                        </Col>
                                                        <Col lg={2} md={2} className="position-relative">
                                                            <BsFillTrashFill onClick={()=>{handleDeleteCartItem(item)}} className='vertical-center remove'/>
                                                        </Col>
                                                    </Row>  
                                                </List.Item>
                                                ))
                                            :
                                                <Message type="info">Cart is Empty</Message>
                                            }
                                        </List>
                                        <div className='drawer-buttons'>
                                            <Link to="/cart">
                                                <Button color="cyan" appearance="primary">Go to Cart</Button>
                                            </Link>
                                            <Button onClick={handleClearCart} color="red" appearance="primary">Clear Cart</Button>
                                        </div> 
                                    </Drawer.Body>
                                </Drawer>
                        </Nav>
                    </Col>
                </Navbar>
            </Row>
        </Grid>
      </Container>
    </>
  )
}

export default Navigationbar