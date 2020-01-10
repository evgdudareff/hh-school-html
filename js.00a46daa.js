// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/dev/grid.js":[function(require,module,exports) {
var grid = document.createElement("div");
grid.className = "grid";
document.body.appendChild(grid);
document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.code === "KeyG") {
    grid.classList.toggle("grid_visible");
  }
});
},{}],"js/slider/slider.js":[function(require,module,exports) {
var active = document.querySelector(".js-slide.carousel-section__slide_active");
document.querySelector(".js-slide-buttons").addEventListener("click", function (e) {
  var slideId = e.target.dataset.slideId;

  if (!slideId) {
    return;
  }

  if (active.dataset.slideId == slideId) {
    return;
  }

  var slide = document.querySelector(".js-slide[data-slide-id=\"".concat(slideId, "\"]"));
  slide.classList.add("carousel-section__slide_show");
  active.classList.add("carousel-section__slide_hide");
  active.classList.remove("carousel-section__slide_active");
  var previous = active;
  active = slide;
  document.querySelector(".js-slide-button[data-slide-id=\"".concat(previous.dataset.slideId, "\"]")).classList.remove("pagination__dot_active");
  document.querySelector(".js-slide-button[data-slide-id=\"".concat(slideId, "\"]")).classList.add("pagination__dot_active");
  active.addEventListener("animationend", function () {
    active.classList.add("carousel-section__slide_active");
    active.classList.remove("carousel-section__slide_show");
    previous.classList.remove("carousel-section__slide_hide");
    active.parentNode.insertBefore(active, previous);
  }, {
    once: true
  });
});
},{}],"js/models/productCardModel.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productsData = void 0;
var productsData = [{
  id: "1",
  name: "Зонт",
  description: "Красный зонт с логотипом HH",
  image: "product-1.jpg",
  price: "1&nbsp;990"
}, {
  id: "2",
  name: "Сумка",
  description: "Красная сумка с логотипом HH",
  image: "product-2.jpg",
  price: "290"
}, {
  id: "3",
  name: "Шлепанцы",
  description: "Красные шлепанцы с логотипом HH",
  image: "product-3.jpg",
  price: "790",
  sizes: {
    xs: true,
    x: true,
    m: false,
    l: true,
    xl: true,
    xxl: true
  }
}, {
  id: "4",
  name: "Футболка",
  description: "Красная футболка с логотипом HH",
  image: "product-4.jpg",
  price: "690",
  salePrice: "390",
  sizes: {
    xs: true,
    x: true,
    m: true,
    l: true,
    xl: true,
    xxl: true
  }
}, {
  id: "5",
  name: "Толстовка",
  description: "Красная толстовка с логотипом HH",
  image: "product-5.jpg",
  price: "3 990",
  sizes: {
    xs: true,
    x: true,
    m: true,
    l: true,
    xl: true,
    xxl: true
  }
}, {
  id: "6",
  name: "Подушка",
  description: "Красная подушка с логотипом HH",
  image: "product-6.jpg",
  price: "990"
}];
exports.productsData = productsData;
},{}],"js/templates/productCardTemplate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productCardTemplate = void 0;

//Шаблон карточки продукта, основанный на интерполяции строк
//параметр formStyle генерирует дополнительную разметку для использования в шаблоне формы
var productCardTemplate = function productCardTemplate(productData) {
  var formStyle = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var productCardMainTemplate = "<div class=\"product-card\">\n    ".concat(formStyle ? "<div class=\"product-card__image-container product-card__image-container_form\">\n" : "<div class=\"product-card__image-container\">\n", " \n        \n        <img\n          class=\"product-card__image\"\n          src=\"").concat(productData.image, "\"\n          alt=\"").concat(productData.name, "\"/>\n         \n          ").concat(productData.salePrice ? '<div class="product-card__sale">sale</div>' : "", ";\n      </div>\n  \n      <div class=\"product-card__name\">").concat(productData.name, "</div>\n  \n      ").concat(productData.salePrice ? "<div class=\"product-card__price\"> <div class=\"product-card__old-price\">".concat(productData.price, " \u20BD</div>").concat(productData.salePrice, "  \u20BD</div>\n") : "<div class=\"product-card__price\"> ".concat(productData.price, " \u20BD</div>\n"), " \n  \n      <h4 class=\"product-card__description\">").concat(productData.description, "</h4>\n");
  var submitButtonTemplate = "";

  if (formStyle == false) {
    submitButtonTemplate = "".concat(productData.sizes ? "<input class=\"button-submit product-card__button-submit button-submit_disabled\" type=\"submit\" value=\"\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C\" disabled></input>\n" : "<input class=\"button-submit product-card__button-submit\" type=\"submit\" value=\"\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C\"></input>\n");
  }

  if (!productData.sizes) {
    //если товар безразмерный, то возвращаем шаблон
    return productCardMainTemplate + "</div>\n" + submitButtonTemplate;
  } else {
    //иначе дополнительно генерируем для каждого размера блоки input-label с учётом доступности размера
    var productCardSizesTemplate = '<div class="product-card__sizes">\n';

    for (var size in productData.sizes) {
      var labelPart = "";
      var inputPart = "";

      if (productData.sizes[size] == false) {
        labelPart = "<label class=\"radio-button-size-item__label label_disabled\" for=\"".concat(size, "\">").concat(size, "</label>\n");
        inputPart = "<input class=\"radio-button-size-item\" type=\"radio\" name=\"size\" value=\"".concat(size, "\" id=\"").concat(size, " disabled\"></input>\n");
      } else {
        labelPart = "<label class=\"radio-button-size-item__label\" for=\"".concat(size, "\">").concat(size, "</label>\n");
        inputPart = "<input class=\"radio-button-size-item\" type=\"radio\" name=\"size\" value=\"".concat(size, "\" id=\"").concat(size, "\"></input>\n");
      } //При вызове формы присутствует выбранный ранее размер, его нужно установить


      if (formStyle && productData.checkedSize == size) {
        inputPart = inputPart.replace("<input ", "<input checked ");
      }

      productCardSizesTemplate += inputPart + labelPart;
    }

    return productCardMainTemplate + productCardSizesTemplate + "</div>\n" + "</div>\n" + submitButtonTemplate;
  }
};

