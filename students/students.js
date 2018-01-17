function init() {
  // Initialise the map.
  var map = new google.maps.Map(document.getElementById('map-holder'), {
    center: {lat: 0, lng: 0},
    zoom: 3,
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
    mapTypeId: 'satellite'
  });
}

google.maps.event.addDomListener(window, 'load', init);