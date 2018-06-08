$('.header__from').submit(function (event) {
  event.preventDefault();
  fetchData($('#city')[0].value)
});

const headerCards = $('.card-deck .card');
headerCards.click(function (event) {
  event.stopPropagation();
  const targetId = event.currentTarget.getAttribute('data-id');

  headerCards.removeClass('active-card');
  headerCards.eq(targetId).addClass('active-card');

  timelineDisplay(targetId)
});