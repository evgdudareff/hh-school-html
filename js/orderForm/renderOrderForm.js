import { getDocumentHeight } from "../common/getDocumentHeight";

//Рендер формы заказа

export const renderOrderForm = orderFormHTML => {
  const orderForm = document.createElement("div");

  orderForm.classList.add("js-orderForm");
  orderForm.classList.add("orderForm");
  orderForm.innerHTML = orderFormHTML;

  //Получить и присвоить высоту документа
  const documentHeight = getDocumentHeight();
  orderForm.style.height = documentHeight + "px";
  document.body.append(orderForm);

  //Показать форму по центру документа
  const form = document.querySelector(".form");
  form.style.top = (documentHeight - form.offsetHeight) / 2 + "px";

  setTimeout(() => {
    orderForm.classList.add("orderForm_active");
  }, 0);
};
