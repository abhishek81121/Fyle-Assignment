document.addEventListener("DOMContentLoaded", function () {
  var carousel = new bootstrap.Carousel(
    document.getElementById("carouselExampleIndicators")
  );

  var indicators = document.querySelectorAll(".radio-div .circle");

  indicators.forEach(function (indicator, index) {
    indicator.addEventListener("click", function () {
      carousel.to(index);
      updateActiveIndicator(index);
    });
  });

  function updateActiveIndicator(activeIndex) {
    indicators.forEach(function (indicator, index) {
      if (index === activeIndex) {
        indicator.classList.remove("outer-circle");
        indicator.classList.add("outer-circle-active");
        indicator.children[0].classList.remove("inner-circle");
        indicator.children[0].classList.add("inner-circle-active");
      } else {
        indicator.classList.remove("outer-circle-active");
        indicator.classList.add("outer-circle");
        indicator.children[0].classList.remove("inner-circle-active");
        indicator.children[0].classList.add("inner-circle");
      }
    });
  }

  // Set the initial active indicator
  updateActiveIndicator(0);

  // Update the active indicator when the carousel slides
  document
    .getElementById("carouselExampleIndicators")
    .addEventListener("slid.bs.carousel", function (event) {
      updateActiveIndicator(event.to);
    });
});
