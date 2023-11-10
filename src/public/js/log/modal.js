// const { response } = require("express");

const container = document.querySelector(".container");
var btnModal = document.querySelector(".btn-login");
var overlay = document.querySelector(".overlay");
var modal = document.querySelector(".modal");
var btnLogin = document.querySelector(".modal-login");
var btnRegister = document.querySelector(".modal-register");
var loginContent = document.querySelector(".login-content");
var registerContent = document.querySelector(".register-content");

var inputEmailLogin = document.querySelector("#form-1 #email");
var inputPasswordLogin = document.querySelector("#form-1 #password");
var errEmail = document.querySelector(".err-email");
var errPassword = document.querySelector(".err-pass");

var inputFullNameRegister = document.querySelector("#form-2 #fullName");
var errFullNameRegister = document.querySelector("#form-2 .err-fullName");
var inputEmailRegister = document.querySelector("#form-2 #email");
var errEmailRegister = document.querySelector("#form-2 .err-email");
var inputPasswordRegister = document.querySelector("#form-2 #password");
var errPasswordRegister = document.querySelector("#form-2 .err-pass");

var btnSubmitRegister = document.querySelector(".register-login");

var btnSubmitLogin = document.querySelector(".submit-login");

var emailCustomer = document.querySelectorAll(".email-customer");
var passwordCustomer = document.querySelectorAll(".password-customer");
var loginBtn = document.querySelector(".login-btn")
var iconOut = document.querySelector(".icon-out");

if (!localStorage.getItem("check_login")) {
  // Nếu chưa tồn tại, đặt giá trị mặc định
  localStorage.setItem("check_login", false);
}
if(!JSON.parse(localStorage.getItem("check_login"))){
//An hien modal.
btnModal.addEventListener("click", function () {
  modal.classList.add("show");
  registerContent.classList.add("d-none");
  btnLogin.classList.remove("no-active");
  btnRegister.classList.add("no-active");
  loginContent.classList.remove("d-none");
  registerContent.classList.add("d-none");

  inputEmailLogin.form.reset();
  if (inputEmailLogin.value === "") {
    errEmail.innerText = "";
    inputEmailLogin.parentElement.classList.remove("invalid");
  }

  inputPasswordLogin.form.reset();
  if (inputPasswordLogin.value === "") {
    errPassword.innerText = "";
    inputPasswordLogin.parentElement.classList.remove("invalid");
  }

  // RESET REGISTER
  inputFullNameRegister.form.reset();
  if (inputFullNameRegister.value === "") {
    errFullNameRegister.innerText = "";
    inputFullNameRegister.parentElement.classList.remove("invalid");
  }

  inputEmailRegister.form.reset();
  if (inputEmailRegister.value === "") {
    errEmailRegister.innerText = "";
    inputEmailRegister.parentElement.classList.remove("invalid");
  }

  inputPasswordRegister.form.reset();
  if (inputPasswordRegister.value === "") {
    errPasswordRegister.innerText = "";
    inputPasswordRegister.parentElement.classList.remove("invalid");
  }
});
}
// //An hien modal.
// btnModal.addEventListener("click", function () {
//   modal.classList.add("show");
//   registerContent.classList.add("d-none");
//   btnLogin.classList.remove("no-active");
//   btnRegister.classList.add("no-active");
//   loginContent.classList.remove("d-none");
//   registerContent.classList.add("d-none");

//   inputEmailLogin.form.reset();
//   if (inputEmailLogin.value === "") {
//     errEmail.innerText = "";
//     inputEmailLogin.parentElement.classList.remove("invalid");
//   }

//   inputPasswordLogin.form.reset();
//   if (inputPasswordLogin.value === "") {
//     errPassword.innerText = "";
//     inputPasswordLogin.parentElement.classList.remove("invalid");
//   }

//   // RESET REGISTER
//   inputFullNameRegister.form.reset();
//   if (inputFullNameRegister.value === "") {
//     errFullNameRegister.innerText = "";
//     inputFullNameRegister.parentElement.classList.remove("invalid");
//   }

//   inputEmailRegister.form.reset();
//   if (inputEmailRegister.value === "") {
//     errEmailRegister.innerText = "";
//     inputEmailRegister.parentElement.classList.remove("invalid");
//   }

//   inputPasswordRegister.form.reset();
//   if (inputPasswordRegister.value === "") {
//     errPasswordRegister.innerText = "";
//     inputPasswordRegister.parentElement.classList.remove("invalid");
//   }
// });

overlay.addEventListener("click", function () {
  modal.classList.remove("show");
});

document.onkeyup = function (e) {
  if (e.key === "Escape") {
    modal.classList.remove("show");
  }
};

