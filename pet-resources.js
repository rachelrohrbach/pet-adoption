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

    map = new google.maps.Map(document.getElementById("map"), options);
    var infoWindow = new google.maps.InfoWindow;


    var input = document.getElementById("search");
    var searchBox = new google.maps.places.SearchBox(input);

    map.addListener('bounds_changed', function () {
        searchBox.setBounds(map.getBounds());
    });

    var markers = [];

    // var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
    // var icons = {
    //     parking: {
    //         icon: iconBase + 'parking_lot_maps.png'
    //     },
    //     library: {
    //         icon: iconBase + 'library_maps.png'
    //     },
    //     info: {
    //         icon: iconBase + 'info-i_maps.png'
    //     },
    //     pet_store: {
    //         icon: iconBase 

    //     },
    //     veterinary_care: {
    //         icon: iconBase
    //     }
    //     };

    // function addMarker(feature) {
    //     var marker = new google.maps.Marker({
    //         position: feature.position,
    //         icon: icons[feature.type].icon,
    //         map: map
    // });
    // }

    searchBox.addListener('places_changed', function () {
        var places = searchBox.getPlaces();

        if (places.length === 0)
            return;

        markers.forEach(function (m) { m.setMap(null); });
        markers = [];

        var bounds = new google.maps.LatLngBounds();

        places.forEach(function (p) {
            if (!p.geometry)
                return;

            markers.push(new google.maps.Marker({
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




// var userLatitude;
// var userLongitude;

// // Getting users location 






// var locationButton = document.getElementById("useLocation")

// locationButton.onclick = getLocation
// var x = document.getElementById("demo");

// function getLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(showPosition);
//   } else { 
//     x.innerHTML = "Geolocation is not supported by this browser.";
//   }
// }


// function showPosition(position) {
//   x.innerHTML = "Latitude: " + position.coords.latitude + 
//   "<br>Longitude: " + position.coords.longitude;


//     var userLatitude = position.coords.latitude;
//     var userLongitude = position.coords.longitude;


// }
// console.log(userLatitude)

document.getElementById("useLocation").onclick = function () {

    // var geoSuccess = function(position) {
    //     var userLat = position.coords.latitude;
    //     var userLng = position.coords.longitude;

    //     return [userLat, userLng];
    // }();

    // console.log(geoSuccess);
    // console.log(geoSuccess[0]);
    // console.log(geoSuccess[1]);
    // navigator.geolocation.getCurrentPosition(geoSuccess);

    var jaredLong;
    var jaredLat;

    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    function success(pos) {
        var crd = pos.coords;

        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        jaredLat = crd.latitude;
        console.log(`Longitude: ${crd.longitude}`);
        jaredLong = crd.longitude;
        console.log(`More or less ${crd.accuracy} meters.`);

        console.log([jaredLong, jaredLat]);
        console.log(pos);

        var lat = parseFloat(jaredLat);
        var lng = parseFloat(jaredLong);

        map = new google.maps.Map(document.getElementById('map'), {
            center: {
                lat: lat,
                lng: lng
            },
            zoom: 15,
            mapTypeId: 'roadmap'
        });
    }

    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
    // infoWindow.setPosition(pos);
    // infoWindow.setContent('Location found.');
    // infoWindow.open(map);
    
};







