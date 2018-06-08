const defineImage = (weatherConditions) => {
  switch (weatherConditions) {
    case 'Clear':
      return 'images/clear.jpg';
    case 'Clouds':
      return 'images/clouds.jpg';
    case 'Rain':
      return 'images/storm.jpg';
    case 'Snow':
      return 'images/snow.jpg';
    default:
      return 'images/clear.jpg';
  }
};