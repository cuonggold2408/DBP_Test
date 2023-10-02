// var heart = document.querySelector(".heart");

// heart.addEventListener("click", function () {
//   heart.classList.toggle("active");
// });

const inputBox = document.querySelector(".input-box");
const searchIcon = document.querySelector(".search");

if (searchIcon && inputBox) {
  searchIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    inputBox.classList.toggle("open");
  });

  document.addEventListener("click", function (e) {
    const isClickInside = inputBox.contains(e.target);
    if (!isClickInside) {
      inputBox.classList.remove("open");
    }
  });
}

var scrollTopBtn = document.getElementById("scrollTopBtn");

// Hiển thị hoặc ẩn nút khi người dùng cuộn trang
window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    // Hiển thị nút khi người dùng cuộn xuống 200px
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
});

// Cuộn lên đầu trang khi nhấn nút
scrollTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
