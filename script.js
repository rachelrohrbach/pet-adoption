$(document).ready(function() {
  $("#submit").on("click", function() {
    // event.preventDefault();

    var queryURL1 =
      "https://api.rescuegroups.org/v5/public/animals/search/available/haspic?include=locations,orgs";

    $.ajax({
      url: queryURL1,
      method: "POST",
      contentType: "application/json",
      headers: {
        Authorization: "kCM2atMx"
      },
      data: JSON.stringify({
        data: {
          filters: [
            {
              fieldName: "statuses.name",
              operation: "equals",
              criteria: "Available"
            },
            {
              fieldName: "species.singular",
              operation: "equals",
              criteria: $("#species option:selected").val()
            }
          ],
          filterRadius: {
            miles: $("#distance option:selected").val(),
            postalcode: $("#zipCode")
              .val()
              .trim()
          }
        }
      })
    }).then(function(result) {
      console.log(result);

      var queryURL2 = "https://api.rescuegroups.org/v5/public/orgs/search/";

      $.ajax({
        url: queryURL2,
        method: "POST",
        contentType: "application/json",
        headers: {
          Authorization: "kCM2atMx"
        },
        data: JSON.stringify({
          data: {
            filters: [],
            filterProcessing: "1",
            filterRadius: {
              miles: $("#distance option:selected").val(),
              postalcode: $("#zipCode")
                .val()
                .trim()
            }
          }
        })
      }).then(function(response) {
        var orgs = {};
        for (var i = 0; i < response.data.length; i++) {
          orgs[response.data[i].id] = {
            name: response.data[i].attributes.name,
            url: response.data[i].attributes.url
          };
        }

        $("#pet-results")
          .html('<h4 class="has-text-centered is-size-3">Search Results</h4>')
          .append('<div class="row">');

        for (var i = 0; i < result.data.length - 10; i++) {
          var col = $("<div>")
            .addClass("column is-4")
            .attr("id", "petCard");
          var title = $("<h3>")
            .addClass("card-title has-text-weight-bold is-size-5")
            .text(result.data[i].attributes.name);
          var card = $("<div>").addClass("card has-background-light");
          var breed = $("<p>")
            .addClass("card-text")
            .text("Breed: " + result.data[i].attributes.breedString);
          var sex = $("<p>")
            .addClass("card-text")
            .text("Sex: " + result.data[i].attributes.sex);
          var distance = $("<p>")
            .addClass("card-text")
            .text("Distance: " + result.data[i].attributes.distance + " miles");
          var orgName = $("<p>")
            .addClass("card-text")
            .text(
              "Organization: " +
                orgs[result.data[i].relationships.orgs.data[0].id].name
            );
          var orgUrl = $("<a>")
            .addClass("card-text")
            .text(orgs[result.data[i].relationships.orgs.data[0].id].url)
            .attr(
              "href",
              orgs[result.data[i].relationships.orgs.data[0].id].url
            );
          var body = $("<div>").addClass("card-body");
          var img = $("<img>")
            .attr("src", result.data[i].attributes.pictureThumbnailUrl)
            .addClass("image is-128x128");

          col.append(
            card.append(
              body.append(title, img, breed, sex, distance, orgName, orgUrl)
            )
          );
          $("#pet-results .row").append(col);
        }
      });
    });
  });
});
