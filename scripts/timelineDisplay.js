const timelineDisplay = (dayIndex) => {
  const timelineContainer = $('.timeline');
  timelineContainer.empty();
  days[dayIndex].timeline.map((day) => {
    timelineContainer.append($('<div class="card bg-light mb-3"></div>')
      .append(`<div class="card-header">${day.time}</div>`)
      .append($('<div class="card-body"></div>')
        .append(`<img class="card-icon" src=${defineIcon(day.weather)} alt="icon"/>`)
        .append(`<p class="card-details">Temperatura: ${day.temp}</p>`)
        .append(`<p class="card-details">Ciśnienie: ${day.pressure} hPa</p>`)
        .append(`<p class="card-details">Wiatr: ${day.wind} km/h</p>`)
      )
    )
  })
};
