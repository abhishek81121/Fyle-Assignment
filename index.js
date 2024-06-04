document.addEventListener("DOMContentLoaded", function () {
  var textForImages = document.querySelectorAll(".project-image-text");
  console.log(document.getElementById("project-image"));
  textForImages.forEach(function (element, index) {
    element.addEventListener("click", function () {
      if (index == 0) {
        document.getElementById("project-image").src = "resources/2.png";
        document
          .querySelectorAll(".project-image-text-active")[0]
          .classList.remove("project-image-text-active");
        textForImages[0].classList.add("project-image-text-active");
      } else if (index == 1) {
        document.getElementById("project-image").src = "./resources/fruit.jpeg";
        document
          .querySelectorAll(".project-image-text-active")[0]
          .classList.remove("project-image-text-active");
        textForImages[1].classList.add("project-image-text-active");
      } else {
        document.getElementById("project-image").src = "resources/2.png";
        document
          .querySelectorAll(".project-image-text-active")[0]
          .classList.remove("project-image-text-active");
        textForImages[2].classList.add("project-image-text-active");
      }
    });
  });
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
