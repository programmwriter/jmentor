export function toggleClass(element, elClass) {
  if (element.classList.contains(elClass)) {
    element.classList.remove(elClass);
  } else {
    element.classList.add(elClass);
  }
}
/******************************fixedWidth******************************/
export function fixedWidth(element) {
  !element.getAttribute("style")
    ? (element.style.maxWidth = `${window.innerWidth}px`)
    : element.setAttribute("style", "");
}
/******************************toggleModal******************************/
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
/******************************toggleSideMenu******************************/
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
/******************************toggleDisplay******************************/
export function toggleDisplay(element) {
  if(element.dataset.status==="close"){
    element.style.transitionDelay = null;
    element.style.width='100%';
    element.style.height='200px';   
    element.dataset.status="open";
  }else{
  	element.dataset.status="close";
  	element.style.width='0';
    element.style.height='0';
    element.style.transitionDelay = "0.5s";
  }   
}
/******************************toggleModalJs******************************/
export function toggleModalJs(element){
  if(element.dataset.status==="close"){
  let elWidth = getElCssProperty(element,'width');
  	element.dataset.status="open";
    
    console.log(elWidth);
    element.style.transform = `translateX(-${elWidth})`;
    element.style.transitionDuration = "1s";
  }else{
    element.dataset.status="close";
    element.style.transform = "translateX(100px)";
    element.style.transitionDuration = "1s";
  }
  
}
/******************************getElCssProperty******************************/
export function getElCssProperty(element,prop){
  return window.getComputedStyle(element,null).getPropertyValue(prop)
}