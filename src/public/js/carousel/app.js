// Tạo các element

var carousel = document.querySelector(".carousel");
var carouselInner = document.querySelector(".carousel-inner");
var nextBtn = carousel.querySelector(".next");
var prevBtn = carousel.querySelector(".prev");

// Lấy kích thước của 1 item

var itemWidth = carouselInner.clientWidth; // lấy kích thước chiều rộng của 1 element

// Lấy tất cả items
var items = carouselInner.children;

// Tính tổng kích thước các items
var totalWidth = items.length * itemWidth;

// Cập nhật CSS cho carousel inner
carouselInner.style.width = `${totalWidth}px`;

// dots
var index = 0;
var dots = document.querySelector(".dots");
var dot = dots.querySelectorAll(".dot");

var position = 0;

// nextBtn
nextBtn.addEventListener("click", function () {
  if (Math.abs(position) < totalWidth - itemWidth) {
    position -= itemWidth;
    carouselInner.style.transition = "transform 0.3s linear";
    carouselInner.style.transform = `translateX(${position}px)`;
    index++;
    if (index >= items.length) {
      index = items.length - 1;
    }
  }
  [...dot].forEach((element) => element.classList.remove("active"));
  dot[index].classList.add("active");
});

// prevBtn
prevBtn.addEventListener("click", function () {
  if (Math.abs(position) > 0) {
    position += itemWidth;
    carouselInner.style.transition = "transform 0.3s linear";
    carouselInner.style.transform = `translateX(${position}px)`;
    index--;
    if (index < 0) {
      index = 0;
    }
  }
  [...dot].forEach((element) => element.classList.remove("active"));
  dot[index].classList.add("active");
});

// do-dot
[...dot].forEach((item) => {
  item.addEventListener("click", function (e) {
    [...dot].forEach((element) => element.classList.remove("active"));
    e.target.classList.add("active");
    var slideIndex = parseInt(e.target.dataset.index);
    index = slideIndex;
    position = -1 * itemWidth * index;
    carouselInner.style.transition = "transform 0.3s linear";
    carouselInner.style.transform = `translateX(${position}px)`;
  });
});

// Vuốt slide
let startX; // Vị trí chuột khi bắt đầu vuốt
let isDragging = false; // Trạng thái vuốt

carouselInner.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.clientX;
  e.preventDefault(); // Ngăn chặn mặc định để tránh hiệu ứng kéo
});

carouselInner.addEventListener("mousemove", (e) => {
  if (isDragging) {
    const moveX = e.clientX - startX;

    carouselInner.style.transform = `translateX(${position + moveX}px)`;
  }
});

carouselInner.addEventListener("mouseup", (e) => {
  if (isDragging) {
    const moveX = e.clientX - startX;

    // Nếu vuốt sang phải và vị trí hiện tại không phải là vị trí đầu tiên
    if (moveX > itemWidth / 6 && position < 0) {
      position += itemWidth;
      index--;
    }
    // Nếu vuốt sang trái và vị trí hiện tại không phải là vị trí cuối cùng
    else if (
      moveX < -(itemWidth / 6) &&
      Math.abs(position) < totalWidth - itemWidth
    ) {
      position -= itemWidth;
      index++;
    }

    carouselInner.style.transition = "transform 0.3s linear";
    carouselInner.style.transform = `translateX(${position}px)`;

    // Cập nhật dots
    [...dot].forEach((element) => element.classList.remove("active"));
    dot[index].classList.add("active");

    isDragging = false;

    // Reset transition sau khi vuốt
    setTimeout(() => {
      carouselInner.style.transition = "";
    }, 300);
  }
});

// Đảm bảo dừng vuốt khi chuột ra khỏi carousel
carouselInner.addEventListener("mouseleave", () => {
  if (isDragging) {
    isDragging = false;
    carouselInner.style.transform = `translateX(${position}px)`;
  }
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

function autoNext() {
  if (index < items.length - 1) {
    position -= itemWidth;
    index++;
  } else {
    // Khi tới ảnh cuối cùng, reset lại vị trí và index
    position = 0;
    index = 0;
  }
  carouselInner.style.transition = "transform 0.3s linear";
  carouselInner.style.transform = `translateX(${position}px)`;

  [...dot].forEach((element) => element.classList.remove("active"));
  dot[index].classList.add("active");
}

var autoSlideInterval = setInterval(autoNext, 2000);

carousel.addEventListener("mouseenter", function () {
  clearInterval(autoSlideInterval);
});

carousel.addEventListener("mouseleave", function () {
  autoSlideInterval = setInterval(autoNext, 2000);
});
