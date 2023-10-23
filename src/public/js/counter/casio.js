// document.addEventListener("DOMContentLoaded", function () {
//   let decreaseButtons = document.querySelectorAll(".counter-descrease");
//   let increaseButtons = document.querySelectorAll(".counter-increase");
//   let counters = document.querySelectorAll(".counter-number");
//   let costs = document.querySelectorAll(".product-cost");
//   let totals = document.querySelectorAll(".total-product");
//   let textCost = document.querySelector(".text-cost");

//   // Retrieve saved quantities from localStorage and set them
//   counters.forEach((counter, index) => {
//     let savedQuantity = localStorage.getItem("product" + index);
//     if (savedQuantity) {
//       counter.innerText = savedQuantity;
//     }
//   });

//   let updateCost = 0;

//   counters.forEach((counter, index) =>
//     let quantity = parseNumber(counter.innerText);
//     let cost = parseNumber(costs[index].innerText);
//     let total = quantity * cost;
//     totals[index].innerText = formatNumber(total);
//     updateCost += total;
//     let productIDs = document.querySelectorAll(".phoneID");
//     let productID = productIDs[index].innerText;
//     // Set
//     console.log(productID);
//     localStorage.setItem(productID, quantity);

//     // Get
//     let savedQuantity = localStorage.getItem(productID);

//     fetch("/save-to-database", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         value: document.getElementById("phoneID1").innerText,
//       }),
//     })
//       .then((response) => response.json())
//       .then((data) => console.log(data))
//       .catch((error) => console.error("Error:", error));
//   });

//   textCost.innerText = formatNumber(updateCost);

//   function parseNumber(str) {
//     return parseInt(str.split(".").join(""), 10);
//   }

//   function updateTotalForProduct(index) {
//     let quantity = parseNumber(counters[index].innerText);
//     localStorage.setItem("product" + index, quantity); // Save quantity to localStorage
//     let cost = parseNumber(costs[index].innerText);
//     let total = quantity * cost;
//     totals[index].innerText = formatNumber(total);
//     updateFinalCost();
//   }

//   function updateFinalCost() {
//     let sum = 0;
//     totals.forEach((total) => {
//       sum += parseNumber(total.innerText);
//     });
//     textCost.innerText = formatNumber(sum);
//     localStorage.setItem("finalCost", sum); // Save final cost to localStorage
//   }

//   // Retrieve and set the finalCost from localStorage, if available
//   let savedFinalCost = localStorage.getItem("finalCost");
//   if (savedFinalCost) {
//     textCost.innerText = formatNumber(parseInt(savedFinalCost, 10));
//   }

//   decreaseButtons.forEach((button, index) => {
//     button.addEventListener("click", function () {
//       let quantity = parseNumber(counters[index].innerText);
//       if (quantity > 1) {
//         quantity -= 1;
//         counters[index].innerText = quantity.toString();
//         updateTotalForProduct(index);
//       }
//     });
//   });

//   increaseButtons.forEach((button, index) => {
//     button.addEventListener("click", function () {
//       let quantity = parseNumber(counters[index].innerText);
//       quantity += 1;
//       counters[index].innerText = quantity.toString();
//       updateTotalForProduct(index);
//     });
//   });

//   function formatNumber(num) {
//     return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  const decreaseButtons = document.querySelectorAll(".counter-descrease");
  const increaseButtons = document.querySelectorAll(".counter-increase");
  const counters = document.querySelectorAll(".counter-number");
  const costs = document.querySelectorAll(".product-cost");
  const totals = document.querySelectorAll(".total-product");
  const textCost = document.querySelector(".text-cost");
  console.log(textCost);

  let updateCost = 0;

  counters.forEach((counter, index) => {
    let quantity = parseNumber(counter.innerText);
    let cost = parseNumber(costs[index].innerText);
    let total = quantity * cost;
    totals[index].innerText = formatNumber(total);
    updateCost += total;
    let productIDs = document.querySelectorAll(".phoneID");
    let productID = productIDs[index].innerText;
  });

  textCost.innerText = formatNumber(updateCost);

  function parseNumber(str) {
    return parseInt(str.split(".").join(""), 10);
  }

  function updateTotalForProduct(index) {
    let quantity = parseNumber(counters[index].innerText);
    let cost = parseNumber(costs[index].innerText);
    let total = quantity * cost;
    totals[index].innerText = formatNumber(total);
    updateFinalCost();
  }

  function updateFinalCost() {
    let sum = 0;
    totals.forEach((total) => {
      sum += parseNumber(total.innerText);
    });
    textCost.innerText = formatNumber(sum);
  }

  decreaseButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      let quantity = parseNumber(counters[index].innerText);
      if (quantity > 1) {
        counters[index].innerText = (quantity - 1).toString();
        updateTotalForProduct(index);
      }
    });
  });

  increaseButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      let quantity = parseNumber(counters[index].innerText);
      counters[index].innerText = (quantity + 1).toString();
      updateTotalForProduct(index);
    });
  });

  function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  }
});
