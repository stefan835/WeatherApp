function Day(date, mainTemp, weatherConditions, timeSplit) {
  return {
    date,
    mainTemp,
    weatherConditions,
    timeSplit,
  }
}

let days = [];
let newDays = [];
let mainTemp = [];
let weatherConditions = [];
let daysList = [];


const weatherDataUpdate = (weatherData) => {

  days = [];
  newDays = [];
  mainTemp = [];
  weatherConditions = [];
  daysList = [];

  weatherData.list.map(item => {
    const day = item.dt_txt.split(' ')[0];
    const time = item.dt_txt.split(' ')[1];
    days.push(day);
    if (time === "15:00:00") {
      mainTemp.push(tempConvert(item.main.temp))
      weatherConditions.push(item.weather[0].main)
    }
  });
  days.filter((value, index, inputArr) => {
    inputArr.indexOf(value) === index ? newDays.push(value) : null;
  });

  newDays.map((day, index) => {
    let dateName = `${day.split('-')[2]}.${day.split('-')[1]}`;
    index < 5 ? daysList.push(new Day(dateName, mainTemp[index], weatherConditions[index])) : null
  });
};


