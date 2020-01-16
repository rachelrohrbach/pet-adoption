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
  "https://api.rescuegroups.org/v5/public/animals/search/available/dogs/haspic?include=breeds,colors,fosters,locations,orgs,patterns,pictures,species,videos,videourls";

$.ajax({
  url: queryURL1,
  method: "POST",
  // contentType: "application/vnd.api+json",
  contentType: "application/json",
  headers: {
    Authorization: "kCM2atMx"
  },
  data: {
    filters: [
      // {
      //   fieldName: "statuses.name",
      //   operation: "equals",
      //   criteria: "Available"
      // }
      //     // }
      // {
      //   fieldName: "species.singular",
      //   operation: "equals",
      //   criteria: "Cat"
      // },
      // {
      //   fieldName: "species.singular",
      //   operation: "equals",
      //   criteria: "Dog"
      // }
    ],
    // filterProcessing: "1 AND (2 OR 3)",
    filterRadius: {
      miles: 20,
      postalcode: "98104"
    }
  }

  // filterRadius: {
  //     miles: 10,
  //     postalcode: "98104"
  // }
  // }
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

  $("#pet-results")
    .html('<h4 class="mt-3">Search Results</h4>')
    .append('<div class="row">');

  for (var i = 0; i < result.data.length - 10; i++) {
    var col = $('<div>').addClass('column is-multiline').attr('id', 'petCard');
    var title = $("<h4>")
      .addClass("card-title")
      .text(result.data[i].attributes.name);
    var card = $("<div>").addClass("card");
    var breed = $("<p>")
      .addClass("card-text")
      .text("Breed: " + result.data[i].attributes.breedPrimary);
    var sex = $("<p>")
      .addClass("card-text")
      .text("Sex: " + result.data[i].attributes.sex);
    var body = $("<div>").addClass("card-body");
    var img = $("<img>").attr(
      "src",
      result.data[i].attributes.pictureThumbnailUrl
    );

    col.append(card.append(body.append(title, img, breed, sex)));
    $("#pet-results .row").append(col);
  }
});

// var queryURL2 = "https://api.rescuegroups.org/v5/public/orgs/5951";

// $.ajax({
//   url: queryURL2,
//   method: "Get",
//   contentType: "application/vnd.api+json",
//   headers: {
//     Authorization: "kCM2atMx"
//   }
// }).then(function(result) {
//   console.log(result);
// });
