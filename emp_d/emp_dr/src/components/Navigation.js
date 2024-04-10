import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import  '../App.css';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../components/UserContext'; 



//import NavDropdown from 'react-bootstrap/NavDropdown';

const Navigation = () => {

     const navigate = useNavigate();
  //  const { logout } = useUser(); // Destructure logout from context

    const handleLogout = () => {
  //    logout(); // Clear the user session
    navigate('/'); // Redirect to the login page or whichever route you have for it
   };

 



  return (
    <Navbar style={{ backgroundColor: '#004085' }}data-bs-theme="dark" expand="lg" >
      <Container>
        <Navbar.Brand href="Home">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/DotLK_domain_logo.png/220px-DotLK_domain_logo.png"width={100} height={50}  alt="Company Logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <LinkContainer to="/home">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/employeesWadd">
              <Nav.Link>Employees</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/AddEmployeeForm">
              <Nav.Link>Add Employee</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link>About us</Nav.Link>
            </LinkContainer>
            
           
            
        </Nav>
        <div>
      
        <Button className="my-Logout-button" onClick={handleLogout} >Logout</Button>

      {/* <Button className="my-Login-button">Sign Up</Button> */}

    </div>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}

export default Navigation;