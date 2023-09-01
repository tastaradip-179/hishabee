import React, {useState, useEffect, useContext} from 'react'
import Navigationbar from '../components/Navigationbar'
import Foot from '../components/Foot'
import {  Grid, Row, Col, Dropdown, Alert, Form, Button } from 'rsuite'
import '../css/shop.css'
import {Link, useParams} from 'react-router-dom'
import {Store} from '../Store'

const Shop = () => {

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [filterCat, setFilterCat] = useState("");

  const params = useParams();

  const {cartstate, cartdispatch} = useContext(Store);
  const {cart} = cartstate;

  let handleCartProductAdd = (product) => {

    const existingItem = cart.cartItems.find((item) => item.id===product.id);
    const quantity = existingItem ? existingItem.quantity+1 : 1;
    cartdispatch({type: 'CART_ADD_PRODUCT', payload: {...product, quantity}});
} 

  useEffect(() => {
    let filteredProducts = [];
    let i=0;
    fetch(
        "https://fakestoreapi.com/products"
    )
        .then((response) => response.json())
        .then(
            (result) => {
                setIsLoaded(true);
                if(filterCat==""){
                    setProducts(result);
                }
                else{
                    result.filter((res) => {
                        if (res.category == filterCat) {
                            filteredProducts[i++] = res;
                        }});
                        setProducts(filteredProducts);  
                }
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        );  
  }, [filterCat]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
        .then(res=>res.json())
        .then(json=>setCategories(json))    
  }, []);



  return (
    <>
        <Navigationbar/>
        <div className='container'>
          <Grid fluid>
          <Row className="show-grid">
            <img src="https://www.estebanrodrigo.com/wp-content/uploads/2014/07/e-commerce-banner.jpg" style={{marginBottom: '30px'}} />
          </Row>
          <Row style={{marginBottom: "100px"}}>
              <Col xs={24} md={6}>
                  <Form>
                      <Form.Group className="mt-3 mb-3" controlId="exampleForm.ControlInput">
                        <Form.ControlLabel>Categories</Form.ControlLabel>
                        <ul>
                          {categories.map((category, index)=>(  
                                    <li key={index}>
                                        <button type='button' value={category} onClick={(e)=>setFilterCat(e.target.value)} >
                                            {category}
                                        </button>
                                    </li>
                          ))}
                          </ul>
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.ControlLabel>Brands</Form.ControlLabel>
                            <Dropdown title="Default">
                                <Dropdown.Item>New File</Dropdown.Item>
                                <Dropdown.Item>New File with Current Profile</Dropdown.Item>
                                <Dropdown.Item>Download As...</Dropdown.Item>
                                <Dropdown.Item>Export PDF</Dropdown.Item>
                                <Dropdown.Item>Export HTML</Dropdown.Item>
                                <Dropdown.Item>Settings</Dropdown.Item>
                                <Dropdown.Item>About</Dropdown.Item>
                            </Dropdown>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                        <Form.ControlLabel>Sellers</Form.ControlLabel>
                        <Dropdown title="Default">
                                <Dropdown.Item>New File</Dropdown.Item>
                                <Dropdown.Item>New File with Current Profile</Dropdown.Item>
                                <Dropdown.Item>Download As...</Dropdown.Item>
                                <Dropdown.Item>Export PDF</Dropdown.Item>
                                <Dropdown.Item>Export HTML</Dropdown.Item>
                                <Dropdown.Item>Settings</Dropdown.Item>
                                <Dropdown.Item>About</Dropdown.Item>
                            </Dropdown>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                            <Form.ControlLabel>Warranty Period</Form.ControlLabel>
                            <Dropdown title="Default">
                                <Dropdown.Item>New File</Dropdown.Item>
                                <Dropdown.Item>New File with Current Profile</Dropdown.Item>
                                <Dropdown.Item>Download As...</Dropdown.Item>
                                <Dropdown.Item>Export PDF</Dropdown.Item>
                                <Dropdown.Item>Export HTML</Dropdown.Item>
                                <Dropdown.Item>Settings</Dropdown.Item>
                                <Dropdown.Item>About</Dropdown.Item>
                            </Dropdown>
                        </Form.Group>
                  </Form>
              </Col>

              <Col xs={24} md={18}>
                    <Row>
                    <Col xs={24} md={24}>
                      <Form>
                        <Form.Control style={{marginBottom: '30px', marginTop: '20px', width: '100%'}} 
                          type="search"
                          name="search"
                          id="search"
                          className="form-control"
                          placeholder="Search product by title" />
                      </Form>
                      </Col>
                    </Row>
                    <Row>
                    {products && products.map((product, index) => (
                      <Col xs={12} md={6} key={index}>
                              <div className="card-flyer">
                                  <div className="card-box">
                                      <Link to={`${"product/"+product.id}`}>
                                        <div className="image-box">
                                          <img src={product.image} alt="img" />
                                        </div>
                                      </Link>
                                      <div className="text-container"> 
                                          <Link to={`${"product/"+product.id}`}>                                   
                                            <h6>{`${product.title.substring(0,12)}`}</h6>
                                          </Link>
                                          <p>{product.price} BDT</p>
                                          <div className="buttons">                                    
                                              <Button>Buy Now</Button>
                                              <Button onClick={()=>handleCartProductAdd(product)}>Add to Cart</Button>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                      </Col>
                      ))}
                    </Row>
              </Col>
          </Row>
          </Grid>
        </div>
        <Foot/>
    </>
  )
}

export default Shop