//Chuyen tab trong modal
btnRegister.addEventListener("click", function () {
  btnRegister.classList.remove("no-active");
  btnLogin.classList.add("no-active");
  registerContent.classList.remove("d-none");
  loginContent.classList.add("d-none");

  inputEmailLogin.form.reset();
  if (inputEmailLogin.value === "") {
    errEmail.innerText = "";
    inputEmailLogin.parentElement.classList.remove("invalid");
  }

  inputPasswordLogin.form.reset();
  if (inputPasswordLogin.value === "") {
    errPassword.innerText = "";
    inputPasswordLogin.parentElement.classList.remove("invalid");
  }

  // RESET REGISTER
  inputFullNameRegister.form.reset();
  if (inputFullNameRegister.value === "") {
    errFullNameRegister.innerText = "";
    inputFullNameRegister.parentElement.classList.remove("invalid");
  }

  inputEmailRegister.form.reset();
  if (inputEmailRegister.value === "") {
    errEmailRegister.innerText = "";
    inputEmailRegister.parentElement.classList.remove("invalid");
  }

  inputPasswordRegister.form.reset();
  if (inputPasswordRegister.value === "") {
    errPasswordRegister.innerText = "";
    inputPasswordRegister.parentElement.classList.remove("invalid");
  }
});

btnLogin.addEventListener("click", function () {
  btnLogin.classList.remove("no-active");
  btnRegister.classList.add("no-active");
  loginContent.classList.remove("d-none");
  registerContent.classList.add("d-none");

  inputEmailLogin.form.reset();
  if (inputEmailLogin.value === "") {
    errEmail.innerText = "";
    inputEmailLogin.parentElement.classList.remove("invalid");
  }

  inputPasswordLogin.form.reset();
  if (inputPasswordLogin.value === "") {
    errPassword.innerText = "";
    inputPasswordLogin.parentElement.classList.remove("invalid");
  }

  // RESET REGISTER
  inputFullNameRegister.form.reset();
  if (inputFullNameRegister.value === "") {
    errFullNameRegister.innerText = "";
    inputFullNameRegister.parentElement.classList.remove("invalid");
  }

  inputEmailRegister.form.reset();
  if (inputEmailRegister.value === "") {
    errEmailRegister.innerText = "";
    inputEmailRegister.parentElement.classList.remove("invalid");
  }

  inputPasswordRegister.form.reset();
  if (inputPasswordRegister.value === "") {
    errPasswordRegister.innerText = "";
    inputPasswordRegister.parentElement.classList.remove("invalid");
  }
});

btnSubmitRegister.addEventListener("click", async function (e) {
  e.preventDefault();
  var fullName = inputFullNameRegister.value.trim();
  var email = inputEmailRegister.value.trim();
  var password = inputPasswordRegister.value.trim();

  if (fullName === "") {
    errFullNameRegister.innerText = "Full name is required.";
    return;
  }
  if (email === "") {
    errEmailRegister.innerText = "Email is required.";
    return;
  }
  if (password === "") {
    errPasswordRegister.innerText = "Password is required.";
    return;
  }

  errFullNameRegister.innerText = "";
  errEmailRegister.innerText = "";
  errPasswordRegister.innerText = "";

  const data = {
    name: fullName,
    email: email,
    password: password,
  };
  console.log(inputFullNameRegister.value);
  console.log(inputEmailRegister.value);
  console.log(inputPasswordRegister.value);

  // fetch("/save-to-database-customer", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(data),
  // });
  try {
    // Use async/await to send the POST request
    const response = await fetch("/save-to-database-customer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      inputFullNameRegister.value = "";
      inputEmailRegister.value = "";
      inputPasswordRegister.value = "";
      Toastify({
        text: "Đăng kí thành công",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "right",
        position: "right",
        stopOnFocus: true,
        offset: {
          x: 30,
          y: 80,
        },
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
          fontSize: "20px",
        },
      }).showToast();
      console.log("Data saved successfully");
    } else {
      Toastify({
        text: "Đăng kí thất bại, tài khoản đã tồn tại",
        duration: 3000,
        newWindow: true,
        close: true,
        gravity: "right",
        position: "right",
        stopOnFocus: true,
        offset: {
          x: 30,
          y: 80,
        },
        style: {
          background: "linear-gradient(to right, #ff0000, #ff6600)",
          fontSize: "20px",
          color: "#fff",
        },
      }).showToast();
      console.error("Failed to save data", response.status);
    }
  } catch (error) {
    console.error("Network error: ", error);
  }
});

console.log(passwordCustomer);

var isLoggedIn = false;

// const loginBtn = document.querySelector(".login-btn");

function toggleLoginState() {
  isLoggedIn = !isLoggedIn;
  loginBtn.textContent = isLoggedIn ? "Logout" : "Login";
}

// function displayHello() {
//   const nameUser = document.createElement("div");
//   nameUser.classList.add("name-user");
//   nameUser.textContent = "Hello";
//   container.appendChild(nameUser);
// }

