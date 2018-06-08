function fetchData(city) {
  fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city || 'Warszawa'}&APPID=9c398cd4cf22ab63cebf65a655f9d64d`)
    .then(response => response.json())
    .then(data => {
        headerDataDisplay(data, city);
        weatherDataUpdate(data);
        daysDisplay()
      }
    ).catch(err => console.log(err));
}

fetchData();
