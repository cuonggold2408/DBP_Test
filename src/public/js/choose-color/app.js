
var listColor = document.querySelector(".list-color");
var itemBlack = listColor.querySelector(".item-black");
var iconCheckBlack = itemBlack.querySelector(".icon-check-black");
var itemWhite = listColor.querySelector(".item-white");
var iconCheckWhite = itemWhite.querySelector(".icon-check-white");
var image = document.querySelector(".image-1 img");
var images = {
  black: document.getElementById('link1').innerText,
  white: document.getElementById('link2').innerText,
};

itemBlack.addEventListener("click", function () {
  if (!itemBlack.classList.contains("check-choose")) {
    itemBlack.classList.add("check-choose");
    iconCheckBlack.classList.add("show-item-check-black");
    itemWhite.classList.remove("check-choose");
    iconCheckWhite.classList.remove("show-item-check-white");
    image.src = images.black;
  }
});
itemWhite.addEventListener("click", function () {
  if (!itemWhite.classList.contains("check-choose")) {
    itemWhite.classList.add("check-choose");
    iconCheckWhite.classList.add("show-item-check-white");
    itemBlack.classList.remove("check-choose");
    iconCheckBlack.classList.remove("show-item-check-black");
    image.src = images.white;
  }
});