// Khai báo một biến để theo dõi trạng thái đăng nhập

  btnSubmitLogin.addEventListener("click", async function (e) {
    e.preventDefault();
    var email = inputEmailLogin.value.trim();
    var password = inputPasswordLogin.value.trim();
  
    const data = {
      email: email,
      password: password,
    };
    try {
      const response = await fetch("/save-to-database-login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        Toastify({
          text: "Đăng nhập thành công",
          duration: 1000,
          newWindow: true,
          close: true,
          gravity: "right",
          position: "right",
          stopOnFocus: true,
          offset: {
            x: 30,
            y: 80,
          },
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
            fontSize: "20px",
          },
          callback: function () {
          window.location.href = "/";
          localStorage.setItem("check_login", true);           
          },
        }).showToast();
        // Chuyển hướng sau khi yêu cầu thành công
        // window.location.href = "/";
      } else {
        // Xử lý lỗi tại đây
        console.log("fail");
        Toastify({
          text: `Đăng nhập thất bại. 
          Tài khoản hoặc mật khẩu không đúng`,
          duration: 3000,
          newWindow: true,
          close: true,
          gravity: "right",
          position: "right",
          stopOnFocus: true,
          offset: {
            x: 30,
            y: 80,
          },
          style: {
            background: "linear-gradient(to right, #ff0000, #ff6600)",
            fontSize: "20px",
            color: "#fff",
          },
        }).showToast();
      }
    } catch (error) {
      console.error(error);
    }
  });

// btnSubmitLogin.addEventListener("click", async function (e) {
//   e.preventDefault();
//   var email = inputEmailLogin.value.trim();
//   var password = inputPasswordLogin.value.trim();

//   // Kiểm tra xem đã đăng nhập thành công chưa
//   if (isLoggedin) {
//     // Nếu đã đăng nhập, không làm gì cả
//     return;
//   }

//   const data = {
//     email: email,
//     password: password,
//   };
//   try {
//     const response = await fetch("/save-to-database-login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });
//     if (response.ok) {
//       Toastify({
//         text: "Đăng nhập thành công",
//         duration: 1000,
//         newWindow: true,
//         close: true,
//         gravity: "right",
//         position: "right",
//         stopOnFocus: true,
//         offset: {
//           x: 30,
//           y: 80,
//         },
//         style: {
//           background: "linear-gradient(to right, #00b09b, #96c93d)",
//           fontSize: "20px",
//         },
//         callback: function () {
//           // document.querySelector(".modal").classList.remove("show");
//           // setTimeout(() => {
//           //   window.location.reload();
//           // }, 1);
  
//           // toggleLoginState();
//         //   // displayHello();
//         window.location.href = "/";

          
//         },
//       }).showToast();
//       // Chuyển hướng sau khi yêu cầu thành công
//       // window.location.href = "/";
//     } else {
//       // Xử lý lỗi tại đây
//       console.log("fail");
//       Toastify({
//         text: `Đăng nhập thất bại. 
//         Tài khoản hoặc mật khẩu không đúng`,
//         duration: 3000,
//         newWindow: true,
//         close: true,
//         gravity: "right",
//         position: "right",
//         stopOnFocus: true,
//         offset: {
//           x: 30,
//           y: 80,
//         },
//         style: {
//           background: "linear-gradient(to right, #ff0000, #ff6600)",
//           fontSize: "20px",
//           color: "#fff",
//         },
//       }).showToast();
//     }
//   } catch (error) {
//     console.error(error);
//   }


//   // console.log(response);
//   // if (!response.ok) {
//   //   Toastify({
//   //     text: `Đăng nhập thất bại. 
//   //     Tài khoản hoặc mật khẩu không đúng`,
//   //     duration: 3000,
//   //     newWindow: true,
//   //     close: true,
//   //     gravity: "right",
//   //     position: "right",
//   //     stopOnFocus: true,
//   //     offset: {
//   //       x: 30,
//   //       y: 80,
//   //     },
//   //     style: {
//   //       background: "linear-gradient(to right, #ff0000, #ff6600)",
//   //       fontSize: "20px",
//   //       color: "#fff",
//   //     },
//   //   }).showToast();
//   //   console.error("Failed to save data", response.status);
//   //   console.log("Đăng nhập thất bại ");
//   // } else {
//   //   Toastify({
//   //     text: "Đăng nhập thành công",
//   //     duration: 3000,
//   //     newWindow: true,
//   //     close: true,
//   //     gravity: "right",
//   //     position: "right",
//   //     stopOnFocus: true,
//   //     offset: {
//   //       x: 30,
//   //       y: 80,
//   //     },
//   //     style: {
//   //       background: "linear-gradient(to right, #00b09b, #96c93d)",
//   //       fontSize: "20px",
//   //     },
//   //     callback: function () {
//   //       document.querySelector(".modal").classList.remove("show");
//   //       setTimeout(() => {
//   //         window.location.reload();
//   //       }, 1);

//   //       toggleLoginState();
//   //       // displayHello();

        
//   //     },
//   //   }).showToast();
//   //   console.log("Đăng nhập thành công");
//   // }
// });
iconOut.addEventListener('click',async function(){
  try {
    const response = await fetch("/log-out", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      // Chuyển hướng sau khi yêu cầu thành công
      window.location.href = "/";
      localStorage.setItem("check_login", false);
    } else {
      // Xử lý lỗi tại đây
      console.log("fail");
    }
  } catch (error) {
    console.error(error);
  }
})