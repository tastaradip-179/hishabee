import React, {useState} from 'react'
import { Form, Button, ButtonToolbar } from 'rsuite'
import '../css/common.css'
import '../css/registration.css'
import {Link} from 'react-router-dom'
import Navigationbar from '../components/Navigationbar'
import Foot from '../components/Foot'

const Registration = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
  
    let handleSubmit = () => {
    } 
     
    return (
    <>
        <Navigationbar/>
        <div className='container'>
            <div className='reg-box'>
                <Form>
                    <Form.Group controlId="name">
                        <Form.ControlLabel>Username</Form.ControlLabel>
                        <Form.Control name="name" onChange={(e)=>setName(e)}/>
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.ControlLabel>Email</Form.ControlLabel>
                        <Form.Control name="email" type="email" onChange={(e)=>setEmail(e)}/>
                    </Form.Group>
                    <Form.Group controlId="password">
                        <Form.ControlLabel>Password</Form.ControlLabel>
                        <Form.Control name="password" type="password" autoComplete="off" onChange={(e)=>setPassword(e)}/>
                    </Form.Group>
                    <Form.Group>
                        <ButtonToolbar>
                            <Button appearance="primary" onClick={handleSubmit}>Submit</Button>
                        </ButtonToolbar>
                        <Form.HelpText>Already have an account? <Link to="/signin">Signin</Link></Form.HelpText>
                    </Form.Group>
                </Form>
            </div>
        </div>
        <Foot/>
    </>
    )
}

export default Registration