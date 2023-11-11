var nameUser = document.querySelector(".name-user");

if (JSON.parse(localStorage.getItem("check_login"))) {
  nameUser.classList.remove("appearIcon");
}
