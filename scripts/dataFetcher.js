fetch('http://api.openweathermap.org/data/2.5/weather?q=Warsaw&APPID=9c398cd4cf22ab63cebf65a655f9d64d')
  .then(response => response.json())
  .then(data => {
      $('.header__city').text('Warszawa')
      $('.header__temperature').text(tempConvert(data.main.temp))
    }
  ).catch(err => console.log(err));