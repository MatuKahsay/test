import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Housing from '../components/Housing';
import { useDispatch, useSelector } from 'react-redux';
import { listHousings } from '../actions/housingActions';
import Message from '../components/Message';
import Loader from '../components/Loader';
import '../styling/HomeScreen.css';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const housingList = useSelector((state) => state.housingList);
  const { loading, error, housings } = housingList;

  useEffect(() => {
    dispatch(listHousings());
  }, [dispatch]);

  return (
    <>
      <h1 className="homescreen-header text-center my-4">UCR Housing</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {housings.map((housing) => (
            <Col key={housing._id} sm={12} md={6} lg={4} xl={3}>
              <Housing housing={housing} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
