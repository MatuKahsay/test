import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import fetchAddress from '../utils/useGeolocation';
import { redirectToGoogleMapsDirections } from '../utils/DirectionsUtils';
import Rating from './Rating'; // Ensure this component exists and is correctly imported

const HousingInfoBox = ({ housing }) => {
  const [address, setAddress] = useState('Loading address...');

  useEffect(() => {
    if (housing && housing.location && housing.location.coordinates) {
      fetchAddress(housing.location.coordinates[0], housing.location.coordinates[1], setAddress);
    }
  }, [housing]);

  const handleDirectionsClick = () => {
    if (housing.location && housing.location.coordinates) {
      redirectToGoogleMapsDirections(housing.location.coordinates[0], housing.location.coordinates[1]);
    }
  };

  // Helper function to render the list of reviews
  const renderRecentReviews = (reviews) => {
    // Get the five most recent reviews
    const recentReviews = reviews.slice(0, 5);
    return recentReviews.map((review, index) => (
      <li key={index}>
        <div className="review">
          <strong>{review.name}</strong>: {review.comment}
          <div>
            <Rating value={review.rating} />
          </div>
        </div>
      </li>
    ));
  };

  return (
    <div className="housing-info-box">
      <h2>{housing.title}</h2>
      <Rating value={housing.rating} text={`${housing.numReviews} reviews`} />
      <p>{housing.description}</p>
      <p>Address: {address}</p>
      {housing.reviews && housing.reviews.length > 0 && (
        <div>
          <h3>Recent Reviews:</h3>
          <ul>
            {renderRecentReviews(housing.reviews)}
          </ul>
        </div>
      )}
      <div className="info-box-buttons">
        <button onClick={handleDirectionsClick} className="info-box-button">Directions</button>
        <Link to={`/housing/${housing._id}`} className="info-box-button">Write a Review</Link>
      </div>
    </div>
  );
};

export default HousingInfoBox;
