const daysDisplay = () => {
  days.map((day, index) => {
    index === 0 ?
      $('.card-deck .card-header').eq(0).text("Dziś")
      :
      $('.card-deck .card-header').eq(index).text(dayConvert(day.date.getDay()));
    $('.card-deck .card-title').eq(index).text(day.mainTemp);

    $('.card-deck .card-icon').eq(index).attr('src', defineIcon(day.weatherConditions))
  });
};
