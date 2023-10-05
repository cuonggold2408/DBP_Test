var priceLeft = document.querySelectorAll(".price-left");
var priceRight = document.querySelectorAll(".price-right");

function formatToCustomVND(number, fontSize) {
  const formattedNumber = number.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const formattedString = formattedNumber.replace(
    "₫",
    `<span style="font-size: ${fontSize}px;">đ</span>`
  );
  return formattedString;
}

const fontSize = 16;

priceLeft.forEach((item) => {
  const priceLeftVND = formatToCustomVND(parseInt(item.innerText), fontSize);

  item.innerHTML = priceLeftVND;
});

priceRight.forEach((item) => {
  const priceRightVND = formatToCustomVND(parseInt(item.innerText), fontSize);

  item.innerHTML = priceRightVND;
});