exports.productCardTemplate = productCardTemplate;
},{}],"js/templates/productCardPopupTemplate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.productCardPopupTemplate = void 0;

var _productCardTemplate = require("./productCardTemplate");

//Простой шаблон попапа карточки продукта, основанный на интерполяции строк
var productCardPopupTemplate = function productCardPopupTemplate(productData) {
  var productCardPopupHTML = "<div class=\"popup-container\">\n  <div class=\"popup-container__button-close\">\n    <button class=\"button-close-icon button-close\">\u0417\u0430\u043A\u0440\u044B\u0442\u044C</button>\n  </div> ";
  var productCardHTML = (0, _productCardTemplate.productCardTemplate)(productData);
  return productCardPopupHTML + productCardHTML + "</div>\n";
};

exports.productCardPopupTemplate = productCardPopupTemplate;
},{"./productCardTemplate":"js/templates/productCardTemplate.js"}],"js/popup/hidePopup.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hidePopup = void 0;

var hidePopup = function hidePopup() {
  var currentPopup = document.querySelector(".popup_active");

  if (currentPopup) {
    currentPopup.classList.remove("popup_active");
    setTimeout(function () {
      currentPopup.remove();
    }, 300);
  } else return;
};

exports.hidePopup = hidePopup;
},{}],"js/popup/getPopupElem.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPopupElem = void 0;

//Возвращает элемент попапа согласно данным о продукте
var getPopupElem = function getPopupElem(popupHTML, coords) {
  var popup = document.createElement("div");
  popup.classList.add("js-popup");
  popup.classList.add("popup");
  popup.innerHTML = popupHTML; //Если есть координаты, значит Tablet/Desktop

  if (coords) {
    popup.style.left = coords.left + "px";
    popup.style.top = coords.top + "px";
  } else {
    //если нет координат, значит Mobile - центрируем попап
    popup.style.position = "fixed";
    popup.style.left = "50%";
    popup.style.top = "50%";
    popup.style.transform = "translate(-50%, -50%)";
  }

  return popup;
};

exports.getPopupElem = getPopupElem;
},{}],"js/common/getCoords.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCoords = void 0;

// получаем координаты элемента в контексте документа
var getCoords = function getCoords(elem) {
  var box = elem.getBoundingClientRect();
  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
};

exports.getCoords = getCoords;
},{}],"js/popup/getPopupCoords.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPopupCoords = void 0;

var _getCoords = require("../common/getCoords");

//Получает на вход опорный элемент, относительно которого нужно считать координаты попапа
var getPopupCoords = function getPopupCoords(pivotElement) {
  //Common
  var popupBorderWidth = 1;
  var screenGreaterS = 768;
  var screenGreaterM = 1000; //Tablet

  var popupPaddingLeftTablet = 15;
  var popupPaddingTopTablet = 20; //Desktop

  var popupPaddingLeftDesktop = 20;
  var popupPaddingTopDesktop = 20;
  var shiftLeft = 0;
  var shiftTop = 0; //получить текущее разрешение экрана

  var screenWidth = window.innerWidth; //Если попап для Mobile, то вычислять координты не нужно

  if (screenWidth < screenGreaterS) {
    return null;
  } //Иначе рассчитать
  //Получить опорные координаты опорного элемента для размещения попапа {left, top}


  var pivotCoords = (0, _getCoords.getCoords)(pivotElement); //Tablet

  if (screenWidth >= screenGreaterS && screenWidth < screenGreaterM) {
    shiftLeft = popupBorderWidth + popupPaddingLeftTablet;
    shiftTop = popupBorderWidth + popupPaddingTopTablet;
  } //Desktop


  if (screenWidth >= screenGreaterM) {
    shiftLeft = popupBorderWidth + popupPaddingLeftDesktop;
    shiftTop = popupBorderWidth + popupPaddingTopDesktop;
  }

  var popupCoords = {};
  popupCoords.left = pivotCoords.left - shiftLeft;
  popupCoords.top = pivotCoords.top - shiftTop;
  return popupCoords;
};

exports.getPopupCoords = getPopupCoords;
},{"../common/getCoords":"js/common/getCoords.js"}],"js/common/getDocumentHeight.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDocumentHeight = void 0;

var getDocumentHeight = function getDocumentHeight() {
  var documentHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
  return documentHeight;
};

exports.getDocumentHeight = getDocumentHeight;
},{}],"js/orderForm/renderOrderForm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderOrderForm = void 0;

var _getDocumentHeight = require("../common/getDocumentHeight");

