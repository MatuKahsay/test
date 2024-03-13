import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Rating from './Rating'; // Ensure this is the correct path to your Rating component
import '../styling/Housing.css';

const Housing = ({ housing }) => {
  if (!housing) {
    return <div>Loading housing details...</div>;
  }

  // Convert the title to lowercase and replace spaces with underscores to match the image filenames
  const imageName = housing.title.toLowerCase().replace(/\s+/g, '_') + '.jpg';
  const imagePath = `/images/${imageName}`; // Ensure your server serves from this folder correctly

  return (
    <Card className='my-3 p-3 rounded housing-card'>
      <Link to={`/housing/${housing._id}`}>
        <Card.Img 
          src={imagePath} 
          variant='top' 
          className="housing-image"
        />
      </Link>
      <Card.Body>
        <Link to={`/housing/${housing._id}`}>
          <Card.Title as='div'><strong>{housing.title}</strong></Card.Title>
        </Link>
        <Card.Text as='div'>
          <Rating value={housing.rating} text={`${housing.numReviews} reviews`} />
        </Card.Text>
        <Card.Text>
          {housing.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Housing;
