// DirectionsUtils.js

/**
 * Redirects the user to Google Maps with directions from their current location
 * to the specified destination.
 * 
 * @param {number} destLat Latitude of the destination
 * @param {number} destLng Longitude of the destination
 */
export const redirectToGoogleMapsDirections = (destLat, destLng) => {
    // Constructing the URL for Google Maps directions
    const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destLat},${destLng}&travelmode=driving`;
  
    // Redirecting the user in a new tab
    window.open(directionsUrl, '_blank');
  };
  