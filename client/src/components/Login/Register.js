import React, { useState } from 'react'
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
import setAuthToken from '../utils/setAuthToken';
import axios from "axios";

const Register = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [_password, setPassword] = useState('');

    const registerUser = async (e) => {
        e.preventDefault();

        let endpoint = process.env.REACT_APP_SERVICE_URL + '/users'
        console.log(endpoint)

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        const body = {
            name: userName,
            email: email,
            password: _password
        };

        console.log(body)


        try {
            const res = await axios.post(endpoint, body, config);
            if (res.status === 200) {
               

                window.alert("User Registered");
                clearScreen();


                loadUser();
            }

        } catch (err) {
          
            window.alert("Register  Failed or user may already exist with that email address.." + err.message)

        }

    }

const loadUser = async () => {
    if (localStorage.getItem('token') !== null) {
        setAuthToken(localStorage.token)
    } else {
        console.log(`Token does not exist`);
        //this.$store.commit('setIsValidFalse');
    }
}


const clearScreen = ()  =>{
    setUserName('');
    setPassword('');
    setEmail('');
}


  return (
    <div className="container">

      <br />
      <h1>
       
      </h1>
      <br />
      <Card className="d-flex justify-content-center" style={{ width: '300px', position:'absolute',left:'40%'}} >
        <Card.Body>
          <Card.Title>Enter Credentials</Card.Title>
          <Form
            onSubmit={(e) => {
                registerUser(e)
              e.preventDefault();
              //setLoginData(userName, _password);
              //setUserName('');
              //setPassword('');
              //setEmail('');
            }}
          >

          <Form.Group className="mb-3" controlId="formBasicUserName">
              <Form.Label>User Name</Form.Label>
              <Form.Control type="input"
                placeholder="Enter User Name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="input"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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

            <Button variant="primary" type="submit" style={myStyles.buttonCustomStyle}>
              Sign Up
            </Button>
          </Form>
          <p>
             Already have an account ?
           <Link to='/Login' className="btn btn-light">
            Sign In
          </Link>
        </p>

        </Card.Body>
      </Card>

    </div>
  );
}

const myStyles = {
  buttonPadLeft: {
      marginLeft: '2px'
  },
  smallerTextFields: {
      width: '300px',
  },
  buttonCustomStyle: {
    width:'100%'
  }

};
const mapStateToProps = state => ({

})


export default connect(mapStateToProps)(Register)