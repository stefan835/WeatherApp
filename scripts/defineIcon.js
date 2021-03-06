const defineIcon = (weatherConditions) => {
  switch (weatherConditions) {
    case 'Clear':
      return 'images/icons/sun.svg';
    case 'Clouds':
      return 'images/icons/cloudy.svg';
    case 'Rain':
      return 'images/icons/rain.svg';
    case 'Snow':
      return 'images/icons/snowing.svg';
    default:
      return 'images/icons/cloudy.svg';
  }
};