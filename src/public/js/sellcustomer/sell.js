const btnPay = document.querySelector(".btn-pay");
const nameCustomer = document.querySelector(".input-name");
const phone = document.querySelector(".input-tel");
const email = document.querySelector(".input-email");
const province = document.querySelector(".input-province");
const district = document.querySelector(".input-district");
const note = document.querySelector(".input-note");

btnPay.addEventListener("click", async function() {

    console.log(nameCustomer.value);
    console.log(phone.value);
    console.log(email.value);
    console.log(province.value);
    console.log(district.value);
    console.log(note.value);
  const data = {
    name: nameCustomer.value,
    phone: phone.value,
    email: email.value,
    province: province.value,
    district: district.value,
    note: note.value
  };
  

  const response = await fetch("/save-to-database-transport", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
})