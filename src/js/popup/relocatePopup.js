import { showPopup } from "./showPopup";
import { hidePopup } from "./hidePopup";

//обработчик события resize window
export const relocatePopup = () => {
  //получить текущее разрешение экрана
  const screenWidth = window.innerWidth;
  const screenGreaterS = 768;

  const activePopup = document.querySelector(".popup_active");

  //Перерисовать popup только при пересечении граничных условий:
  //если попап отображался для Mobile и разрешение стало больше Mobile или
  //попап отображался для Tablet/Desktop и разрешение стало меньше Mobile
  if (
    (activePopup &&
      screenWidth >= screenGreaterS &&
      activePopup.size === "mobile") ||
    (activePopup &&
      screenWidth < screenGreaterS &&
      activePopup.size === "tablet-desktop")
  ) {
    //перерисовать попап
    const productId = document.querySelector(".popup_active .product-card")
      .dataset.productId;
    hidePopup();

    const target = document.querySelector(
      `.product-card[data-product-id="${productId}"]`
    );
    showPopup(null, target);
  }

  //При изменение размера окна для Mobile изменять положение динамически
  if (
    activePopup &&
    screenWidth < screenGreaterS &&
    activePopup.size === "mobile"
  ) {
    //получить ширину окна
    const windowWidth = document.documentElement.clientWidth;
    activePopup.style.left = (windowWidth - activePopup.offsetWidth) / 2 + "px";
  }
};
