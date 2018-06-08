const daysDisplay = () => {
  daysList.map((day, index) => {
    index === 0 ?
      $('.card-deck .card-header').eq(0).text("Dziś")
      :
      $('.card-deck .card-header').eq(index).text(day.date);
    $('.card-deck .card-title').eq(index).text(`Temperatura: ${day.mainTemp}`);

    let iconSrc;

    switch (day.weatherConditions) {
      case 'Clear':
        iconSrc = 'images/icons/sun.svg';
        break;
      case 'Clouds':
        iconSrc = 'images/icons/cloudy.svg';
        break;
      case 'Rain':
        iconSrc = 'images/icons/rain.svg';
        break;
      default:
        iconSrc = 'images/icons/sun.svg';
    }
    $('.card-deck .card-icon').eq(index).attr('src', iconSrc)
  });
};
