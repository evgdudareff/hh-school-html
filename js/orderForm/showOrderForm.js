//Показ и работа с формой заказа

import { renderOrderForm } from "./renderOrderForm";
import { orderFormTemplate } from "../templates/orderFormTemplate";

export const showOrderForm = productData => {
  //Получить HTML из шаблона формы
  const orderFormHTML = orderFormTemplate(productData);

  //Рендер формы
  renderOrderForm(orderFormHTML);
};
