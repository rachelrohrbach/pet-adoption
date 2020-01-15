// var apiKeyParam = "?api_key=6ZTWbGGriAbN8ZmdPA0bno7aHIuVlDSXjVHMh19Q";

// var queryURL = "https://api.petfinder.com/v2/types" + apiKeyParam;

// $.ajax({
//   url: queryURL,
//   method: "GET"
// }).then(function(result) {
//   console.log(result);
// });

var apiKey = "?apikey=kCM2atMx";

var queryURL1 =
// "https://api.rescuegroups.org/v5/public/animals/search?include=pictures,species&fields%5Banimals%5D=name,sex,breedPrimary,descriptionText,id,sizeGroup&fields%5Bpictures%5D=large&fields%5Bspecies%5D=singular&postalcode=98104";
"https://api.rescuegroups.org/v5/public/animals/search/available/cats/haspic?include=breeds,colors,fosters,locations,orgs,patterns,pictures,species,videos,videourls"

$.ajax({
  url: queryURL1,
  method: "POST",
  // contentType: "application/vnd.api+json",
  contentType: "application/json",
  headers: {
    Authorization: "kCM2atMx"
  },
  data: {
    filters: [],
    filterRadius: {
      miles: 5,
      coordinates: "47.703624, -122.354674"
  }
  }
  // data: {
  //     filters: 
  //     [
  //     ],
  //       filterRadius: {
  //         "miles": 20, 
  //         "postalcode": "98104" }
  //   }
  
  //  "data": {
  //       "filters": [
  //           {
  //               "fieldName": "statuses.name",
  //               "operation": "equals",
  //               "criteria": "Available"
  //           },
  //           {
  //               "fieldName": "species.singular",
  //               "operation": "equals",
  //               "criteria": ["Cat", "Dog"]
  //           }
  //       ],
  //       "filterRadius": {
  //           "miles": 50,
  //           "postalcode": "98104"
  //       }
  //   }
    

  // data: {
  //   "filters": [
  //       {
  //             "fieldName": "species.name",
  //             "operation": "equals",
  //             "criteria": "Dog"
  //         } 
  //     ]
  // }
}).then(function(result) {
  console.log(result);
});

var queryURL2 =
  "https://api.rescuegroups.org/v5/public/orgs/5185";

$.ajax({
  url: queryURL2,
  method: "Get",
  contentType: "application/vnd.api+json",
  headers: {
    Authorization: "kCM2atMx"
  },
}).then(function(result) {
  console.log(result);
});
