import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-light text-muted">
      <Container>
        <Row>
          <Col className='text-center py-3'>
            © {new Date().getFullYear()} R'Insight | All rights reserved
          </Col>
        </Row>
        <Row>
          <Col className='text-center'>
            Designed by 
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
