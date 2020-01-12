import { showPopup } from "./showPopup";
import { hidePopup } from "./hidePopup";

//Назначить обработчик клика по карточке товара
document.querySelectorAll(".product-card").forEach(productCard => {
  productCard.addEventListener("click", showPopup);
});

//Назначить обработчик клика по документу
//(закрытие попапа при клике не по нему и не по другой карточке товара)
document.addEventListener("click", e => {
  let target = e.target;
  if (target.closest(".popup_active")) {
    return;
  } else {
    hidePopup();
  }
});
