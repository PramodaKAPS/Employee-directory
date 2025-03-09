import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css'; 
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AboutUs = () => {
  return (
    <div className='homepage-background'>
         <Navigation/>
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={8}>
          <h2>About Us</h2>
          <p>
            
          </p>
          
        </Col>
      </Row>
    </Container>

    <div>
    <Footer/> 
    </div>
    </div>
  );
};

export default AboutUs;
