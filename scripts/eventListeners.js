$('.header__from').submit(function (event) {
  event.preventDefault();
  fetchData($('#city')[0].value)
});