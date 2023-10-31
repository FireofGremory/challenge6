function getRockSongs() {
    var url = 'https://openweathermap.org/forecast5';
    var options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'f138f6c663msh194c2fff86b5d0ap1620a3jsn010afa532419',
        'X-RapidAPI-Host': 'https://openweathermap.org/forecast5'
      }
    };

    fetch(url, options)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        weatherdashboard = weather(data);
        displayweather(weatherArray);
        saveweather(weatherArray)
      });
  }
