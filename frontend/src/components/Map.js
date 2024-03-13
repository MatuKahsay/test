import React from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import HousingInfoBox from './HousingInfoBox'; // Make sure this path is correct

const mapContainerStyle = {
  width: '100%',
  height: '100%',
};

const defaultCenter = { lat: 33.9737, lng: -117.3281 };

const Map = ({ selectedHousing, onHousingDeselected }) => {
  // Determine the center of the map
  const center = selectedHousing
    ? { lat: selectedHousing.location.coordinates[0], lng: selectedHousing.location.coordinates[1] }
    : defaultCenter;

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={15}>
        {selectedHousing && (
          <Marker
            position={center}
            // Optionally add a distinct icon or animation for the selected marker
          />
        )}
        {selectedHousing && (
          <InfoWindow
            position={center}
            onCloseClick={onHousingDeselected} // Call the passed callback when InfoWindow is closed
          >
            <HousingInfoBox housing={selectedHousing} />
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
