import { toggleClass } from "../../js/functions";
let slideMenu = document.querySelector(".slide-menu__text");
let slideMenuExpanded = "slide-menu__text--expanded";

/*****************************toggleSlideMenu******************************/
export function toggleSlideMenu() {
  toggleClass(slideMenu, slideMenuExpanded);
}
