var costsProduct = document.querySelectorAll(".costs-product");
var textCost = document.querySelector(".text-cost");

function formatToCustomVND(number, fontSize) {
  const formattedNumber = number.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  const formattedString = formattedNumber.replace(
    "₫",
    `<span style="font-size: ${fontSize}px;"></span>`
  );
  return formattedString;
}

const fontSize = 16;

costsProduct.forEach((item) => {
  const costsProductVND = formatToCustomVND(parseInt(item.innerText), fontSize);

  item.innerHTML = costsProductVND;
});

function formatToCustom(number, fontSize) {
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

// const textCostVND = formatToCustom(parseInt(textCost.innerText), fontSize);

// textCost.innerHTML = textCostVND;