//Рендер формы заказа
var renderOrderForm = function renderOrderForm(orderFormHTML) {
  var orderForm = document.createElement("div");
  orderForm.classList.add("js-orderForm");
  orderForm.classList.add("orderForm");
  orderForm.innerHTML = orderFormHTML; //Получить и присвоить высоту документа

  var documentHeight = (0, _getDocumentHeight.getDocumentHeight)();
  orderForm.style.height = documentHeight + "px";
  document.body.append(orderForm); //Показать форму по центру документа

  var form = document.querySelector(".form");
  form.style.top = (documentHeight - form.offsetHeight) / 2 + "px";
  setTimeout(function () {
    orderForm.classList.add("orderForm_active");
  }, 0);
};

exports.renderOrderForm = renderOrderForm;
},{"../common/getDocumentHeight":"js/common/getDocumentHeight.js"}],"js/orderForm/hideOrderForm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hideOrderForm = void 0;

var hideOrderForm = function hideOrderForm(e) {
  var target = e.target;

  while (!target.classList.contains("orderForm")) {
    target = target.parentNode;

    if (target.classList.contains("form")) {
      return;
    } //если клик на кнопку вне формы, то скрыть форму


    if (target.classList.contains("orderForm")) {
      break;
    } //если клик на кнопку "Закрыть", то скрыть форму


    if (target.classList.contains("form__button-close")) {
      break;
    }
  }

  event.preventDefault();
  var currentForm = document.querySelector(".orderForm_active");

  if (currentForm) {
    currentForm.classList.remove("orderForm_active");
    setTimeout(function () {
      currentForm.remove();
    }, 300);
  }
};

exports.hideOrderForm = hideOrderForm;
},{}],"js/orderForm/prepareToSubmit.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prepareToSubmit = void 0;

var prepareToSubmit = function prepareToSubmit(optData) {
  var productData = optData.productData,
      inputs = optData.inputs,
      textarea = optData.textarea; //Контакная информация и расширенный адрес - обязательные поля.
  //проверить, все ли требуемые элементы прошли валидацию

  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].validation.isInvalid) {
      //Указать на первое поле, которое не валидно
      inputs[i].touched = true;
      inputs[i].validation.checkValidities(inputs[i]);
      return;
    }
  }

  if (textarea.validation.isInvalid) {
    //Указать, что расширенный адрес не прошёл валидацию
    textarea.touched = true;
    textarea.validation.checkValidities(textarea);
    return;
  } //Если всё ОК, то подготовить данные для отправки
  //Способ получения


  var deliveryMethod = document.querySelector("input[name=deliveryMethod]:checked").value; //Город

  var cityLocataion = document.querySelector(".select-field__option").innerHTML; //Способ оплаты

  var paymentMethod = document.querySelector("input[name=paymentMethod]:checked").value; //СМС уведомления

  var smsNotification = false;

  if (document.querySelector("input[name=smsNotification]:checked")) {
    smsNotification = true;
  } //Пользователь может изменить размер в форме.
  //На случай изменений, сохранить последний выбор


  var checkedSize = document.querySelector(".radio-button-size-item:checked");

  if (checkedSize) {
    productData.checkedSize = checkedSize.value;
  } //Данные формы


  var formData = {};
  formData.contactInfo = {};

  for (var _i = 0; _i < inputs.length; _i++) {
    formData.contactInfo[inputs[_i].name] = inputs[_i].value;
  }

  formData.contactInfo[textarea.name] = textarea.value;
  formData.deliveryMethod = deliveryMethod;
  formData.cityLocataion = cityLocataion;
  formData.paymentMethod = paymentMethod;
  formData.smsNotification = smsNotification;
  formData.productData = productData;
  console.log(formData);
  console.log("Спасибо!"); //Скрыть форму

  var currentForm = document.querySelector(".orderForm_active");
  currentForm.classList.remove("orderForm_active");
  setTimeout(function () {
    currentForm.remove();
  }, 300);
};

exports.prepareToSubmit = prepareToSubmit;
},{}],"js/templates/orderFormTemplate.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.orderFormTemplate = void 0;

var _productCardTemplate = require("./productCardTemplate");

