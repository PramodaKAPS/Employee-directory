import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faYoutube, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import  '../App.css';



const Footer = () => {
    return (
      <div className="content-container">
      <footer style={{ 
        backgroundColor: '#004085',
        marginTop: '10%' , 
        position: 'fixed', 
        
        bottom: 0, 
        width: '100%', 
        zIndex: 1030 // Use a high z-index to ensure the footer stays on top of other content
      }}>
        <Container>
        <Container className="p-4 d-flex justify-content-center align-items-center flex-wrap">
        <a href="https://www.facebook.com/LKdomain/" className="social-icon">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="https://www.youtube.com/channel/UCfhaqrwhwneNyXuuB_BXqng" className="social-icon">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a href="https://www.linkedin.com/company/lk-domain-registry/" className="social-icon">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://www.instagram.com/lkdomainregistry/" className="social-icon">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://twitter.com/i/flow/login?redirect_after_login=%2FLK_Domain" className="social-icon">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        
      </Container>
          <Row>
            <Col className="text-center">
            Copyright © 2024<a href="https://www.domains.lk/">LK Domain Registry.</a> All Rights Reserved. 
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
            Privacy Policy
            </Col>
          </Row>
        </Container>
      </footer>
      </div>
    );
  };
  
  export default Footer;