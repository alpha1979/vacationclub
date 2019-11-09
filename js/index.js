


let navMenu = document.getElementById("nav-reveal");
let change = document.getElementById("nav-main");

navMenu.addEventListener('click',myFunction);

function myFunction(e) {
  navMenu.classList.toggle("change");
  change.classList.toggle("hidden");
}