//Шаблон формы заказа продукта, основанный на интерполяции строк
var orderFormTemplate = function orderFormTemplate(productData) {
  var formPartOneHTML = "<form class=\"form\">\n      <div class=\"columns-wrapper\">\n        <div class=\"form__button-close\">\n          <button class=\"button-close-icon button-close\">\n            \u0417\u0430\u043A\u0440\u044B\u0442\u044C\n          </button>\n        </div>\n        <div class=\"columns-row\">\n          <div class=\"column column_s-2 column_m-3 column_l-7\">\n            \n            <div class=\"form__section\">\n              <div class=\"form__input-main-contacts\">\n                <h1 class=\"heading heading_level-1\">\u041E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435 \u0437\u0430\u043A\u0430\u0437\u0430</h1>\n                <h4 class=\"heading heading_level-4\">\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u043E\u0435 \u043B\u0438\u0446\u043E</h4>\n                <input class=\"form__input-text input-text js-input-required\" type=\"text\" name=\"fullName\" placeholder=\"\u0424\u0418\u041E\" value></input>\n                <input class=\"form__input-text input-text js-input-required\" type=\"text\" name=\"email\" placeholder=\"\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430\" value></input>\n              </div> \n           \n              <div class=\"form__input-tel\">\n                <input class=\"input-tel input-tel__country-code\" type=\"text\" name=\"countryCode\" value=\"+7\"\n                  readonly></input>\n                <input class=\"input-tel input-tel__operator-code js-input-required\" type=\"text\" name=\"operatorCode\" placeholder=\"\u041A\u043E\u0434\"\n                  value></input>\n                <input class=\"input-tel input-tel__number js-input-required\" type=\"text\" name=\"telNumber\" placeholder=\"\u041D\u043E\u043C\u0435\u0440\" value></input>\n              </div>\n            </div>\n\n            <div class=\"form__section\">  \n              <h4 class=\"heading heading_level-4\">\u0421\u043F\u043E\u0441\u043E\u0431 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0437\u0430\u043A\u0430\u0437\u0430</h4>\n              <div class=\"form__delivery-method\">\n\n                <div class=\"form__radio-button\">\n                  <input class=\"radio-button-sqared radio-button-sqared__button\" type=\"radio\" name=\"deliveryMethod\"\n                  value=\"selfPickup\" id=\"selfPickup\"></input> \n                  <label class=\"radio-button-sqared__label\" for=\"selfPickup\">\u0421\u0430\u043C\u043E\u0432\u044B\u0432\u043E\u0437</label>\n                </div>\n                \n                <div class=\"form__radio-button\">\n                  <input class=\"radio-button-sqared radio-button-sqared__button\" type=\"radio\" name=\"deliveryMethod\"\n                  value=\"deliviryPickup\" id=\"deliveryPickup\" checked></input>\n                  <label class=\"radio-button-sqared__label\" for=\"deliveryPickup\">\u0414\u043E\u0441\u0442\u0430\u0432\u043A\u0430</label>\n                </div>\n              \n              </div>\n            </div>\n\n            <div class=\"form__section\">\n              <div class=\"form__delivery-address\">\n                <h4 class=\"heading heading_level-4\">\u0410\u0434\u0440\u0435\u0441</h4>\n                <div class=\"select\">\n                  <input class=\"input-select\" name=\"cityLocataion\" placeholder=\"\u0413\u043E\u0440\u043E\u0434\" inputmode=\"none\">\n                  </input>\n                </div>\n                <div class=\"form__textarea\">\n                  <textarea type=\"textarea\" class=\"textarea\" placeholder=\"\u0410\u0434\u0440\u0435\u0441\"\n                  name=\"addressExpaned\"></textarea>\n                </div>\n              </div>\n            </div>\n            \n            <div class=\"form__section\">\n              <div class=\"form__payment-methods\">\n                <h4 class=\"heading heading_level-4\">\u041E\u043F\u043B\u0430\u0442\u0430</h4>\n\n                <div class=\"form__payment-method\">\n                  <input class=\"radio-button-circle\" type=\"radio\" name=\"paymentMethod\" value=\"paymentOnline\"\n                    id=\"paymentOnline\" checked></input>\n                  <label class=\"radio-button-\u0441ircle__label\" for=\"paymentOnline\">\u041E\u043D\u043B\u0430\u0439\u043D-\u043E\u043F\u043B\u0430\u0442\u0430</label>\n                </div>\n    \n                <div class=\"form__payment-method\">\n                  <input class=\"radio-button-circle\" type=\"radio\" name=\"paymentMethod\" value=\"paymentCash\"\n                    id=\"paymentCash\"></input>\n                  <label class=\"radio-button-\u0441ircle__label\" for=\"paymentCash\">\u041D\u0430\u043B\u0438\u0447\u043D\u044B\u043C\u0438</label>\n                </div>\n    \n                <div class=\"form__payment-method\">\n                  <input class=\"radio-button-circle\" type=\"radio\" name=\"paymentMethod\" value=\"paymentCard\"\n                    id=\"paymentCard\"></input>\n                  <label class=\"radio-button-\u0441ircle__label\" for=\"paymentCard\">\u041A\u0430\u0440\u0442\u043E\u0439 \u043F\u0440\u0438 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u0438</label>\n                </div>\n    \n              </div>\n            </div>\n            \n            <div class=\"form__section\">\n              <div class=\"form__notification\">\n                <h4 class=\"heading heading_level-4\">\u0423\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F</h4>\n\n                <div class=\"checkbox\">\n                  <input class=\"checkbox__box\" type=\"checkbox\" name=\"smsNotification\" value id=\"smsNotification\"></input>\n                  <label class=\"label\" for=\"smsNotification\">\u0425\u043E\u0447\u0443 \u043F\u043E\u043B\u0443\u0447\u0430\u0442\u044C SMS \u0443\u0432\u0435\u0434\u043E\u043C\u043B\u0435\u043D\u0438\u044F</label>\n                </div>\n\n              </div>\n            </div>\n\n            <input class=\"button-submit form__button-submit\" type=\"submit\" value=\"\u041E\u0444\u043E\u0440\u043C\u0438\u0442\u044C \u0437\u0430\u043A\u0430\u0437\"></input>\n            \n          </div>";
  var formPartTwoHTML = "<div class=\"column column_s-2 column_m-3 column_l-5\">\n              <div class=\"form__product-card\">";
  var productCardHTML = (0, _productCardTemplate.productCardTemplate)(productData, true);
  var formPartThreeHTML = "</div>\n           </div>         \n        </div>\n    </form> ";
  return formPartOneHTML + formPartTwoHTML + productCardHTML + formPartThreeHTML;
};

