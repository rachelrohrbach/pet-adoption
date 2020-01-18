$(document).ready(function() {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
  
    });
  });
var zipCode = document.getElementById("zipCode");


var map;
function initMap() {
  var options = {
    center: { lat: 47.66, lng: -122.3426 },
    zoom: 10
  };

  map = new google.maps.Map(document.getElementById("map"),options);


var input = document.getElementById("search");
var searchBox = new google.maps.places.SearchBox(input);

map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
});

var markers = []; 

searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length === 0)
        return;

    markers.forEach(function (m) {m.setMap(null); });
    markers = [];

    var bounds = new google.maps.LatLngBounds();

    places.forEach(function (p) {
        if (p.geometry)
        return;
    
    markers.push(new google.maps.markers({
        map: map,
        title: p.name,
        position: p.geometry.location
    }))

    if (p.geometry.viewport)
        bounds.union(p.geometry.viewport);
    else
        bounds.extend(p.geometry.location);
    });
    map.fitBounds(bounds);
});
}
