// Utility function to fetch address based on latitude and longitude
const fetchAddress = async (lat, lng, setFunction) => {
    const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`;
    try {
        const response = await fetch(geocodeUrl);
        const data = await response.json();
        if (data.status === 'OK') {
            setFunction(data.results[0].formatted_address);
        } else {
            console.error('Geocoding failed due to: ' + data.status);
        }
    } catch (error) {
        console.error('Geocoding error: ', error);
    }
};

export default fetchAddress;
