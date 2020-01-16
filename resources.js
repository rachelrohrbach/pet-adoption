var apiKeyParam = "";
var queryURL = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=Museum%20of%20Contemporary%20Art%20Australia&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=" + apiKeyParam;

$.ajax({
    url: queryURL,
    method: "GET",
    headers: {
    "Access-Control-Allow-Origin": "*"
    }
}).then(function(response) {
    console.log(response);
})