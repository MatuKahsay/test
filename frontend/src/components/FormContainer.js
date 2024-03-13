import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const FormContainer = ({ children, size = 6 }) => { // Default size is 6 if not provided
  return (
    <Container>
      <Row className='justify-content-md-center'>
        <Col xs={12} md={size}> {/* Now you can control the size via props */}
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default FormContainer;
