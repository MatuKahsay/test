import React, { useEffect, useState } from 'react';
import Map from '../components/Map';
import MapSideBar from '../components/MapSideBar';
import { useDispatch, useSelector } from 'react-redux';
import { listHousings } from '../actions/housingActions';
import '../styling/MapScreen.css';

const MapScreen = () => {
  const dispatch = useDispatch();
  const { loading, error, housings } = useSelector((state) => state.housingList);
  const [selectedHousing, setSelectedHousing] = useState(null);

  useEffect(() => {
    dispatch(listHousings());
  }, [dispatch]);

  const handleSelectHousing = (housing) => {
    setSelectedHousing(housing);
  };

  const handleHousingDeselected = () => {
    setSelectedHousing(null);
  };

  return (
    <div className="map-screen-container">
      <div className="sidebar">
        <input type="text" placeholder="Search..." className="search-bar"/>
        {!loading && !error && housings && housings.map((housing) => (
          <MapSideBar key={housing._id} housing={housing} onSelectHousing={handleSelectHousing} />
        ))}
      </div>
      {/* Pass the handleHousingDeselected function to the Map component */}
      {housings && <Map housings={housings} selectedHousing={selectedHousing} onHousingDeselected={handleHousingDeselected} />}
    </div>
  );
};

export default MapScreen;