exports.orderFormTemplate = orderFormTemplate;
},{"./productCardTemplate":"js/templates/productCardTemplate.js"}],"node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":[function(require,module,exports) {
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
},{}],"node_modules/core-js/library/modules/_global.js":[function(require,module,exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

},{}],"node_modules/core-js/library/modules/_core.js":[function(require,module,exports) {
var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

},{}],"node_modules/core-js/library/modules/_a-function.js":[function(require,module,exports) {
module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

},{}],"node_modules/core-js/library/modules/_ctx.js":[function(require,module,exports) {
// optional / simple context binding
var aFunction = require('./_a-function');
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

},{"./_a-function":"node_modules/core-js/library/modules/_a-function.js"}],"node_modules/core-js/library/modules/_is-object.js":[function(require,module,exports) {
module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

},{}],"node_modules/core-js/library/modules/_an-object.js":[function(require,module,exports) {
var isObject = require('./_is-object');
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

},{"./_is-object":"node_modules/core-js/library/modules/_is-object.js"}],"node_modules/core-js/library/modules/_fails.js":[function(require,module,exports) {
module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

},{}],"node_modules/core-js/library/modules/_descriptors.js":[function(require,module,exports) {
// Thank's IE8 for his funny defineProperty
module.exports = !require('./_fails')(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_fails":"node_modules/core-js/library/modules/_fails.js"}],"node_modules/core-js/library/modules/_dom-create.js":[function(require,module,exports) {
var isObject = require('./_is-object');
var document = require('./_global').document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

},{"./_is-object":"node_modules/core-js/library/modules/_is-object.js","./_global":"node_modules/core-js/library/modules/_global.js"}],"node_modules/core-js/library/modules/_ie8-dom-define.js":[function(require,module,exports) {
module.exports = !require('./_descriptors') && !require('./_fails')(function () {
  return Object.defineProperty(require('./_dom-create')('div'), 'a', { get: function () { return 7; } }).a != 7;
});

},{"./_descriptors":"node_modules/core-js/library/modules/_descriptors.js","./_fails":"node_modules/core-js/library/modules/_fails.js","./_dom-create":"node_modules/core-js/library/modules/_dom-create.js"}],"node_modules/core-js/library/modules/_to-primitive.js":[function(require,module,exports) {
// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = require('./_is-object');
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

},{"./_is-object":"node_modules/core-js/library/modules/_is-object.js"}],"node_modules/core-js/library/modules/_object-dp.js":[function(require,module,exports) {
var anObject = require('./_an-object');
var IE8_DOM_DEFINE = require('./_ie8-dom-define');
var toPrimitive = require('./_to-primitive');
var dP = Object.defineProperty;

exports.f = require('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

},{"./_an-object":"node_modules/core-js/library/modules/_an-object.js","./_ie8-dom-define":"node_modules/core-js/library/modules/_ie8-dom-define.js","./_to-primitive":"node_modules/core-js/library/modules/_to-primitive.js","./_descriptors":"node_modules/core-js/library/modules/_descriptors.js"}],"node_modules/core-js/library/modules/_property-desc.js":[function(require,module,exports) {
module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

},{}],"node_modules/core-js/library/modules/_hide.js":[function(require,module,exports) {
var dP = require('./_object-dp');
var createDesc = require('./_property-desc');
module.exports = require('./_descriptors') ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

},{"./_object-dp":"node_modules/core-js/library/modules/_object-dp.js","./_property-desc":"node_modules/core-js/library/modules/_property-desc.js","./_descriptors":"node_modules/core-js/library/modules/_descriptors.js"}],"node_modules/core-js/library/modules/_has.js":[function(require,module,exports) {
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

},{}],"node_modules/core-js/library/modules/_export.js":[function(require,module,exports) {

var global = require('./_global');
var core = require('./_core');
var ctx = require('./_ctx');
var hide = require('./_hide');
var has = require('./_has');
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;

},{"./_global":"node_modules/core-js/library/modules/_global.js","./_core":"node_modules/core-js/library/modules/_core.js","./_ctx":"node_modules/core-js/library/modules/_ctx.js","./_hide":"node_modules/core-js/library/modules/_hide.js","./_has":"node_modules/core-js/library/modules/_has.js"}],"node_modules/core-js/library/modules/es6.object.define-property.js":[function(require,module,exports) {
var $export = require('./_export');
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !require('./_descriptors'), 'Object', { defineProperty: require('./_object-dp').f });

},{"./_export":"node_modules/core-js/library/modules/_export.js","./_descriptors":"node_modules/core-js/library/modules/_descriptors.js","./_object-dp":"node_modules/core-js/library/modules/_object-dp.js"}],"node_modules/core-js/library/fn/object/define-property.js":[function(require,module,exports) {
require('../../modules/es6.object.define-property');
var $Object = require('../../modules/_core').Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};

},{"../../modules/es6.object.define-property":"node_modules/core-js/library/modules/es6.object.define-property.js","../../modules/_core":"node_modules/core-js/library/modules/_core.js"}],"node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":[function(require,module,exports) {
module.exports = require("core-js/library/fn/object/define-property");
},{"core-js/library/fn/object/define-property":"node_modules/core-js/library/fn/object/define-property.js"}],"node_modules/@babel/runtime-corejs2/helpers/createClass.js":[function(require,module,exports) {
var _Object$defineProperty = require("../core-js/object/define-property");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
},{"../core-js/object/define-property":"node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"}],"js/common/FieldValidation.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldValidation = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs2/helpers/createClass"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Класс валидации для field.
//Содержит массив validaties, в который помещаются необходимые проверки,
//а также общие для field методы
var FieldValidation =
/*#__PURE__*/
function () {
  function FieldValidation() {
    (0, _classCallCheck2.default)(this, FieldValidation);
    this.validities = [this.isEmptyField, this.isBigString];
    this.errors = [];
    this.isInvalid = true;
  } //Провести необходимые валидации


  (0, _createClass2.default)(FieldValidation, [{
    key: "checkValidities",
    value: function checkValidities(field) {
      if (field.touched) {
        for (var i = 0; i < this.validities.length; i++) {
          var error = this.validities[i](field); //Текущие ошибки храним в this.errors
          //(может понадобиться, если потребуется выводить информация пользователю)

          if (error) this.errors.push(error);
        } //Обработать ошибки


        field.validation.handleErrors(field);
      }
    } //Выставить класс _invalid для field

  }, {
    key: "setInvalid",
    value: function setInvalid(field) {
      var className = field.tagName.toLowerCase();

      if (!field.classList.contains("".concat(className, "_invalid"))) {
        field.classList.add("".concat(className, "_invalid"));
      }

      this.isInvalid = true;
    } //Убрать класс _invalid для input

  }, {
    key: "removeInvalid",
    value: function removeInvalid(field) {
      var className = field.tagName.toLowerCase();

      if (field.classList.contains("".concat(className, "_invalid"))) {
        field.classList.remove("".concat(className, "_invalid"));
      }

      this.isInvalid = false;
    } //Общая для всех field проверка на пустой ввод

  }, {
    key: "isEmptyField",
    value: function isEmptyField(field) {
      if (!field.value.trim()) {
        return "Поле не может быть пустым";
      }
    } //Общая для всех field проверка на максимальную длину строки

  }, {
    key: "isBigString",
    value: function isBigString(field) {
      if (field.value.length > 100) {
        return "Максимальная длина строки 100 символов";
      }
    } //Обработать текущие ошибки валидации

  }, {
    key: "handleErrors",
    value: function handleErrors(field) {
      if (this.errors.length) {
        this.setInvalid(field); //Отладочная функция showErrors выводит ошибки в консль

        this.showErrors();
      } else {
        this.removeInvalid(field);
      }
    } //Отладочная функция - выводит текущие ошибки в консоль

  }, {
    key: "showErrors",
    value: function showErrors() {
      if (this.errors.length) {
        for (var i = 0; i < this.errors.length; i++) {
          console.log(this.errors[i]);
        }

        this.errors = [];
      }
    }
  }]);
  return FieldValidation;
}();

