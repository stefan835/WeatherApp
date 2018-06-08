const $cardHeader = $('.card-deck .card-header')

const daysDisplay = () => {
  days.map((day, index) => {
    index === 0 ?
      $cardHeader.eq(0).text("Dziś")
      :
      $cardHeader.eq(index).text(dayConvert(day.date.getDay()));
    $('.card-deck .card-title').eq(index).text(day.mainTemp);

    $('.card-deck .card-icon').eq(index).attr('src', defineIcon(day.weatherConditions))
  });
};
