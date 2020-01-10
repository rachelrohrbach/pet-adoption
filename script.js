var apiKeyParam = '?api_key=6ZTWbGGriAbN8ZmdPA0bno7aHIuVlDSXjVHMh19Q';

    var queryURL = 'https://api.petfinder.com/v2/types' + apiKeyParam;

      $.ajax({
        url: queryURL,
    method: 'GET'
      }).then(function(result) {
        console.log(result);
  });
    