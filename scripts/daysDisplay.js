const $cardHeader = $('.card-deck .card-header')

const daysDisplay = () => {
  days.map((day, index) => {
    index === 0 ?
      $cardHeader.eq(0).text("Dziś")
      :
      $cardHeader.eq(index).text(dayConvert(day.date.getDay()));
    $('.day-card .card-title').eq(index).text(day.mainTemp);

    $('.day-card .card-icon').eq(index).attr('src', defineIcon(day.weatherConditions))
  });
};
