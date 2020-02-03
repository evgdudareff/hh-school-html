//Простой шаблон попапа карточки продукта, основанный на интерполяции строк
import { productCardTemplate } from "./productCardTemplate";

export const productCardPopupTemplate = productData => {
  const productCardPopupHTML = `<div class="popup-container">
  <div class="popup-container__button-close">
    <button class="button-close-icon">Закрыть</button>
  </div> `;
  const productCardHTML = productCardTemplate(productData);

  return productCardPopupHTML + productCardHTML + `</div>\n`;
};
