import {toggleClass} from "../../js/functions";
let brends = document.querySelector(".slide-pocket.brends");
let brendsItems = document.querySelector(".brends .slide-pocket__items");
let slidePocketExpanded = "slide-pocket--expanded";
let slidePocketItemsExpanded = "slide-pocket__items--expanded";

/*****************************toggleTechnics******************************/
export function toggleServices() {
  toggleClass(brends, slidePocketExpanded)
  toggleClass(brendsItems, slidePocketItemsExpanded)
}