exports.FieldValidation = FieldValidation;
},{"@babel/runtime-corejs2/helpers/classCallCheck":"node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js","@babel/runtime-corejs2/helpers/createClass":"node_modules/@babel/runtime-corejs2/helpers/createClass.js"}],"js/input/inputHandler.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.inputHandler = void 0;

var _FieldValidation = require("../common/FieldValidation");

//Обработчик для input
var inputHandler = function inputHandler(input) {
  //присвоить необходимые для валидации общие свойства и методы для input
  input.validation = new _FieldValidation.FieldValidation();
  input.touched = false; //В зависимости от функциональной принадлежности input - добавить дополнительные проверки

  if (input.name === "email") input.validation.validities.push(isEmailInvalid);
  if (input.name === "operatorCode") input.validation.validities.push(isOperatorCodeInvalid);
  if (input.name === "telNumber") input.validation.validities.push(isTelNumberInvalid); //Назначить обработчик нажатия на клавиатуру внутри поля input

  input.addEventListener("keyup", function (e) {
    //Если переключение при помощи Tab, то не обрабатывать
    if (e.code === "Tab") return; //отметить, что с текущим input уже работали

    if (!input.touched) {
      input.touched = true;
    } //Провести проверку вводимого пользователем значения


    input.validation.checkValidities(input);
  });
}; ///////
//Проверка валидности ввода email адреса


exports.inputHandler = inputHandler;

function isEmailInvalid(input) {
  var match = input.value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

  if (!match) {
    return "Введите корректный email-адрес";
  }
} //Проверка валидности ввода кода оператор телефона


function isOperatorCodeInvalid(input) {
  var match = input.value.match(/\b\d{3}\b/);

  if (!match) {
    return "Введите валидный цифровой код оператора длиной 3 символа";
  }
} //Проверка валидности ввода номера телефона


function isTelNumberInvalid(input) {
  var match = input.value.match(/\b\d{7}\b/);

  if (!match) {
    return "Введите валидный номер телефона длиной 7 символов";
  }
} ///////
},{"../common/FieldValidation":"js/common/FieldValidation.js"}],"js/textarea/textareaHandler.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.textareaHandler = void 0;

var _FieldValidation = require("../common/FieldValidation");

//обработчик для textarea
var textareaHandler = function textareaHandler(textarea) {
  textarea.validation = new _FieldValidation.FieldValidation();
  textarea.touched = false; //Назначить обработчик нажатия на клавиатуру внутри поля input

  textarea.addEventListener("keyup", function (e) {
    //Если переключение при помощи Tab, то не обрабатывать
    if (e.code === "Tab") return; //отметить, что с текущим textarea уже работали

    if (!textarea.touched) {
      textarea.touched = true;
    } //Провести проверку вводимого пользователем значения


    textarea.validation.checkValidities(textarea);
  });
};

exports.textareaHandler = textareaHandler;
},{"../common/FieldValidation":"js/common/FieldValidation.js"}],"js/select/shutDownSelect.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shutDownSelect = void 0;

