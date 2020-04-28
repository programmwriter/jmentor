import {toggleClass} from "../../js/functions";
let technics = document.querySelector(".slide-pocket.technics");
let technicsItems = document.querySelector(".technics .slide-pocket__items");
let slidePocketExpanded = "slide-pocket--expanded";
let slidePocketItemsExpanded = "slide-pocket__items--expanded";

/******************************toggleTechnics******************************/
export function toggleTechnics() {
  toggleClass(technics, slidePocketExpanded)
  toggleClass(technicsItems, slidePocketItemsExpanded)
}
