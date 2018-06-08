const headerDataDisplay = (data, city) => {
  $('.header__city').text(city || "Warszawa");
  $('.header__temperature').text(tempConvert(data.list[0].main.temp));
  console.log(data)
  console.log(data.list[0].weather[0].main)
  console.log(defineImage(data.list[0].weather[0].main))
  $('.header__card').css({
    background: `url("${defineImage(data.list[0].weather[0].main) }")`
  })
};
