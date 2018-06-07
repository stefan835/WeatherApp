const headerDataDisplay = (data, city) => {
  $('.header__city').text(city || "Warszawa");
  $('.header__temperature').text(tempConvert(data.list[0].main.temp));
};
