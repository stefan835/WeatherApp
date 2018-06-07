fetch('http://api.openweathermap.org/data/2.5/weather?q=Warsaw&APPID=9c398cd4cf22ab63cebf65a655f9d64d')
  .then(response => response.json())
  .then(data => {
      $('.card-img-overlay .card-title').text('Warszawa')
      $('.card-img-overlay .card-subtitle').text(tempConvert(data.main.temp))
    }
  ).catch(err => console.log(err));