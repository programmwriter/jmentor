import "../scss/style.scss";
import Swiper from "swiper";
import { toggleTechnics } from "../components/technics/technics";
import { toggleServices } from "../components/services/services";
import { toggleSlideMenu } from "../components/slide-menu/slide-menu";
import * as func from "../js/functions";

const moreBtns = document.querySelectorAll(".more-btn");
const moreBtnOpen = "more-btn--open";

const btnLinks = document.querySelectorAll(".btn-link");
const cont = document.querySelector(".container__side");
const sideMenu = document.querySelector(".side-menu");
const modalCall = document.querySelector(".call");
const modalFeedback = document.querySelector(".feedback");

moreBtns.forEach((btn) => {
  btn.addEventListener("click", function (event) {
    let moreBtn = event.target;
    if (moreBtn.dataset.block === "slide") {
      if (moreBtn.classList.contains(moreBtnOpen)) {
        func.toggleClass(moreBtn, moreBtnOpen);
        toggleSlideMenu();
      } else {
        moreBtn.classList.add(moreBtnOpen);
        toggleSlideMenu();
      }
    }
    if (moreBtn.dataset.block === "technics") {
      if (moreBtn.classList.contains(moreBtnOpen)) {
        func.toggleClass(moreBtn, moreBtnOpen);
        toggleTechnics();
      } else {
        moreBtn.classList.add(moreBtnOpen);
        toggleTechnics();
      }
    }

    if (moreBtn.dataset.block === "brend") {
      if (moreBtn.classList.contains(moreBtnOpen)) {
        func.toggleClass(moreBtn, moreBtnOpen);
        toggleServices();
      } else {
        moreBtn.classList.add(moreBtnOpen);
        toggleServices();
      }
    }
  });
});

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
      func.toggleModal(modalCall, window);
    }
    if (targetData === "modall-call-close") {
      func.toggleModal(modalCall, window);
    }
    if (targetData === "modall-feedback-open") {
      func.toggleModal(modalFeedback, window);
    }
    if (targetData === "modall-feedback-close") {
      func.toggleModal(modalFeedback, window);
    }
  });
});

let brendswiper = new Swiper(".brends-mobile .swiper-container", {
  spaceBetween: 16,
  width: 240,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
let technicsSwiper = new Swiper(".technics-mobile .swiper-container", {
  spaceBetween: 16,
  width: 240,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
let pricesSwiper = new Swiper(".prices-mobile  .swiper-container", {
  spaceBetween: 16,
  width: 260,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

func.toggleArticle(window);

window.addEventListener("resize", (evt) => {
  func.toggleArticle(evt.target);
});

cont.addEventListener("click", (e) => {
  if (e.target === cont) {
    func.toggleSideMenu(sideMenu);
  }
});
