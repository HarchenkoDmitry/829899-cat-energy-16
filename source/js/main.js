window.onload = function() {

  if (document.body.clientWidth < 768) {
    initializationMenu();
  }

  if (document.querySelector(".slider")) {
    initializationSlider();
  }

  validationForm();

  initializationMap();
}

function initializationMenu() {
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


function validationForm() {
  var form = document.querySelector(".program-selection");

  if (form) {
    var input = form.querySelectorAll(".program-selection__input");

    form.addEventListener("submit", function (evt) {
      evt.preventDefault();
      var valid = true;
      for (var i = 0; i < input.length; i++) {
        input[i].classList.remove("program-selection__input--error");
        if (!input[i].value) {
          input[i].offsetWidth = input[i].offsetWidth;
          input[i].classList.add("program-selection__input--error");
          valid = false;
        }

        input[i].addEventListener("change", function() {
          this.classList.remove("program-selection__input--error");
          if (!this.value) {
            this.offsetWidth = this.offsetWidth;
            this.classList.add("program-selection__input--error");
          }
        });
      }
      if (valid) {
        form.submit();
      } else {
        window.scroll(0, getCoords(form.querySelector(".program-selection__input--error")).top - 20);
      }
    });

    function getCoords(elem) {
      var box = elem.getBoundingClientRect();
      return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
      };

    }
  }
}

function initializationMap() {
  var mapImg = document.querySelector(".map__img");
  var mapFrame = document.querySelector(".map__frame");

  mapImg.classList.remove("map__img--no-js");
  mapFrame.classList.remove("map__frame--no-js");
}
