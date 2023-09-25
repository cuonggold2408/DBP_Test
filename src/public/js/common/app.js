var heart = document.querySelector(".heart");

heart.addEventListener("click", function () {
  heart.classList.toggle("active");
});

var prev = document.querySelector(".prev");
var next = document.querySelector(".next");

var carousel = document.querySelector(".carousel");

carousel.addEventListener("mouseenter", function () {
  prev.classList.add("appear");
  next.classList.add("appear");
});
carousel.addEventListener("mouseleave", function () {
  prev.classList.remove("appear");
  next.classList.remove("appear");
});
