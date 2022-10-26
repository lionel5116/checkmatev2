import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Navbar } from 'react-bootstrap';
import {  NavDropdown } from 'react-bootstrap';
import {  withRouter } from 'react-router-dom';


class NavbarMain extends React.Component {
  constructor(props) {
    super(props);

  };

  navigateToSubscribe(e) {
    e.preventDefault();
    this.props.history.push("/CheckOutForm");
  }
  render() {


    return (
      <div id="MasterContainer">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#/Login">Check Mate</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#/Login">Home</Nav.Link>

              <NavDropdown title="Medical Office Locations" id="basic-nav-dropdown">
                <NavDropdown.Item href="#/Pharma">Add Pharmaceutical Records</NavDropdown.Item>
                <NavDropdown.Item href="#/SearchPharma">Search Pharmaceutical Records</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#/MedicalGroup">Add Medical Group Records</NavDropdown.Item>
                <NavDropdown.Item href="#/SearchMedicalGroup">Search Medical Group Records</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Physicians Records" id="basic-nav-dropdown">
                <NavDropdown.Item href="#/Physicians">Add Physicians Records</NavDropdown.Item>
                <NavDropdown.Item href="#/SearchPhysicians">Search Physicians Records</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Managers Reps Reciepts" id="basic-nav-dropdown">
                <NavDropdown.Item href="#/Manager">Add Manager Records</NavDropdown.Item>
                <NavDropdown.Item href="#/SearchManager">Search Manager Records</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#/Rep">Add Rep Records</NavDropdown.Item>
                <NavDropdown.Item href="#/SearchRep">Search Rep Records</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#/Receipt">Add Receipts </NavDropdown.Item>
                <NavDropdown.Item href="#/SearchReceipt">Search Receipts </NavDropdown.Item>
              </NavDropdown>

              {/*
              <NavDropdown title="Client Records" id="basic-nav-dropdown">
                <NavDropdown.Item href="#/Search">Search</NavDropdown.Item>
                <NavDropdown.Item href="#/Client">Add</NavDropdown.Item>
              </NavDropdown>
             */}

              <NavDropdown title="Reports" id="basic-nav-dropdown">
                <NavDropdown.Item href="#/"></NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#">Administration</Nav.Link>
              <Nav.Link href="#/test">REDUX AUTH TEST</Nav.Link>


            </Nav>

          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}
export default withRouter(NavbarMain);