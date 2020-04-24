
 export function toggleClass(element, elClass) {
  if (element.classList.contains(elClass)) {
    element.classList.remove(elClass);
  } else {
    element.classList.add(elClass);
  }
}