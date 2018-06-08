function Day(date, mainTemp, weatherConditions) {
  return {
    date,
    mainTemp,
    weatherConditions,
    timeSplit: [],
  }
}

let currentDay;
let days = [];

const weatherUpdate = (weatherData) => {
  weatherData.list.map((item) => {
    const currentDate = item.dt_txt.split(' ')[0];
    const currentTime = item.dt_txt.split(' ')[1].slice(0, 5);

    if (currentDay !== currentDate && currentTime === "15:00") {
      days.push(new Day(new Date(currentDate), tempConvert(item.main.temp), item.weather[0].main));
      days[days.length - 1].timeSplit.push({
        time: currentTime,
        temp: tempConvert(item.main.temp)
      });
    }
    else if (currentDay !== currentDate) {
      days.push(new Day(new Date(currentDate)));
      days[days.length - 1].timeSplit.push({
        time: currentTime,
        temp: tempConvert(item.main.temp)
      });
    }
    else if (currentDay === currentDate && currentTime === "15:00") {
      days[days.length - 1].mainTemp = tempConvert(item.main.temp);
      days[days.length - 1].weatherConditions = item.weather[0].main;
      days[days.length - 1].timeSplit.push({
        time: currentTime,
        temp: tempConvert(item.main.temp)
      })
    }
    else if (currentDay === currentDate) {
      days[days.length - 1].timeSplit.push({
        time: currentTime,
        temp: tempConvert(item.main.temp)
      })
    }
    currentDay = currentDate
  })
};




