
// function navigationClose() {
//   var header = document.querySelector(".header");
//   var navList = document.querySelector(".nav__list");
//   var btnMenu = document.querySelector(".nav__toggle");
//
//
//
//   btnMenu.classList.remove("nav_toggle--none");
// }
//
// navigationClose()


function popupNav() {
  var tglNav = document.querySelector(".nav__toggle");
  var navList = document.querySelector(".nav__list");
  var header = document.querySelector(".header");
  var btnBurger = document.querySelector(".nav__toggle-burger");
  var btnCross = document.querySelector(".nav__toggle-cross");

  // header.classList.add("header--close");

  header.classList.add("header--close");
  navList.classList.add("nav__list--close");
  tglNav.classList.toggle("nav__toggle--none");

  tglNav.addEventListener("click", function (e) {
    e.preventDefault();
    navList.classList.toggle("nav__open");
    header.classList.toggle("nav__header-open");
    btnBurger.classList.toggle("nav__toggle-cross");
    btnCross.classList.toggle("nav__open");

  });
}

popupNav();
