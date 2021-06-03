const script = document.createElement('script');

script.src = 'https://maps.googleapis.com/maps/api/js?key=' + process.env.GOOGLE_MAPS_API_KEY;

document.body.appendChild(script);