//Показ и работа с формой заказа

import { renderOrderForm } from "./renderOrderForm";
import { hideOrderForm } from "./hideOrderForm";
import { orderFormTemplate } from "../templates/orderFormTemplate";
import { inputHandler } from "../input/inputHandler";
import { textareaHandler } from "../textarea/textareaHandler";
import { selectHandler } from "../select/selectHandler";

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

  //После рендеринга формы - обработать все input
  document.querySelectorAll("input").forEach(input => {
    inputHandler(input);
  });

  //Обработать селектор города
  const select = document.querySelector(".select__select-field");
  select.addEventListener("click", selectHandler);

  //Обработать textarea для ввода адреса
  document.querySelectorAll("textarea").forEach(textarea => {
    textareaHandler(textarea);
  });
};
