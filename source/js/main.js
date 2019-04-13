window.onload = function() {

  initializationMenu();

}

function  initializationMenu() {
  var headerContainer = document.querySelector(".page-header");
  var btnMenu = document.querySelector(".page-header__menu-switch");
  var menuList = document.querySelector(".page-header__nav-list")

  headerContainer.classList.remove("page-header--no-js");

  menuList.style.maxHeight = menuList.scrollHeight + "px";
  headerContainer.classList.add("page-header--close");

  btnMenu.addEventListener("click", function() {
    headerContainer.classList.toggle("page-header--close");
  });
}
