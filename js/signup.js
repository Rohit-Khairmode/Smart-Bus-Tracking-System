"use strict";
const submitBtn = document.querySelector(".submitB");
submitBtn.addEventListener("click", function (e) {
  const pass = document.querySelector(".password");
  const conPass = document.querySelector(".confirm-password");
  console.log(pass.value);
  console.log(conPass.value);
  if (pass.value !== conPass.value) {
    pass.value = "";
    conPass.value = "";
    alert("Password is not matching");
    return;
  }
  for (const input of allInput) {
    if (input.value === 0 || input.value === "") return;
  }

  e.preventDefault();
  location.href = "../html/payment.html";
  allInput.forEach(function (el) {
    el.value = "";
  });
});
const allInput = document.querySelectorAll("input");
