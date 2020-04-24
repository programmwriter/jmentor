// import  {toggleClass} from '../js/functions.js';
import  {toggleClass} from '../js/functions';
const btnLinks = document.querySelectorAll(".btn-link");
const cont = document.querySelector(".container__side");

btnLinks.forEach((el) => {
  el.addEventListener("click", (evt) => {
    let sideMenu = document.querySelector(".side-menu");
    let containerMain = document.querySelector(".container__main");   
    let containerSide = document.querySelector(".container__side");   
    let modalCall = document.querySelector(".call");
    let modalFeedback = document.querySelector(".feedback");
    let targetData = evt.target.dataset.btnvalue;

    if (targetData === "burger") {
      toggleClass(sideMenu, "side-menu--hidden");
      toggleClass(containerMain, "container__main--blur");
    }
    if (targetData === "modall-call-open") {
      toggleClass(modalCall, "modal--hidden");
      toggleClass(containerMain, "container__main--blur");
      toggleClass(containerSide, "container__side--blur");
    }
    if (targetData === "modall-call-close") {
      toggleClass(modalCall, "modal--hidden");
      toggleClass(containerMain, "container__main--blur");
      toggleClass(containerSide, "container__side--blur");
    }
    if (targetData === "modall-feedback-open") {
      toggleClass(modalFeedback, "modal--hidden");
      toggleClass(containerMain, "container__main--blur");
      toggleClass(containerSide, "container__side--blur");
    }
    if (targetData === "modall-feedback-close") {
      toggleClass(modalFeedback, "modal--hidden");
      toggleClass(containerMain, "container__main--blur");
      toggleClass(containerSide, "container__side--blur");
    }
  });
});
