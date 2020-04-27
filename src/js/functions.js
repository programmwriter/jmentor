export function toggleClass(element, elClass) {
  if (element.classList.contains(elClass)) {
    element.classList.remove(elClass);
  } else {
    element.classList.add(elClass);
  }
}

export function fixedWidth(element) {
  !element.getAttribute("style")
    ? (element.style.maxWidth = `${window.innerWidth}px`)
    : element.setAttribute("style", "");
}

export function toggleModal(element) {
  const containerMain = document.querySelector(".container__main");
  const containerSide = document.querySelector(".container__side");
  const contModal = document.querySelector(".container__modal");

  fixedWidth(containerMain);

  toggleClass(element, "modal--hidden");
  toggleClass(element, "modal--open");
  toggleClass(contModal, "container__modal--visible");
  toggleClass(containerMain, "container__main-side--overflow");
  toggleClass(containerSide, "container__main-side--overflow");
}
export function toggleSideMenu(element) {
  const containerMain = document.querySelector(".container__main");
  const containerSide = document.querySelector(".container__side");

  fixedWidth(containerMain);

  if(element.classList.contains("side-menu--open")){
    element.classList.add("side-menu--hidden");
  }else if(element.classList.contains("side-menu--hidden")){
    element.classList.remove("side-menu--hidden");
  }

  toggleClass(element, "side-menu--open");
  toggleClass(containerSide, "container__side--open");
  toggleClass(containerMain, "container__main-side--overflow");
}
