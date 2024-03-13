import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/MapScreen.css';
import Rating from './Rating'; // Import Rating if you need to show ratings

const MapSideBar = ({ housing, onSelectHousing }) => {
  // Assuming the title is correctly formatted
  const imageName = housing.title.toLowerCase().replace(/\s+/g, '_') + '.jpg';
  const imagePath = `/images/${imageName}`;

  return (
    <div className="sidebar-housing" onClick={() => onSelectHousing(housing)}>
      <img src={imagePath} alt={housing.title} className="sidebar-housing-img" />
      <div className="sidebar-housing-info">
        <h5>{housing.title}</h5>
        <Rating value={housing.rating} />
      </div>
    </div>
  );
};

export default MapSideBar;
