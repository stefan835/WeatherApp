const timelineDisplay = (dayIndex) => {
  const timelineContainer = $('.timeline');
  timelineContainer.empty();
  $('.timeline-mobile').empty();
  days[dayIndex].timeline.map((day) => {

    const appendTimeline = parent => {
      parent.append($('<div class="card bg-light mb-3"></div>')
        .append(`<div class="card-header">${day.time}</div>`)
        .append($('<div class="card-body"></div>')
          .append(`<h4 class="card-title">${day.temp}</h4>`)
          .append(`<img class="card-icon" src=${defineIcon(day.weather)} alt="icon"/>`)
          .append(`<p class="card-details">Ciśnienie:</p> <h6>${day.pressure} hPa</h6>`)
          .append(`<p class="card-details">Wiatr:</p> <h6>${day.wind} km/h</h6>`)
        )
      );
    };
    appendTimeline(timelineContainer)
    appendTimeline(($('.timeline-mobile').eq(dayIndex))
    );
  })
};
