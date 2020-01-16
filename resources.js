var apiKeyParam = "AIzaSyAZ4k61bFrYsE0QspDSD33TmODyZakds0U";
var queryURL = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=mongolian%20grill&inputtype=textquery&fields=photos,formatted_address,name,opening_hours,rating&locationbias=circle:2000@47.6918452,-122.2226413&key=" + apiKeyParam;

$.ajax({
    url: queryURL,
    method: "GET",
}).then(function(response) {
    console.log(response);
})