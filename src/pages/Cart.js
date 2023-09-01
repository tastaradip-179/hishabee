import React, {useState, useEffect, useContext} from 'react'
import { Grid, Row, Col, Form, Input, ButtonToolbar, Button, Message, Breadcrumb, SelectPicker } from 'rsuite'
import { ImCross } from 'react-icons/im'
import {Store} from '../Store'
import {Link} from 'react-router-dom'
import '../css/common.css'
import '../css/cart.css'
import Navigationbar from '../components/Navigationbar'
import Foot from '../components/Foot'

const Cart = () => {

    const {cartstate, cartdispatch} = useContext(Store);
    const {cart} = cartstate;
  
    let [shipping, setShipping] = useState(0)
    let [subtotal, setSubtotal] = useState(0)
    let [total, setTotal] = useState(0)
  
    let handleQuantity = (item, quantity) => {
      cartdispatch({type:'CART_ADD_PRODUCT', payload: {...item, quantity}})
    }
    let handleDeleteCartItem = (item) => {
      cartdispatch({type:'CART_REMOVE_PRODUCT', payload: item})
    }
    let handleClearCart = () => {
      cartdispatch({type:'CART_CLEAR'})
      setShipping(0)
      setTotal(0)
    }

  
    useEffect(()=>{
      let price = 0;
      cart.cartItems.map(item=>{
          price += item.price * item.quantity
      })
      setSubtotal(price)
      if(price<200){
          setShipping(0)
      }
      else if(price>=200 && price<=1000){
          setShipping(50)
      }
      else if(price>1000){
          setShipping(1000)
      }
    },[cart.cartItems]) 



  return (
    <>
        <Navigationbar/>
        <div className='container'>
            <div className="cart-header">
                <Breadcrumb className='breadcrumb'>
                    <Link to="/">
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                    </Link>
                    <Breadcrumb.Item href="">Shop</Breadcrumb.Item>
                    <Breadcrumb.Item active>Cart</Breadcrumb.Item>
                </Breadcrumb>
                <h1>Cart Page</h1>
            </div>
            
            <Grid fluid>
                <Row className="show-grid">
                    <Col md={16} lg={16}>
                        <div className='cart-product-list'>
                            <Row className='show-grid cart-list-header'>
                                <Col lg={8} md={8}>
                                    Item
                                </Col>
                                <Col lg={4} md={4}>
                                    Price
                                </Col>
                                <Col lg={6} md={6}>
                                    Quantity   
                                </Col>
                                <Col lg={4} md={4}>
                                    Subtotal
                                </Col>
                                <Col lg={2} md={2}>
                                    
                                </Col>
                            </Row>  
                            {cart.cartItems.length > 0
                                ?
                                cart.cartItems.map((item, index) => (
                                    <Row key={index} className='show-grid cart-products'>
                                        <Col lg={8} md={8} className="product">
                                            <div className='img'>
                                                <img src={item.image}/>
                                            </div>
                                            <div className='details'>
                                                <div className='brand'></div>
                                                <h6 className='name'>{item.title}</h6>
                                                <div className='position-relative'>
                                                    <span className='label'>Color</span><span className='color'></span>
                                                </div>
                                                <div>
                                                    <span className='label'>Size</span><span className='size'></span>
                                                </div>
                                            </div>
                                        </Col>
                                        <Col lg={4} md={4} className='position-relative'>
                                            <span className='price'>${item.price}</span>
                                        </Col>
                                        <Col lg={6} md={6} className='position-relative'>
                                            <div className='quantity-box'>
                                                <span className='operator' onClick={()=>handleQuantity(item, item.quantity+1)}>+</span>
                                                <span className='quantity'>{item.quantity}</span>
                                                <span className='operator' onClick={()=>handleQuantity(item, item.quantity > 1 ? item.quantity-1 : item.quantity)}>-</span>
                                            </div>
                                                
                                        </Col>
                                        <Col lg={4} md={4} className='position-relative'>
                                            <span className='price'>${item.price * item.quantity}</span>
                                        </Col>
                                        <Col lg={2} md={2} className='position-relative'>
                                            <ImCross className='remove' onClick={()=>{handleDeleteCartItem(item)}}/>
                                        </Col>
                                    </Row>  
                                ))
                                :
                                <Message showIcon type="error" header="For Your Kind Information">
                                    <b>Cart is Empty</b>
                                </Message>
                            }
                        </div>
                        <Row className='cart-buttons show-grid'>
                            <Col lg={6} md={6} sm={12} xs={12} mdOffset={10}>
                                <Button className='clear' onClick={handleClearCart}>Clear Cart</Button>
                            </Col>
                            <Col lg={6} md={6} sm={12} xs={12} pushRight>
                                <Button className='update'>Update Cart</Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={8} lg={8}>
                       <div className='shipping-box'>
                            <h6>Shipping</h6>
                            <Form fluid>
                                <Form.Group controlId="country">
                                    <SelectPicker />
                                </Form.Group>         
                                <Form.Group controlId="state">
                                    <Form.Control name="state" placeholder="State/City"/>
                                </Form.Group>
                                <Form.Group controlId="zip">
                                    <Form.Control name="zip" placeholder="ZIP"/>
                                </Form.Group>
                                <Form.Group>
                                    <ButtonToolbar>
                                        <Button appearance="primary" className='submit'>Submit</Button>
                                    </ButtonToolbar>
                                </Form.Group>
                            </Form>
                            <Row>
                                <Col md={12} lg={12} xs={12} sm={12} style={{marginBottom: "8px"}}>
                                    <span className='subtotal'>Subtotal</span>
                                </Col>
                                <Col md={12} lg={12} xs={12} sm={12}>
                                    <span className='subtotal'>{subtotal}</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12} lg={12} xs={12} sm={12} style={{marginBottom: "13px"}}>
                                    <span className='shipping'>Shipping</span>
                                </Col>
                                <Col md={12} lg={12} xs={12} sm={12}>
                                    <span className='shipping'>{shipping}</span>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12} lg={12} xs={12} sm={12} style={{marginBottom: "24px"}}>
                                    <span className='total'>Order Total</span>
                                </Col>
                                <Col md={12} lg={12} xs={12} sm={12}>
                                    <span  className='total'>
                                        <b>
                                            {subtotal+shipping}
                                        </b>
                                    </span>
                                </Col>
                            </Row>
                            <Button appearance="primary" className='checkout'>Procesed to Checkout</Button>
                       </div>
                    </Col>
                </Row>
            </Grid>
        </div>
        <Foot/>
    </>
  )
}

export default Cart