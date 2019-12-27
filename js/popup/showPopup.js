import { productsData } from "../models/productCardModel";
import { productCardPopupTemplate } from "../templates/productCardPopupTemplate";
import { hidePopup } from "./hidePopup";
import { renderPopup } from "./renderPopup";
import { getPopupShifts } from "./getPopupShifts";
import { getCoords } from "../common/getCoords";
const screenGreaterS = 768;

export const showPopup = e => {
  let target = e.target;

  while (!target.classList.contains("product-card")) {
    target = target.parentNode;

    if (target.classList.contains("content-section")) {
      return;
    }
  }

  //Если клик был по карточке, то получить информацию по продукту из модели
  const productData = productsData.find(
    product => product.id === target.dataset.productId
  );

  //Получить шаблон попап для данного продукта
  const popupHTML = productCardPopupTemplate(productData);

  //получить текущие размеры окна
  const screenWidth = document.documentElement.clientWidth;
  //Если попап не для Mobile, то вычислить координты размещения
  if (screenWidth > screenGreaterS) {
    //Получить опорные координаты (img) для размещения попапа {left, top}
    var pivotCoords = getCoords(target);

    //Получить смещение координат в зависимости от размера попапа (tablet, desktop)
    var popupShifts = getPopupShifts();

    pivotCoords.left -= popupShifts.shiftLeft;
    pivotCoords.top -= popupShifts.shiftTop;
  }

  //Рендер попапа на странице
  renderPopup(popupHTML, pivotCoords);

  //Назначить обработчик клика по кнопке "Закрыть", чтобы скрывать попап
  document
    .querySelector(".popup-container__button-close")
    .addEventListener("click", hidePopup);

  //Назначить обработчик клика по размеру (если товар не безразмерный)
  if (productData.sizes) {
    document
      .querySelectorAll(".radio-button-size-item__label")
      .forEach(size => {
        size.addEventListener("click", () => {
          //если выбрнан размер, то разблокировать кнопку заказа
          const submitButton = document.querySelector(
            ".product-card__button-submit"
          );
          submitButton.classList.remove("button-submit_disabled");
          submitButton.disabled = false;
        });
      });
  }
};
