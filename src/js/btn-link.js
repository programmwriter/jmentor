import { toggleClass } from "../js/functions";
const btnLinks = document.querySelectorAll(".btn-link");
const cont = document.querySelector(".container__side");
const sideMenu = document.querySelector(".side-menu");
const containerMain = document.querySelector(".container__main");
const containerSide = document.querySelector(".container__side");
const modalCall = document.querySelector(".call");
const modalFeedback = document.querySelector(".feedback");
const contModal = document.querySelector(".container__modal");

btnLinks.forEach((el) => {
  el.addEventListener("click", (evt) => {
    let targetData = evt.target.dataset.btnvalue;

    if (targetData === "burger") {
      toggleClass(sideMenu, "side-menu--open");
      sideMenu.classList.remove("side-menu--hidden");
      toggleClass(cont, "container__side--open");      
      toggleClass(containerMain, "container__main-side--overflow");
    }
    if (targetData === "burger-close") {
      console.log(sideMenu);
      toggleClass(sideMenu, "side-menu--open");
      toggleClass(sideMenu, "side-menu--hidden");
      toggleClass(cont, "container__side--open");      
      toggleClass(containerMain, "container__main-side--overflow");
    }
    if (targetData === "modall-call-open") {
      toggleClass(modalCall, "modal--hidden");
      toggleClass(modalCall, "modal--open");
      toggleClass(contModal, "container__modal--visible");
      toggleClass(containerMain, "container__main-side--overflow");
      toggleClass(containerSide, "container__main-side--overflow");
    }
    if (targetData === "modall-call-close") {
      toggleClass(modalCall, "modal--hidden");
      toggleClass(modalCall, "modal--open");
      toggleClass(contModal, "container__modal--visible");
      toggleClass(containerMain, "container__main-side--overflow");
      toggleClass(containerSide, "container__main-side--overflow");
    }
    if (targetData === "modall-feedback-open") {
      toggleClass(modalFeedback, "modal--open");
      toggleClass(modalFeedback, "modal--hidden");
      toggleClass(contModal, "container__modal--visible");
      toggleClass(containerMain, "container__main-side--overflow");
      toggleClass(containerSide, "container__main-side--overflow");
    }
    if (targetData === "modall-feedback-close") {
      toggleClass(modalFeedback, "modal--open");
      toggleClass(modalFeedback, "modal--hidden");
      toggleClass(contModal, "container__modal--visible");
      toggleClass(containerMain, "container__main-side--overflow");
      toggleClass(containerSide, "container__main-side--overflow");
    }
  });
});

cont.addEventListener("click", (e) => {
  if (e.target === cont) {
    toggleClass(sideMenu, "side-menu--open");
    toggleClass(sideMenu, "side-menu--hidden");
    toggleClass(cont, "container__side--open");
  }
});
