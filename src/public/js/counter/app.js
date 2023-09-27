var counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  let counterNumber = counter.querySelector(".counter-number");
  let counterIncrease = counter.querySelector(".counter-increase");
  let counterDecrease = counter.querySelector(".counter-descrease");

  let counterValue = parseInt(counterNumber.textContent);

  counterIncrease.addEventListener("click", function () {
    counterValue++;
    counterNumber.textContent = counterValue;
  });

  counterDecrease.addEventListener("click", function () {
    if (counterValue <= 0) return;
    counterValue--;
    counterNumber.textContent = counterValue;
  });
});