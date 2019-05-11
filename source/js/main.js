window.onload = function() {


  if (document.body.clientWidth < 768) {

    initializationMenu();
  }

  initializationSlider3();

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
  var imgWrapBefore = document.querySelector(".live-example__img-before-wrap");
  var imgWrapAfter = document.querySelector(".live-example__img-after-wrap");
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
      imgWrapBefore.style.width = 100 - coord + "%";
      imgWrapAfter.style.width = coord + "%";
    });
  });

  btnText[0].addEventListener("click", function() {
    slider.style.width = 0 + "%";
    imgWrapBefore.style.width = 100 + "%";
    imgWrapAfter.style.width = 0 + "%";
  });

  btnText[1].addEventListener("click", function() {
    slider.style.width = 100 + "%";
    imgWrapBefore.style.width = 0 + "%";
    imgWrapAfter.style.width = 100 + "%";
  });

}

function initializationSlider2() {
  var slideBefore = document.querySelector(".slider__img-wrap:first-child");
  var slideAfter = document.querySelector(".slider__img-wrap:last-child");
  var btnBefore = document.querySelector(".slider__control-btn--before");
  var btnAfter = document.querySelector(".slider__control-btn--after");
  var sliderField = document.querySelector(".slider__control-field");
  var slider = document.querySelector(".slider__control-slider");

  sliderField.addEventListener("mousedown", function(evt) {
    var field = this;
    movement(field, evt);

    document.onmousemove = function(evt) {
      movement(field, evt);
    };

    elem = this;
    while (elem.tagName != "BODY") {
      elem.onmouseup = function(evt) {
        document.onmousemove = null;
      };
      elem = elem.parentElement;
    }
  });

  document.querySelector(".slider").ondragstart = function() {
    return false;
  };

  function getCoord(elem, evt, padding) {
    var coord = evt.pageX - elem.getBoundingClientRect().left;
    if (coord <= padding) {
      coord = padding;
    } else if (coord >= elem.getBoundingClientRect().width - padding) {
      coord = elem.getBoundingClientRect().width - padding;
    }
    return coord / elem.getBoundingClientRect().width * 100;
  }

  function movement(elem, evt) {
    coordSlider = getCoord(elem, evt, 6);
    width = getCoord(elem, evt, 0);
    slider.style.right = 100 - coordSlider + "%";
    slideBefore.style.width = 100 - width + "%";
    slideAfter.style.width = width + "%";
  }
}

function initializationSlider3() {
  var slideBefore = document.querySelector(".slider__img-wrap:first-child");
  var slideAfter = document.querySelector(".slider__img-wrap:last-child");
  var btnBefore = document.querySelector(".slider__control-btn--before");
  var btnAfter = document.querySelector(".slider__control-btn--after");
  var sliderField = document.querySelector(".slider__control-field");
  var slider = document.querySelector(".slider__control-slider");

  sliderField.addEventListener("mousedown", function(evt) {
    var field = this;
    movement(field, evt);

    document.onmousemove = function(evt) {
      movement(field, evt);
    };

    field.ontouchmove = function(evt) {
      movement(field, evt);
    };

    elem = this;
    while (elem.tagName != "BODY") {
      elem.onmouseup = function(evt) {
        document.onmousemove = null;
      };
      elem = elem.parentElement;
    }
  });

  document.querySelector(".slider").ondragstart = function() {
    return false;
  };

  btnBefore.addEventListener("click", function() {
    slider.style.right = "calc(100% - 5px)";
    slideBefore.style.width = "100%";
    slideAfter.style.width = "0";
  });

  btnAfter.addEventListener("click", function() {
    slider.style.right = "5px";
    slideBefore.style.width = "0";
    slideAfter.style.width = "100%";
  });

  function getCoord(elem, evt, padding) {
    try {
      var coord = evt.changedTouches[0].pageX - elem.getBoundingClientRect().left;
    } catch (err) {
      var coord = evt.pageX - elem.getBoundingClientRect().left;
    }

    if (coord <= padding) {
      coord = padding;
    } else if (coord >= elem.getBoundingClientRect().width - padding) {
      coord = elem.getBoundingClientRect().width - padding;
    }
    return coord / elem.getBoundingClientRect().width * 100;
  }

  function movement(elem, evt) {
    coordSlider = getCoord(elem, evt, 5);
    width = getCoord(elem, evt, 0);
    slider.style.right = 100 - coordSlider + "%";
    slideBefore.style.width = 100 - width + "%";
    slideAfter.style.width = width + "%";
  }
}