//скрывает options-container открытого селектора
var shutDownSelect = function shutDownSelect() {
  document.querySelector(".select").classList.remove("select_active");
  document.querySelector(".input-select").disabled = "";
  document.querySelector(".options-container").remove();
};

exports.shutDownSelect = shutDownSelect;
},{}],"node_modules/regenerator-runtime/runtime.js":[function(require,module,exports) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
  typeof module === "object" ? module.exports : {}
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}

},{}],"node_modules/@babel/runtime-corejs2/regenerator/index.js":[function(require,module,exports) {
module.exports = require("regenerator-runtime");

},{"regenerator-runtime":"node_modules/regenerator-runtime/runtime.js"}],"js/common/getDataAsync.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDataAsync = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs2/regenerator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//функция загузки произвольных данных в JSON с произвольного сервера
var getDataAsync = function getDataAsync(url) {
  var response, parsedData;
  return _regenerator.default.async(function getDataAsync$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _regenerator.default.awrap(fetch(url));

        case 3:
          response = _context.sent;
          _context.next = 6;
          return _regenerator.default.awrap(response.json());

        case 6:
          parsedData = _context.sent;
          return _context.abrupt("return", parsedData);

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          alert("Не удалось получить данные...");

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 10]]);
};

exports.getDataAsync = getDataAsync;
},{"@babel/runtime-corejs2/regenerator":"node_modules/@babel/runtime-corejs2/regenerator/index.js"}],"js/select/renderSelectOptions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderSelectOptions = void 0;

var renderSelectOptions = function renderSelectOptions(dataList) {
  var optionsContainer = document.createElement("div");
  optionsContainer.classList.add("options-container");
  dataList.forEach(function (dataItem) {
    optionsContainer.innerHTML += "<div class=\"options-container__item\" value='".concat(dataItem.name, "'>").concat(dataItem.name, "</div>\n");
  });
  return optionsContainer;
};

exports.renderSelectOptions = renderSelectOptions;
},{}],"js/select/openUpSelect.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openUpSelect = void 0;

var _shutDownSelect = require("./shutDownSelect");

var _getDataAsync = require("../common/getDataAsync");

var _renderSelectOptions = require("./renderSelectOptions");

//открывает options-container закрытого селектора
var openUpSelect = function openUpSelect(selectBlock) {
  selectBlock.classList.add("select_active");
  document.querySelector(".input-select").disabled = "disabled"; //Получить данные адресов для селектора

  (0, _getDataAsync.getDataAsync)("https://api.hh.ru/areas/113").then(function (parsedData) {
    //Для примера берем Московскую область, 7 городов
    var areas = parsedData.areas[21].areas.slice(0, 7); //Начать рендеринг опций селектора

    var optionsContainer = (0, _renderSelectOptions.renderSelectOptions)(areas);
    selectBlock.append(optionsContainer); //Назначить обработчик клика по опции в селекторе

    document.querySelectorAll(".options-container__item").forEach(function (option) {
      option.addEventListener("click", function (e) {
        e.stopPropagation();
        var checkedArea = e.target.innerHTML;
        document.querySelector(".input-select").placeholder = checkedArea; //Скрыть выбор опций селектора

        (0, _shutDownSelect.shutDownSelect)();
      });
    });
  });
};

exports.openUpSelect = openUpSelect;
},{"./shutDownSelect":"js/select/shutDownSelect.js","../common/getDataAsync":"js/common/getDataAsync.js","./renderSelectOptions":"js/select/renderSelectOptions.js"}],"js/select/selectHandler.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectHandler = void 0;

var _shutDownSelect = require("./shutDownSelect");

var _openUpSelect = require("./openUpSelect");

var selectHandler = function selectHandler(e) {
  var target = e.target; //Если клик по активному селекту, то cкрыть options-container

  if (target.closest(".select_active")) {
    (0, _shutDownSelect.shutDownSelect)();
    document.querySelector(".input-select").disabled = "";
  } else {
    //иначе открыть
    while (!target.classList.contains("select")) {
      target = target.parentNode;
    }

    (0, _openUpSelect.openUpSelect)(target);
  }
};

exports.selectHandler = selectHandler;
},{"./shutDownSelect":"js/select/shutDownSelect.js","./openUpSelect":"js/select/openUpSelect.js"}],"js/orderForm/showOrderForm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showOrderForm = void 0;

var _renderOrderForm = require("./renderOrderForm");

var _hideOrderForm = require("./hideOrderForm");

var _prepareToSubmit = require("./prepareToSubmit");

var _orderFormTemplate = require("../templates/orderFormTemplate");

var _inputHandler = require("../input/inputHandler");

var _textareaHandler = require("../textarea/textareaHandler");

var _selectHandler = require("../select/selectHandler");

//Показ и работа с формой заказа
var showOrderForm = function showOrderForm(productData) {
  //Получить HTML из шаблона формы
  var orderFormHTML = (0, _orderFormTemplate.orderFormTemplate)(productData); //Рендер формы

  (0, _renderOrderForm.renderOrderForm)(orderFormHTML); //Назначить обработчик клика по кнопке "Закрыть", чтобы скрывать форму

  document.querySelector(".button-close-icon").addEventListener("click", _hideOrderForm.hideOrderForm); //Назначить обработчик клика по области вне формы

  document.querySelector(".orderForm").addEventListener("click", _hideOrderForm.hideOrderForm); //После рендеринга формы - обработать все input

  var inputs = document.querySelectorAll(".js-input-required");
  inputs.forEach(function (input) {
    (0, _inputHandler.inputHandler)(input);
  }); //Обработать селектор города

  var select = document.querySelector(".select");
  select.addEventListener("click", _selectHandler.selectHandler);
  select.addEventListener("input", function (e) {
    e.target.value = "";
  }); //Обработать textarea для ввода адреса

  var textarea = document.querySelector("textarea");
  (0, _textareaHandler.textareaHandler)(textarea); //Назначать клик на кнопку "оформить заказ"

  var submitButton = document.querySelector(".form__button-submit");
  submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    (0, _prepareToSubmit.prepareToSubmit)({
      inputs: inputs,
      textarea: textarea,
      productData: productData
    });
  });
};

