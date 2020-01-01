//Показ и работа с формой заказа

import { renderOrderForm } from "./renderOrderForm";
import { hideOrderForm } from "./hideOrderForm";
import { orderFormTemplate } from "../templates/orderFormTemplate";

export const showOrderForm = productData => {
  //Получить HTML из шаблона формы
  const orderFormHTML = orderFormTemplate(productData);

  //Рендер формы
  renderOrderForm(orderFormHTML);

  //Назначить обработчик клика по кнопке "Закрыть", чтобы скрывать форму
  document
    .querySelector(".button-close-icon")
    .addEventListener("click", hideOrderForm);

  //Назначить обработчик клика по области вне формы
  document.querySelector(".orderForm").addEventListener("click", hideOrderForm);
};