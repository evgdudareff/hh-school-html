import { showPopup } from "./showPopup";
import { hidePopup } from "./hidePopup";

//Назначить обработчик клика по карточке товара
document.querySelectorAll(".product-card").forEach(productCard => {
  productCard.addEventListener("click", showPopup);
});

//Назначить обработчик клика по документу
//(закрытие попапа при клике не по нему)
document.addEventListener("click", hidePopup);
