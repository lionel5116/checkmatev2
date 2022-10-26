import React, { useState } from 'react'
import { connect } from 'react-redux';
import { setLoginData } from '../../actions/login';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import setAuthToken from '../utils/setAuthToken';
import axios from "axios";

const Login = ({ setLoginData }) => {
  const [userName, setUserName] = useState('');
  const [_password, setPassword] = useState('');

  const login = async (e) => {

    e.preventDefault();
    let endpoint = process.env.REACT_APP_SERVICE_URL + '/auth'
    
 
   const config = {
    headers: {
        'Content-Type':'application/json'
    }};
   

    const body = {
        email: userName,
        password: _password
    };

    
    try {
        const res = await axios.post(endpoint,body,config);
        window.alert("User Successfully Logged in!!!");
      
        console.log(res.data);

        loadUser();

    } catch (err) {
        console.log(err.message)
        window.alert("Login Failed.." + err.message)
    }
    
}

const loadUser = async () => {
  if (localStorage.getItem('token') !== null) {
      setAuthToken(localStorage.token)
  } else {
      console.log(`Token does not exist`);
  }
}

  return (
    <div className="container">

      <br />
      <h1>
        CheckMate Login Screen
      </h1>
      <br />
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Enter your Login Credentials</Card.Title>
          <Form
            onSubmit={(e) => {
             
              e.preventDefault();
              login(e);
              setLoginData(userName, _password);
              setUserName('');
              setPassword('');
            }}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="input"
                placeholder="Enter email"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={_password}
                onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Sign In
            </Button>
          </Form>
          <p>
             Dont' have an account
           <Link to='/Register' className="btn btn-light">
            Sign Up
          </Link>
        </p>

        </Card.Body>
      </Card>

    </div>
  );
}

const mapStateToProps = state => ({

})


export default connect(mapStateToProps, { setLoginData })(Login)