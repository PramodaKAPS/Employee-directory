import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css'; // Assuming you have global styles you want to include
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TermsAndCon = () => {
  return (
    <div className='homepage-background'>
         <Navigation/>
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={8}>
          <h2>Terms And Conditions</h2>
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

export default TermsAndCon;