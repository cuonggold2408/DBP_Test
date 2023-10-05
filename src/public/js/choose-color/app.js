// // var listColor = document.querySelector(".list-color");
// // var itemBlack = listColor.querySelector(".item-black");
// // var iconCheckBlack = itemBlack.querySelector(".icon-check-black");
// // var itemWhite = listColor.querySelector(".item-white");
// // var iconCheckWhite = itemWhite.querySelector(".icon-check-white");
// // var image = document.querySelector(".image-1 img");
// // var images = {
// //   black: document.getElementById("link1").innerText,
// //   white: document.getElementById("link2").innerText,
// // };
// // var priceBlack = document.querySelector(".price-black");
// // var priceWhite = document.querySelector(".price-white");

// // itemBlack.addEventListener("click", function () {
// //   if (!itemBlack.classList.contains("check-choose")) {
// //     itemBlack.classList.add("check-choose");
// //     iconCheckBlack.classList.add("show-item-check-black");
// //     itemWhite.classList.remove("check-choose");
// //     iconCheckWhite.classList.remove("show-item-check-white");
// //     image.src = images.black;
// //     priceBlack.classList.add("checkedBlack");
// //     priceWhite.classList.remove("checkedWhite");
// //   }
// // });
// // itemWhite.addEventListener("click", function () {
// //   if (!itemWhite.classList.contains("check-choose")) {
// //     itemWhite.classList.add("check-choose");
// //     iconCheckWhite.classList.add("show-item-check-white");
// //     itemBlack.classList.remove("check-choose");
// //     iconCheckBlack.classList.remove("show-item-check-black");
// //     image.src = images.white;
// //     priceBlack.classList.remove("checkedBlack");
// //     priceWhite.classList.add("checkedWhite");
// //   }
// // });

var image = document.querySelector(".image-1 img");
var images = {
  black: document.getElementById("link1").innerText,
  white: document.getElementById("link2").innerText,
};

// Làm tính năng đổi giá sản phẩm
let checkColor = document.querySelector("#check-color");
document.addEventListener("DOMContentLoaded", function () {
  // Lấy tham chiếu đến trường select và điều kiện kiểm tra
  var selectElement = document.getElementById("select");
  var priceBlack = document.getElementById("priceBlack");
  var priceWhite = document.getElementById("priceWhite");
  //   var color = "<%= color %>";
  let color = checkColor.innerText;

  if (color === "black") {
    selectElement.querySelector('option[value="black"]').selected = true;
    selectElement.querySelector('option[value="white"]').selected = false;
    image.src = images.black;
    priceBlack.style.display = "flex";
    priceWhite.style.display = "none";
  } else {
    selectElement.querySelector('option[value="black"]').selected = false;
    selectElement.querySelector('option[value="white"]').selected = true;
    image.src = images.white;
    priceBlack.style.display = "none";
    priceWhite.style.display = "flex";
  }
});