exports.showOrderForm = showOrderForm;
},{"./renderOrderForm":"js/orderForm/renderOrderForm.js","./hideOrderForm":"js/orderForm/hideOrderForm.js","./prepareToSubmit":"js/orderForm/prepareToSubmit.js","../templates/orderFormTemplate":"js/templates/orderFormTemplate.js","../input/inputHandler":"js/input/inputHandler.js","../textarea/textareaHandler":"js/textarea/textareaHandler.js","../select/selectHandler":"js/select/selectHandler.js"}],"js/popup/showPopup.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showPopup = void 0;

var _productCardModel = require("../models/productCardModel");

var _productCardPopupTemplate = require("../templates/productCardPopupTemplate");

var _hidePopup = require("./hidePopup");

var _getPopupElem = require("./getPopupElem");

var _getPopupCoords = require("./getPopupCoords");

var _showOrderForm = require("../orderForm/showOrderForm");

var showPopup = function showPopup(e) {
  var target = e.target; //Если клик активному попапу, то ничего не делать

  if (target.closest(".popup_active")) {
    return;
  } //Если клик кнопке закрыть, то скрыть попап


  if (target.closest(".popup-container__button-close")) {
    (0, _hidePopup.hidePopup)();
    return;
  } //если клик по другой карточке продукта, то скрыть текущий попап и отрисовать другой


  if (target.closest(".product-card") && document.querySelector(".popup_active")) {
    (0, _hidePopup.hidePopup)();
  }

  while (!target.classList.contains("product-card")) {
    target = target.parentNode;
  } //Получить информацию по продукту из модели


  var productData = _productCardModel.productsData.find(function (product) {
    return product.id === target.dataset.productId;
  }); //Получить HTML из шаблона попапа для данного продукта


  var popupHTML = (0, _productCardPopupTemplate.productCardPopupTemplate)(productData);
  var popupCoords = (0, _getPopupCoords.getPopupCoords)(target); //Рендер попапа на странице

  var popup = (0, _getPopupElem.getPopupElem)(popupHTML, popupCoords);
  document.body.append(popup);
  setTimeout(function () {
    popup.classList.add("popup_active"); //Назначить обработчик клика по кнопке "Закрыть", чтобы скрывать попап

    document.querySelector(".popup-container__button-close").addEventListener("click", _hidePopup.hidePopup); //Назначить обработчик клика по размеру (если товар не безразмерный)

    if (productData.sizes) {
      document.querySelectorAll(".radio-button-size-item__label").forEach(function (size) {
        size.addEventListener("click", function () {
          //если выбрнан размер, то разблокировать кнопку заказа
          var submitButton = document.querySelector(".product-card__button-submit");
          submitButton.classList.remove("button-submit_disabled");
          submitButton.disabled = false; //сохранить выбранный пользователем размер
          //для последующего отображения в форме

          productData.checkedSize = size.htmlFor;
        });
      });
    } //Назначить обработчик клика по кнопке "Заказать"


    document.querySelector(".product-card__button-submit").addEventListener("click", function () {
      //Убрать ранее показанный попап продукта
      (0, _hidePopup.hidePopup)(); //Показать форму

      (0, _showOrderForm.showOrderForm)(productData);
    });
  }, 300);
};

exports.showPopup = showPopup;
},{"../models/productCardModel":"js/models/productCardModel.js","../templates/productCardPopupTemplate":"js/templates/productCardPopupTemplate.js","./hidePopup":"js/popup/hidePopup.js","./getPopupElem":"js/popup/getPopupElem.js","./getPopupCoords":"js/popup/getPopupCoords.js","../orderForm/showOrderForm":"js/orderForm/showOrderForm.js"}],"js/popup/popup.js":[function(require,module,exports) {
"use strict";

var _showPopup = require("./showPopup");

var _hidePopup = require("./hidePopup");

//Назначить обработчик клика по карточке товара
document.querySelectorAll(".product-card").forEach(function (productCard) {
  productCard.addEventListener("click", _showPopup.showPopup);
}); //Назначить обработчик клика по документу
//(закрытие попапа при клике не по нему и не по другой карточке товара)

document.addEventListener("click", function (e) {
  var target = e.target;

  if (target.closest(".popup_active")) {
    return;
  } else {
    (0, _hidePopup.hidePopup)();
  }
});
},{"./showPopup":"js/popup/showPopup.js","./hidePopup":"js/popup/hidePopup.js"}],"js/index.js":[function(require,module,exports) {
"use strict";

require("./dev/grid");

require("./slider/slider");

require("./popup/popup");
},{"./dev/grid":"js/dev/grid.js","./slider/slider":"js/slider/slider.js","./popup/popup":"js/popup/popup.js"}],"../../Users/e.dudarev/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52312" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../Users/e.dudarev/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map