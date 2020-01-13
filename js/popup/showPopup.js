import { productsData } from "../models/productCardModel";
import { productCardPopupTemplate } from "../templates/productCardPopupTemplate";
import { hidePopup } from "./hidePopup";
import { renderPopupElem } from "./renderPopupElem";
import { getPopupCoords } from "./getPopupCoords";
import { orderForm } from "../orderForm/orderForm";
import { relocatePopup } from "./relocatePopup";

//показать попап
export const showPopup = (e, targetFromRelocate) => {
  //если событие "клик", то target из event
  //иначе был resize и получаем target как targetFromRelocate
  let target;

  if (e) {
    target = e.target;
    //Если клик активному попапу, то ничего не делать
    if (
      target.closest(".popup_active") ||
      target.closest(".product-card__button-submit")
    ) {
      return;
    }

    //Если клик кнопке закрыть, то скрыть попап
    if (target.closest(".popup-container__button-close")) {
      hidePopup();
      return;
    }

    //если клик по другой карточке продукта, то скрыть текущий попап и отрисовать другой
    if (
      target.closest(".product-card") &&
      document.querySelector(".popup_active")
    ) {
      hidePopup();
    }

    while (!target.classList.contains("product-card")) {
      target = target.parentNode;
    }
  } else {
    target = targetFromRelocate;
  }

  //Получить информацию по продукту из модели
  const productData = productsData.find(
    product => product.id === target.dataset.productId
  );

  //Получить HTML из шаблона попапа для данного продукта
  const popupHTML = productCardPopupTemplate(productData);

  //Получить координаты попапа
  const popupCoords = getPopupCoords();

  //Рендер попапа на странице
  const popup = renderPopupElem(popupHTML, popupCoords, target);

  //Повесить обработчик на resize
  window.addEventListener("resize", relocatePopup);

  setTimeout(() => {
    popup.classList.add("popup_active");

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

            //сохранить выбранный пользователем размер
            //для последующего отображения в форме
            productData.checkedSize = size.htmlFor;
          });
        });
    }

    //Назначить обработчик клика по кнопке "Заказать"
    document
      .querySelector(".product-card__button-submit")
      .addEventListener("click", () => {
        //Убрать ранее показанный попап продукта
        hidePopup();

        //Показать форму
        orderForm(productData);
      });
  }, 300);
};
