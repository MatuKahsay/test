import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import '../styling/Rating.css'; // Assuming you have a separate CSS file for Rating

const Rating = ({ value, text, color = '#f8e825' }) => { // #f8e825 is a golden color
  return (
    <div className='rating'>
      {[...Array(5)].map((_, index) => (
        <span key={index} className="star">
          <FontAwesomeIcon
            icon={
              value >= index + 1
                ? faStar // Full star
                : value >= index + 0.5
                ? faStarHalfAlt // Half star
                : farStar // Empty star
            }
          />
        </span>
      ))}
      {text && <span className="rating-text">{text}</span>}
    </div>
  );
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Rating;
