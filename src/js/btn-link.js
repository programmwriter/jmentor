import * as func from "../js/functions";

const btnLinks = document.querySelectorAll(".btn-link");
const cont = document.querySelector(".container__side");
const sideMenu = document.querySelector(".side-menu");
const modalCall = document.querySelector(".call");
const modalFeedback = document.querySelector(".feedback");



btnLinks.forEach((el) => {
  el.addEventListener("click", (evt) => {
    let targetData = evt.target.dataset.btnvalue;

    if (targetData === "burger") {
      func.toggleSideMenu(sideMenu);
    }
    if (targetData === "burger-close") {
      func.toggleSideMenu(sideMenu);
    }
    if (targetData === "modall-call-open") {
      func.toggleModal(modalCall);
    }
    if (targetData === "modall-call-close") {
      func.toggleModal(modalCall);
    }
    if (targetData === "modall-feedback-open") {
      func.toggleModal(modalFeedback);
    }
    if (targetData === "modall-feedback-close") {
      func.toggleModal(modalFeedback);
    }
  });
});

cont.addEventListener("click", (e) => {
  if (e.target === cont) {
    func.toggleSideMenu(sideMenu);
  }
});
