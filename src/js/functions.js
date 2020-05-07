/******************************toggleClass******************************/
export function toggleClass(element, elClass) {
  if (element.classList.contains(elClass)) {
    element.classList.remove(elClass);
  } else {
    element.classList.add(elClass);
  }
}
/******************************toggleModal******************************/
export function toggleModal(element, wind) {
  let containerMain = document.querySelector(".container__main");
  let container = document.querySelector(".container");
  let body = document.querySelector("body");
  let contModal = document.querySelector(".container__modal");
  let containerWrapper = document.querySelector(".container__wrapper");
  indentModal(element, wind);
  // toggleContModal(contModal, element);

  // fixedWidth(containerMain);

  // toggleClass(contModal, "container__modal--visible");
  toggleClass(container, "container__main-side--fixed");
  // toggleClass(containerWrapper, "container__main-side--fixed");
}
/******************************toggleSideMenu******************************/
export function toggleSideMenu(element) {
  let containerMain = document.querySelector(".container__main");
  let containerSide = document.querySelector(".container__side");

  fixedWidth(containerMain);

  if (element.classList.contains("side-menu--open")) {
    element.classList.add("side-menu--hidden");
  } else if (element.classList.contains("side-menu--hidden")) {
    element.classList.remove("side-menu--hidden");
  }

  toggleClass(element, "side-menu--open");
  toggleClass(containerSide, "container__side--open");
  toggleClass(containerMain, "container__main-side--fixed");
}
/******************************toggleArticle******************************/
export function toggleArticle(wind) {
  let technics = document.querySelector(".slide-pocket.technics");
  let prices = document.querySelector(".prices");
  let brends = document.querySelector(".slide-pocket.brends");

  let brendsMobile = document.querySelector(".brends-mobile");
  let technicsMobile = document.querySelector(".technics-mobile");
  let pricesMobile = document.querySelector(".prices-mobile");

  if (wind.innerWidth < 768) {
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
}
/******************************toggleContModal******************************/
function toggleContModal(parent, child) {
  if (parent.dataset.status === "close") {
    let childHeight = getElCssProperty(child, "height");
    parent.style.transitionDelay = null;
    parent.style.height = childHeight;
    parent.style.width = "100%";
    parent.dataset.status = "open";
  } else {
    parent.style.width = "0";
    parent.style.height = "0";
    parent.style.transitionDelay = "0.5s";
    parent.dataset.status = "close";
  }
}
/******************************indentModal******************************/
function indentModal(element, wind) {
  if (element.dataset.status === "close") {
    toggleClass(element, "modal--visible");
    element.dataset.status = "open";
    element.classList.remove("modal--hidden");
    // element.style.transform = `translateX(-${indentdWidth(wind)}px)`;
    // element.style.transitionDuration = "1s";
  } else {
    toggleClass(element, "modal--hidden");
    element.dataset.status = "close";
    element.classList.remove("modal--visible");
    // element.style.transform = `translateX(${indentdWidth(wind)}px)`;
    // element.style.transitionDuration = "1s";
  }
}
/******************************fixedWidth******************************/
function fixedWidth(element) {
  !element.getAttribute("style")
    ? (element.style.width = `${window.innerWidth}px`)
    : element.setAttribute("style", "");
}
/******************************getElCssProperty******************************/
function getElCssProperty(element, prop) {
  return window.getComputedStyle(element, null).getPropertyValue(prop);
}
/******************************indentdWidth******************************/
export function indentdWidth(wind) {
  if (wind.innerWidth < 768) {
    return 320;
  } else {
    return 520;
  }
}
