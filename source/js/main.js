window.onload = function() {


  if (document.body.clientWidth < 768) {

    initializationMenu();
  }

  initializationSlider();

}

function  initializationMenu() {
  var headerContainer = document.querySelector(".page-header");
  var btnMenu = document.querySelector(".page-header__menu-switch");
  var menuList = document.querySelector(".page-header__nav-list")

  headerContainer.classList.remove("page-header--no-js");

  headerContainer.classList.add("page-header--close");
  menuList.style.height = 0 + "px";

  btnMenu.addEventListener("click", function() {
    if (headerContainer.classList.contains("page-header--close")) {
      headerContainer.classList.remove("page-header--close");
      menuList.style.height = menuList.scrollHeight + "px";
    } else {
      headerContainer.classList.add("page-header--close");
      menuList.style.height = 0 + "px";
    }
  });
}

function initializationSlider() {
  var sliderField = document.querySelector(".live-example__slider-field");
  var slider = document.querySelector(".live-example__slider-switch");
  var imgWrap = document.querySelector(".live-example__img-before-wrap");
  var btnText = document.querySelectorAll(".live-example__slider-text");

  ['touchmove', 'touchstart'].forEach(function(e) {
    sliderField.addEventListener(e, function(evt) {
      var coord = (evt.changedTouches[0].pageX - this.getBoundingClientRect().x) / this.getBoundingClientRect().width * 100;
      if (coord <= 0) {
        coord = 0;
      } else if (coord >= 100) {
        coord = 100;
      }
      slider.style.width = coord + "%";
      imgWrap.style.width = coord + "%";
    });
  });

  btnText[0].addEventListener("click", function() {
    slider.style.width = 0 + "%";
    imgWrap.style.width = 0 + "%";
  });

  btnText[1].addEventListener("click", function() {
    slider.style.width = 100 + "%";
    imgWrap.style.width = 100 + "%";
  });

}
