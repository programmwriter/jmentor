import "../scss/style.scss";
import "./btn-link.js";
import Swiper from "swiper";

window.onload = function () {
  const brendsItems = document.querySelector(".brends .slide-pocket__items");
  const brends = document.querySelector(".slide-pocket.brends");

  const technicsItems = document.querySelector(
    ".technics .slide-pocket__items"
  );
  const technics = document.querySelector(".slide-pocket.technics");
  const prices = document.querySelector(".prices");

  const brendsMobile = document.querySelector(".brends-mobile");
  const technicsMobile = document.querySelector(".technics-mobile");
  const pricesMobile = document.querySelector(".prices-mobile");

  const moreBtnOpen = "more-btn--open";

  const slidePocketExpanded = "slide-pocket--expanded";
  const slidePocketItemsExpanded = "slide-pocket__items--expanded";

  const moreBtns = document.querySelectorAll(".more-btn");

  moreBtns.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      if (event.target.dataset.block === "slide") {
        if (event.target.classList.contains(moreBtnOpen)) {
          event.target.classList.remove(moreBtnOpen);
        } else {
          event.target.classList.add(moreBtnOpen);
        }
      }
      if (event.target.dataset.block === "technics") {
        if (event.target.classList.contains(moreBtnOpen)) {
          event.target.classList.remove(moreBtnOpen);
          technics.classList.remove(slidePocketExpanded);
          technicsItems.classList.remove(slidePocketItemsExpanded);
        } else {
          event.target.classList.add(moreBtnOpen);
          technics.classList.add(slidePocketExpanded);
          technicsItems.classList.add(slidePocketItemsExpanded);
        }
      }

      if (event.target.dataset.block === "brend") {
        if (event.target.classList.contains(moreBtnOpen)) {
          event.target.classList.remove(moreBtnOpen);
          brends.classList.remove(slidePocketExpanded);
          brendsItems.classList.remove(slidePocketItemsExpanded);
        } else {
          event.target.classList.add(moreBtnOpen);
          brends.classList.add(slidePocketExpanded);
          brendsItems.classList.add(slidePocketItemsExpanded);
        }
      }
    });
  });

  var brendswiper = new Swiper(".brends-mobile .swiper-container", {
    spaceBetween: 16,
    width: 240,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  var technicsSwiper = new Swiper(".technics-mobile .swiper-container", {
    spaceBetween: 16,
    width: 240,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var pricesSwiper = new Swiper(".prices-mobile  .swiper-container", {
    spaceBetween: 16,
    width: 260,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  window.addEventListener("resize", () => {    
    if (window.innerWidth < 768) {
      brends.classList.add("display-none");
      technics.classList.add("display-none");
      prices.classList.add("display-none");

      brendsMobile.classList.remove("display-none");
      technicsMobile.classList.remove("display-none");
      pricesMobile.classList.remove("display-none");
    } else {
      brends.classList.remove("display-none");
      technics.classList.remove("display-none");
      prices.classList.remove("display-none");

      brendsMobile.classList.add("display-none");
      technicsMobile.classList.add("display-none");
      pricesMobile.classList.add("display-none");
    }
  });
};
