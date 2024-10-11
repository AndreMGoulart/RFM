$(document).ready(function () {
  var totalItems = $('.team-item').length;
  var currentIndex = 0;

  function showNextItem() {
      currentIndex = (currentIndex + 1) % totalItems;
      var newTransformValue = `translateX(-${currentIndex * 27}%)`;
      $('.carousel-container').css('transform', newTransformValue);
  }

  setInterval(showNextItem, 2000); // Muda a cada 2 segundos
});
