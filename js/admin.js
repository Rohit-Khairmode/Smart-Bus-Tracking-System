// Modal veriables
const overlay = document.querySelector(".overlay");
const modal = document.querySelectorAll(".modal");
const msgModal = document.querySelector(".message-modal");
const sendMsgModal = document.querySelector(".send-msg-modal");
const vehicleFormModal = document.querySelector(".form-vehicle");

// Buttons
const msgViewBtn = document.querySelectorAll(".view");
const sendMsgBtn = document.querySelector(".send-msg");
const successMsg = document.querySelector(".success-msg");
const sendMailBtn = document.querySelector(".send-mail");
const dashBoardBtn = document.querySelector("#dashboard");
const menuBtns = document.querySelectorAll(".menu-btn");
const addVehicleBtn = document.querySelector(".add-vehicle");
const locationBtn = document.querySelectorAll(".location-btn");
// Major Elements
const main = document.querySelector(".main");
const menu = document.querySelector(".menu");
const sections = document.querySelectorAll(".sec");

// general functions

const openModal = function (modalNm) {
  overlay.classList.remove("hidden");
  modalNm.classList.remove("hidden");
};
const hideModal = function (modalNm) {
  overlay.classList.add("hidden");
  modalNm.classList.add("hidden");
};

menu.addEventListener("click", function (e) {
  if (!e.target.classList.contains("menu-btn")) return;
  sections.forEach((cur) => cur.classList.add("hidden"));
  document
    .querySelector(`.section-${e.target.getAttribute("id")}`)
    .classList.remove("hidden");
  menuBtns.forEach((cur) => {
    cur.classList.remove("menu-btn-active");
  });
  e.target.classList.add("menu-btn-active");
});
// Event Listner
// 1 Dashboard

msgViewBtn.forEach((cur) => {
  cur.addEventListener("click", openModal.bind(null, msgModal));
});
overlay.addEventListener("click", hideModal.bind(null, msgModal));

sendMsgBtn.addEventListener("click", openModal.bind(null, sendMsgModal));
overlay.addEventListener("click", hideModal.bind(null, sendMsgModal));
sendMailBtn.addEventListener("click", function () {
  sendMsgModal.classList.add("hidden");
  successMsg.classList.remove("hidden");
});
overlay.addEventListener("click", hideModal.bind(null, successMsg));

// Vehicle profile

addVehicleBtn.addEventListener("click", function (e) {
  openModal.bind(null, vehicleFormModal)();
});
overlay.addEventListener("click", hideModal.bind(null, vehicleFormModal));

locationBtn.forEach((cur) => {
  cur.addEventListener("click", function () {
    window.location =
      "http://127.0.0.1:5500/Smart-Bus-Tracking-System/html/liveLocation.html";
  });
});
