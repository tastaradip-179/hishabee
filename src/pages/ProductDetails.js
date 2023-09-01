import React, {useState, useEffect, useContext} from 'react'
import { Grid, Row, Col, Breadcrumb } from 'rsuite'
import {Link, useParams} from 'react-router-dom'
import { FaInstagram } from 'react-icons/fa';
import { AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { RiFacebookFill, RiScales3Line, RiTwitterLine } from 'react-icons/ri';
import {Store} from '../Store'
import '../css/common.css'
import '../css/detail.css'
import Navigationbar from '../components/Navigationbar'
import Foot from '../components/Foot'


const ProductDetails = (props) => {

    const params = useParams();
    const [product, setProduct] = useState("");
    const [relatedCat, setRelatedCat] = useState([]);
    const {cartstate, cartdispatch} = useContext(Store);
    const {cart} = cartstate;


    useEffect(() => {
        fetch(
            `https://fakestoreapi.com/products/${params.id}`
        )
            .then((response) => response.json())
            .then(
                (result) => {
                    setProduct(result);
                },
                (error) => {
                    console.log(error);
                }
            );
      }, [params.id]);


  return (
    <>
        <Navigationbar/>
         <div className='container'>
            <div className="product-detail-header">
                <Breadcrumb className='breadcrumb'>
                    <Link to="/">
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                    </Link>
                    <Breadcrumb.Item href="">Shop</Breadcrumb.Item>
                    <Breadcrumb.Item active>Product</Breadcrumb.Item>
                </Breadcrumb>
            </div>

            <Grid fluid>
                <Row className="show-grid">
                    <Col md={12} lg={12} sm={24} xs={24}>
                        <img src={product.image} width="100%"/>
                    </Col>
                    <Col md={12} lg={12} sm={24} xs={24}>
                        <h1>{product.title}</h1>
                        <div className='price-stock'>
                            <span className='price'>
                                {product.price}
                            </span>
                            <span className='old-price'></span>
                            <span className='stock'></span>
                            <div className='icons'>
                                <AiOutlineHeart/>
                                <RiScales3Line/>
                            </div>
                        </div>
                        <div className='rating-review'>
                            <span className='review'></span>
                        </div>
                        <div className='description'>
                            <p dangerouslySetInnerHTML={{ __html: product.description }}></p>
                        </div>
                        <div className='attribute'>
                            <div className='colors'>
                                <span className='label'>Select Color</span>
   
                            </div>
                            <div className='sizes'>
                                <span className='label'>Choose Size</span>
                            </div>
                        </div>
                        <div className='cart-price'>
                            <span className='cart'><AiOutlineShoppingCart /></span>
                            {cart.cartItems.map((item, index) => (
                                item._id == params.id
                                    ?
                                    item.name
                                    :
                                    ""
                            )
                            )}
                        </div>
                        <div className='info'>
                            <div className='category'>
                                <span className='label'>Category</span>
                                <span className='name'>{product.category}</span>
                            </div>
                            <div className='brand'>
                                <span className='label'>Brand</span>
                                <span className='name'>{product.brand}</span>
                            </div>
                            <div className='code'>
                                <span className='label'>Code</span>
                                <span className='name'>{product._id}</span>
                            </div>
                        </div>
                        <div className='social-icons'>
                            <RiFacebookFill/>
                            <FaInstagram/>
                            <RiTwitterLine/>
                        </div>
                    </Col>
                </Row>
            </Grid>

        </div>
        <Foot/>
    </>
  )
}

export default ProductDetails